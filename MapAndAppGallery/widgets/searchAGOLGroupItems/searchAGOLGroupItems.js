/*global define,dojo,alert,dojoConfig,LeftPanelCollection */
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
//============================================================================================================================//
define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "esri/arcgis/Portal",
    "dojo/topic",
    "dojo/_base/lang",
    "dojo/Deferred",
    "dojo/i18n!nls/localizedStrings",
    "dojo/query",
    "dojo/on",
    "dojo/dom",
    "dojo/dom-attr",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom-geometry",
    "esri/request",
    "esri/arcgis/utils",
    "esri/urlUtils",
    "esri/IdentityManager",
    "esri/arcgis/OAuthInfo",
    "widgets/leftPanel/leftPanel",
    "dojo/domReady!"
], function (declare, _WidgetBase, portal, topic, lang, Deferred, nls, query, on, dom, domAttr, domClass, domStyle, domGeom, esriRequest, arcgisUtils, urlUtils, IdentityManager, ArcGISOAuthInfo) {

    return declare([_WidgetBase], {
        nls: nls,

        postCreate: function () {
            topic.subscribe("portalSignIn", lang.hitch(this, this.portalSignIn));
            this._initializeApplication();
        },

        /**
        * check access type of the group and initialize portal
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        initializePortal: function () {
            // query to check access type of the group
            esriRequest({
                // group rest URL
                url: dojo.configData.values.portalURL + '/sharing/rest/portals/self',
                content: {
                    'f': 'json'
                },
                callbackParamName: 'callback',
                load: lang.hitch(this, function (response) {
                    dojo.locatorURL = response.helperServices.geocode[0].url;
                    dojo.configData.values.geometryService = response.helperServices.geometry.url;
                    // check if 'suggest' property is available for geocoder services
                    if (response.helperServices.geocode[0].suggest) {
                        dojo.enableGeocodeSuggest = response.helperServices.geocode[0].suggest;
                    } else {
                        dojo.enableGeocodeSuggest = true;
                    }
                }),
                error: function (response) {
                    alert(response.message);
                    topic.publish("hideProgressIndicator");
                }
            });

            // query to check access type of the group
            esriRequest({
                // group rest URL
                url: dojo.configData.values.portalURL + '/sharing/rest/community/groups?q=' + dojo.configData.values.group,
                content: {
                    'f': 'json'
                },
                callbackParamName: 'callback',
                load: lang.hitch(this, function (response) {
                    if (response.results.length > 0) {
                        // executed if group is public
                        dojo.isPrivateGroup = false;
                        dojo.privateBaseMapGroup = true;
                        this.createPortal().then(lang.hitch(this, function () {
                            this.queryGroup().then(lang.hitch(this, function () {
                                topic.subscribe("queryGroupItem", dojo.hitch(this._portal, this.queryGroupForItems));
                                topic.subscribe("queryItemInfo", dojo.hitch(this._portal, this.queryItemInfo));
                                var leftPanelObj = new LeftPanelCollection();
                                leftPanelObj.startup();
                            }));
                        }));
                    } else {
                        // executed if group is private
                        dojo.isPrivateGroup = true;
                        dojo.privateBaseMapGroup = false;
                        this.createPortal().then(lang.hitch(this, function () {
                            topic.subscribe("queryGroupItem", dojo.hitch(this._portal, this.queryGroupForItems));
                            topic.subscribe("queryItemInfo", dojo.hitch(this._portal, this.queryItemInfo));
                            var leftPanelObj = new LeftPanelCollection();
                            leftPanelObj.startup();
                        }));
                    }
                }),
                error: function (response) {
                    alert(response.message);
                    topic.publish("hideProgressIndicator");
                }
            });
        },

        _initializeApplication: function () {
            var appLocation, instance;
            // Check to see if the app is hosted or a portal. If the app is hosted or a portal set the
            // sharing url and the proxy. Otherwise use the sharing url set it to arcgis.com.
            // We know app is hosted (or portal) if it has /apps/ or /home/ in the url.
            appLocation = location.pathname.indexOf("/apps/");
            if (appLocation === -1) {
                appLocation = location.pathname.indexOf("/home/");
            }
            // app is hosted and no sharing url is defined so let's figure it out.
            if (appLocation !== -1) {
                // hosted or portal
                instance = location.pathname.substr(0, appLocation); //get the portal instance name
                dojo.configData.values.portalURL = location.protocol + "//" + location.host + instance;
            }
            arcgisUtils.arcgisUrl = dojo.configData.values.portalURL + "/sharing/rest/content/items";
        },

        /**
        * fetch app id settings if appid is configured in the config file
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        fetchAppIdSettings: function () {
            var def = new Deferred(), settings, info;

            settings = urlUtils.urlToObject(window.location.href);
            lang.mixin(dojo.configData.values, settings.query);
            if (dojo.configData.values.appid) {
                if (dojo.configData.values.oauthappid) {
                    info = new ArcGISOAuthInfo({
                        appId: dojo.configData.values.oauthappid,
                        portalUrl: dojo.configData.values.portalURL,
                        // Uncomment this line to prevent the user's signed in state from being shared
                        // with other apps on the same domain with the same authNamespace value.
                        //authNamespace: "portal_oauth_inline",
                        popup: false
                    });
                    IdentityManager.registerOAuthInfos([info]);
                }

                domStyle.set(dom.byId("esriCTParentDivContainer"), "display", "none");
                arcgisUtils.getItem(dojo.configData.values.appid).then(lang.hitch(this, function (response) {
                    /**
                    * check for false value strings
                    */
                    var appSettings = this.setFalseValues(response.itemData.values);
                    domStyle.set(dom.byId("esriCTParentDivContainer"), "display", "block");
                    if (IdentityManager.credentials[0]) {
                        dojo.configData.values.token = IdentityManager.credentials[0].token;
                    }
                    IdentityManager.checkSignInStatus(dojo.configData.values.portalURL).then(lang.hitch(this, function () {
                        this._setSignInBtnText();
                    }));
                    // set other config options from app id
                    dojo.configPrev = lang.clone(dojo.configData.values);
                    lang.mixin(dojo.configData.values, appSettings);
                    def.resolve();
                    /**
                    * on error
                    */
                }), function (error) {
                    alert(error.message);
                    def.resolve();
                });
            } else {
                def.resolve();
            }
            return def;
        },

        _setSignInBtnText: function () {
            this._portal = new portal.Portal(dojo.configData.values.portalURL);
            this.own(on(this._portal, "Load", lang.hitch(this, function () {
                this._portal.signIn().then(function (loggedInUser) {
                    domAttr.set(query(".esriCTSignIn")[0], "title", nls.title.signOutBtnTitle);
                    domAttr.set(query(".signin")[0], "innerHTML", nls.signOutText);
                    domClass.replace(query(".esriCTSignInIcon")[0], "icon-logout", "icon-login");
                });
            })));
        },

        /**
        * set false values
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        setFalseValues: function (obj) {
            var key;

            /**
            * for each key
            */
            for (key in obj) {
                /**
                * if not a prototype
                */
                if (obj.hasOwnProperty(key)) {
                    /**
                    * if is a false value string
                    */
                    if (typeof obj[key] === 'string' && (obj[key].toLowerCase() === 'false' || obj[key].toLowerCase() === 'null' || obj[key].toLowerCase() === 'undefined')) {
                        // set to false bool type
                        obj[key] = false;
                    }
                }
            }
            /**
            * return object
            * @param {object} obj
            */
            return obj;
        },

        /**
        * initialize the portal object
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        createPortal: function () {
            var def = new Deferred();
            /**
            * create portal
            */
            this._portal = new portal.Portal(dojo.configData.values.portalURL);
            /**
            * portal loaded
            */
            this.own(on(this._portal, "Load", function () {
                def.resolve();
            }));
            return def;
        },

        /**
        * query group to fetch the group details
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        queryGroup: function () {
            var _self = this, def = new Deferred();
            /**
            * query group info
            */
            _self.queryAGOLGroupInfo({
                /**
                * Settings
                */
                id_group: dojo.configData.values.group
            }).then(function (data) {
                if (data) {
                    if (data.results.length > 0) {
                        /**
                        * set group content
                        */
                        _self.setGroupContent(data.results[0]);
                        def.resolve();
                    } else {
                        alert(nls.errorMessages.emptyGroup);
                        def.resolve();
                    }
                } else {
                    def.resolve();
                }
            });
            return def;
        },

        /**
        * set group content like group title, description, etc.
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        setGroupContent: function (groupInfo) {
            /**
            * set group id
            */
            if (!dojo.configData.values.group) {
                dojo.configData.values.group = groupInfo.id;
            }
            /**
            * Set group title
            */
            if (!dojo.configData.groupTitle) {
                dojo.configData.groupTitle = groupInfo.title || "";
            }
            /**
            * Set group description
            */
            if (!dojo.configData.groupDescription) {
                dojo.configData.groupDescription = groupInfo.description || "";
            }
            /**
            * Set group logo image
            */
            if (!dojo.configData.groupIcon) {
                dojo.configData.groupIcon = groupInfo.thumbnailUrl || dojoConfig.baseURL + "/themes/images/groupNoImage.png";
            }
        },

        /**
        * query arcgis group info
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        queryAGOLGroupInfo: function (obj) {
            var _self = this, def = new Deferred(), settings;

            /**
            * default values
            */
            settings = {
                // set group id for web maps
                id_group: '',
                // format
                dataType: 'json'
            };
            /**
            * If options exist, lets merge them with our default settings
            */
            if (obj) {
                lang.mixin(settings, obj);
            }
            /**
            * first, request the group to see if it's public or private
            */
            esriRequest({
                // group rest URL
                url: dojo.configData.values.portalURL + '/sharing/rest/community/groups/' + settings.id_group,
                content: {
                    'f': settings.dataType
                },
                callbackParamName: 'callback',
                load: function (response) {
                    var q, params;

                    // query
                    q = 'id:"' + settings.id_group + '"';
                    params = {
                        q: q,
                        token: dojo.configData.values.token,
                        f: settings.dataType
                    };
                    _self._portal.queryGroups(params).then(function (data) {
                        // fetch basemap group query for private items
                        dojo.privateBaseMapGroup = true;
                        if (data.results.length > 0) {
                            dojo.BaseMapGroupQuery = data.results[0].portal.basemapGalleryGroupQuery;
                        }
                        dojo.configData.values.baseMapLayers = null;
                        def.resolve(data);
                    });
                },
                error: function (response) {
                    alert(response.message);
                    topic.publish("hideProgressIndicator");
                    def.resolve();
                }
            });
            return def;
        },

        /**
        * query group to fetch group items
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        queryGroupForItems: function (queryString, sortfields, sortorder, deferedObj, nextQuery) {
            var params;
            if (!nextQuery) {
                params = {
                    q: queryString + '-type:\"Code Attachment\"',
                    num: 100, //should be in number format ex: 100
                    sortField: sortfields, //should be in string format
                    sortOrder: sortorder //should be in string format
                };
            } else {
                params = nextQuery;
            }
            this.queryItems(params).then(function (data) {
                deferedObj.resolve(data);
            });
            return deferedObj;
        },

        /**
        * query to fetch item details
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        queryItemInfo: function (itemUrl, defObj) {
            esriRequest({
                url: itemUrl,
                callbackParamName: "callback",
                timeout: 20000,
                load: function (data) {
                    defObj.resolve(data);
                },
                error: function (e) {
                    if (e.httpCode === 498) {
                        defObj.resolve();
                        topic.publish("hideProgressIndicator");
                        // invalidating token to invoke sign in dialog on timeout
                        dojo.configData.values.token = dojo.configData.values.token + "invalid";
                        topic.publish("portalSignIn", null, true);
                    } else {
                        defObj.resolve();
                        alert(e.message);
                        topic.publish("hideProgressIndicator");
                    }
                }
            });
            return defObj;
        },

        /**
        * override sign-in container text
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        setSignInContainerText: function () {
            var _self = this;
            setTimeout(function () {
                if (query(".dijitDialogTitle")[0]) {
                    query(".dijitDialogTitle")[0].innerHTML = nls.signInText;
                }
                if (query(".dijitDialogPaneContentArea")[0]) {
                    query(".dijitDialogPaneContentArea")[0].childNodes[0].innerHTML = "";
                    domStyle.set(query(".dijitDialogPaneContentArea")[0].childNodes[1], "height", "0px");
                }
                if (query(".esriIdSubmit")[0]) {
                    _self.own(on(query(".esriIdSubmit")[0], "click", lang.hitch(this, function () {
                        if (lang.trim(query(".dijitInputInner")[0].value) === "" && lang.trim(query(".dijitInputInner")[1].value) === "") {
                            domAttr.set(query(".esriErrorMsg")[0], "innerHTML", nls.errorMessages.emptyUsernamePassword);
                            domStyle.set(query(".esriErrorMsg")[0], "display", "block");
                        }
                    })));
                }
            }, 1000);
        },

        /**
        * performs sign in or sign out operation
        * @memberOf widgets/searchAGOLGroupItems/searchAGOLGroupItems
        */
        portalSignIn: function (def, flag) {
            var _self = this;
            if (!def) {
                def = new Deferred();
            }
            if (query(".signin")[0]) {
                if (query(".signin")[0].innerHTML === nls.signInText) {
                    _self._portal = new portal.Portal(dojo.configData.values.portalURL);
                    _self.own(on(_self._portal, "Load", function () {
                        _self._portal.signIn().then(function (loggedInUser) {
                            if (document.activeElement) {
                                document.activeElement.blur();
                            }
                            domAttr.set(query(".esriCTSignIn")[0], "title", nls.title.signOutBtnTitle);
                            topic.publish("showProgressIndicator");
                            if (loggedInUser) {
                                if (!dojo.configData.values.token) {
                                    dojo.configData.values.token = loggedInUser.credential.token;
                                }
                                if (flag) {
                                    _self.queryGroup().then(lang.hitch(this, function () {
                                        domClass.add(query(".esriCTMenuTabRight")[0], "displayBlockAll");
                                        domClass.add(query(".esriCTInnerRightPanelDetails")[0], "displayNoneAll");
                                        domClass.remove(query(".esriCTGalleryContent")[0], "displayNoneAll");
                                        domClass.remove(query(".esriCTInnerRightPanel")[0], "displayNoneAll");
                                        domClass.remove(query(".esriCTApplicationIcon")[0], "esriCTCursorPointer");
                                        topic.publish("queryItemPods");
                                    }));
                                } else {
                                    _self.queryGroup().then(lang.hitch(this, function () {
                                        var leftPanelObj = new LeftPanelCollection();
                                        leftPanelObj.startup();
                                    }));
                                }

                                domAttr.set(query(".signin")[0], "innerHTML", nls.signOutText);
                                domClass.replace(query(".esriCTSignInIcon")[0], "icon-logout", "icon-login");
                                _self.globalUser = loggedInUser;
                                def.resolve();
                            }
                        }, function (e) {
                            if (e.httpCode === 403) {
                                alert(nls.errorMessages.notMemberOfOrg);
                                IdentityManager.credentials = [];
                            }
                        });
                    }));
                } else {
                    _self._portal.signOut().then(function () {
                        if (dojo.configData.values.token) {
                            dojo.configData.values.token = null;
                        }
                        IdentityManager.destroyCredentials();
                        //  _self._portal.id = null;
                        if (dojo.isPrivateGroup) {
                            dojo.configData.groupTitle = null;
                            dojo.configData.groupDescription = null;
                            dojo.configData.groupIcon = null;
                        }

                        dojo.privateBaseMapGroup = false;
                        domAttr.set(query(".signin")[0], "innerHTML", nls.signInText);
                        domClass.replace(query(".esriCTSignInIcon")[0], "icon-login", "icon-logout");
                        _self.globalUser = null;
                        if (dojo.configPrev) {
                            dojo.configData.values = dojo.configPrev;
                        }
                        if (dojo.configData.values.appid) {
                            _self.fetchAppIdSettings();
                        } else {
                            if (flag) {
                                _self.portalSignIn(def, true);
                            } else {
                                /**
                                * query to check if the group has any public items to be displayed on sign out
                                */
                                def.resolve();
                            }
                        }
                    });
                }
            }
            topic.publish("setDefaultTextboxValue");
            if (domGeom.position(query(".esriCTAutoSuggest")[0]).h > 0) {
                domClass.replace(query(".esriCTAutoSuggest")[0], "displayNoneAll", "displayBlockAll");
            }
            this.setSignInContainerText();
            return def;
        }
    });
});
