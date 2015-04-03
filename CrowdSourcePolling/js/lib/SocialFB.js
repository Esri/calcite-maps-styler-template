/*global define,dojo,FB */
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
        _timeout: null,

        /**
         * Constructor for class.
         * @param {object} config App configuration object; required parameters: facebookAppId, facebookAppScope
         * @memberOf socialFB#
         * @constructor
         */
        constructor: function () {
            return null;
        },

        /**
         * Loads the social.
         * @memberOf socialFB#
         * @override
         */
        launch: function () {
            var pThis = this;

            // Provide a startup function for when the SDK finishes loading
            window.fbAsyncInit = function () {
                FB.Event.subscribe("auth.login", lang.hitch(pThis, pThis.updateUser));
                FB.Event.subscribe("auth.statusChange", lang.hitch(pThis, pThis.updateUser));
                FB.Event.subscribe("auth.logout", lang.hitch(pThis, pThis.updateUser));

                FB.init({
                    appId: pThis._config.facebookAppId,
                    cookie: false,  // enable cookies to allow the server to access the session
                    xfbml: false,   // parse social plugins on this page such as Login
                    status: true,  // check login status
                    version: "v2.2"
                });

                // Update UI based on whether or not the user is currently logged in to FB
                FB.getLoginStatus(lang.hitch(pThis, pThis.updateUser));
            };

            // Load the SDK asynchronously; it calls window.fbAsyncInit when done
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, "script", "facebook-jssdk"));
        },

        /**
         * Signs into the service.
         * @memberOf socialFB#
         */
        signIn: function () {
            FB.login(lang.hitch(this, this.updateUser),
                {scope: this._config.facebookAppScope});
        },

        /**
         * Signs out of the service.
         * @memberOf socialFB#
         */
        signOut: function () {
            FB.logout(lang.hitch(this, this.updateUser));

            // If logout has occurred in another tab, FB.logout sometimes does nothing in Chrome & IE
            // and doesn't call the callback, so we'll provide a backup status check
            this._timeout = setTimeout(function () {
                this._timeout = null;
                FB.getLoginStatus(lang.hitch(this, this.updateUser));
            }, 2000);
        },

        /**
         * Updates the information held about the signed-in user.
         * @param {object} [response] Service-specific response object
         * @memberOf socialFB#
         * @abstract
         */
        updateUser: function (response) {
            // Events & FB.getLoginStatus return an updated authResponse object
            // {
            //     status: 'connected',
            //     authResponse: {
            //         accessToken: '...',
            //         expiresIn:'...',
            //         signedRequest:'...',
            //         userID:'...'
            //     }
            // }

            // Don't need backup status check once we're here
            if (this._timeout !== null) {
                clearTimeout(this._timeout);
                this._timeout = null;
            }

            // This response may not be true; we'll find out for sure when we call FB.api
            this._loggedIn = response && response.status === "connected";

            // If logged in, update info from the account
            this._user = {};
            if (this._loggedIn) {
                FB.api("/me", {fields: "name,id"}, lang.hitch(this, function (response) {
                    this._loggedIn = response.name !== undefined;
                    if (this._loggedIn) {
                        this._user = {
                            "name": response.name,
                            "id": response.id
                        };
                    }

                    // Update the calling app
                    this._statusCallback(this.getUser());
                }));
            }

            // Update the calling app
            this._statusCallback(this.getUser());
        }

    });

    //========================================================================================================================//

});
