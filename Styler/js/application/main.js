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
  "application/ViewManager",

  "esri/core/Accessor",
  "esri/core/Evented",
  "esri/core/watchUtils",

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

  // Calcite Maps
  "calcite-maps/calcitemaps-v0.2"
], function (
  ThemeManager, ViewManager,
  watchUtils, Accessor, Evented,
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

  // Test only 
  //styler = null;

  var CSS = {
    loading: "boilerplate--loading",
    error: "boilerplate--error",
    errorIcon: "esri-icon-notice-round"
  };

  var CSS_SELECTORS = {
    navbar: ".calcite-navbar",
    mainTitle: ".calcite-title-main",
    subTitle: ".calcite-title-sub",
    titleDivider: ".calcite-title-divider",
    mainMenu: ".calcite-dropdown",
    aboutMenu: "#menuAbout",
    aboutPanel: "#panelAbout",
    aboutPanelText: "#panelAbout .panel-body",
    basemapsPanel: "#panelBasemaps",
    legendPanel: "#panelLegend",
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
      //styler = this;
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

        //-----------------------------------------------------------------------
        // Configure the document
        //-----------------------------------------------------------------------

        // Document
        this._setDocumentLocale(boilerplate.direction, boilerplate.locale);
        this._setDocumentTitle(boilerplate.config.title);

        //-----------------------------------------------------------------------
        // Configure the app
        //-----------------------------------------------------------------------

        // Theme
        var calciteTheme = new ThemeManager();
        this._theme = calciteTheme;
        calciteTheme.setTheme(boilerplate.config.themeInfo);
        calciteTheme.setWidgetTheme(boilerplate.config.widgettheme);
        calciteTheme.setLayout(boilerplate.config.layoutInfo);

        var paddingOptions = calciteTheme.getPadding();

        // Title
        this._setTitleText(boilerplate.config.title);
        this._setSubTitleText(boilerplate.config.subtitle);

        //-----------------------------------------------------------------------
        // Configure the view (map or scene) and set up the remaining app ui
        //-----------------------------------------------------------------------

        // View
        var viewManager = new ViewManager();
        this._viewManager = viewManager;

        viewManager.createView(boilerplate, paddingOptions).then(function(view) {
          // Set view
          this._activeView = view;
          
          // Nav
          this._showNavbar(true);
          // Widgets
          this._createWidgets();
          this._setWidgetEvents();
          this._showSearch(boilerplate.config.search);
          // Panels
          this._setAboutPanel(boilerplate.config);
          // Events
          this._setViewEvents();
          this._setPanelEvents();
          this._setBasemapEvents();
          this._setPopupEvents(); 

          // Finished loading app...
          view.then(function() {
            this._removeLoading();
            // Do other things here if we need to wait for the view.ready...
          }.bind(this), function(error) {
            this.reportError(error);
          }.bind(this));
        }.bind(this), function(error) {
          this.reportError(error);
        }.bind(this));
      } else {
        this.reportError(new Error("main:: Boilerplate is not defined"));
      }
    },

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

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    // Update config.json

    _updateConfigTitle: function(boilerplate) {
      // Set title if no title was provided
      var portalItem = boilerplate.results.webmapItem || boilerplate.results.websceneItem;
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

    // Nav

    _showNavbar: function(visible) {
      if (visible) {
        query(CSS_SELECTORS.navbar).removeClass("hidden");
      } else {
        query(CSS_SELECTORS.navbar).addClass("hidden");
      }
    },

    // Widgets

    _showSearch: function(visible) {
      if (!visible) {
        query(CSS_SELECTORS.searchContainer).addClass("hidden");
      }
    },

    // Panels

    _setAboutPanel: function(config) {
      var aboutText = config.about;
      var showAboutStart = config.showabout;
      if (aboutText) {
        query(CSS_SELECTORS.aboutPanelText)[0].innerHTML = aboutText;
        query(CSS_SELECTORS.aboutMenu).removeClass("hidden");
        query(CSS_SELECTORS.aboutPanel).removeClass("hidden");
        if (showAboutStart) {
          query(CSS_SELECTORS.aboutPanel + ", " + CSS_SELECTORS.aboutPanel + " .panel-collapse").addClass("in");
        }
      }

    },

    _setAboutPanelText: function(about) {
      query(CSS_SELECTORS.aboutPanelText)[0].innerHTML = about;
    },


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
          if (e.target.value) {
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

    _createWidgets: function() {
      var activeView = this._activeView;
      if (activeView) {
        this._searchWidget = this._viewManager.createSearchWidget("searchDiv", {view: activeView});
        this._legendWidget = this._viewManager.createLegendWidget("legendDiv", {view: activeView});        
      }
    },

    _setWidgetEvents: function() {
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
    },

    // Loading

    _removeLoading: function() {
      domClass.remove(document.body, CSS.loading);
    }

  });
});