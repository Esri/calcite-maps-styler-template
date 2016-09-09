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
  "application/base/styles",
  "application/base/selectors",
  "application/base/layout",

  "application/style/ThemeBase",
  "application/color/Color",

  "dojo/_base/lang",
  "dojo/query",
  "dojo/dom-class",
  "dojo/dom-style",

  "dojo/_base/declare",
  "dojo/domReady!"
], 
function(
  CALCITE_STYLES, CALCITE_SELECTORS, LAYOUT, 
  ThemeBase, Color,
  lang, query, domClass, domStyle,
  declare) {

  return declare(null, {
   
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (boilerplate) {

      this._boilerplate = boilerplate;

      this._colors = new Color();

      // Theme
      this.theme = this._getTheme();

      // Layout
      this.layout = this._getLayout();

      // Padding
      this.padding = this.layout.padding;
      
      // Widgets
      this.widgetTheme = this._getWidgetTheme();
      
      // Menu
      this.isMenuDrawer = this._getMenuStyle();

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _boilerplate: null,

    _colors: null,

    //--------------------------------------------------------------------------
    //
    //  Public Members
    //
    //--------------------------------------------------------------------------

    theme: null,

    layout: null,

    padding: { 
      view: null,
      uiPadding: null
    },

    widgetTheme: null,

    isMenuDrawer: false,

    // All styles

    setStyles: function() {
      this.setThemeStyles();
      this.setWidgetStyle();
      this.setMenuStyle();
      this.setLayoutStyles();
    },

    // Theme

    setThemeStyles: function(theme) {
      var theme = theme || this.theme;
      if (theme) {
        // Navbar
        this._setBgStyle(CALCITE_SELECTORS.navbar, theme.navbar.bgStyle);
        this._setTextStyle(CALCITE_SELECTORS.navbar, theme.navbar.textStyle);
        this._setBgRgbColor(CALCITE_SELECTORS.navbar, theme.navbar.bgRgbColor);
        // Dropdown
        //this._setBgStyle(CALCITE.THEME_SELECTORS.DROPDOWN, theme.dropdown.bgStyle);
        //this._setTextStyle(CALCITE.THEME_SELECTORS.DROPDOWN, theme.dropdown.textStyle);
        // this._setBgRgbaColor(CALCITE.THEME_SELECTORS.DROPDOWN_MENU, styles.dropdown.bgRgbaColor);
        // Panel
        this._setBgStyle(CALCITE_SELECTORS.panels, theme.panel.bgStyle);
        this._setTextStyle(CALCITE_SELECTORS.panels, theme.panel.textStyle);
        this._setBgRgbColor(CALCITE_SELECTORS.panels, theme.panel.bgRgbColor);
      }
    },

    // Widgets

    setWidgetStyle: function(theme) {
      var widgetTheme = widgetTheme || this.widgetTheme;
      if (widgetTheme) {
        this._setWidgetThemeStyle(widgetTheme);
      }
    },

    // Menu

    setMenuStyle: function(isDrawer) {
      var isDrawer = isDrawer || this.isMenuDrawer;
      this._setMenuStyleDrawer(isDrawer);
    },

    // Layout

    setLayoutStyles: function(layout) {
      var layout = layout || this.layout;
      if (layout) {
        this._removeLayoutStyles();
        this._setLayoutStyles(layout);
      }
    },

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    // Theme
    //----------------------------------

    _getTheme: function(config) {
      var config = config || this._boilerplate.config;
      var themeBase = new ThemeBase();
      var theme;
      // Get the theme
      var themeName = config.theme; // light, dark, custom, null
      switch (themeName) {
        case "light":
          theme = themeBase.light;
          break;
        case "dark":
          theme = themeBase.dark;
          break;
        case "custom":
          theme = themeBase.custom;
          break;
        default:
          theme = themeBase.light;  // Default
      }
      // Theme overrides
      this._updateThemeRgba(config.bgcolor, config.opacity, theme);
      this._updateThemeTextStyle(config.textcolor, theme);
      return theme;
    },

    _updateThemeRgba: function(bgColor, opacity, theme) {
      var rgba;
      if (bgColor) {
        rgba = this._colors.getRgba(bgColor, opacity);
      }
      if (!rgba) {
        if (theme.type === "dark") {
          rgba = this._colors.getRgba("dark", opacity);
        } else if (theme.type === "light") {
          rgba = this._colors.getRgba("light", opacity);
        } else {
          rgba = this._colors.getRgba("light", opacity);
        }
      }
      if (rgba) {
        theme.navbar.bgRgbColor = rgba;
        if (theme.type === "custom") {
          theme.panel.bgStyle = CALCITE_STYLES.bgCustom;
          theme.panel.bgRgbColor = rgba;
        }
      } 
    },

    _updateThemeTextStyle: function(textColor, theme) {
      var textStyle;
      var rgba = theme.navbar.bgRgbColor;
      if (textColor) {
        textStyle = this._colors.getTextStyle(textColor);
      } else if (!textColor && rgba) {
        textStyle = this._colors.getTextStyleFromRgba(rgba);
      }
      if (textStyle) {
        theme.navbar.textStyle = textStyle;
        if (theme.type === "custom") {
          theme.panel.textStyle = textStyle;
        }
      }
    },

    //----------------------------------
    // Widgets
    //----------------------------------

    _getWidgetTheme: function() {
      return this._boilerplate.config.widgettheme;
    },

    _setWidgetThemeStyle: function(widgetTheme) {
      if (widgetTheme === "light") {
        domClass.remove(document.body, CALCITE_STYLES.widgetsDark);
      } else if (widgetTheme === "dark") {
        domClass.add(document.body, CALCITE_STYLES.widgetsDark);
      }
    },

    //----------------------------------
    // Menu
    //----------------------------------

    _getMenuStyle: function() {
      var isDrawer = this._boilerplate.config.menustyledrawer;
      if (typeof(isDrawer) === "boolean" && isDrawer === true) {
        isDrawer = true;
      } else {
        isDrawer = false;
      }
      return isDrawer;
    },

    _setMenuStyleDrawer: function(isDrawer) {
      if (isDrawer) {
        query(CALCITE_SELECTORS.dropdownMenu).addClass(CALCITE_STYLES.menuDrawer);
      } else {
        query(CALCITE_SELECTORS.dropdownMenu).removeClass(CALCITE_STYLES.menuDrawer);
      }
    },

    // Background style
    _setBgStyle: function(cssSelector, bgColorStyle) {
      query(cssSelector).removeClass(CALCITE_STYLES.bgLight + " " + 
        CALCITE_STYLES.bgDark + " " + CALCITE_STYLES.bgCustom).addClass(bgColorStyle)
    },
   
    // Text style
    _setTextStyle: function(cssSelector, textColorStyle) {
      query(cssSelector).removeClass(CALCITE_STYLES.textLight + " " + 
        CALCITE_STYLES.textDark).addClass(textColorStyle);
    },

    // Rgb color style
    _setBgRgbColor: function(cssSelector, bgColorRgba) {
      query(cssSelector).attr("style", {"background-color": bgColorRgba});
    },

    _removeBgColorStyle: function(cssSelector) {
      query(cssSelector).attr("class")[0].split(" ").forEach(function(val){
        if (val.indexOf("calcite-bgcolor-") > -1) {
          query(cssSelector).removeClass(val);
        }
      });
    },

    // BgColor
    // _setBgColorStyle: function(cssSelector, bgColorStyle) {
    //   this._removeBgColorStyle(cssSelector);
    //   if (bgColorStyle !== "default") {
    //     query(cssSelector).addClass(bgColorStyle);
    //   }
    // },

    // _setCustomColors: function(bgColorStyle, textStyle, applyToAll) {
    //   var bgStyle = CALCITE.THEME_STYLES.BG_CUSTOM;
    //     bgRgbColor = this._getRgbaColorFromStyle(bgColorStyle); // Convert to RGB
    //   // Set styles
    //   this._setStyles(bgStyle, textStyle, bgRgbColor, applyToAll);
    //   this._applyStyles();
    // },

  
    //----------------------------------
    // Layout
    //----------------------------------

    _getLayout: function(config) {
      var config = config || this._boilerplate.config;
      var layoutName = config.layout
      var layout = null;
      // Get layout and padding
      switch (layoutName) {
        // case "top-small":
        //   layout = LAYOUT.topSmall;
        case "top": // default
          layout = LAYOUT.top;
          break;
        case "top-margin":
          layout = LAYOUT.topMargin;
          break;
        case "top-large":
          layout = LAYOUT.topLarge;
          break;
        // case "bottom-small":
        //   layout = LAYOUT.bottomSmall;
        case "bottom":
          layout = LAYOUT.bottom;
          break;
        case "bottom-margin":
          layout = LAYOUT.bottomMargin;
          break;
        case "bottom-large":
          layout = LAYOUT.bottomLarge;
          break;
        default: // Defaults
          layout = LAYOUT.top;
          break;
      }
      // Layout overrides
      this._updatePanelPosition(config.panelslayout, layout);
      return layout;
    },

    _updatePanelPosition: function(panelslayout, layout) {
      switch (panelslayout) {
        case "left":
          layout.panels = CALCITE_STYLES.panelsLeft;
          break;
        case "right":
          layout.panels = CALCITE_STYLES.panelsRight;
          break;
        default:
          layout.panels = CALCITE_STYLES.panelsRight;
      }
    },

    _setLayoutStyles: function(layout) {
      var layout = layout || this.layout;
      if (layout) {
        var body = query(CALCITE_SELECTORS.body)[0],
          navbar = query(CALCITE_SELECTORS.navbar)[0],
          panels = query(CALCITE_SELECTORS.panels)[0];
        domClass.add(body, layout.navbar.position + " " + layout.navbar.margin + " " + layout.theme);
        domClass.add(navbar, layout.navbar.fixedPosition);
        domClass.add(panels, layout.panels);        
      }
    },

    _removeLayoutStyles: function() {
      var body = query(CALCITE_SELECTORS.body)[0],
        navbar = query(CALCITE_SELECTORS.navbar)[0], 
        panels = query(CALCITE_SELECTORS.panels)[0];
      domClass.remove(body, CALCITE_STYLES.ALL.body);
      domClass.remove(navbar, CALCITE_STYLES.ALL.navbar);
      domClass.remove(panels, CALCITE_STYLES.ALL.panels);
    }

  });
});
