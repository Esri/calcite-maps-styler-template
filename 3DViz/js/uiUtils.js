/*global define */
/*jslint sloppy:true,nomen:true */
/*
 | Copyright 2014 Esri
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
  "dojo/_base/declare",
  "dojo/_base/window",

  "dojo/query",

  "dojo/dom-class",
  "dojo/dom-style",

  "esri/Color"
], function(
  declare, win,
  query,
  domClass, domStyle,
  Color
) {
  return declare(null, {

    config: {},

    init: function(config) {
      this.config = config;
    },

    setColor: function() {
      console.log("setting color");
      var color = this.config.color;
      var colorText = this.config.colorText;
      // if(colorText === "") {
      //   colorText = this._getContrastYIQ(color);
      // }
      // this.config.colorText = colorText;
      domStyle.set(win.body(), "color", color);
      domStyle.set("panelText", "color", color);
      domStyle.set("btnToggle", "backgroundColor", color);
      domStyle.set("btnPlay", "backgroundColor", color);
      if(colorText === "#000000") {
        domClass.add("panelButtons", "black");
      }
      if(this.config.reverse) {
        query(".esri-ui").forEach(function(node){
          domClass.add(node, "reverse");
        });
      }
    },

    _getContrastYIQ: function(color) {
      var rgb = Color.fromString(color).toRgb();
      var yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
      //return (yiq >= 128) ? "#000000" : "#ffffff";
      //adjust YIQ for higher value at 65% or 166 because white looks better
      return (yiq >= 191) ? "#000000" : "#ffffff";
    },

    _getBackground: function(color) {
      var rgb = Color.fromString(color).toRgb();
      var yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
      //return (yiq >= 128) ? "#000000" : "#ffffff";
      //adjust YIQ for higher value at 65% or 166 because white looks better
      return (yiq >= 100) ? "#000000" : "#ffffff";
    }

  });
});
