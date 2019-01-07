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

  "ApplicationBase/support/itemUtils",

  "application/ui/AppStyler",
  "application/ui/AppHtml",
  "application/view/ViewManager",
  "application/base/message",

  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/query",

  "dojo/i18n!./nls/resources",
  "dojo/_base/lang",
  "dojo/_base/declare",

  // Calcite Maps
  "calcite-maps/calcitemaps-v0.10",

  // Bootstrap
  "bootstrap/Collapse",
  "bootstrap/Dropdown",
  "bootstrap/Tab",
  "bootstrap/Alert",
  "bootstrap/Carousel",
  "bootstrap/Tooltip",

  "dojo/domReady!"

], function (
  itemUtils,
  AppStyler, AppHtml, ViewManager, Message,
  dom, domClass, domAttr, query,
  i18n,
  lang,
  declare,
  calciteMaps
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

      constructor: function () {

        calciteMaps.stickyDropdownDesktop = false;

      },

      //--------------------------------------------------------------------------
      //
      //  Variables
      //
      //--------------------------------------------------------------------------

      _boilerplate: null,

      _appStyler: null,

      _appHtml: null,

      _appViewManager: null,

      _appFramework: null,

      _appState: null,

      _showErrors: false,

      _webItem: null,

      //--------------------------------------------------------------------------
      //
      //  Public Members
      //
      //--------------------------------------------------------------------------

      init: function (boilerplate) {
        if (boilerplate) {
          this._boilerplate = boilerplate;
          this._showErrors = boilerplate.config.showerrors;
          // Get the webmap or webscene portal item
          var webItem = this._getWebItem();
          this._webItem = webItem;
          if (webItem) {
            try {
              // Document language, direction and title
              this._setDocumentProperties(webItem);
              // Theme, layout and widget styles
              this._setStyles(boilerplate);
              // Page content (that doesn't need the view)
              this._setHtml(boilerplate, webItem, i18n);
              // Create map or scene view, widgets and rest of app
              this._createView(boilerplate, webItem, i18n);
            } catch(err) {
              console.error(err);
            }
          } else {
            var errMsg = this._getWebItemErrorMessage(webItem);
            Message.show(Message.type.error, new Error(errMsg), true, this._showErrors);
          }
        } else {
          Message.show(Message.type.error, new Error("Boilerplate is not defined"), true, this._showErrors);
        }
      },

      //--------------------------------------------------------------------------
      //
      //  Private Methods
      //
      //--------------------------------------------------------------------------

      _setStyles: function(boilerplate) {
        this._appStyler = new AppStyler(boilerplate);
        this._appStyler.setThemeStyles();
        this._appStyler.setWidgetStyle();
        this._appStyler.setMenuStyle();
        this._appStyler.setLayoutStyles();
      },

      _setHtml: function(boilerplate, webItem, i18n) {
        this._appHtml = new AppHtml(boilerplate, webItem, i18n);
        this._appHtml.setNavbarHtml();
        this._appHtml.setMenusHtml();
        this._appHtml.setPanelsHtml();
        this._appHtml.setWidgetsVisible();
        this._appHtml.setActivePanelVisible();
      },

      _createView: function(boilerplate, webItem, i18n) {
        // View options
        var options = {
          container: this._getContainerId(webItem),
          padding: this._appStyler.layout.padding.viewPadding,
          ui: {
            padding: this._appStyler.layout.padding.uiPadding
          }
        }
        // Create a view manager
        this._appViewManager = new ViewManager(boilerplate, i18n);
        this._appViewManager.createViewFromItem(webItem, options)
          .then(function(results) {
            var view = results.view;
            var webMap = results.webMap;
            var webScene = results.webScene;
            // Set Widgets from config params
            this._appViewManager.setScroll();
            this._appViewManager.createMapWidgets();
            this._appViewManager.createAppWidgets();
            this._appViewManager.setPopupPosition();
            this._appViewManager.setWidgetExtensions();
            this._appViewManager.setShare();
            // Set view from config params
            this._appViewManager.setViewpointAll();
            // Create html that requires the view...
            this._appHtml.createViewPanelsHtml(view, webMap || webScene);
            this._appHtml.showValidMenusOnly(view);
            this._appHtml.setCustomCSS();
          }.bind(this))
          .otherwise(function(error) { // Create view failed
            Message.show(Message.type.error, error, true, this._showErrors);
          }.bind(this))
          .always(function() {
            Message.removeLoading();
          });
      },

      _getAppData: function() {
        var appData = this._boilerplate.results.applicationData;
        var data;
        if (appData && appData.value) {
          data = appData.value.values;
        }
        return data;
      },

      _getWebItem: function() {
        var results = this._boilerplate.results;
        var error = results.applicationItem.error;
        var webItem = null;
        var webItems = null;
        if (results.webMapItems.length) {
          webItems = results.webMapItems;
        } else if (results.webSceneItems.length) {
          webItems = results.webSceneItems;
        }
        // var webItems = results.webMapItems || results.webSceneItems;
        if (webItems.length > 0 && !error) {
          var validWebMapItems = webItems.map(function (response) {
            return response.value;
          });
          if (validWebMapItems.length > 0) {
            webItem = validWebMapItems[0];
          }
        }
        return webItem;
      },

      _getContainerId: function(webItem) {
        if (webItem.type === "Web Map") {
          return this._boilerplate.settings.webMap.container;
        } else {
          return this._boilerplate.settings.webScene.container
        }
      },

      _getWebItemErrorMessage: function() {
        var boilerplate = this._boilerplate;
        var msg;
        if (boilerplate.config.webmap) {
          msg = "Web Map could not be created for id: " + boilerplate.config.webmap;
        } else if (boilerplate.config.webscene) {
          msg = "Web Scene could not be created for id: " + boilerplate.config.webscene;
        } else if (boilerplate.config.appid) {
          msg = "Web Map or Web Scene could not be created for appid: " + boilerplate.config.appid + ". <br>Please ensure the value is set in the configuration panel and the items are accessible.";
        } else {
          msg = "Web App, Web Map or Web Scene missing or inaccessible";
        }
        return msg;
      },

      _setDocumentProperties: function() {
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
        var userTitle = this._boilerplate.config.title;
        if (!userTitle && this._webItem.title) {
          this._boilerplate.config.title = this._webItem.title;
        }
      },

      _setDocumentTitle: function() {
        document.title = this._boilerplate.config.title;
      }

    });

  });
