/*
  Copyright 2017 Esri

  Licensed under the Apache License, Version 2.0 (the "License");

  you may not use this file except in compliance with the License.

  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software

  distributed under the License is distributed on an "AS IS" BASIS,

  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

  See the License for the specific language governing permissions and

  limitations under the License.​
*/
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function setPageLocale(locale) {
        document.documentElement.lang = locale;
    }
    exports.setPageLocale = setPageLocale;
    function setPageDirection(direction) {
        var dirNode = document.getElementsByTagName("html")[0];
        dirNode.setAttribute("dir", direction);
    }
    exports.setPageDirection = setPageDirection;
    function setPageTitle(title) {
        document.title = title;
    }
    exports.setPageTitle = setPageTitle;
});
