/*global define,document */
/*jslint sloppy:true */
/*
| Copyright 2014 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/
define([
    "dojo/_base/declare",
    "config/template-config",
    "application/template",
    "application/main",
    "dojo/_base/lang",
    "dojo/on",
    "esri/arcgis/Portal",
    "esri/IdentityManager",
    "dojo/dom",
    "dojo/dom-class",
    "dojo/query"
], function (
    declare,
    templateConfig,
    Template,
    Main,
    lang,
    on,
    esriPortal,
    IdentityManager,
    dom,
    domClass,
    query
) {
    return declare(null, {
        _boilerPlateTemplateObject: null, // stores object of boilerPlateTemplateObject
        _appHeader: null, // stores object of application header
        _consoleApp: null, // stores object of main
        _identityManagerCancelHandler: null, // stores cancel click handler of identity manager

        /**
        * This function is called when user needs to start operation of widget
        * @memberOf js/bootstrapper
        */
        startup: function () {
            // create the template. This will take care of all the logic required for template applications
            this._boilerPlateTemplateObject = new Template(templateConfig);

            // start template
            this._boilerPlateTemplateObject.startup().then(lang.hitch(this, function (config) {
                //create the portal instance and initiate the identity manager
                this.portal = new esriPortal.Portal(config.sharinghost);
                this.portal.on("load", lang.hitch(this, function () {
                    var signedIn;
                    signedIn = IdentityManager.checkSignInStatus(config.sharinghost + "/sharing");
                    signedIn.then(lang.hitch(this, function () {
                        this.portal.signIn().then(lang.hitch(this, function (loggedInUser) {
                            this._queryGroupInfo(loggedInUser, config);
                        }));
                    }), lang.hitch(this, function () {
                        this._queryGroupInfo(null, config);
                    }));
                }));
            }), lang.hitch(this, function (error) {
                this._displayErrorMessageScreen(error);
            }));
            // display's message screen on click of cancel button of identity manager
            this._identityManagerCancelHandler = on(IdentityManager,
                "dialog-cancel", lang.hitch(this, function () {
                    this._displayErrorMessageScreen(null);
                }));
        },

        /**
        * This function is used to query for group info
        * @param{object} loggedInUser's credentials
        * @param{object} configuration details
        * @memberOf js/bootstrapper
        */
        _queryGroupInfo: function (loggedInUser) {
            if (this._identityManagerCancelHandler) {
                this._identityManagerCancelHandler.remove();
            }
            //As current version of boilerplate not handling the private Groups
            //once user is logged in query for the group info.
            this._boilerPlateTemplateObject.queryGroupInfo().then(lang.hitch(this, function (response) {
                this._boilerPlateTemplateObject.config.groupInfo = response.groupInfo;
                this._initApplication(loggedInUser);
            }));
        },

        /**
        * This function is used to initiate the main application
        * @param{object} loggedInUser's credentials
        * @memberOf js/bootstrapper
        */
        _initApplication: function (loggedInUser) {
            domClass.remove("mainWrapperContainer", "esriCTHidden");
            // create my main application. Start placing your logic in the main.js file.
            this._consoleApp = new Main();
            this._consoleApp.reload = lang.hitch(this, function (logInDetails) {
                loggedInUser = {
                    "fullName": logInDetails.fullName,
                    "credential": {
                        "token": logInDetails.credential.token
                    }
                };
                this._queryGroupInfo(loggedInUser, this._boilerPlateTemplateObject.config);
            });
            this._consoleApp.startup(this._boilerPlateTemplateObject, loggedInUser);
        },

        /**
        * This function is used to screen of error message
        * @memberOf js/bootstrapper
        */
        _displayErrorMessageScreen: function (error) {
            var errorMessage, node;
            domClass.add("mainWrapperContainer", "esriCTHidden");
            // show error message when group is undefined
            if (error && error.message) {
                if (error.message.toLowerCase() === "group undefined.") {
                    errorMessage = this._boilerPlateTemplateObject.config.i18n.main.noGroup;
                } else {
                    errorMessage = error.message;
                }
            }
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
            domClass.add(document.body, "app-error");
            domClass.add(query(".loading-indicator")[0], "esriCTWhiteBackGround");
            node = dom.byId("loading_message");
            node.innerHTML = errorMessage;
        }
    });
});