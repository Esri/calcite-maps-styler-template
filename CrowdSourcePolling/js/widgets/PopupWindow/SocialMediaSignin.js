/*global define,dojo */
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
    "application/widgets/PopupWindow/PopupWindow",
    "dijit/_TemplatedMixin",
    "dojo/text!./SocialMediaSignin.html",  // overrides PopupWindow's template
    "dojo/dom",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dojo/on",
    "dojo/topic",
    "application/lib/SocialFB",
    "application/lib/SocialGP",
    "application/lib/SocialTW"
], function (
    declare,
    PopupWindow,
    _TemplatedMixin,
    template,
    dom,
    lang,
    domConstruct,
    domStyle,
    on,
    topic,
    SocialFB,
    SocialGP,
    SocialTW
) {
    return declare([PopupWindow, _TemplatedMixin], {
        templateString: template,
        _isAvailable: false,

        // Description of signed-in user: "name" {string}, "canSignOut" {boolean}, "provider" {string};
        // null indicates that no one is signed in
        _signedInUser: {},

        /**
         * Widget constructor
         * @param {object} initialProps Initialization properties:
         *     appConfig: Application configuration
         * @constructor
         */

        /**
         * Initializes the widget once the DOM structure is ready
         */
        postCreate: function () {
            var pThis = this, i18n = this.appConfig.i18n.social_media,
                facebook, google, twitter;

            // Run any parent postCreate processes - can be done at any point
            this.inherited(arguments);

            // See what social media are available

            // Facebook
            function FBCallback(response) {
                pThis._signedInUser = null;
                pThis._currentProvider = null;
                var facebookUser = response;
                if (facebookUser) {
                    if (facebookUser.name) {
                        pThis.buttonFB.title = i18n.signOutOfFacebookTooltip;
                        pThis._signedInUser = {
                            "name": facebookUser.name,
                            "canSignOut": true,
                            "provider": "Facebook"
                        };
                        pThis._currentProvider = facebook;
                        pThis.hide();
                    } else {
                        pThis.buttonFB.title = i18n.signIntoFacebookTooltip;
                        domStyle.set(pThis.buttonFB, "display", "inline-block");
                    }
                }
                topic.publish("signinUpdate");
            }

            if (this.appConfig.allowFacebook) {
                facebook = new SocialFB(this.appConfig);
                if (facebook.isAvailable()) {
                    facebook.init(FBCallback);

                    this.buttonFB = this.addButton("images/FB-f-Logo__blue_29.png", i18n.signIntoFacebookTooltip);
                    on(this.buttonFB, "click", function () {
                        if (facebook.isSignedIn()) {
                            facebook.signOut();
                        } else {
                            facebook.signIn();
                        }
                    });
                }
            }

            // Google+
            function GPCallback(response) {
                pThis._signedInUser = null;
                pThis._currentProvider = null;
                var googleUser = response;
                if (googleUser) {
                    if (googleUser.name) {
                        pThis.buttonGP.title = i18n.signOutOfGooglePlusTooltip;
                        pThis._signedInUser = {
                            "name": googleUser.name,
                            "canSignOut": true,
                            "provider": "GooglePlus"
                        };
                        pThis._currentProvider = google;
                        pThis.hide();
                    } else {
                        pThis.buttonGP.title = i18n.signIntoGooglePlusTooltip;
                        domStyle.set(pThis.buttonGP, "display", "inline-block");
                    }
                }
                topic.publish("signinUpdate");
            }

            if (this.appConfig.allowGoogle) {
                google = new SocialGP(this.appConfig);
                if (google.isAvailable()) {
                    google.init(GPCallback);

                    this.buttonGP = this.addButton("images/gp-29.png", i18n.signIntoGooglePlusTooltip);
                    on(this.buttonGP, "click", function () {
                        if (google.isSignedIn()) {
                            google.signOut();
                        } else {
                            google.signIn();
                        }
                    });
                }
            }

            // Twitter
            function TWCallback(response) {
                pThis._signedInUser = null;
                pThis._currentProvider = null;
                var twitterUser = response;
                if (twitterUser) {
                    if (twitterUser.name) {
                        pThis.buttonTW.title = i18n.signOutOfTwitterTooltip;
                        pThis._signedInUser = {
                            "name": twitterUser.name,
                            "canSignOut": false,
                            "provider": "Twitter"
                        };
                        pThis._currentProvider = twitter;
                        pThis.hide();
                    } else {
                        pThis.buttonTW.title = i18n.signIntoTwitterTooltip;
                        domStyle.set(pThis.buttonTW, "display", "inline-block");
                    }
                }
                topic.publish("signinUpdate");
            }

            if (this.appConfig.allowTwitter) {
                twitter = new SocialTW(this.appConfig);
                if (twitter.isAvailable()) {
                    twitter.init(TWCallback);

                    this.buttonTW = this.addButton("images/Twitter_logo_blue_29.png", i18n.signIntoTwitterTooltip);
                    on(this.buttonTW, "click", function () {
                        if (twitter.isSignedIn()) {
                            twitter.signOut();
                        } else {
                            twitter.signIn();
                        }
                    });
                }
            }

            // Add the note before the sign-in buttons
            this.disclaimer.innerHTML = this.appConfig.socialMediaDisclaimer;

            // Is there anything that can be logged into?
            this._isAvailable = facebook || google || twitter;
        },

        /**
         * Tests if the social is available.
         * @return {boolean} The service is available or not
         */
        isAvailable: function () {
            return this._isAvailable;
        },

        /**
         * Adds a button to the object's buttonArea.
         * @param {string} logoPath URL to logo image
         * @param {string} title Text to display as the logo's title
         * @return {object} The created button
         */
        addButton: function (logoPath, title) {
            var button = domConstruct.create("div", {
                className: "socialMediaButton"
            }, this.buttonArea);
            domStyle.set(button, "background-image", "url('" + logoPath + "')");
            button.title = title;
            return button;
        },

        /**
         * Returns a description of the currently-signed in user.
         * @return {object} Description of signed-in user: "name" {string}, "canSignOut" {boolean},
         * "provider" {string}; null indicates that no one is signed in
         */
        getSignedInUser: function () {
            return this._signedInUser;
        },

        /**
         * Signs the user out of the currently-signed-in provider
         * @param {object} signedInUser User info as provided by a successful sign-in
         */
        signOut: function (signedInUser) {
            if (signedInUser && signedInUser.provider && signedInUser.canSignOut && this._currentProvider) {
                this._currentProvider.signOut();
                this._currentProvider = null;
            }
        },

        /**
         * Causes the widget to become hidden.
         */
        hide: function () {
            domStyle.set(this.domNode, "display", "none");
        }

    });
});
