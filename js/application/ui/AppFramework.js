
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

  "esri/support/basemapDefinitions",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",
  "dojo/dom-construct",
  "dojo/_base/lang",

  "dojo/_base/declare",
], function (
  CALCITE_SELECTORS,
  basemapDefs,
  dom, domAttr, domClass, query, domConstruct, lang,
  declare
) {

  return declare(null, {

  	//--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (view) {

      this._activeView = view;

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _activeView: null,

    _screenWidth: null,

    //--------------------------------------------------------------------------
    //
    //  Public Members
    //
    //--------------------------------------------------------------------------

    setEvents: function() {
    	this._setViewEvents();
    	this._setPanelEvents();
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
        var isMobileScreen = activeView.widthBreakpoint === "xsmall" || activeView.widthBreakpoint === "small";
        var isDockedVisible = activeView.popup.visible && activeView.popup.currentDockPosition;
        var isDockedBottom = activeView.popup.currentDockPosition && activeView.popup.currentDockPosition.indexOf("bottom") > -1;
        var isCollision = this._isPanelPopupCollision();
        // Mobile (xsmall/small)
        if (isMobileScreen) {
          if (isDockedVisible && isDockedBottom) {
            query(CALCITE_SELECTORS.panels).addClass("invisible");
          } else {
            query(CALCITE_SELECTORS.panels).removeClass("invisible");
          }
        } else { // Desktop (medium+)
          if (isDockedVisible && isCollision) {
            query(CALCITE_SELECTORS.panels).addClass("invisible");
          } else {
            query(CALCITE_SELECTORS.panels).removeClass("invisible");          
          }
        }
      }
    },

    // Panels

    _setPanelEvents: function() {
      var activeView = this._activeView;
      if (activeView) {
        // Panels - Dock popup when panels show (desktop or mobile)
        query(CALCITE_SELECTORS.panelsPanel).on("show.bs.collapse", lang.hitch(this, function(e) {
          if ((activeView.popup.currentDockPosition && this._isPanelPopupCollision()) || activeView.widthBreakpoint === "xsmall") {
            activeView.popup.dockEnabled = false;
          }
        }));
        // Panels - Undock popup when panels hide (mobile only)
        query(CALCITE_SELECTORS.panelsPanel).on("hide.bs.collapse", lang.hitch(this, function(e) {
          if (activeView.widthBreakpoint === "xsmall") {
            activeView.popup.dockEnabled = true;
          }
        }));        
      }

    },

    _isPanelPopupCollision: function() {
      var activeView = this._activeView;
      var collision = (activeView.popup.currentDockPosition === "top-right" && query(".calcite-panels.calcite-panels-right").length > 0) || (activeView.popup.currentDockPosition === "top-left" && query(".calcite-panels.calcite-panels-left").length > 0);
      return collision;
    },

    // Menu

    _setMenuEvents: function() {
      query(CALCITE_SELECTORS.dropdown).on("hide.bs.dropdown", function () {
        query(CALCITE_SELECTORS.dropdownToggle).removeClass("open");
      });
    }

  });
});