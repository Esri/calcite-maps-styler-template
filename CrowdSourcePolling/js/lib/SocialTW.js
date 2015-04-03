/*global define,dojo,js,require */
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
    "esri/request",
    "application/lib/Social"
], function (
    declare,
    lang,
    esriRequest,
    social
) {

    //========================================================================================================================//

    return declare([social], {
        _timeout: null,

        /**
         * Constructor for class.
         * @param {object} config App configuration object; required parameters: twitterSigninUrl, twitterUserUrl,
         * twitterCallbackPage
         * @memberOf socialTW#
         * @constructor
         */
        constructor: function () {
            return null;
        },

        /**
         * Loads the social.
         * @memberOf socialTW#
         * @override
         */
        launch: function () {
            this.updateUser();
        },

        /**
         * Signs into the service.
         * @memberOf socialTW#
         */
        signIn: function () {
            this.showLoginWin(false);
        },

        /**
         * Signs out of the service.
         * <br>N.B.: does not log the current user out unless he/she enters a password and then clicks "cancel",
         * and then clicks to return to the app even though the Twitter display claims that the app continues to have
         * access to the user's information.
         * @memberOf socialTW#
         */
        signOut: function () {
            this.showLoginWin(true);
        },

        /**
         * Displays the login window.
         * <br>N.B.: does not log the current user out unless he/she enters a password and then clicks "cancel",
         * and then clicks to return to the app even though the Twitter display claims that the app continues to have
         * access to the user's information.
         * @param {boolean} [forceLogin] If true, requires a re-login
         */
        showLoginWin: function (forceLogin) {
            var pThis = this, baseUrl, package_path, redirect_uri, left, top, w, h;

            baseUrl = this._config.twitterSigninUrl;
            package_path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
            redirect_uri = encodeURIComponent(location.protocol + '//' + location.host + package_path + this._config.twitterCallbackPage);
            left = (screen.width / 2) - (w / 2);
            top = (screen.height / 2) - (h / 2);
            w = screen.width / 2;
            h = screen.height / 1.5;

            baseUrl += '?';
            if (forceLogin) {
                baseUrl += 'force_login=true';
            }
            if (forceLogin && redirect_uri) {
                baseUrl += '&';
            }
            if (redirect_uri) {
                baseUrl += 'redirect_uri=' + redirect_uri;
            }

            window.open(baseUrl, "twoAuth", "scrollbars=yes, resizable=yes, left=" + left + ", top=" + top + ", width=" + w + ", height=" + h, true);
            window.oAuthCallback = function () {
                pThis.updateUser();
            };
        },

        /**
         * Updates the information held about the signed-in user.
         * @param {object} [response] Service-specific response object
         * @memberOf socialTW#
         * @abstract
         */
        updateUser: function () {
            var query = {
                include_entities: true,
                skip_status: true
            };
            esriRequest({
                url: this._config.twitterUserUrl,
                handleAs: "json",
                timeout: 10000,
                content: query,
                callbackParamName: "callback"
            }).then(lang.hitch(this, function (response) {
                this._loggedIn = !response.hasOwnProperty("signedIn");
                if (this._loggedIn) {
                    this._user = {
                        "name": response.name,
                        "id": response.id_str
                    };
                } else {
                    this._user = {};
                }

                // Update the calling app
                this._statusCallback(this.getUser());

            }), lang.hitch(this, function (err) {
                // handle an error condition
                this._loggedIn = false;

                // Update the calling app
                this._statusCallback(this.getUser());
            }));
        }

    });

    //========================================================================================================================//

});
