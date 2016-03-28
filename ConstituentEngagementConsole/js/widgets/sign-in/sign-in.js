/*global define,dojo,alert,moment,$,location */
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
    "dijit/_WidgetBase",
    "dojo/_base/lang",
    "esri/arcgis/Portal",
    "dojo/on",
    "esri/IdentityManager",
    "dojo/dom-style",
    "dojo/domReady!"
], function (
    declare,
    _WidgetBase,
    lang,
    esriPortal,
    on,
    IdentityManager,
    domStyle
) {
    return declare([_WidgetBase], {
        _identityManagerCancelHandler: null, // to store cancel handler of identity manager

        /**
        * This function is called when widget is constructed
        * @param{object} parameters of widget
        * @memberOf widgets/sign-in/sign-in
        */
        constructor: function (options) {
            lang.mixin(this, options);
        },

        /**
        * This function is used to sign-in into the application
        * @param{object} parameters of widget
        * @memberOf widgets/sign-in/sign-in
        */
        startup: function () {
            this.appUtils.showLoadingIndicator();
            if (this._identityManagerCancelHandler) {
                this._identityManagerCancelHandler.remove();
            }
            var portal = new esriPortal.Portal(this.appConfig.sharinghost);
            portal.on("load", lang.hitch(this, function () {
                this.appUtils.hideLoadingIndicator();
                portal.signIn().then(lang.hitch(this, function (logInDetails) {
                    this.reload(logInDetails);
                    this.destroyWidgets();
                }), lang.hitch(this, function (err) {
                    if (this._isCancelButtonClicked) {
                        this._isCancelButtonClicked = false;
                    } else {
                        this.appUtils.showError(err.message);
                        location.reload();
                    }
                }));
                if ($(".esriSignInDialog") && $(".esriSignInDialog")[0]) {
                    domStyle.set($(".esriSignInDialog")[0], "z-index", "1002");
                }
            }));
            this._identityManagerCancelHandler = on(IdentityManager, "dialog-cancel", lang.hitch(this, function () {
                this._isCancelButtonClicked = true;
            }));
        },

        /**
        * This function is used to reload the application
        * @param{object} details of logged-in user
        * @memberOf widgets/sign-in/sign-in
        */
        reload: function (logInDetails) {
            return logInDetails;
        },

        /**
        * This function is used to destroy the widgets
        * @memberOf widgets/sign-in/sign-in
        */
        destroyWidgets: function () {
            return;
        }
    });
});