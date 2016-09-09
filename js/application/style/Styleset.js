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
"application/base/styles"
], function (CALCITE_STYLES) {

  var lightSet = function light() {
    this.bgStyle = CALCITE_STYLES.bgLight;
    this.textStyle = CALCITE_STYLES.textDark;
    this.bgRgbColor = null;
  };

  var darkSet = function dark() {
    this.bgStyle = CALCITE_STYLES.bgDark;
    this.textStyle = CALCITE_STYLES.textLight;
    this.bgRgbColor = null;
  };

  var customSet = function dark() {
    this.bgStyle = CALCITE_STYLES.bgCustom;
    this.textStyle = CALCITE_STYLES.darkLight;
    this.bgRgbColor = "rgba(255,255,255,1)";
  };

  var CALCITE_STYLE_SET = function CALCITE_STYLE_SET() {
    this.getLight = function() { 
      return new lightSet();
    };
    this.getDark =  function() { 
      return new darkSet();
    };
    this.getCustom = function() { 
      return new customSet();
    };
  }

  return CALCITE_STYLE_SET;
});