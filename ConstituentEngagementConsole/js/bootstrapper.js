/*global define,document,dojo,window,alert,setTimeout,$ */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
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
    "config/defaults",
    "dojo/_base/lang",
    "dojo/on",
    "esri/arcgis/Portal",
    "esri/IdentityManager",
    "widgets/app-header/app-header",
    "dojo/dom-construct",
    "dojo/dom",
    "application/utils/utils",
    "esri/urlUtils",
    "esri/lang"
], function (
    declare,
    templateConfig,
    Template,
    Main,
    Defaults,
    lang,
    on,
    esriPortal,
    IdentityManager,
    ApplicationHeader,
    domConstruct,
    dom,
    ApplicationUtils,
    urlUtils,
    esriLang
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
                this.portal.on("load", lang.hitch(this, function (evt) {
                    var signedIn;
                    if ((this.portal.isPortal) && (!this._checkIfAppIDExist()) && (!this._checkIfGroupExist()) && (this._boilerPlateTemplateObject.templateConfig.esriEnvironment)) {
                        window.location.assign("resources/preview/preview.html");
                    } else {
                        signedIn = IdentityManager.checkSignInStatus(config.sharinghost + "/sharing");
                        signedIn.then(lang.hitch(this, function (response) {
                            this.portal.signIn().then(lang.hitch(this, function (loggedInUser) {
                                this._queryGroupInfo(loggedInUser, config);
                            }));
                        }), lang.hitch(this, function (error) {
                            this._queryGroupInfo(null, config);
                        }));

                    }
                }));
            }), lang.hitch(this, function (error) {
                $(dom.byId("loadingIndicator")).addClass('esriCTHideLoadingIndicatorImage');
                $(dom.byId("esriCTMainContainer")).addClass('esriCTHidden');
                this.showMessageScreen(error);
            }));
            // display's message screen on click of cancel button of identity manager
            this._identityManagerCancelHandler = on(IdentityManager, "dialog-cancel", lang.hitch(this, function () {
                this.showMessageScreen(null);
            }));
        },

        /**
        * This function is used to check if application ID exists in URL or not
        * @memberOf js/bootstrapper
        */
        _checkIfAppIDExist: function () {
            var urlObject, url;
            url = document.location.href;
            urlObject = urlUtils.urlToObject(url);
            urlObject.query = urlObject.query || {};
            // remove any HTML tags from query item
            urlObject.query = esriLang.stripTags(urlObject.query);
            return urlObject.query.appid ? true : false;
        },

        /**
        * This function is used to check if group exists in URL or not
        * @memberOf js/bootstrapper
        */
        _checkIfGroupExist: function () {
            var urlObject, url;
            url = document.location.href;
            urlObject = urlUtils.urlToObject(url);
            urlObject.query = urlObject.query || {};
            // remove any HTML tags from query item
            urlObject.query = esriLang.stripTags(urlObject.query);
            return urlObject.query.group ? true : false;
        },

        /**
        * This function is used to query for group info
        * @param{object} loggedInUser's credentials
        * @param{object} configuration details
        * @memberOf js/bootstrapper
        */
        _queryGroupInfo: function (loggedInUser, config) {
            if (this._identityManagerCancelHandler) {
                this._identityManagerCancelHandler.remove();
            }
            //As current version of boilerplate not handling the private Groups
            //once user is logged in query for the group info.
            this._boilerPlateTemplateObject.queryGroupInfo().then(lang.hitch(this, function (response) {
                this._boilerPlateTemplateObject.config.groupInfo = response.groupInfo;
                this.initApplication(loggedInUser);
            }));
        },

        /**
        * This function is used to initiate the main application
        * @param{object} loggedInUser's credentials
        * @memberOf js/bootstrapper
        */
        initApplication: function (loggedInUser) {
            $(dom.byId("loadingIndicator")).removeClass("esriCTHideLoadingIndicatorImage");
            $(dom.byId("esriCTMainContainer")).removeClass("esriCTHidden");
            // create my main application. Start placing your logic in the main.js file.
            this._consoleApp = new Main();
            this._consoleApp.reload = lang.hitch(this, function (logInDetails) {
                loggedInUser = { "fullName": logInDetails.fullName, "credential": { "token": logInDetails.credential.token} };
                this._queryGroupInfo(loggedInUser, this._boilerPlateTemplateObject.config);
            });
            this._consoleApp.startup(this._boilerPlateTemplateObject, loggedInUser);
        },

        /**
        * This function is used to show message screen
        * @param{object} error that is to be displayed
        * @memberOf js/bootstrapper
        */
        showMessageScreen: function (error) {
            var message, appHeaderParameter;
            $(".esriSignInDialog").addClass("esriCTHidden");
            $(".dijitDialogUnderlayWrapper").addClass("esriCTHideWrapper");
            $(document.body).removeClass("app-loading");
            domConstruct.empty("headerContainer");
            // display message when any error occurs during sign-in
            if (error) {
                $(dom.byId("headerContainer")).addClass('esriCTHidden');
                $(dom.byId("esriCTMainContainer")).addClass('esriCTHidden');
                $(dom.byId("esriCTNoWebMapParentDiv")).removeClass("esriCTHidden");
                message = error.message;
                // show error message when group is undefined
                if (message.toLowerCase() === "group undefined.") {
                    message = this._boilerPlateTemplateObject.config.i18n.main.noGroup;
                }
                dom.byId("esriCTNoWebMapChildDiv").innerHTML = message;
            } else {
                // display please sign-in page
                $(dom.byId("headerContainer")).removeClass('esriCTHidden');
                appHeaderParameter = { "appConfig": this._boilerPlateTemplateObject.config, "appUtils": ApplicationUtils, "loggedInUser": null };
                // instantiate application header widget
                this._appHeader = new ApplicationHeader(appHeaderParameter, domConstruct.create("div", {}, dom.byId('headerContainer')));
                // sign in user on click of sign-in option
                this._appHeader.signInUser = lang.hitch(this, function () {
                    this._boilerPlateTemplateObject.portal.signIn().then(lang.hitch(this, function (logInDetails) {
                        $(dom.byId("esriCTNoWebMapParentDiv")).addClass("esriCTHidden");
                        var loggedInUser;
                        this._appHeader.destroy();
                        loggedInUser = { "fullName": logInDetails.fullName, "credential": { "token": logInDetails.credential.token} };
                        this.initApplication(loggedInUser);
                    }));
                });
            }
        }
    });
});