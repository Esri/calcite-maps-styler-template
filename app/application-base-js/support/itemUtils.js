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
define(["require", "exports", "esri/core/requireUtils", "esri/core/promiseUtils", "esri/core/watchUtils", "./urlUtils"], function (require, exports, requireUtils, promiseUtils, watchUtils, urlUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    function getConfigViewProperties(config) {
        var center = config.center, components = config.components, extent = config.extent, level = config.level, viewpoint = config.viewpoint;
        var ui = components
            ? { ui: { components: urlUtils_1.parseViewComponents(components) } }
            : null;
        var cameraProps = viewpoint ? { camera: urlUtils_1.parseViewpoint(viewpoint) } : null;
        var centerProps = center ? { center: urlUtils_1.parseCenter(center) } : null;
        var zoomProps = level ? { zoom: urlUtils_1.parseLevel(level) } : null;
        var extentProps = extent ? { extent: urlUtils_1.parseExtent(extent) } : null;
        return __assign({}, ui, cameraProps, centerProps, zoomProps, extentProps);
    }
    exports.getConfigViewProperties = getConfigViewProperties;
    function createView(properties) {
        var map = properties.map;
        if (!map) {
            return promiseUtils.reject("properties does not contain a \"map\"");
        }
        var isWebMap = map.declaredClass === "esri.WebMap";
        var isWebScene = map.declaredClass === "esri.WebScene";
        if (!isWebMap && !isWebScene) {
            return promiseUtils.reject("map is not a \"WebMap\" or \"WebScene\"");
        }
        var viewTypePath = isWebMap ? "esri/views/MapView" : "esri/views/SceneView";
        return requireUtils.when(require, viewTypePath).then(function (ViewType) {
            return new ViewType(properties);
        });
    }
    exports.createView = createView;
    function createMapFromItem(options) {
        var item = options.item, appProxies = options.appProxies;
        var isWebMap = item.type === "Web Map";
        var isWebScene = item.type === "Web Scene";
        if (!isWebMap && !isWebScene) {
            return promiseUtils.reject();
        }
        return isWebMap
            ? createWebMapFromItem(options)
            : createWebSceneFromItem(options);
    }
    exports.createMapFromItem = createMapFromItem;
    function createWebMapFromItem(options) {
        var item = options.item, appProxies = options.appProxies;
        return requireUtils.when(require, "esri/WebMap").then(function (WebMap) {
            var wm = new WebMap({
                portalItem: item
            });
            return wm.load().then(function () {
                return _updateProxiedLayers(wm, appProxies);
            });
        });
    }
    exports.createWebMapFromItem = createWebMapFromItem;
    function createWebSceneFromItem(options) {
        var item = options.item, appProxies = options.appProxies;
        return requireUtils.when(require, "esri/WebScene").then(function (WebScene) {
            var ws = new WebScene({
                portalItem: item
            });
            return ws.load().then(function () {
                return _updateProxiedLayers(ws, appProxies);
            });
        });
    }
    exports.createWebSceneFromItem = createWebSceneFromItem;
    function getItemTitle(item) {
        if (item && item.title) {
            return item.title;
        }
    }
    exports.getItemTitle = getItemTitle;
    function goToMarker(marker, view) {
        if (!marker || !view) {
            return promiseUtils.resolve();
        }
        return urlUtils_1.parseMarker(marker).then(function (graphic) {
            view.graphics.add(graphic);
            var view2 = view; // todo: Typings will be fixed in next release.
            return view2.goTo(graphic);
        });
    }
    exports.goToMarker = goToMarker;
    function findQuery(query, view) {
        // ?find=redlands, ca
        if (!query || !view) {
            return promiseUtils.resolve();
        }
        return requireUtils
            .when(require, "esri/widgets/Search/SearchViewModel")
            .then(function (SearchViewModel) {
            var searchVM = new SearchViewModel({
                view: view
            });
            return searchVM.search(query).then(function (result) {
                watchUtils.whenFalseOnce(view, "popup.visible", function () {
                    return searchVM.destroy();
                });
                return result;
            });
        });
    }
    exports.findQuery = findQuery;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    function _updateProxiedLayers(webItem, appProxies) {
        if (!appProxies) {
            return webItem;
        }
        appProxies.forEach(function (proxy) {
            webItem.layers.forEach(function (layer) {
                if (layer.url === proxy.sourceUrl) {
                    layer.url = proxy.proxyUrl;
                }
            });
        });
        return webItem;
    }
});
