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

  "application/StyleManager",

  "boilerplate/ItemHelper",

  "esri/core/Accessor",
  "esri/core/Evented",
  "esri/core/watchUtils",

  "esri/layers/UnsupportedLayer",
  "esri/layers/UnknownLayer",

  "esri/widgets/Zoom",
  "esri/widgets/Attribution",
  "esri/widgets/Compass",
  "esri/widgets/Home",  
  "esri/widgets/Search",
  "esri/widgets/Legend",
  "esri/widgets/BasemapToggle",

  "esri/views/ui/Component",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",

  "dojo/i18n!./nls/resources",
  "dojo/_base/lang",
  "dojo/_base/declare",

  // Bootstrap
  "bootstrap/Collapse",
  "bootstrap/Dropdown",
  "bootstrap/Tab",
  "bootstrap/Alert",

  // Calcite Maps
  "calcite-maps/calcitemaps-v0.2"
], function (
  StyleManager,
  ItemHelper,

  Accessor, Evented, watchUtils,
  UnsupportedLayer, UnknownLayer,

  Zoom, Attribution, Compass, Home, Search, Legend, BasemapToggle,
  Component,

  dom, domAttr, domClass, query,
  i18n,
  lang,
  declare
) {

  //--------------------------------------------------------------------------
  //
  //  Static Variables
  //
  //--------------------------------------------------------------------------

  var CSS = {
    loading: "boilerplate--loading",
    error: "boilerplate--error",
    errorIcon: "esri-icon-notice-round"
  };

  var CSS_SELECTORS = {
    navbar: ".calcite-navbar",
    title: ".calcite-title",
    mainTitle: ".calcite-title-main",
    subTitle: ".calcite-title-sub",
    titleDivider: ".calcite-title-divider",

    mainMenu: ".calcite-dropdown",
    menuTitle: ".calcite-dropdown-toggle > span",
    menuAbout: "#menuAbout",
    menuLegend: "#menuLegend",
    menuBasemaps: "#menuBasemaps",
    menuToggleNav: "#menuToggleNav",

    dropdownMenu: ".calcite-dropdown .dropdown-menu",

    panelAbout: "#panelAbout",
    panelAboutText: "#panelAbout .panel-body",
    panelLegend: "#panelLegend",
    panelBasemaps: "#panelBasemaps",
    
    searchContainer: ".calcite-navbar-search"
  };

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function () {
      // Test only
      styler = this;
    },

    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    _theme: null,

    _viewManager: null,

    _activeView: null,

    _searchWidget: null,

    _legendWidget: null,

    _screenWidth: null,

    _defaultWidgetComponents: ["attribution"],

    _removeLoadingTimeout: 15000, 

    _errorTitle: {
      warning: "Warning"
    },

    _errorMessage: {
      general: "We apologize but your webmap could not be fully loaded. You can still use your application however except some layers and functionality might not be available. Please stay tuned as <a href='https://developers.arcgis.com/javascript/latest/guide/migrating/index.html'>full support</a> for webmaps with the <a href='https://developers.arcgis.com/javascript/'>ArcGIS API for Javascript 4</a> is coming soon!",
      layerUnsupported: "Layer unsupported",
      layerUnknown: "Layer unknown",
      layerLoadFailed: "Layer failed to load"
    },

    _showConsoleErrors: true,

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    init: function (boilerplate) {
      if (boilerplate) {

        //-----------------------------------------------------------------------
        // Update config (appSettings.json) with user settings (url params)
        //-----------------------------------------------------------------------

        this._updateConfigTitle(boilerplate);
        this._updateConfigThemeInfo(boilerplate);
        this._updateConfigLayoutInfo(boilerplate);
        this._updateConfigWidgets(boilerplate);

        //-----------------------------------------------------------------------
        // Configure the document
        //-----------------------------------------------------------------------

        // Document
        this._setDocumentLocale(boilerplate.direction, boilerplate.locale);
        this._setDocumentTitle(boilerplate.config.title);

        // Title
        this._setTitleText(boilerplate.config.title);
        this._setSubTitleText(boilerplate.config.subtitle);

        // Menu
        this._setMenusTitleText(i18n);

        // Panels
        this._setPanelsTitleText(i18n);
        this._setBasemapPanelText(i18n);
        //this._setMenusVisible(boilerplate);
        this._setMainMenuStyle(boilerplate);

        //-----------------------------------------------------------------------
        // Apply the app theme
        //-----------------------------------------------------------------------

        // Theme
        var calciteTheme = new StyleManager();
        this._theme = calciteTheme;
        calciteTheme.setTheme(boilerplate.config.themeInfo);
        calciteTheme.setWidgetTheme(boilerplate.config.widgettheme);
        calciteTheme.setLayout(boilerplate.config.layoutInfo);

        var itemHelper = new ItemHelper();

        var deferredWebMap = null;
        var container = null;

        //-----------------------------------------------------------------------
        // Get the webmap or webscene
        //-----------------------------------------------------------------------

        if (boilerplate.results.webMapItem) {
          container = boilerplate.settings.webmap.containerId;
          deferredWebMap = itemHelper.createWebMap(boilerplate.results.webMapItem);
        } else if (boilerplate.results.webSceneItem) {
          container = boilerplate.settings.webscene.containerId;
          deferredWebMap = itemHelper.createWebScene(boilerplate.results.webSceneItem);
        } else {
          this.reportError(new Error("main:: WebMapItem or WebSceneItem could not be created from data or item."));
          return;
        }

        //-----------------------------------------------------------------------
        // Create the view (map or scene) and widgets
        //-----------------------------------------------------------------------

        if (deferredWebMap) {
          deferredWebMap.then(function(results) {   

            // Check layer support
            this._showLoadErrors(results.webMapOrWebScene);

            // View options
            var paddingOptions = this._theme.getPadding();

            var viewOptions = {
              map: results.webMapOrWebScene,
              container: container,
              padding: paddingOptions.padding,
              ui: {
                components: this._defaultWidgetComponents,
                padding: paddingOptions.ui.padding
              }
            }
            
            // Create the view
            var view = new results.View(viewOptions);

            view.then(function(results) {
              this._removeLoading();
              // Do more stuff here if necessary...
            }.bind(this), function(error) {
              this.reportError(new Error("main:: Error loading view for this webmap or webscene: " + error));
            }.bind(this));

            // view.always(function() {
            //   window.setTimeout(this._removeLoading(), this._removeLoadingTimeout);
            // }.bind(this));

            this._activeView = view;

            // Widgets
            this._createMapWidgets(boilerplate.config.view.ui);
            this._setMapWidgetEvents();
            this._createAppWidgets();
            this._showSearchWidget(boilerplate.config.widgetsearch);

            // About panel
            this._updateConfigAboutText(boilerplate, results.webMapOrWebScene);
            this._setAboutPanelText(boilerplate.config.abouttext);
            
            // Menus (requires about text set!)
            this._setMenusVisible(boilerplate);

            // Nav and panels
            this._showNavbar(true);
            this._showAboutPanel(boilerplate.config);

            // Events
            this._setViewEvents();
            this._setPanelEvents();
            this._setBasemapEvents();
            this._setPopupEvents(); 

          }.bind(this), function(error) {
            this.reportError(error);  
          }.bind(this));
        } else {
          this.reportError(new Error("main:: Webmap or webscene could not be created for this item."));
        }
      } else {
        this.reportError(new Error("main:: Boilerplate is not defined"));
      }
    },

    //--------------------------------------------------------------------------
    //
    //  Error handling
    //
    //--------------------------------------------------------------------------

    reportError: function (error) {
      // remove loading class from body
      //domClass.remove(document.body, CSS.loading);
      this._removeLoading();
      domClass.add(document.body, CSS.error);
      // an error occurred - notify the user. In this example we pull the string from the
      // resource.js file located in the nls folder because we've set the application up
      // for localization. If you don't need to support multiple languages you can hardcode the
      // strings here and comment out the call in index.html to get the localization strings.
      // set message
      var node = dom.byId("loading_message");
      if (node) {
        node.innerHTML = "<h1><span class=\"" + CSS.errorIcon + "\"></span> " + i18n.error + "</h1><p>" + error.message + "</p>";
      }
      return error;
    },

    // Webmap layer check

    _showLoadErrors: function(webMapOrWebScene) {
      webMapOrWebScene.then(function(map) {
        map.allLayers.forEach(function(layer) {
          if (layer instanceof UnsupportedLayer) {
            var error = this._errorMessage.layerUnsupported + ": " + layer.title;
            this._showError(this._errorTitle.warning, error, err);
          }

          if (layer instanceof UnknownLayer) {
            var error = this._errorMessage.layerUnknown + ": " + layer.title;
            this._showError(this._errorTitle.warning, error, err);
          }
                    
          layer.watch("loadStatus", function(err) {
            if (err === "failed") {
              var error = this._errorMessage.layerLoadFailed + ": " + layer.title;
              this._showError(this._errorTitle.warning, error, err);
            }
          }.bind(this));

          // layer.watch("loadError", function(err) {
          //   if (err) {
          //     var error = "Layer Load Error: " + layer.title;
          //     this._showError(error, error + " " + err);
          //   }
          // }.bind(this));

        }.bind(this));
      }.bind(this));
    },

    _showError: function(errorTitle, errorMessage, error) {
      if (error) {
        var node = dom.byId("calciteErrorMessage");
        if (node) {
          node.innerHTML = "<strong>" + this._errorTitle.warning + "</strong>" + ": " + this._errorMessage.general;
          // Use this if you want to accumulate messages...
          // if (node.innerHTML) {
          //   node.innerHTML = node.innerHTML + "<br>" + error ;
          // } else {
          //   node.innerHTML = "<strong>" + this._errorTitle + "</strong>" + this._errorLoadingWebmapMsg + "<br><br>";
          //   node.innerHTML = node.innerHTML + error;
          // }
          query(".calcite-alert").removeClass("hidden");
        }        
      }
      if (this._showConsoleErrors){
        console.log(errorTitle + ": " + errorMessage + " - " + error);
      }
    },

    // Loading

    _removeLoading: function() {
      domClass.remove(document.body, CSS.loading);
    },

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    // Update config.json

    _updateConfigTitle: function(boilerplate) {
      // Set title if no title was provided
      var portalItem = boilerplate.results.webMapItem || boilerplate.results.webSceneItem;
      if (!boilerplate.config.title && portalItem && portalItem.data.title) {
        boilerplate.config.title = portalItem.data.title;
      }
    },

    _updateConfigThemeInfo: function(boilerplate) {
      // Name
      boilerplate.config.themeInfo.name = boilerplate.config.theme || boilerplate.config.themeInfo.name;
      // Background style (required?)
      if (boilerplate.config.theme) {
        boilerplate.config.themeInfo.bgStyle =  "calcite-bg-" + boilerplate.config.theme;
      }
      // Text style override
      if (boilerplate.config.textcolor) {
        boilerplate.config.themeInfo.textStyle =  "calcite-text-" + boilerplate.config.textcolor;
      }
      // Bg color override (just nav or all)
      boilerplate.config.themeInfo.bgColor = boilerplate.config.bgcolor || boilerplate.config.themeInfo.bgColor;
      boilerplate.config.themeInfo.opacity = boilerplate.config.opacity || boilerplate.config.themeInfo.opacity;
      // Apply to entire app
      boilerplate.config.themeInfo.all = boilerplate.config.all || boilerplate.config.themeInfo.all;
    },

    _updateConfigLayoutInfo: function(boilerplate) {
      // Name
      if (boilerplate.config.layout) {
        if (boilerplate.config.navsize === "larger") {
           boilerplate.config.layoutInfo.name = boilerplate.config.layout + "-medium";
        } else {
          boilerplate.config.layoutInfo.name = boilerplate.config.layout
        }
      }
    },

    _updateConfigWidgets: function(boilerplate) {
      var showBasemaptoggle = boilerplate.config.widgetbasemaptoggle;
      var nextBasemap = boilerplate.config.nextbasemap;
      var components = boilerplate.config.view.ui.components;
      for (var i = 0; i < components.length; i++) {
        if (components[i].name === "basemaptoggle") {
          components[i].visible = showBasemaptoggle === false ? false : true;
          components[i].nextBasemap = nextBasemap || components[i].nextBasemap;
        }
      }
    },

    // Document

    _setDocumentLocale: function(locale, direction) {
      // Language
      document.documentElement.lang = locale;
      // Direction
      var dirNode = document.getElementsByTagName("html")[0];
      domAttr.set(dirNode, "dir", direction);
    },

    _setDocumentTitle: function(title) {
      document.title = title;
    },

    // Title

    _setTitleText: function(title) {
      query(CSS_SELECTORS.mainTitle)[0].innerHTML = title;
    },

    _setSubTitleText: function(subtitle) {
      if (subtitle) {
        query(CSS_SELECTORS.titleDivider).removeClass("hidden");
        query(CSS_SELECTORS.subTitle)[0].innerHTML = subtitle;
      }
    },

    // Menu

    _setMainMenuStyle: function(boilerplate) {
      if (boilerplate.config.menustyledrawer) {
        query(CSS_SELECTORS.dropdownMenu).addClass("calcite-menu-drawer");
      } else {
        query(CSS_SELECTORS.dropdownMenu).removeClass("calcite-menu-drawer");
      }
    },

    _setMenusTitleText: function(i18n) {
      query(CSS_SELECTORS.menuTitle)[0].innerHTML = i18n.menu.title;
      query(CSS_SELECTORS.menuAbout + " a")[0].innerHTML = query(CSS_SELECTORS.menuAbout + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.about;
      query(CSS_SELECTORS.menuLegend + " a")[0].innerHTML = query(CSS_SELECTORS.menuLegend + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.legend;
      query(CSS_SELECTORS.menuBasemaps + " a")[0].innerHTML = query(CSS_SELECTORS.menuBasemaps + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.basemaps;
      query(CSS_SELECTORS.menuToggleNav + " a")[0].innerHTML = query(CSS_SELECTORS.menuToggleNav + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.toggleNav;
    },

    // Panels

    _setPanelsTitleText: function(i18n) {
      query("#panelAbout .panel-label")[0].innerHTML = i18n.menu.items.about;
      query("#panelLegend .panel-label")[0].innerHTML = i18n.menu.items.legend;
      query("#panelBasemaps .panel-label")[0].innerHTML = i18n.menu.items.basemaps;
    },

    _setMenusVisible: function(boilerplate) {
      // Remove main menu if no menus visible
      if (boilerplate.config.menuabout === false && boilerplate.config.menulegend === false && boilerplate.config.menubasemaps === false && boilerplate.config.menutogglenav === false) {
        query(CSS_SELECTORS.mainMenu).addClass("hidden");
        query(CSS_SELECTORS.title).addClass("calcite-title-left-margin");
      } else { // Hide menus, default is visible
        if (boilerplate.config.menuabout === false || !boilerplate.config.abouttext) {
          query(CSS_SELECTORS.menuAbout).addClass("hidden");
        }
        if (boilerplate.config.menulegend === false) {
          query(CSS_SELECTORS.menuLegend).addClass("hidden");
        }
        if (boilerplate.config.menubasemaps === false) {
          query(CSS_SELECTORS.menuBasemaps).addClass("hidden");
        }
        if (boilerplate.config.menutogglenav === false) {
          query(CSS_SELECTORS.menuToggleNav).addClass("hidden");
        }
      }
    },

    // Basemaps

    _setBasemapPanelText: function(i18n) {
      query("#selectBasemapPanel [data-vector=select]")[0].innerHTML = "--- " + i18n.basemaps.select + " ---";
      query("#selectBasemapPanel [data-vector=streets-vector]")[0].innerHTML = i18n.basemaps.streets;
      query("#selectBasemapPanel [data-vector=satellite]")[0].innerHTML = i18n.basemaps.satellite;
      query("#selectBasemapPanel [data-vector=hybrid]")[0].innerHTML = i18n.basemaps.hybrid;
      query("#selectBasemapPanel [data-vector=national-geographic]")[0].innerHTML = i18n.basemaps.nationalgeographic;
      query("#selectBasemapPanel [data-vector=topo-vector]")[0].innerHTML = i18n.basemaps.topographic;
      query("#selectBasemapPanel [data-vector=oceans]")[0].innerHTML = i18n.basemaps.oceans;
      query("#selectBasemapPanel [data-vector=gray-vector]")[0].innerHTML = i18n.basemaps.gray;
      query("#selectBasemapPanel [data-vector=dark-gray-vector]")[0].innerHTML = i18n.basemaps.darkgray;
      query("#selectBasemapPanel [data-vector=osm]")[0].innerHTML = i18n.basemaps.osm;
      query("#selectBasemapPanel [data-vector=streets-night-vector]")[0].innerHTML = i18n.basemaps.streetsnight;
      query("#selectBasemapPanel [data-vector=streets-navigation-vector]")[0].innerHTML = i18n.basemaps.streetsmobile;
      query("#selectBasemapPanel [data-vector=streets-relief-vector]")[0].innerHTML = i18n.basemaps.streetsrelief;
    },

    // Nav

    _showNavbar: function(visible) {
      if (visible) {
        query(CSS_SELECTORS.navbar).removeClass("hidden");
      } else {
        query(CSS_SELECTORS.navbar).addClass("hidden");
      }
    },

    // Widgets

    _showSearchWidget: function(visible) {
      if (visible === false) {
        query(CSS_SELECTORS.searchContainer).addClass("hidden");
      }
    },

    // Panels

    _updateConfigAboutText: function(boilerplate, webMapOrWebScene) {
      if (boilerplate && webMapOrWebScene.portalItem) {
        var aboutText  = boilerplate.config.abouttext;
        var addDesc = boilerplate.config.showdescription;
        var addSummary = boilerplate.config.showsummary;
        var summaryText = null;
        var descriptionText = null;
        
        if (addDesc || addSummary) {
          descriptionText = webMapOrWebScene.portalItem.description;
          summaryText =  webMapOrWebScene.portalItem.snippet;
        }
        // Summary text
        if (addSummary && summaryText) {
          if (aboutText) {
            aboutText = aboutText + "<br>" +  summaryText;
          } else {
            aboutText = summaryText;
          }
        }
        // Description text
        if (addDesc && descriptionText) {
          if (aboutText) {
            aboutText = aboutText + "<br>" +  descriptionText;
          } else {
            aboutText = descriptionText;
          }
        }
        if (aboutText) {
          boilerplate.config.abouttext = aboutText;
        }
      }
    },

    _setAboutPanelText: function(aboutText) {
      if (aboutText) {
        query(CSS_SELECTORS.panelAboutText)[0].innerHTML = aboutText;
      }
    },

    _showAboutPanel: function(config) {
      var showAbout = config.showabout;
      var menuAbout = config.menuabout;
      var aboutText = config.abouttext;
      if (!aboutText) {
        query(CSS_SELECTORS.menuAbout).addClass("hidden");
        query(CSS_SELECTORS.panelAbout).addClass("hidden");
      } else if (showAbout && menuAbout !== false) {
        query(CSS_SELECTORS.panelAbout + ", " + CSS_SELECTORS.panelAbout + " .panel-collapse").addClass("in");
      }
    },

    // View

    // View Events

    _setViewEvents: function() {
      var activeView = this._activeView;
      if (activeView) {
        // Views - Listen to view size changes to show/hide panels
        activeView.watch("size", lang.hitch(this, this._viewSizeChange));
        // Popups - Listen to popup changes to show/hide panels
        activeView.popup.watch(["visible", "currentDockPosition"], lang.hitch(this, this._setPanelVisibility));
      }
    },

    _viewSizeChange: function (screenSize) {
      if (this.screenWidth !== screenSize[0]) {
        this.screenWidth = screenSize[0];
        this._setPanelVisibility();
      }
    },

    // Panels - Show/hide the panel when popup is docked

    _setPanelVisibility: function() {
      var activeView = this._activeView;
      if (activeView) {
        var isMobileScreen = activeView.widthBreakpoint === "xsmall" || activeView.widthBreakpoint === "small",
          isDockedVisible = activeView.popup.visible && activeView.popup.currentDockPosition,
          isDockedBottom = activeView.popup.currentDockPosition && activeView.popup.currentDockPosition.indexOf("bottom") > -1;
        // Mobile (xsmall/small)
        if (isMobileScreen) {
          if (isDockedVisible && isDockedBottom) {
            query(".calcite-panels").addClass("invisible");
          } else {
            query(".calcite-panels").removeClass("invisible");
          }
        } else { // Desktop (medium+)
          if (isDockedVisible) {
            query(".calcite-panels").addClass("invisible");
          } else {
            query(".calcite-panels").removeClass("invisible");          
          }
        }
      }
    },

    // Panels

    _setPanelEvents: function() {
      var activeView = this._activeView;
      if (activeView) {
        // Panels - Dock popup when panels show (desktop or mobile)
        query(".calcite-panels .panel").on("show.bs.collapse", lang.hitch(this, function(e) {
          if (activeView.popup.currentDockPosition || activeView.widthBreakpoint === "xsmall") {
            activeView.popup.dockEnabled = false;
          }
        }));
        // Panels - Undock popup when panels hide (mobile only)
        query(".calcite-panels .panel").on("hide.bs.collapse", lang.hitch(this, function(e) {
          if (activeView.widthBreakpoint === "xsmall") {
            activeView.popup.dockEnabled = true;
          }
        }));        
      }

    },

    _setBasemapEvents: function() {
      var activeView = this._activeView;
      if (activeView) {
        // Basemap events
        query("#selectBasemapPanel").on("change", lang.hitch(this, function(e) {
          if (e.target.value !== "select") {
            if (activeView.type === "2d") {
              activeView.map.basemap = e.target.options[e.target.selectedIndex].dataset.vector;
            } else {
              activeView.map.basemap = e.target.value;  
            }
          }
        }));          
      }
    },

    // Widgets

    _createMapWidgets: function(ui) {
      var view = this._activeView;
      if (view) {
        for (var i=0; i < ui.components.length; i++){
          if (ui.components[i].visible) {
            component = this._createComponent(view, ui.components[i]);
            view.ui.add(component, ui.components[i].position);
          }
        }
      }
    },

    _createComponent: function(view, componentInfo) {
      var component,
        widget = this._createWidget(view, componentInfo);
      component = new Component({
        node: widget, 
        id: componentInfo.name
      });
      return component;
    },

    _createWidget: function(view, componentInfo) {
      var widget,
        viewModel = {
          view: view
        }
      switch (componentInfo.name) {
        case "zoom":
          widget = new Zoom({
            viewModel: viewModel
          });
          break;
        case "home":
          widget = new Home({
            viewModel: viewModel
          });
          break;
        case "compass":
          widget = new Compass({
            viewModel: viewModel
          });
          break;
        case "locate":
          widget = new Locate({
            viewModel: viewModel
          });
          break;
        case "basemaptoggle":
          widget = new BasemapToggle({
            viewModel: viewModel,
            nextBasemap: componentInfo.nextBasemap
          });
          break;
        case "search":
          widget = new Search({
            viewModel: viewModel
          });
          break;
      }
      widget.visible = componentInfo.visible;
      widget.startup();

      return widget;
    },

    _createAppWidgets: function() {
      var activeView = this._activeView;
      if (activeView) {
        this._searchWidget = this._createSearchWidget("searchDiv", {view: activeView});
        this._legendWidget = this._createLegendWidget("legendDiv", {view: activeView});        
      }
    },

    _createSearchWidget: function(id, searchOptions) {
      var options =   {
        highlightEnabled: false,
        popupEnabled: true,
        showPopupOnSelect: true
      }
      lang.mixin(options, searchOptions);
      var search = new Search(options, id);
      search.startup();
      return search;
    },

    _createLegendWidget: function(id, legendOptions) {
      var options = {};
      lang.mixin(options, legendOptions);
      var legend = new Legend(options, id);
      legend.startup();
      return legend;
    },

    _setMapWidgetEvents: function() {
      this._setCompassEvents();
      this._setHomeEvents();
    },

    _setCompassEvents: function() {
      var activeView = this._activeView;
      if (activeView) {
        var compass = activeView.ui.find("compass");
        if (activeView.type === "2d") {
          activeView.watch("rotation", function(result) { //
            if (compass && activeView.viewpoint) {
              var visible = Math.round(result) !== 0;
              if (visible !== compass.widget.visible) {
                compass.widget.visible = visible; // TODO - fade in/out  
              }
            }
          });
        } else {
          activeView.watch("scale", function(result) { //
            if (compass && activeView.viewpoint) {
              var visible = Math.round(activeView.viewpoint.rotation) !== 0;
              if (visible !== compass.widget.visible) {
                compass.widget.visible = visible; // TODO - fade in/out  
              }
            }
          });
        }
      }
    },

    _setHomeEvents: function() {
      var activeView = this._activeView;
      if (activeView) {
        var home = activeView.ui.find("home").widget;
        home._state = {
          ready: false,
          clicked:false
        }
        
        function setHomeVisible(visible) {
          if (home._state.ready) {
            if (home._state.clicked) {
              home.visible = false;
              home._state.clicked = false;
            } else {
              if (home.visible !== visible) {
                home.visible = visible; // TODO - fade in/out
              }
            }
          }
        }
        
        home.viewModel.watch("state", function(result) {
          if (result === "going-home") {
            home._state.clicked = true;            
          }
        });

        function doneLoading(evt) {
          //console.log(evt + ": ready: " + activeView.ready + " | working: " + activeView.layerViewManager.factory.working + " | stationary: " + activeView.stationary + " | updating: " + activeView.updating);
          if (!activeView.layerViewManager.factory.working && activeView.stationary && !activeView.updating || activeView.interacting) {
            if (!home._state.ready) {
              home._state.ready = true;
              setHomeVisible(false);
            } else {
              setHomeVisible(true);
            }
          }
        }
        
        activeView.layerViewManager.factory.watch("working", function(newVal, oldVal) {
          doneLoading("LayerViewManager");
        });
        activeView.watch("stationary", function(newVal, oldVal) {
          doneLoading("Stationary");
        });
        activeView.watch("updating", function(newVal, oldVal) {
          doneLoading("Updating");
        });
        activeView.watch("interacting", function(newVal, oldVal) {
          doneLoading("interacting");
        });
      }
    },

    // Collapsible popup

    _setPopupEvents: function() {
      var activeView = this._activeView;
      query(".esri-popup .esri-title").on("click", lang.hitch(activeView, function(e){
        query(".esri-popup .esri-container").toggleClass("esri-popup-collapsed");
        activeView.popup.reposition();
      }));
    },

    // Menu

    _setMenuEvents: function() {
      query(".calcite-dropdown").on("hide.bs.dropdown", function () {
        query(".calcite-dropdown-toggle").removeClass("open");
      });
    }

  });
});