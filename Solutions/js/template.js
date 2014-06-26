/*global define,require,console,jsapi_i18n:true,package_path */
/*jslint browser:true,sloppy:true,nomen:true,plusplus:true */
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
/* commit 2fd274cb6d335303 2014-06-26 13:58:30 -0700 */
define([
    "dojo/_base/declare",
    "dojo/_base/kernel",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/dom-class",
    "dojo/Deferred",
    "dojo/promise/all",
    "dojo/request/xhr",
    "esri/arcgis/utils",
    "esri/urlUtils",
    "esri/request",
    "esri/config",
    "esri/lang",
    "esri/IdentityManager",
    "esri/arcgis/Portal",
    "esri/tasks/GeometryService",
    "dojo/i18n!esri/nls/jsapi",
    "config/defaults",
    "launch/OAuthHelper"
], function (
    declare,
    kernel,
    array,
    lang,
    domClass,
    Deferred,
    all,
    xhr,
    arcgisUtils,
    urlUtils,
    esriRequest,
    esriConfig,
    esriLang,
    IdentityManager,
    esriPortal,
    GeometryService,
    jsapiBundle,
    defaults,
    OAuthHelper
) {
    return declare(null, {
        config: {},
        orgConfig: {},
        appConfig: {},
        urlConfig: {},
        customUrlConfig: {},
        commonConfig: {},
        constructor: function (options) {
            // template settings
            var defaultOptions = {
                webmap: true,
                groupItems: false,
                groupInfo: false
            };
            this.options = lang.mixin(defaultOptions, options);
            // config will contain application and user defined info for the application such as i18n strings the web map id and application id, any url parameters and any application specific configuration information.
            this.config = defaults;
            jsapi_i18n = jsapiBundle;
        },
        startup: function () {
            var deferred = this._init();
            return deferred;
        },
        // Get URL parameters and set application defaults needed to query arcgis.com for
        // an application and to see if the app is running in Portal or an Org
        _init: function () {
            var deferred, paramItems;

            deferred = new Deferred();
            // Set the web map, group and appid if they exist but ignore other url params.
            // Additional url parameters may be defined by the application but they need to be mixed in
            // to the config object after we retrieve the application configuration info. As an example,
            // we'll mix in some commonly used url parameters in the _queryUrlParams function after
            // the application configuration has been applied so that the url parameters overwrite any
            // configured settings. It's up to the application developer to update the application to take
            // advantage of these parameters.
            paramItems = ["webmap", "app", "appid", "group", "oauthappid"];
            this.urlConfig = this._createUrlParamsObject(paramItems);
            // config defaults <- standard url params
            // we need the webmap, appid, group and oauthappid to query for the data
            lang.mixin(this.config, this.urlConfig);
            // Define the sharing url and other default values like the proxy.
            // The sharing url defines where to search for the web map and application content. The
            // default value is arcgis.com.
            this._initializeApplication();
            // execute these async
            all({
                // check if signed in
                auth: this._checkSignIn(),
                // get localization
                i18n: this._getLocalization(),
                // get application data
                app: this._queryApplicationConfiguration(),
                // common config file
                common: this._getCommonConfig(),
                // do we need to create portal?
                portal: this._createPortal()
            }).then(lang.hitch(this, function () {
                // then execute these async
                all({
                    // webmap item
                    item: this._queryDisplayItem(),
                    // group information
                    groupInfo: this._queryGroupInfo(),
                    // group items
                    groupItems: this.queryGroupItems(),
                    // get org data
                    org: this._queryOrganizationInformation()
                }).then(lang.hitch(this, function () {
                    // Get any custom url params
                    this._queryUrlParams();
                    // mix in all the settings we got!
                    // defaults <- common config <- organization <- application id config <- custom url params
                    lang.mixin(this.config, this.commonConfig, this.orgConfig, this.appConfig, this.customUrlConfig);
                    // Set the geometry helper service to be the app default.
                    if (this.config.helperServices && this.config.helperServices.geometry && this.config.helperServices.geometry.url) {
                        esriConfig.defaults.geometryService = new GeometryService(this.config.helperServices.geometry.url);
                    }
                    // setup OAuth if oauth appid exists_initializeApplication
                    if (this.config.oauthappid) {
                        this._setupOAuth(this.config.oauthappid, this.config.sharinghost);
                    }
                    deferred.resolve(this.config);
                }), deferred.reject);
            }), deferred.reject);
            // return promise
            return deferred.promise;
        },
        _createPortal: function () {
            var deferred = new Deferred();
            if (this.options.groupInfo || this.options.groupItems) {
                this.portal = new esriPortal.Portal(this.config.sharinghost);
                this.portal.on("load", function () {
                    deferred.resolve();
                });
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        },
        _getCommonConfig: function () {
            var deferred;
            deferred = new Deferred();
            if (this.config.commonConfig) {
                require(["arcgis_templates/commonConfig"], lang.hitch(this, function (response) {
                    this.commonConfig = response;
                    deferred.resolve(response);
                }));
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        },
        _createUrlParamsObject: function (items) {
            var urlObject, obj = {}, i;

            // retrieve url parameters. Templates all use url parameters to determine which arcgis.com
            // resource to work with.
            // Map templates use the webmap param to define the webmap to display
            // Group templates use the group param to provide the id of the group to display.
            // appid is the id of the application based on the template. We use this
            // id to retrieve application specific configuration information. The configuration
            // information will contain the values the  user selected on the template configuration
            // panel.
            urlObject = urlUtils.urlToObject(document.location.href);
            urlObject.query = urlObject.query || {};
            if (urlObject.query && items && items.length) {
                for (i = 0; i < items.length; i++) {
                    if (urlObject.query[items[i]]) {
                        obj[items[i]] = urlObject.query[items[i]];
                    }
                }
            }
            return obj;
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
                this.config.sharinghost = location.protocol + "//" + location.host + instance;
                this.config.proxyurl = location.protocol + "//" + location.host + instance + "/sharing/proxy";
            } else {
                // setup OAuth if oauth appid exists. If we don't call it here before querying for appid
                // the identity manager dialog will appear if the appid isn't publicly shared.
                if (this.config.oauthappid) {
                    this._setupOAuth(this.config.oauthappid, this.config.sharinghost);
                }
            }
            arcgisUtils.arcgisUrl = this.config.sharinghost + "/sharing/rest/content/items";
            // Define the proxy url for the app
            if (this.config.proxyurl) {
                esriConfig.defaults.io.proxyUrl = this.config.proxyurl;
                esriConfig.defaults.io.alwaysUseProxy = false;

                // Have the arcgisUrl go thru the proxy
                urlUtils.addProxyRule({
                    proxyUrl: this.config.proxyurl,
                    urlPrefix: arcgisUtils.arcgisUrl
                });
            }
        },
        _checkSignIn: function () {
            var deferred, signedIn;

            deferred = new Deferred();
            // check sign-in status
            signedIn = IdentityManager.checkSignInStatus(this.config.sharinghost + "/sharing");
            // resolve regardless of signed in or not.
            signedIn.promise.always(function () {
                deferred.resolve();
            });
            return deferred.promise;
        },
        _setupOAuth: function (id, portal) {
            OAuthHelper.init({
                appId: id,
                portal: portal,
                expiration: (14 * 24 * 60) //2 weeks (in minutes)
            });
        },
        _getLocalization: function () {
            var deferred, dirNode, classes, rtlClasses;

            deferred = new Deferred();
            if (this.config.localize) {
                require(["dojo/i18n!app/nls/resources"], lang.hitch(this, function (appBundle) {
                    // Get the localization strings for the template and store in an i18n variable. Also determine if the
                    // application is in a right-to-left language like Arabic or Hebrew.
                    this.config.i18n = appBundle || {};
                    // Bi-directional language support added to support right-to-left languages like Arabic and Hebrew
                    // Note: The map must stay ltr
                    this.config.i18n.direction = "ltr";
                    array.some(["ar", "he"], lang.hitch(this, function (l) {
                        if (kernel.locale.indexOf(l) !== -1) {
                            this.config.i18n.direction = "rtl";
                            return true;
                        }
                        return false;
                    }));
                    // add a dir attribute to the html tag. Then you can add special css classes for rtl languages
                    dirNode = document.getElementsByTagName("html")[0];
                    classes = dirNode.className;
                    if (this.config.i18n.direction === "rtl") {
                        // need to add support for dj_rtl.
                        // if the dir node is set when the app loads dojo will handle.
                        dirNode.setAttribute("dir", "rtl");
                        rtlClasses = " esriRTL dj_rtl dijitRtl " + classes.replace(/ /g, "-rtl ");
                        dirNode.className = lang.trim(classes + rtlClasses);
                    } else {
                        dirNode.setAttribute("dir", "ltr");
                        domClass.add(dirNode, "esriLTR");
                    }
                    deferred.resolve(appBundle);
                }));
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        },
        queryGroupItems: function (options) {
            var deferred = new Deferred(), error, defaultParams, params;
            // If we want to get the group info
            if (this.options.groupItems) {
                if (this.config.group) {
                    // group params
                    defaultParams = {
                        q: "group:\"" + this.config.group + "\" AND -type:\"Code Attachment\"",
                        sortField: "modified",
                        sortOrder: "desc",
                        num: 9,
                        start: 0,
                        f: "json"
                    };
                    // mixin params
                    params = lang.mixin(defaultParams, this.options.groupParams, options);
                    // get items from the group
                    this.portal.queryItems(params).then(lang.hitch(this, function (response) {
                        this.config.groupItems = response;
                        deferred.resolve(response);
                    }), function (error) {
                        deferred.reject(error);
                    });
                } else {
                    error = new Error("Group undefined.");
                    deferred.reject(error);
                }
            } else {
                // just resolve
                deferred.resolve();
            }
            return deferred.promise;
        },
        _queryGroupInfo: function () {
            var deferred = new Deferred(), error, params;
            // If we want to get the group info
            if (this.options.groupInfo) {
                if (this.config.group) {
                    // group params
                    params = {
                        q: "id:\"" + this.config.group + "\"",
                        f: "json"
                    };
                    this.portal.queryGroups(params).then(lang.hitch(this, function (response) {
                        this.config.groupInfo = response;
                        deferred.resolve(response);
                    }), function (error) {
                        deferred.reject(error);
                    });
                } else {
                    error = new Error("Group undefined.");
                    deferred.reject(error);
                }
            } else {
                // just resolve
                deferred.resolve();
            }
            return deferred.promise;
        },
        _queryDisplayItem: function () {
            var deferred, error;

            // Get details about the specified web map. If the web map is not shared publicly users will
            // be prompted to log-in by the Identity Manager.
            deferred = new Deferred();
            // If we want to get the webmap
            if (this.options.webmap) {
                if (this.config.webmap) {
                    arcgisUtils.getItem(this.config.webmap).then(lang.hitch(this, function (itemInfo) {
                        // ArcGIS.com allows you to set an application extent on the application item. Overwrite the
                        // existing web map extent with the application item extent when set.
                        if (this.config.appid && this.config.application_extent.length > 0 && itemInfo.item.extent) {
                            itemInfo.item.extent = [
                                [
                                    parseFloat(this.config.application_extent[0][0]),
                                    parseFloat(this.config.application_extent[0][1])
                                ],
                                [
                                    parseFloat(this.config.application_extent[1][0]),
                                    parseFloat(this.config.application_extent[1][1])
                                ]
                            ];
                        }
                        // Set the itemInfo config option. This can be used when calling createMap instead of the webmap id
                        this.config.itemInfo = itemInfo;
                        deferred.resolve(itemInfo);
                    }), function (error) {
                        if (!error) {
                            error = new Error("Error retrieving display item.");
                        }
                        deferred.reject(error);
                    });
                } else {
                    error = new Error("Webmap undefined.");
                    deferred.reject(error);
                }
            } else {
                // we're done. we dont need to get the webmap
                deferred.resolve();
            }
            return deferred.promise;
        },
        _queryApplicationConfiguration: function () {
            // The app recognizes three URL parameters for setting up its webmap and user interface:
            // "webmap", "app", "appid". It uses the following rules to disambiguate the parameters:
            // 1. if URL contains appid, it points to an AGOL app that contains a webmap id and a template id;
            //    the latter contains the app's UI; this is the normal use of an AGOL application
            // 2. otherwise, if the URL contains webmap and app, we have the webmap and app is the name of
            //    the file-based template item containing the app's UI; this is the preview use of an AGOL
            //    application
            // 3. otherwise, if the URL contains app, it is the name of the file-based template item containing
            //    the app's webmap and UI; this is the try-it use of an AGOL application
            // 4. otherwise, we have an incomplete URL, which we'll resolve by using the the file-based template
            //    apps2/GeneralMap; if the URL contains webmap, we'll use it; otherwise, we use the webmap in
            //    apps2/GeneralMap
            var filename, deferred = new Deferred();

            // 1. normal
            if (this.config.appid) {
                // Get application's AGOL-based description
                arcgisUtils.getItem(this.config.appid).then(
                    lang.hitch(this, function (appResponse) {
                        if (appResponse.item && appResponse.itemData && appResponse.itemData.values && appResponse.itemData.source) {
                            this.config.webmap = appResponse.itemData.values.webmap;

                            // get the extent for the application item. This can be used to override the default web map extent
                            if (appResponse.item.extent) {
                                this.config.application_extent = appResponse.item.extent;
                            }

                            // Get application's AGOL-based template
                            arcgisUtils.getItem(appResponse.itemData.source).then(
                                lang.hitch(this, function (templateResponse) {
                                    if (templateResponse.item && templateResponse.itemData && templateResponse.itemData.values) {
                                        this.appConfig.ui = templateResponse.itemData.ui || {};
                                        this.appConfig.appValues = templateResponse.itemData.values || {};
                                        lang.mixin(this.appConfig.appValues, appResponse.itemData.values || {});

                                        console.log("Using app specification in " + this.config.appid);
                                        deferred.resolve();
                                    } else {
                                        deferred.reject(this._configurationError());
                                    }
                                }),
                                lang.hitch(this, function () {
                                    deferred.reject(this._configurationError());
                                })
                            );
                        } else {
                            deferred.reject(this._configurationError());
                        }
                    }),
                    lang.hitch(this, function () {
                        deferred.reject(this._configurationError());
                    })
                );

            // 2-4
            } else {
                // 2 & 3.preview & try-it
                if (this.config.app) {
                    // Get application's file-based template
                    filename = this.config.app;

                    // If we're running in the hosted environment without an appid, the file-based UIs are for previewing
                    if (this.config.commonConfig) {
                        filename += "_try_it";
                    }

                // 4. missing URL parameters
                } else {
                    // Get apps2/GeneralMap file
                    filename = "apps2/GeneralMap";
                }

                // Get the template file
                this.loadJSONFile(filename).then(
                    lang.hitch(this, function (fileTemplate) {
                        this.appConfig.ui = fileTemplate.ui || {};
                        this.appConfig.appValues = fileTemplate.values || {};

                        // If we're running in the hosted environment without an appid or if no webmap id was
                        // supplied in the URL, use the webmap in the file
                        if (this.config.commonConfig || !this.config.webmap) {
                            this.config.webmap = fileTemplate.values.webmap;
                        }

                        console.log("Using app specification in " + filename);
                        deferred.resolve();
                    }),
                    lang.hitch(this, function () {
                        deferred.reject(this._configurationError());
                    })
                );
            }

            return deferred.promise;
        },
        _configurationError: function (error) {
            // Provide a backup configuration error message if an error parameter is not supplied
            if (!error) {
                if (this.config && this.config.i18n) {
                    error = new Error(this.config.i18n.messages.noConfiguration);
                } else {
                    error = new Error("Unable to access application's configuration");
                }
            }
            return error;
        },
        _queryOrganizationInformation: function () {
            var deferred = new Deferred();
            if (this.config.queryForOrg) {
                // Query the ArcGIS.com organization. This is defined by the sharinghost that is specified. For example if you
                // are a member of an org you'll want to set the sharinghost to be http://<your org name>.arcgis.com. We query
                // the organization by making a self request to the org url which returns details specific to that organization.
                // Examples of the type of information returned are custom roles, units settings, helper services and more.
                // If this fails, the application will continue to function
                esriRequest({
                    url: this.config.sharinghost + "/sharing/rest/portals/self",
                    content: {
                        "f": "json"
                    },
                    callbackParamName: "callback"
                }).then(lang.hitch(this, function (response) {
                    var q;

                    // get units defined by the org or the org user
                    this.orgConfig.units = "metric";
                    if (response.user && response.user.units) { //user defined units
                        this.orgConfig.units = response.user.units;
                    } else if (response.units) { //org level units
                        this.orgConfig.units = response.units;
                    } else if ((response.user && response.user.region && response.user.region === "US") || (response.user && !response.user.region && response.region === "US") || (response.user && !response.user.region && !response.region) || (!response.user && response.ipCntryCode === "US") || (!response.user && !response.ipCntryCode && kernel.locale === "en-us")) {
                        // use feet/miles only for the US and if nothing is set for a user
                        this.orgConfig.units = "english";
                    }
                    //Is there a custom basemap group defined (owner and title or id)
                    q = this._parseQuery(response.basemapGalleryGroupQuery);
                    this.orgConfig.basemapgroup = {
                        id: null,
                        title: null,
                        owner: null
                    };
                    if (q.id) {
                        this.orgConfig.basemapgroup.id = q.id;
                    } else if (q.title && q.owner) {
                        this.orgConfig.basemapgroup.title = q.title;
                        this.orgConfig.basemapgroup.owner = q.owner;
                    }
                    // Get the helper services (routing, print, locator etc)
                    this.orgConfig.helperServices = response.helperServices;
                    // are any custom roles defined in the organization?
                    if (response.user && esriLang.isDefined(response.user.roleId)) {
                        if (response.user.privileges) {
                            this.orgConfig.userPrivileges = response.user.privileges;
                        }
                    }
                    deferred.resolve(response);
                }), function (error) {
                    if (!error) {
                        error = new Error("Error retrieving organization information.");
                    }
                    deferred.reject(error);
                });
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        },
        _parseQuery: function (queryString) {
            var regex = /(AND|OR)?\W*([a-z]+):/ig,
                fields = {},
                fieldName,
                fieldIndex,
                result = regex.exec(queryString);
            while (result) {
                fieldName = result && result[2];
                fieldIndex = result ? (result.index + result[0].length) : -1;

                result = regex.exec(queryString);

                fields[fieldName] = queryString
                    .substring(fieldIndex, result ? result.index : queryString.length)
                    .replace(/^\s+|\s+$/g, "")
                    .replace(/\"/g, ""); //remove extra quotes in title
            }
            return fields;
        },
        _queryUrlParams: function () {
            // This function demonstrates how to handle additional custom url parameters. For example
            // if you want users to be able to specify lat/lon coordinates that define the map's center or
            // specify an alternate basemap via a url parameter.
            // If these options are also configurable these updates need to be added after any
            // application default and configuration info has been applied. Currently these values
            // (center, basemap, theme) are only here as examples and can be removed if you don't plan on
            // supporting additional url parameters in your application.
            this.customUrlConfig.urlValues = this._createUrlParamsObject(this.config.urlItems);
        },
        /**
         * Loads JSON from a file.
         * @param {string} url The URL of the JSON file
         * @return {Deferred} Provides a way to test the success or
         *         failure of loading the file
         */
        loadJSONFile: function (url) {
            var done = new Deferred();

            xhr(url + ".json", {
                handleAs: "json"
            }).then(
                function (uiSpec) {
                    done.resolve(uiSpec);
                },
                function (err) {
                    done.reject(err);
                }
            );

            return done;
        }
    });
});
