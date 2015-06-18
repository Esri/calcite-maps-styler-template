/*global define,dojo,Modernizr,gapi */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true */
/*
 | Copyright 2015 Esri
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
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "application/lib/Social"
], function (
    declare,
    lang,
    social
) {

    //========================================================================================================================//

    return declare([social], {

        /**
         * Constructor for class.
         * @param {object} config App configuration object; required parameters: googleplusClientId, googleplusScope
         * @requires Modernizr to load a remote resource
         * @memberOf socialGP#
         * @constructor
         */
        constructor: function (config) {
            this._timeout = null;
        },

        /**
         * Loads the social.
         * @memberOf socialGP#
         * @override
         */
        launch: function () {
            var pThis = this;

            // Load the SDK asynchronously; it calls window.ggAsyncInit when done
            (function () {
                // Don't have Google+ API scan page for button
                window.___gcfg = {parsetags: "explicit"};

                // Modernizr/yepnope for load to get onload event cross-browser
                Modernizr.load([{
                    load: "https://apis.google.com/js/client:platform.js",
                    complete: function () {
                        gapi.load('auth2', function () {
                            gapi.client.load('plus', 'v1').then(function () {
                                pThis.updateUser();
                            });
                        });
                    }
                }]);
            }());
        },

        /**
         * Signs into the service.
         * @memberOf socialGP#
         */
        signIn: function () {
            gapi.auth.signIn({
                "clientid": this._config.googleplusClientId,
                "cookiepolicy": "none",
                "callback": lang.hitch(this, this.updateUser)
            });
        },

        /**
         * Signs out of the service.
         * @memberOf socialGP#
         */
        signOut: function () {
            try {
                gapi.auth.signOut();
            } catch (ignore) {
            }
            this.updateUser();
        },

        /**
         * Updates the information held about the signed-in user.
         * @param {object} [response] Service-specific response object
         * @memberOf socialGP#
         * @abstract
         */
        updateUser: function (response) {
            this._loggedIn = response && response.status && response.status.signed_in;

            // If logged in, update info from the account
            this._user = {};
            if (this._loggedIn) {
                gapi.client.request({
                    "path": "/plus/v1/people/me"
                }).then(lang.hitch(this, function (response) {
                    this._user = {
                        "name": response.result.displayName,
                        "id": response.result.id
                    };

                    // Update the calling app
                    this._statusCallback(this.getUser());
                }), lang.hitch(this, function (reason) {
                    // Update the calling app
                    this._statusCallback(this.getUser());
                }));

            // Report not-logged-in state
            } else {
                this._statusCallback(this.getUser());
            }
        }

    });

    //========================================================================================================================//

});
