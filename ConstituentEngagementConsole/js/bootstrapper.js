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
define(["dojo/_base/declare",
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
    "dojo/dom"
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
    dom
) {
    return declare(null, {
        boilerPlateTemplateObject: null,
        _appHeader: null,

        /**
        * This function is called when user needs to start operation of widget
        * @memberOf js/bootstrapper
        */
        startup: function () {
            // create the template. This will take care of all the logic required for template applications
            this.boilerPlateTemplateObject = new Template(templateConfig);

            // start template
            this.boilerPlateTemplateObject.startup().then(lang.hitch(this, function (config) {
                //create the portal instance and initiate the identity manager
                this.portal = new esriPortal.Portal(config.sharinghost);
                this.portal.on("load", lang.hitch(this, function () {
                    $(dom.byId("loadingIndicator")).addClass('esriCTHideLoadingIndicatorImage');
                    // when user successfully signs in, load instantiate template & main file
                    this.portal.signIn().then(lang.hitch(this, function (loggedInUser) {
                        //As current version of boilerplate not handling the private Groups
                        //once user is logged in query for the group info.
                        this.boilerPlateTemplateObject.queryGroupInfo().then(lang.hitch(this, function (response) {
                            //Proceed to load the app  if we get the group info, else show error.
                            if (response.groupInfo.results.length > 0) {
                                //update the group info in config file
                                this.boilerPlateTemplateObject.config.groupInfo = response.groupInfo;
                                //Now everything is ready, so initiate the App
                                this.initApplication(loggedInUser);
                            } else {
                                $(dom.byId("loadingIndicator")).addClass('esriCTHideLoadingIndicatorImage');
                                $(dom.byId("esriCTMainContainer")).addClass('esriCTHidden');
                                this.showMessageScreen({
                                    "message": config.i18n.webMapList.noWebMapInGroup
                                }, null);
                            }
                        }));
                    }), lang.hitch(this, function (error) {
                        // show error message when sign-in operation is aborted
                        if (!(error.message.toLowerCase() === "aborted")) {
                            this.showMessageScreen(error, null);
                        }
                    }));
                }));
            }), lang.hitch(this, function (error) {
                $(dom.byId("loadingIndicator")).addClass('esriCTHideLoadingIndicatorImage');
                $(dom.byId("esriCTMainContainer")).addClass('esriCTHidden');
                this.showMessageScreen(error);
            }));

            //Show error on identity manger dialog is canceled
            on(IdentityManager, "dialog-cancel", lang.hitch(this, function () {
                this.showMessageScreen(null);
            }));
        },

        /**
        * This function is used to initiate the main application
        * @param{object} loggedInUser's credentials
        * @memberOf js/bootstrapper
        */
        initApplication: function (loggedInUser) {
            var consoleApp;
            $(dom.byId("loadingIndicator")).removeClass("esriCTHideLoadingIndicatorImage");
            $(dom.byId("esriCTMainContainer")).removeClass("esriCTHidden");
            // create my main application. Start placing your logic in the main.js file.
            consoleApp = new Main();
            consoleApp.startup(this.boilerPlateTemplateObject, loggedInUser);
        },

        /**
        * This function is used to show message screen
        * @param{object} error that is to be displayed
        * @param{object} configuration settings
        * @memberOf js/bootstrapper
        */
        showMessageScreen: function (error) {
            var message;
            $(".esriSignInDialog").addClass("esriCTHidden");
            $(".dijitDialogUnderlayWrapper").addClass("esriCTHideWrapper");
            if (dojo.configData) {
                dojo.configData.logInDetails = null;
            }
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
                    message = this.boilerPlateTemplateObject.config.i18n.main.noGroup;
                }
                dom.byId("esriCTNoWebMapChildDiv").innerHTML = message;
            } else {
                // display please sign-in page
                $(dom.byId("headerContainer")).removeClass('esriCTHidden');
                dojo.configData = this.boilerPlateTemplateObject.config;
                // instantiate application header widget
                this._appHeader = new ApplicationHeader({}, domConstruct.create("div", {}, dom.byId('headerContainer')));
            }
        }
    });
});