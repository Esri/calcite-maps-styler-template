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

  "dojo/query",
  "dojo/dom-construct",
  "dojo/_base/Color",
  "dojo/_base/declare"
], 
function(
  CALCITE_STYLES,
  query, domConstruct, Color, declare) {

  return declare(null, {
   
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function () {},

    //--------------------------------------------------------------------------
    //
    //  Public Members
    //
    //--------------------------------------------------------------------------

    getRgba: function(bgColor, opacity) {
      var rgba;
      // rgb
      if (bgColor && typeof bgColor === "string") {
        // Handle transparent bg color
        var trans = bgColor.toLowerCase().replace(/\s+/g, '');
        if (trans === "transparent" || trans === "rgba(0,0,0,0") {
          rgba = "rgba(0, 0, 0, 0)";
        } else { //rgb, rgba or #xxx
          var c = Color.fromString(bgColor);
          if (c && (bgColor.indexOf("#") > -1 || bgColor.indexOf("rgb") > -1 || bgColor.indexOf("rgba") > -1)) {
            rgba = c.toString();
          } else { // calcite style
            var bgColorStyle = "calcite-bgcolor-" + bgColor;
            rgba = this.getRgbaColorFromStyle(bgColorStyle);
            if (rgba === "rgba(0, 0, 0, 0)") {
              rgba = null; // invalid calcite color
            }
          }
          // Apply opacity
          if (rgba) {
            var cRgba = new Color(rgba);
            if (opacity) {
              var val = parseFloat(opacity);
              if (!isNaN(val)) {
                cRgba.a = val;
              }
            }
            rgba = cRgba.toCss(true);
          }
        }
      }
      return rgba;
    },

    getRgbaColorFromStyle: function(calciteBgColorStyle) {
      var div = domConstruct.create("div", { id: "calcitecolor", class: calciteBgColorStyle }, document.body );
      var rgba = query(div).style("background-color")[0];
      domConstruct.destroy(div);
      return rgba;
    },

    getTextStyleFromRgba: function(rgba) {
      var textStyle;
      if (rgba) {
        var c = Color.fromString(rgba);
        if (c) {
          var hsl = this._rgb2hsl(c.r, c.g, c.b);
          // Get the best complimentary text color
          if (hsl.l < 0.55) {
            textStyle = CALCITE_STYLES.textLight;
          } else {
            textStyle = CALCITE_STYLES.textDark;
          }
        }
      }
      return textStyle;
    },

    getTextStyle: function(textColor) {
      var textStyle;
      if (textColor === "light") {
        textStyle = CALCITE_STYLES.textLight;
      } else if (textColor === "dark") {
        textStyle = CALCITE_STYLES.textDark;
      }
      return textStyle;
    },

 		//--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

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

    _rgb2hsl: function(r, g, b) {
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
    }

  });
});