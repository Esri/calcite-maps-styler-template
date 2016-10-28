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
define([], function () {

  var PADDING = {
    topSmall: {
      viewPadding: { top: 40 , bottom: 0 },
      uiPadding: { top: 15, bottom: 30 },
      hidden: { top: 0 , bottom: 0 }
    },
    topSmallMargin: {
      viewPadding: { top: 50 , bottom: 0 },
      uiPadding: { top: 15, bottom: 30 },
      hidden: { top: 0 , bottom: 0 }
    },
    topMedium: { // Default
      viewPadding: { top: 50 , bottom: 0 },
      uiPadding: { top: 15, bottom: 30 },
      hidden: { top: 0 , bottom: 0 }
    },
    topMediumMargin: {
      viewPadding: { top: 65 , bottom: 0 },
      uiPadding: { top: 15, bottom: 30 },
      hidden: { top: 0 , bottom: 0 }
    },
    topLarge: {
      viewPadding: { top: 60 , bottom: 0 },
      uiPadding: { top: 15, bottom: 30 },
      hidden: { top: 0 , bottom: 0 }
    },
    topLargeMargin: {
      viewPadding: { top: 75 , bottom: 0 },
      uiPadding: { top: 15, bottom: 30 },
      hidden: { top: 0 , bottom: 0 }
    },
    bottomSmall: {
      viewPadding: { top: 0 , bottom: 40 },
      uiPadding: { top: 30, bottom: 15 },
      hidden: { top: 0 , bottom: 0 }
    },
    bottomSmallMargin: {
      viewPadding: { top: 0 , bottom: 40 },
      uiPadding: { top: 15, bottom: 30 },
      hidden: { top: 0 , bottom: 0 }
    },
    bottomMedium: {
      viewPadding: { top: 0 , bottom: 50 },
      uiPadding: { top: 30, bottom: 15 },
      hidden: { top: 0 , bottom: 0 }
    },
    bottomMediumMargin: {
      viewPadding: { top: 0 , bottom: 65 },
      uiPadding: { top: 30, bottom: 15 },
      hidden: { top: 0 , bottom: 0 }
    },
    bottomLarge: {
      viewPadding: { top: 0, bottom: 60 },
      uiPadding: { top: 30, bottom: 15 },
      hidden: { top: 0 , bottom: 0 }
    },
    bottomLargeMargin: {
      viewPadding: { top: 0 , bottom: 75 },
      uiPadding: { top: 30, bottom: 15 },
      hidden: { top: 0 , bottom: 0 }
    }
  }

  return PADDING;
});