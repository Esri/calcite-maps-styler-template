/*
 | Copyright 2016 Esri
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

  "application/base/selectors",
  "application/base/message",
  //"application/base/ParamValidator", // TODO - add param validation before page is refreshed
  "dojo/text!config/application.json",

  "esri/core/watchUtils",

  "dojo/_base/lang",
  "dojo/on",
  "dojo/keys",
  "dojo/touch",
  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",
  "dojo/dom-construct",

  "dojo/_base/declare",
], function (
  CALCITE_SELECTORS, Message, AppSettingsDefault,
  watchUtils,
  lang, on, keys, touch, dom, domAttr, domClass, query, domConstruct,
  declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (view, search, boilerplate) {
      if (view) {
        this._view = view;
        this._is2d = view.type === "2d";
        this._search = search;
        this._boilerplate = boilerplate;
        this._appSettingsParams = JSON.parse(AppSettingsDefault);
        // this._paramValidator = new ParamValidator();
        this._initSharePanelActive();
        // Set initial textarea url
        this._setBaseUrl();
        this._textArea = query("#shareTextAreaUrl")[0];
        this._textAreaiFrame = query("#shareTextAreaiFrame")[0];
        this._checkboxDefault = query("#shareDefaultChk")[0];
        this._writeUrls(document.location.href);
        // Set listeners
        this._setUIEvents();
        view.when(function(){
          this._setViewWatch();
          this._setBasemapWatch();
          this._setPopupWatch();
          this._setSearchWatch();
        }.bind(this))
        .otherwise(function(err){
          console.log(err);
        });
      }
    },

    _cnt: 0,

    _appSettingsParams: null,

    _view: null,

    _boilerplate: null,

    _is2d: false,

    _isPanelActive: false,

    // Params

    _basemapParam: {},
    _searchParam: {},
    _placesParam: {},

    // Helper

    _paramValidator: null,

    // Set panel active if visible

    _initSharePanelActive: function() {
      var style = query(CALCITE_SELECTORS.panelShare)[0];
      if (style) {
        this._isPanelActive = style.className.indexOf("in") > -1;
      }
    },

    // Events

    _setUIEvents: function() {

      query("#shareDefaultChk").on("change", function(e){
        if (e.target.checked) {
          this._defaultChecked = true;
          this._writeUrls(this._baseUrl);
        } else {
          this._defaultChecked = false;
        }
        this._updateTextAreaUrl();
      }.bind(this));

      // Button - select URL
      query("#shareSelectBtn").on("click", function(){
        try { // IE 11 bug work-around
          var urlTabActive = query("#shareUrlTab")[0].className.indexOf("active") > -1;
          if (urlTabActive) {
            this._textArea.select();
          } else {
            this._textAreaiFrame.select();
          }
        } catch (e) {}
      }.bind(this));

      // Button - reload browser
      query("#shareApplyBtn").on("click", function(){
        document.location.href = this._textArea.value; // Validate?
      }.bind(this));

      // Keypress - reload browser
      on(this._textArea, "keypress", function(e){
        if (e.keyCode === keys.ENTER) {
          e.preventDefault();
          document.location.href = this._textArea.value; //Encode?
        }
      }.bind(this));

      // Panel open
      query(CALCITE_SELECTORS.panelShare).on("show.bs.collapse", function(e) {
        this._isPanelActive = true;
        this._updateTextAreaUrl();
      }.bind(this));

      // Panel close
      query(CALCITE_SELECTORS.panelShare).on("hide.bs.collapse", function(e) {
        this._isPanelActive = false;
      }.bind(this));
    },

    // Update URL whenever the map updates (end of drawing)
    _setViewWatch: function() {
      watchUtils.whenFalse(this._view, "updating", function(){
        if (!this._view.animating) {
          this._updateTextAreaUrl();
        }
      }.bind(this));
    },

    // Update URL when selected feature changes
    _setPopupWatch: function() {
      this._view.popup.watch("selectedFeature", function(feature){
        if (!feature) {
          this._updateTextAreaUrl();
        }
      }.bind(this));
    },

    // Params

    // Basemap

    _setBasemapParam: function(basemapId) {
      if (basemapId){
        this._basemapParam = {basemap: basemapId}
      } else {
        this._basemapParam = {};
      }
    },

    _getBasemapParam: function(forceUpdate) {
      if (forceUpdate) {
        this._setBasemapParam(this._view.map.basemap.id);
      }
      return this._basemapParam;
    },

    _setBasemapWatch: function() {
      this._view.map.watch("basemap", function(basemap){
        this._setBasemapParam(basemap.id);
      }.bind(this));
    },

    // Search

    _setSearchParam: function(feature) {
      if (feature && feature.name) {
        this._searchParam = {search: feature.name};
      } else {
        this._searchParam = {};
      }
    },

    _getSearchParam: function(forceUpdate) {
      if (forceUpdate) {
        this._setSearchParam(this._search.selectedResult);
      }
      return this._searchParam;
    },

     // Update URL when search changes

    _setSearchWatch: function() {
      if (this._search) {
        this._search.on(["search-clear","select-result"], function(val){
          var feature;
          if (val && val.result) {
            feature = val.result;
          }
          this._setSearchParam(feature);
          this._updateTextAreaUrl();
        }.bind(this));
      }
    },

    // Places

    _setPlacesParam: function() {
      if (this._view.map) {
        var places = this._view.map.allLayers.find(function(lyr){
          return lyr.title === "Places Search";
        });
        if (places && places.source && places.source.items && places.source.items.length) {
          this._placesParam = {places: places.source.items[0].placeName};
        } else {
          this._placesParam = {};
        }
      }
    },

    _getPlacesParam: function(forceUpdate) {
      if (forceUpdate) {
        this._setPlacesParam();
      }
      return this._placesParam;
    },

    //_setPlacesWatch: function() {
      //this._view.map.allLayers.watch("")
    //},

    // URL

    _updateTextAreaUrl: function(forceUpdate) {
      if (this._isPanelActive && !this._defaultChecked) {
        //console.log("update"+this._cnt++);
        // Get url params
        var allParams = this._getUrlParams();
        // Get textarea params
        var textAreaUrlParams = this._getTextAreaUrlParams();
        var textAreaParams = this._getNewUrlParams(textAreaUrlParams);
        allParams = lang.mixin(allParams,textAreaParams);
        // Coords
        var coordsParams = this._getCoordParams();
        allParams = lang.mixin(allParams,coordsParams);
        // Basemap
        var basemapParams = this._getBasemapParam();
        allParams = lang.mixin(allParams,basemapParams);
        // Search
        var searchParams = this._getSearchParam(true);
        allParams = lang.mixin(allParams,searchParams);
        // Places
        var placesParams = this._getPlacesParam(true);
        allParams = lang.mixin(allParams,placesParams);
        // Clean up params
        allParams = this._cleanParams(allParams);
        allParams = this._sortParams(allParams);
        // Url
        var strParams = this._jsonToParamString(allParams);
        var url;
        if (this._baseUrl.indexOf("appid") > -1 || this._baseUrl.indexOf("webmap") > -1 || this._baseUrl.indexOf("webscene") > -1) {
          url = this._baseUrl + "&" + strParams;
        } else {
          url = this._baseUrl + "?" + strParams;
        }
        this._writeUrls(url);
      }
    },

    _writeUrls: function(url) {
      var decodedUrl = decodeURIComponent(url);
      // Url
      this._textArea.value = decodedUrl;
      //iFrame
      var iFrameUrl = "<iframe width='500' height='400' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' title='My Map' src='" + decodedUrl + "'></iframe>";
      this._textAreaiFrame.value = iFrameUrl;
    },

    _cleanParams: function(params) {
      params = params || {};

      // Webmap and Webscene
      if (this._baseUrl.indexOf("appid") > -1) {
        delete params["appid"];
      }

      if (this._baseUrl.indexOf("webmap") > -1) {
        delete params["webmap"];
      }

      if (this._baseUrl.indexOf("webscene") > -1) {
        delete params["webscene"];
      }

      // Search
      // if (!this._searchParam.hasOwnProperty("search")) {
      //   delete params["search"];
      // }

      // // Places
      // if (!this._placesParam.hasOwnProperty("places")) {
      //   delete params["places"];
      // }

      // Search, remove position params
      // if (this._search && this._search.selectedResult) {
      //   delete params["lat"];
      //   delete params["lon"];
      //   delete params["scale"];
      //   delete params["zoom"];
      // } else {
      //   delete params["search"];
      // }

      // Clean up params for 2D and 3D
      if (this._is2d) {
        delete params["heading"];
        delete params["tilt"];
        delete params["altitude"];
      } else {
        delete params["rotation"]
      }
      return params;
    },

    // Get params that override app settings
    _getNewUrlParams: function(urlParams) {
      var configParams = this._appSettingsParams;
      var params = {};
      if (urlParams) {
        Object.keys(urlParams).forEach(function(key,i){
          if (configParams.hasOwnProperty(key)) {
            if (urlParams[key] !== configParams[key]) {
              params[key] = urlParams[key];
            }
          }
        });
    }
      return params;
    },

    _getParamsFromUrl: function(url) {
      var paramStr;
      if (url.indexOf("?") > -1) {
        paramsStr = url.split('?')[0];
      }
      return paramStr;
    },

    _setBaseUrl: function() {
      var href = window.location.href;
      if (href.indexOf("?")) {
        if (href.indexOf("appid") > -1 || href.indexOf("webmap") > -1 || href.indexOf("webscene") > -1) {
          if (href.indexOf("&") > -1) {  // Url has appid, remove params after appid
            this._baseUrl = href.split('&')[0];
          } else {
            this._baseUrl = href;
          }
        } else {  // Url is default, remove all params
          this._baseUrl = href.split('?')[0];
        }
      } else {
        this._baseUrl = href;
      }
    },

    _getUrlParams: function() {
      var params;
      var url = document.location.href;
      var paramsStr = url.split("?")[1];
      if (paramsStr) {
        params = this._paramStringToJSON(paramsStr);
      }
      return params;
    },

    _getTextAreaUrlParams: function() {
      var params;
      var url = this._textArea.value;
      var paramsStr = url.split("?")[1];
      if (paramsStr) {
        params = this._paramStringToJSON(paramsStr);
      }
      return params;
    },

    _getCoordParams: function() {
      var params = {};
      var pt = this._view.center;
      if (pt.latitude) { // Geographic
        params.lat = parseFloat(Math.round(pt.latitude * 100000) / 100000).toFixed(5);
        params.lon = parseFloat(Math.round(pt.longitude * 100000) / 100000).toFixed(5);
      } else { // Web Mercator or projected
        params.x = parseFloat(Math.round(pt.x * 1000) / 1000).toFixed(3);
        params.y = parseFloat(Math.round(pt.y * 1000) / 1000).toFixed(3);
        params.wkid = this._view.spatialReference.wkid;
      }
      var rotation = this._view.rotation;
      if (this._is2d) {
        if (this._view.rotation > 0.5) {
          params.rotation = Math.round(this._view.rotation);
        }
      } else {
        params.heading =  Math.round(this._view.viewpoint.camera.heading);
        params.tilt = Math.round(this._view.viewpoint.camera.tilt);
        //params.altitude = Math.round(this._view.viewpoint.camera.position.z);
        //params.altitude = Math.round(this._view.center.z);  // use z here instead to match ViewManager loading
      }
      params.zoom = Math.round(this._view.zoom);
      return params;
    },

    _sortParams: function(params){
      var sorted = {};
      // IDs
      params.appid ? sorted.appid = params.appid : null;
      params.webmap ? sorted.webmap = params.webmap : null;
      params.webscene ? sorted.webscene = params.webscene : null;
      // App
      params.title ? sorted.title = params.title : null;
      params.subtitle ? sorted.subtitle = params.subtitle : null;
      // Map
      params.basemap ? sorted.basemap = params.basemap : null;
      // Coordinates
      params.lat ? sorted.lat = params.lat : null;
      params.lon ? sorted.lon = params.lon : null;
      params.x ? sorted.x = params.x : null;
      params.y ? sorted.y = params.y : null;
      params.wkid ? sorted.wkid = params.wkid : null;
      params.zoom ? sorted.zoom = params.zoom : null;
      params.scale ? sorted.scale = params.scale : null;
      params.tilt ? sorted.tilt = params.tilt : null;
      params.rotation ? sorted.rotation = params.rotation : null;
      params.heading ? sorted.heading = params.heading : null;
      // Search/Places
      params.search ? sorted.search = params.search : null;
      params.searchtext ? sorted.searchtext = params.searchtext : null;
      params.places ? sorted.places = params.places : null;
      // Theme
      params.bgcolor ? sorted.bgcolor = params.bgcolor : null;
      params.theme ? sorted.theme = params.theme : null;
      params.themecustom ? sorted.themecustom = params.themecustom : null;
      params.textcolor ? sorted.textcolor = params.textcolor : null;
      params.opacity ? sorted.opacity = params.opacity : null;
      params.widgettheme ? sorted.widgettheme = params.widgettheme : null;
      // About
      params.abouttext ? sorted.abouttext = params.abouttext : null;
      params.aboutsummary ? sorted.aboutsummary = params.aboutsummary : null;
      params.aboutdescription ? sorted.aboutdescription = params.aboutdescription : null;
      // Panel
      params.activepanel ? sorted.activepanel = params.activepanel : null;
      // Menus
      params.menuabout ? sorted.menuabout = params.menuabout : null;
      params.menulegend ? sorted.menulegend = params.menulegend : null;
      params.menulayers ? sorted.menulayers = params.menulayers : null;
      params.menubasemaps ? sorted.menubasemaps = params.menubasemaps : null;
      params.menuslides ? sorted.menuslides = params.menuslides : null;
      params.menubookmarks ? sorted.menubookmarks = params.menubookmarks : null;
      params.menuprint ? sorted.menuprint = params.menuprint : null;
      params.menushare ? sorted.menushare = params.menushare : null;
      params.menutogglenav ? sorted.menutogglenav = params.menutogglenav : null;
      params.menustyledrawer ? sorted.menustyledrawer = params.menustyledrawer : null;
      // Layout
      params.layout ? sorted.layout = params.layout : null;
      params.panelslayout ? sorted.panelslayout = params.panelslayout : null;
      params.widgetslayout ? sorted.widgetslayout = params.widgetslayout : null;
      // Popup
      params.popup ? sorted.popup = params.popup : null;
      // Widgets
      params.zoom ? sorted.zoom = params.zoom : null;
      params.home ? sorted.home = params.home : null;
      params.compass ? sorted.compass = params.compass : null;
      params.navtoggle ? sorted.navtoggle = params.navtoggle : null;
      params.locate ? sorted.locate = params.locate : null;
      params.track ? sorted.track = params.track : null;
      params.search ? sorted.search = params.search : null;
      params.legend ? sorted.legend = params.legend : null;
      params.measure ? sorted.measure = params.measure : null;
      params.basemaptoggle ? sorted.basemaptoggle = params.basemaptoggle : null;
      params.nextbasemap ? sorted.nextbasemap = params.nextbasemap : null;
      params.mapcoords ? sorted.mapcoords = params.mapcoords : null;
      params.searchnav ? sorted.searchnav = params.searchnav : null;
      params.searchtext ? sorted.searchtext = params.searchtext : null;
      // Other
      params.findplaces ? sorted.findplaces = params.findplaces : null;

      return sorted;
    },

    // JSON conversion

    _paramStringToJSON: function(paramString) {
      // var search = location.search;
      var result = {};
      if (paramString) {
        var pairs = paramString.slice(0).split('&');
        pairs.forEach(function(pair) {
          pair = pair.split('=');
          result[pair[0]] = decodeURIComponent(pair[1] || '');
        });
      }
      return JSON.parse(JSON.stringify(result));
    },

    _jsonToParamString: function(obj) {
      var str = "";
      var seperator = "";
      for (key in obj) {
        str += seperator;
        str += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
        seperator = "&";
      }
      return str;
    }

  })
});

