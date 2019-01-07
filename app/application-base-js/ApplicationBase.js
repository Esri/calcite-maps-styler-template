/*
  Copyright 2017 Esri

  Licensed under the Apache License, Version 2.0 (the "License");

  you may not use this file except in compliance with the License.

  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software

  distributed under the License is distributed on an "AS IS" BASIS,

  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

  See the License for the specific language governing permissions and

  limitations under the License.​
*/
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "dojo/_base/kernel", "esri/config", "esri/core/promiseUtils", "esri/identity/IdentityManager", "esri/identity/OAuthInfo", "esri/portal/Portal", "esri/portal/PortalItem", "esri/portal/PortalQueryParams", "./declareDecorator"], function (require, exports, kernel, esriConfig, promiseUtils, IdentityManager, OAuthInfo, Portal, PortalItem, PortalQueryParams, declareDecorator_1) {
    "use strict";
    var defaultConfig = {
        portalUrl: "https://www.arcgis.com",
        helperServices: {
            geometry: {},
            printTask: {},
            elevationSync: {},
            geocode: []
        }
    };
    var defaultSettings = {
        environment: {},
        group: {},
        localStorage: {},
        portal: {},
        rightToLeftLocales: ["ar", "he"],
        urlParams: [],
        webMap: {},
        webScene: {}
    };
    var ApplicationBase = /** @class */ (function () {
        //--------------------------------------------------------------------------
        //
        //  Lifecycle
        //
        //--------------------------------------------------------------------------
        function ApplicationBase(options) {
            //--------------------------------------------------------------------------
            //
            //  Properties
            //
            //--------------------------------------------------------------------------
            //----------------------------------
            //  settings
            //----------------------------------
            this.settings = defaultSettings;
            //----------------------------------
            //  config
            //----------------------------------
            this.config = defaultConfig;
            //----------------------------------
            //  results
            //----------------------------------
            this.results = {};
            //----------------------------------
            //  portal
            //----------------------------------
            this.portal = null;
            //----------------------------------
            //  direction
            //----------------------------------
            this.direction = null;
            //----------------------------------
            //  locale
            //----------------------------------
            this.locale = kernel.locale;
            //----------------------------------
            //  units
            //----------------------------------
            this.units = null;
            var config = options.config, settings = options.settings;
            var applicationConfig = typeof config === "string"
                ? JSON.parse(config)
                : config;
            var applicationBaseSettings = typeof settings === "string"
                ? JSON.parse(settings)
                : settings;
            var configMixin = __assign({}, defaultConfig, applicationConfig);
            var settingsMixin = __assign({}, defaultSettings, applicationBaseSettings);
            this._mixinSettingsDefaults(settingsMixin);
            this.config = configMixin;
            this.settings = settingsMixin;
        }
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        ApplicationBase.prototype.queryGroupItems = function (groupId, itemParams, portal) {
            if (!portal || !groupId) {
                portal = this.portal;
            }
            var defaultGroup = this.settings.group.default;
            groupId = this._getDefaultId(groupId, defaultGroup);
            var paramOptions = __assign({ query: "group:\"" + groupId + "\" AND -type:\"Code Attachment\"", sortField: "modified", sortOrder: "desc", num: 9, start: 1 }, itemParams);
            var params = new PortalQueryParams(paramOptions);
            return portal.queryItems(params);
        };
        ApplicationBase.prototype.load = function () {
            var _this = this;
            var settings = this.settings;
            var environmentSettings = settings.environment, groupSettings = settings.group, localStorageSettings = settings.localStorage, portalSettings = settings.portal, webMapSettings = settings.webMap, websceneSettings = settings.webScene, urlParamsSettings = settings.urlParams;
            var isEsri = environmentSettings.isEsri;
            var urlParams = this._getUrlParamValues(urlParamsSettings);
            this.results.urlParams = urlParams;
            this.config = this._mixinAllConfigs({
                config: this.config,
                url: urlParams
            });
            if (isEsri) {
                var esriPortalUrl = this._getEsriEnvironmentPortalUrl();
                this.config.portalUrl = esriPortalUrl;
                this.config.proxyUrl = this._getEsriEnvironmentProxyUrl(esriPortalUrl);
            }
            var _a = this.config, portalUrl = _a.portalUrl, proxyUrl = _a.proxyUrl, oauthappid = _a.oauthappid, appid = _a.appid;
            this._setPortalUrl(portalUrl);
            this._setProxyUrl(proxyUrl);
            var rtlLocales = this.settings.rightToLeftLocales;
            this.direction = this._getLanguageDirection(rtlLocales);
            this._registerOauthInfos(oauthappid, portalUrl);
            var sharingUrl = portalUrl + "/sharing";
            var loadApplicationItem = appid
                ? this._loadItem(appid)
                : promiseUtils.resolve();
            var checkAppAccess = IdentityManager.checkAppAccess(sharingUrl, oauthappid).always(function (response) { return response; });
            var fetchApplicationData = appid
                ? loadApplicationItem.then(function (itemInfo) {
                    return itemInfo instanceof PortalItem
                        ? itemInfo.fetchData()
                        : undefined;
                })
                : promiseUtils.resolve();
            var loadPortal = portalSettings.fetch
                ? new Portal().load()
                : promiseUtils.resolve();
            return promiseUtils
                .eachAlways([loadApplicationItem, fetchApplicationData, loadPortal, checkAppAccess])
                .always(function (applicationArgs) {
                var applicationItemResponse = applicationArgs[0], applicationDataResponse = applicationArgs[1], portalResponse = applicationArgs[2], checkAppAccessResponse = applicationArgs[3];
                var applicationItem = applicationItemResponse
                    ? applicationItemResponse.value
                    : null;
                var applicationData = applicationDataResponse
                    ? applicationDataResponse.value
                    : null;
                var localStorage = localStorageSettings.fetch
                    ? _this._getLocalConfig(appid)
                    : null;
                var appAccess = checkAppAccessResponse ? checkAppAccessResponse.value : null;
                if (applicationItem && applicationItem.access && applicationItem.access !== "public") {
                    // do we have permission to access app
                    if (appAccess && appAccess.name && appAccess.name === "identity-manager:not-authorized") {
                        //identity-manager:not-authorized, identity-manager:not-authenticated, identity-manager:invalid-request
                        return promiseUtils.reject(appAccess.name);
                    }
                }
                else if (applicationItemResponse.error) {
                    return promiseUtils.reject(applicationItemResponse.error);
                }
                _this.results.localStorage = localStorage;
                _this.results.applicationItem = applicationItemResponse;
                _this.results.applicationData = applicationDataResponse;
                var applicationConfig = applicationData
                    ? applicationData.values
                    : null;
                var portal = portalResponse ? portalResponse.value : null;
                _this.portal = portal;
                _this.units = _this._getUnits(portal);
                _this.config = _this._mixinAllConfigs({
                    config: _this.config,
                    url: urlParams,
                    local: localStorage,
                    application: applicationConfig
                });
                _this._setGeometryService(_this.config, portal);
                var _a = _this.config, webmap = _a.webmap, webscene = _a.webscene, group = _a.group;
                var webMapPromises = [];
                var webScenePromises = [];
                var groupInfoPromises = [];
                var groupItemsPromises = [];
                var isWebMapEnabled = webMapSettings.fetch && webmap;
                var isWebSceneEnabled = websceneSettings.fetch && webscene;
                var isGroupInfoEnabled = groupSettings.fetchInfo && group;
                var isGroupItemsEnabled = groupSettings.fetchItems && group;
                var itemParams = groupSettings.itemParams;
                var defaultWebMap = webMapSettings.default;
                var defaultWebScene = websceneSettings.default;
                var defaultGroup = groupSettings.default;
                var fetchMultipleWebmaps = webMapSettings.fetchMultiple;
                var fetchMultipleWebscenes = websceneSettings.fetchMultiple;
                var fetchMultipleGroups = groupSettings.fetchMultiple;
                // if (isWebMapEnabled) {
                //     var webMaps = _this._getPropertyArray(webmap);
                //     var allowedWebmaps = _this._limitItemSize(webMaps, fetchMultipleWebmaps);
                //     allowedWebmaps.forEach(function (id) {
                //         var webMapId = _this._getDefaultId(id, defaultWebMap);
                //         webMapPromises.push(_this._loadItem(webMapId));
                //     });
                // }
                // if (isWebSceneEnabled) {
                //     var webScenes = _this._getPropertyArray(webscene);
                //     var allowedWebsenes = _this._limitItemSize(webScenes, fetchMultipleWebscenes);
                //     allowedWebsenes.forEach(function (id) {
                //         var webSceneId = _this._getDefaultId(id, defaultWebScene);
                //         webScenePromises.push(_this._loadItem(webSceneId));
                //     });
                // }
                // Als - start, allow webmap=default, webscene=default or no webmap or scene
                if (isWebMapEnabled) {
                    if (isWebMapEnabled === "default") {
                        webMapPromises.push(_this._loadItem(defaultWebMap));
                    } else {
                        var webMaps = _this._getPropertyArray(webmap);
                        var allowedWebmaps = _this._limitItemSize(webMaps, fetchMultipleWebmaps);
                        allowedWebmaps.forEach(function (id) {
                            var webMapId = _this._getDefaultId(id, defaultWebMap);
                            webMapPromises.push(_this._loadItem(webMapId));
                        });
                    }
                } else if (isWebSceneEnabled) {
                    if (isWebSceneEnabled === "default") {
                        webScenePromises.push(_this._loadItem(defaultWebScene));
                    } else {
                        var webScenes = _this._getPropertyArray(webscene);
                        var allowedWebsenes = _this._limitItemSize(webScenes, fetchMultipleWebscenes);
                        allowedWebsenes.forEach(function (id) {
                            var webSceneId = _this._getDefaultId(id, defaultWebScene);
                            webScenePromises.push(_this._loadItem(webSceneId));
                        });
                    }
                } else {
                    webMapPromises.push(_this._loadItem(defaultWebMap));
                }
                // Als - stop
                if (isGroupInfoEnabled) {
                    var groups = _this._getPropertyArray(group);
                    var allowedGroups = _this._limitItemSize(groups, fetchMultipleGroups);
                    allowedGroups.forEach(function (id) {
                        var groupId = _this._getDefaultId(id, defaultGroup);
                        groupInfoPromises.push(_this._queryGroupInfo(groupId, portal));
                    });
                }
                if (isGroupItemsEnabled) {
                    var groups = _this._getPropertyArray(group);
                    groups.forEach(function (id) {
                        groupItemsPromises.push(_this.queryGroupItems(id, itemParams, portal));
                    });
                }
                var promises = {
                    webMap: webMapPromises
                        ? promiseUtils.eachAlways(webMapPromises)
                        : promiseUtils.resolve(),
                    webScene: webScenePromises
                        ? promiseUtils.eachAlways(webScenePromises)
                        : promiseUtils.resolve(),
                    groupInfo: groupInfoPromises
                        ? promiseUtils.eachAlways(groupInfoPromises)
                        : promiseUtils.resolve(),
                    groupItems: groupItemsPromises
                        ? promiseUtils.eachAlways(groupItemsPromises)
                        : promiseUtils.resolve()
                };
                return promiseUtils.eachAlways(promises).always(function (itemArgs) {
                    var webMapResponses = itemArgs.webMap.value;
                    var webSceneResponses = itemArgs.webScene.value;
                    var groupInfoResponses = itemArgs.groupInfo.value;
                    var groupItemsResponses = itemArgs.groupItems.value;
                    var itemInfo = applicationItem ? applicationItem.itemInfo : null;
                    _this._overwriteItemsExtent(webMapResponses, itemInfo);
                    _this._overwriteItemsExtent(webSceneResponses, itemInfo);
                    _this.results.webMapItems = webMapResponses;
                    _this.results.webSceneItems = webSceneResponses;
                    _this.results.groupInfos = groupInfoResponses;
                    _this.results.groupItems = groupItemsResponses;
                    return _this;
                });
            });
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        ApplicationBase.prototype._mixinSettingsDefaults = function (settings) {
            var userEnvironmentSettings = settings.environment;
            var userLocalStorageSettings = settings.localStorage;
            var userGroupSettings = settings.group;
            var userPortalSettings = settings.portal;
            var userWebmapSettings = settings.webMap;
            var userWebsceneSettings = settings.webScene;
            settings.environment = __assign({ isEsri: false, webTierSecurity: false }, userEnvironmentSettings);
            settings.localStorage = __assign({ fetch: true }, userLocalStorageSettings);
            var itemParams = {
                sortField: "modified",
                sortOrder: "desc",
                num: 9,
                start: 0
            };
            settings.group = __assign({ default: "908dd46e749d4565a17d2b646ace7b1a", fetchInfo: true, fetchItems: true, fetchMultiple: true, itemParams: itemParams }, userGroupSettings);
            settings.portal = __assign({ fetch: true }, userPortalSettings);
            settings.webMap = __assign({ default: "1970c1995b8f44749f4b9b6e81b5ba45", fetch: true, fetchMultiple: true }, userWebmapSettings);
            settings.webScene = __assign({ default: "e8f078ba0c1546b6a6e0727f877742a5", fetch: true, fetchMultiple: true }, userWebsceneSettings);
        };
        ApplicationBase.prototype._limitItemSize = function (items, allowMultiple) {
            var firstItem = items[0];
            return allowMultiple ? items : firstItem ? [firstItem] : [];
        };
        ApplicationBase.prototype._getPropertyArray = function (property) {
            if (typeof property === "string") {
                return property.split(",");
            }
            if (Array.isArray(property)) {
                return property;
            }
            return [];
        };
        ApplicationBase.prototype._getEsriEnvironmentPortalUrl = function () {
            var pathname = location.pathname;
            var esriAppsPath = "/apps/";
            var esriHomePath = "/home/";
            var esriAppsPathIndex = pathname.indexOf(esriAppsPath);
            var esriHomePathIndex = pathname.indexOf(esriHomePath);
            var isEsriAppsPath = esriAppsPathIndex !== -1;
            var isEsriHomePath = esriHomePathIndex !== -1;
            var appLocationIndex = isEsriAppsPath
                ? esriAppsPathIndex
                : isEsriHomePath
                    ? esriHomePathIndex
                    : undefined;
            if (appLocationIndex === undefined) {
                return;
            }
            var portalInstance = pathname.substr(0, appLocationIndex);
            var host = location.host;
            return "https://" + host + portalInstance;
        };
        ApplicationBase.prototype._getEsriEnvironmentProxyUrl = function (portalUrl) {
            if (!portalUrl) {
                return;
            }
            return portalUrl + "/sharing/proxy";
        };
        ApplicationBase.prototype._getUnits = function (portal) {
            var USRegion = "US";
            var USLocale = "en-us";
            var user = portal.user;
            var userRegion = user && user.region;
            var userUnits = user && user.units;
            var responseUnits = portal.units;
            var responseRegion = portal.region;
            var ipCountryCode = portal.ipCntryCode;
            var isEnglishUnits = userRegion === USRegion ||
                (userRegion && responseRegion === USRegion) ||
                (userRegion && !responseRegion) ||
                (!user && ipCountryCode === USRegion) ||
                (!user && !ipCountryCode && kernel.locale === USLocale);
            var units = userUnits
                ? userUnits
                : responseUnits
                    ? responseUnits
                    : isEnglishUnits
                        ? "english"
                        : "metric";
            return units;
        };
        ApplicationBase.prototype._queryGroupInfo = function (groupId, portal) {
            var params = new PortalQueryParams({
                query: "id:\"" + groupId + "\""
            });
            return portal.queryGroups(params);
        };
        ApplicationBase.prototype._loadItem = function (id) {
            var item = new PortalItem({
                id: id
            });
            return item.load();
        };
        ApplicationBase.prototype._getLocalConfig = function (appid) {
            if (!window.localStorage || !appid) {
                return;
            }
            var lsItemId = "application_base_config_" + appid;
            var lsItem = localStorage.getItem(lsItemId);
            var localConfig = lsItem && JSON.parse(lsItem);
            return localConfig;
        };
        ApplicationBase.prototype._overwriteItemsExtent = function (responses, applicationItem) {
            var _this = this;
            if (!responses) {
                return;
            }
            responses.forEach(function (response) {
                var value = response.value;
                if (value) {
                    _this._overwriteItemExtent(value, applicationItem);
                }
            });
        };
        ApplicationBase.prototype._overwriteItemExtent = function (item, applicationItem) {
            if (!item || !applicationItem) {
                return;
            }
            var applicationExtent = applicationItem.extent;
            item.extent = applicationExtent ? applicationExtent : item.extent;
        };
        ApplicationBase.prototype._getDefaultId = function (id, defaultId) {
            var defaultUrlParam = "default";
            var trimmedId = id ? id.trim() : "";
            var useDefaultId = (!trimmedId || trimmedId === defaultUrlParam) && defaultId;
            return useDefaultId ? defaultId : id;
        };
        ApplicationBase.prototype._getLanguageDirection = function (rtlLocales) {
            if (rtlLocales === void 0) { rtlLocales = ["ar", "he"]; }
            var isRTL = rtlLocales.some(function (language) {
                return kernel.locale.indexOf(language) !== -1;
            });
            return isRTL ? "rtl" : "ltr";
        };
        ApplicationBase.prototype._mixinAllConfigs = function (params) {
            var config = params.config || null;
            var appConfig = params.application || null;
            var localConfig = params.local || null;
            var urlConfig = params.url || null;
            return __assign({}, config, appConfig, localConfig, urlConfig);
        };
        ApplicationBase.prototype._setGeometryService = function (config, portal) {
            var configHelperServices = config.helperServices;
            var anyPortal = portal;
            var portalHelperServices = anyPortal && anyPortal.helperServices;
            var configGeometryUrl = configHelperServices &&
                configHelperServices.geometry &&
                configHelperServices.geometry.url;
            var portalGeometryUrl = portalHelperServices &&
                portalHelperServices.geometry &&
                portalHelperServices.geometry.url;
            var geometryServiceUrl = portalGeometryUrl || configGeometryUrl;
            if (!geometryServiceUrl) {
                return;
            }
            esriConfig.geometryServiceUrl = geometryServiceUrl;
        };
        ApplicationBase.prototype._setPortalUrl = function (portalUrl) {
            if (!portalUrl) {
                return;
            }
            esriConfig.portalUrl = portalUrl;
        };
        ApplicationBase.prototype._setProxyUrl = function (proxyUrl) {
            if (!proxyUrl) {
                return;
            }
            esriConfig.request.proxyUrl = proxyUrl;
        };
        ApplicationBase.prototype._registerOauthInfos = function (appId, portalUrl) {
            if (!appId) {
                return;
            }
            var info = new OAuthInfo({
                appId: appId,
                portalUrl: portalUrl,
                popup: true
            });
            if (!info) {
                return;
            }
            IdentityManager.registerOAuthInfos([info]);
        };
        ApplicationBase.prototype._getUrlParamValues = function (urlParams) {
            var _this = this;
            var urlObject = this._urlToObject();
            var formattedUrlObject = {};
            if (!urlObject || !urlParams || !urlParams.length) {
                return;
            }
            urlParams.forEach(function (param) {
                var urlParamValue = urlObject[param];
                if (urlParamValue) {
                    formattedUrlObject[param] = _this._formatUrlParamValue(urlParamValue);
                }
            });
            return formattedUrlObject;
        };
        ApplicationBase.prototype._urlToObject = function () {
            var _this = this;
            var query = (window.location.search || "?").substr(1), map = {};
            var urlRE = /([^&=]+)=?([^&]*)(?:&+|$)/g;
            query.replace(urlRE, function (match, key, value) {
                map[key] = _this._stripStringTags(decodeURIComponent(value));
                return "";
            });
            return map;
        };
        ApplicationBase.prototype._formatUrlParamValue = function (urlParamValue) {
            if (typeof urlParamValue !== "string") {
                return urlParamValue;
            }
            var lowerCaseValue = urlParamValue.toLowerCase();
            if (lowerCaseValue === "true") {
                return true;
            }
            if (lowerCaseValue === "false") {
                return false;
            }
            return urlParamValue;
        };
        ApplicationBase.prototype._stripStringTags = function (value) {
            var tagsRE = /<\/?[^>]+>/g;
            return value.replace(tagsRE, "");
        };
        ApplicationBase = __decorate([
            declareDecorator_1.default()
        ], ApplicationBase);
        return ApplicationBase;
    }());
    return ApplicationBase;
});
