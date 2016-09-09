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

  "application/style/Styler",
  "application/ui/HtmlBuilder",
  "application/ui/Framework",
  "application/view/ViewManager",
  "application/base/reporterror",

  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/query",

  "dojo/i18n!./nls/resources",
  "dojo/_base/lang",
  "dojo/_base/declare",

  // Bootstrap
  "bootstrap/Collapse",
  "bootstrap/Dropdown",
  "bootstrap/Tab",
  "bootstrap/Alert",
  "bootstrap/Carousel",
  "bootstrap/Tooltip",

  // Calcite Maps
  "calcite-maps/calcitemaps-v0.2",

  "domReady!"

], function (
  Styler, HtmlBuilder, Framework, ViewManager, Err,
  dom, domClass, domAttr, query,
  i18n,
  lang,
  declare
) {

  //--------------------------------------------------------------------------
  //
  //  Static Variables
  //
  //--------------------------------------------------------------------------

  var VIEW_TIMEOUT = 10000;

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function () {},

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _boilerplate: null,

    _appStyle: null,

    _appUI: null,

    _appViewManager: null,

    //--------------------------------------------------------------------------
    //
    //  Public Members
    //
    //--------------------------------------------------------------------------

    init: function (boilerplate) {
      if (boilerplate) {

        this._boilerplate = boilerplate;

        // Get the webmap or webscene item
        var webItem = this._getWebItem();
        if (!webItem) {
          var errorInfo = this._getWebItemErrorInfo(webItem);
          Err.show(Err.name.error, `${errorInfo.type} could not be created for: ${errorInfo.id}`);
          return;
        }

        // Set document properties
        this._setDocumentProperties(webItem);

        // Set theme, layout and widget styles
        this._appStyle = new Styler(boilerplate);
        this._appStyle.setStyles();
        
        // Set app html
        this._appUI = new HtmlBuilder(boilerplate, webItem, i18n);
        this._appUI.setBaseHtml();

        var viewOptions = this._getViewOptions(webItem);

        // Create the view
        this._appViewManager = new ViewManager(this._boilerplate);
        this._appViewManager.createView(webItem, viewOptions).then(function(viewProps) {

          // Create the remaining app
          this._initApp(viewProps);

        }.bind(this), function(error) {
          if (!error) {
            var errorInfo = this._getWebItemErrorInfo(webItem);
            error = `View could not be created for item: ${errorInfo.id}`;
          }
          Err.show(Err.name.error, error);
        }.bind(this));

      } else {
        Err.show(Err.name.error, "Boilerplate is not defined");
      }
    },

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _initApp: function(viewProps) {

      var view = viewProps.view;

      // Create widgets
      this._appViewManager.createMapWidgets();
      this._appViewManager.createAppWidgets();
 
      // Set app ui
      this._appUI.setViewProperties(viewProps);
      this._appUI.setViewPanelsHtml();
      this._appUI.setTooltips();
           
      // Set panel, menu and popup events
      var appFramework = new Framework(view);
      appFramework.setEvents();

      // Remove loading message
      view.then(function() {
        this._removeLoading();
      }.bind(this))
      .otherwise(function(err) {
        Err.reportError(Err.name.error, err);
      }.bind(this))
      .always(function() {
        setTimeout(this._removeLoading, VIEW_TIMEOUT);
      }.bind(this));
    },

    _getWebItem: function() {
      var boilerplateResults = this._boilerplate.results;
      var item = null;
      if (boilerplateResults.webMapItem && 
        boilerplateResults.webMapItem.data && 
        boilerplateResults.webMapItem.data.type === "Web Map") {
        item = boilerplateResults.webMapItem;
      } else if (boilerplateResults.webSceneItem && 
        boilerplateResults.webSceneItem.data && 
        boilerplateResults.webSceneItem.data.type === "Web Scene") {
        item = boilerplateResults.webSceneItem;
      }
      return item;
    },

    _getWebItemErrorInfo: function() {
      var boilerplate = this._boilerplate;
      var errorInfo = {
        id: "NULL", 
        type: "Web Map or Web Scene"
      };
      if (boilerplate.config.webmap) {
        errorInfo.id = boilerplate.config.webmap;
        errorInfo.type = "Web Map";
      } else if (boilerplate.config.webscene) {
        errorInfo.id = boilerplate.config.webscene;
        errorInfo.type = "Web Scene";
      } else if (boilerplate.config.appid) {
        errorInfo.id = boilerplate.config.appid;
        errorInfo.type = "Web App";
      }
      return errorInfo;
    },

    _setDocumentProperties: function(webItem) {
        this._setDocumentLocale();
        this._updateConfigTitle();
        this._setDocumentTitle();
    },

    _setDocumentLocale: function() {
      document.documentElement.lang = this._boilerplate.locale;
      var dirNode = document.getElementsByTagName("html")[0];
      domAttr.set(dirNode, "dir", this._boilerplate.direction);        
    },

    _updateConfigTitle: function() {
      var title = this._boilerplate.config.title;
      var portalItem = this._getWebItem();
      if (!title && portalItem && portalItem.data.title) {
        this._boilerplate.config.title = portalItem.data.title;
      }
    },

    _setDocumentTitle: function() {
      document.title = this._boilerplate.config.title;
    },

    _getViewOptions: function(webItem) {
      var containerId;
      if (webItem.data.type === "Web Map") {
        containerId = this._boilerplate.settings.webmap.containerId;
      } else {
        containerId = this._boilerplate.settings.webscene.containerId
      }
      var padding = this._appStyle.padding.viewPadding;
      var uiPadding = this._appStyle.padding.uiPadding;
      var options = {
        container: containerId,
        padding: padding,
        ui: {
          padding: uiPadding
        }
      }
      return options;
    },

    _removeLoading: function() {
      domClass.remove(document.body, Err.CSS.loading);
    }

  });
});