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
"application/style/Styleset"
], function (StyleSet) {

  var ThemeBase = function() {

    var styleset = new StyleSet();
    
    this.type = {
      LIGHT: "light",
      DARK: "dark",
      CUSTOM: "custom"
    };
    
    this.light = {
      type: "light",
      navbar: styleset.getLight(),
      dropdown: styleset.getLight(),
      panel: styleset.getLight()
    };
    this.dark = {
      type: "dark",
      navbar: styleset.getDark(),
      dropdown: styleset.getDark(),
      panel: styleset.getDark()
    };
    this.custom = {
      type: "custom",
      navbar: styleset.getCustom(),
      dropdown: styleset.getLight(),
      panel: styleset.getCustom()
    }
  }

  return ThemeBase;
});
