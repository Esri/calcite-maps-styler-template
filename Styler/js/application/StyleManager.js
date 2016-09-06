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
  "application/Styles",

  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/query",
  "dojo/dom-class",
  "dojo/dom-style",
  "dojo/dom-construct",
  "dojo/_base/Color",
  "dojo/domReady!"
], 
function(
  CALCITE,
  declare, lang, query, domClass, domStyle, domConstruct, Color) {

  return declare(null, {
   
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    theme: null,

    layout: null,

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function () {

      this.theme = CALCITE.THEMES.LIGHT;

      this.layout = CALCITE.LAYOUTS.TOP;

    },

    //--------------------------------------------------------------------------
    //
    //  Public Functions
    //
    //--------------------------------------------------------------------------

    // Theme

    setTheme: function(configTheme) {
      var theme = this.theme,
        name = configTheme.name,
        //bgStyle = configTheme.bgStyle,
        textStyleOverride = configTheme.textStyle,
        bgColorOverride = configTheme.bgColor,
        opacity = configTheme.opacity,
        // bgColorStyleOverride =configTheme.bgColorStyle, // nav background
        // bgRgbColorOverride = configTheme.bgRgbColor, // nav background override
        all = configTheme.all; 
      // Set the default styles
      switch (name) {
        case "light":
          theme = CALCITE.THEMES.LIGHT;
          break;
        case "dark":
          theme = CALCITE.THEMES.DARK;
          break;
        case "custom":
          theme = CALCITE.THEMES.CUSTOM;
          break;
        default:
          theme = CALCITE.THEMES.LIGHT;
      }
      // Background color override, override bgStyle also
      var rgba = this._getRgba(bgColorOverride, opacity);
      if (rgba) {
        theme.nav.bgStyle = CALCITE.THEME_STYLES.BG_CUSTOM;
        theme.nav.bgRgbColor = rgba;
        if (theme === CALCITE.THEMES.CUSTOM) {
          theme.panel.bgStyle = CALCITE.THEME_STYLES.BG_CUSTOM;
          theme.panel.bgRgbColor = rgba;
        }
      }
      // Text color override
      if (textStyleOverride) {
        theme.nav.textStyle = textStyleOverride;
        if (theme === CALCITE.THEMES.CUSTOM) {
          theme.panel.textStyle = textStyleOverride;
        }
      } else { // Auto select the best text style for the rgb
        if (rgba) {
          textStyleOverride = this._getTextStyleFromRgba(rgba);
          theme.nav.textStyle = textStyleOverride;
          if (theme === CALCITE.THEMES.CUSTOM) {
            theme.panel.textStyle = textStyleOverride; 
          }
        }
      }
      this._applyTheme(theme);
    },

    setWidgetTheme: function(configWidgetTheme) {
      if (configWidgetTheme === "light") {
        domClass.remove(document.body, CALCITE.THEME_STYLES.WIDGETS_DARK);
        domClass.add(document.body, CALCITE.THEME_STYLES.WIDGETS_LIGHT);
      } else if (configWidgetTheme === "dark") {
        domClass.remove(document.body, CALCITE.THEME_STYLES.WIDGETS_LIGHT);
        domClass.add(document.body, CALCITE.THEME_STYLES.WIDGETS_DARK);
      }
    },

    // Layout

    setLayout: function(configLayout) {
      var layout = this._getLayoutFromName(configLayout.name);
      this.layout = layout;
      this._applyLayout(layout);
    },

    getPadding: function() {
      var paddingSettings = null;
      if (this.layout) {
        paddingSettings = {
          padding: this.layout.viewPadding,
          ui: {
            padding: this.layout.uiPadding
          }
        }
      }
      return paddingSettings;
    },

    //--------------------------------------------------------------------------
    //
    //  Private Functions
    //
    //--------------------------------------------------------------------------

    //----------------------------------
    // Theme
    //----------------------------------

    _setCustomColors: function(bgColorStyle, textStyle, applyToAll) {
      var bgStyle = CALCITE.THEME_STYLES.BG_CUSTOM;
        bgRgbColor = this._getRgbaColorFromStyle(bgColorStyle); // Convert to RGB

      // Set styles
      this._setStyles(bgStyle, textStyle, bgRgbColor, applyToAll);
      this._applyStyles();
    },

    _applyTheme: function(theme) {
      // Navbar
      this._setBgStyle(CALCITE.THEME_SELECTORS.NAVBAR, theme.nav.bgStyle);
      this._setTextStyle(CALCITE.THEME_SELECTORS.NAVBAR, theme.nav.textStyle);
      this._setBgRgbColor(CALCITE.THEME_SELECTORS.NAVBAR, theme.nav.bgRgbColor);
      // Dropdown
      //this._setBgStyle(CALCITE.THEME_SELECTORS.DROPDOWN, theme.dropdown.bgStyle);
      //this._setTextStyle(CALCITE.THEME_SELECTORS.DROPDOWN, theme.dropdown.textStyle);
      // this._setBgRgbaColor(CALCITE.THEME_SELECTORS.DROPDOWN_MENU, styles.dropdown.bgRgbaColor);
      // Panel
      this._setBgStyle(CALCITE.THEME_SELECTORS.PANELS, theme.panel.bgStyle);
      this._setTextStyle(CALCITE.THEME_SELECTORS.PANELS, theme.panel.textStyle);
      this._setBgRgbColor(CALCITE.THEME_SELECTORS.PANELS, theme.panel.bgRgbColor);
    },

    // Theme - bg
    _setBgStyle: function(cssSelector, bgColorStyle) {
      query(cssSelector).removeClass(CALCITE.THEME_STYLES.BG_LIGHT + " " + CALCITE.THEME_STYLES.BG_DARK + " " + CALCITE.THEME_STYLES.BG_CUSTOM);
      query(cssSelector).addClass(bgColorStyle)
    },
   
    // Theme - text
    _setTextStyle: function(cssSelector, textColorStyle) {
      query(cssSelector).removeClass(CALCITE.THEME_STYLES.TEXT_LIGHT + " " + CALCITE.THEME_STYLES.TEXT_DARK);
      query(cssSelector).addClass(textColorStyle);
    },

    // BgColor
    _setBgColorStyle: function(cssSelector, bgColorStyle) {
      this._removeBgColorStyle(cssSelector);
      if (bgColorStyle !== "default") {
        query(cssSelector).addClass(bgColorStyle);
      }
    },

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

    //----------------------------------
    // Colors
    //----------------------------------

    _getRgba: function(bgColor, opacity) {
      var rgb = null,
        rgba = null,
        opacity = opacity || 1;
      // rgb
      if (bgColor) {
        //rgb or #xxx
        var c = Color.fromString(bgColor);
        if (c && (bgColor.indexOf("#") > -1 || bgColor.indexOf("rgb") > -1)) {
          rgb = c.toString();
        } else { // calcite style
          var bgColorStyle = "calcite-bgcolor-" + bgColor;
          rgb = this._getRgbaColorFromStyle(bgColorStyle);
        }
        if (rgb) {
          var cRgba = new Color(rgb);
          if (cRgba.a !== 0) {
            cRgba.a = opacity;
          }
          rgba = cRgba.toCss(true);
        }
      }
      return rgba;
    },

    _getRgbaColorFromStyle: function(calciteBgColorStyle) {
      // TODO - create these in calcite-maps
      if (calciteBgColorStyle === "calcite-bgcolor-light") {
        rgba = "rgba(255,255,155,1)"; // #fff
      } else if (calciteBgColorStyle === "calcite-bgcolor-dark") {
        rgba = "rgba(51,51,51,1)"; // #333
      } else {
        var div = domConstruct.create("div", { id: "calcitecolor", class: calciteBgColorStyle }, document.body );
        rgba = query(div).style("background-color")[0];
        domConstruct.destroy(div);
      }
      return rgba;
    },

    _getTextStyleFromRgba: function(rgba) {
      var textStyle = null;
      if (rgba) {
        var c = Color.fromString(rgba);
        if (c) {
          var hsl = this._rgb2hsl(c.r, c.g, c.b);
          // Get the best complimentary text color
          if (hsl.l < 0.55) {
            textStyle = CALCITE.THEME_STYLES.TEXT_LIGHT;
          } else {
            textStyle = CALCITE.THEME_STYLES.TEXT_DARK;
          }
        }
      }
      return textStyle;
    },

    _rgb2hsv: function() {
      var rr, gg, bb,
          r = arguments[0] / 255,
          g = arguments[1] / 255,
          b = arguments[2] / 255,
          h, s,
          v = Math.max(r, g, b),
          diff = v - Math.min(r, g, b),
          diffc = function(c){
              return (v - c) / 6 / diff + 1 / 2;
          };

      if (diff == 0) {
          h = s = 0;
      } else {
          s = diff / v;
          rr = diffc(r);
          gg = diffc(g);
          bb = diffc(b);

          if (r === v) {
              h = bb - gg;
          }else if (g === v) {
              h = (1 / 3) + rr - bb;
          }else if (b === v) {
              h = (2 / 3) + gg - rr;
          }
          if (h < 0) {
              h += 1;
          }else if (h > 1) {
              h -= 1;
          }
      }
      return {
          h: Math.round(h * 360),
          s: Math.round(s * 100),
          v: Math.round(v * 100)
      };
    },

    _rgb2hsl: function(r, g, b){
      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;

      if(max == min){
          h = s = 0; // achromatic
      }else{
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max){
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
      }
      return {
          h: h,
          s: s,
          l: l
      };
    },


    //----------------------------------
    // Layout
    //----------------------------------

    _applyLayout: function(layout) {
      this._removeLayoutStyles();
      this._addLayoutStyles(layout);
    },

    _addLayoutStyles: function(layout) {
      var body = query("body")[0],
        nav = query("nav")[0],
        panels = query(CALCITE.THEME_SELECTORS.PANELS)[0];
      domClass.add(body, layout.navPosition + " " + layout.navSpace + " " + layout.zoomPosition + " " + layout.layoutName);
      domClass.add(nav, layout.navFixedPosition);
      domClass.add(panels, layout.panelPosition);
    },

    _removeLayoutStyles: function() {
      var body = query("body")[0],
        nav = query("nav")[0],
        panels = query(CALCITE.THEME_SELECTORS.PANELS)[0];
      domClass.remove(body, CALCITE.LAYOUT_STYLES.body);
      domClass.remove(nav, CALCITE.LAYOUT_STYLES.nav);
      domClass.remove(panels, CALCITE.LAYOUT_STYLES.panels);
    },

    _getLayoutFromName: function(layoutName) {
      var layout = null;
      switch (layoutName) {
        case "top": // default
          layout = CALCITE.LAYOUTS.TOP;
          break;
        case "top-margin":
          layout = CALCITE.LAYOUTS.TOP_MARGIN;
          break;
        case "top-margin-all":
          layout = CALCITE.LAYOUTS.TOP_MARGIN_ALL;
          break;
        case "top-fixed":
          layout = CALCITE.LAYOUTS.TOP_FIXED;
          break;
        case "bottom":
          layout = CALCITE.LAYOUTS.BOTTOM;
          break;
        case "bottom-margin":
          layout = CALCITE.LAYOUTS.BOTTOM_MARGIN;
          break;
        case "bottom-margin-all":
          layout = CALCITE.LAYOUTS.BOTTOM_MARGIN_ALL;
          break;
        case "bottom-fixed":
          layout = CALCITE.LAYOUTS.BOTTOM_FIXED;
          break;
        // Custom LAYOUTS
        case "top-xlarge":
          layout = CALCITE.LAYOUTS.TOP_LARGE;
          break;
        case "bottom-xlarge":
          layout = CALCITE.LAYOUTS.BOTTOM_LARGE;
          break;
        case "top-large":
          layout = CALCITE.LAYOUTS.TOP_MEDIUM;
          break;
        case "bottom-large":
          layout = CALCITE.LAYOUTS.BOTTOM_MEDIUM;
          break;
        case "top-inline-left":
          layout = CALCITE.LAYOUTS.TOP_INLINE_LEFT;
          break;
        case "top-inline-right":
          layout = CALCITE.LAYOUTS.TOP_INLINE_RIGHT;
          break;
        default:
          layout = CALCITE.LAYOUTS.TOP;
          break;
      }
      return layout;
    }
  });
});
