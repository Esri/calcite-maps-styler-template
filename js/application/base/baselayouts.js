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
  "application/base/padding",
], function (STYLES, PADDING) {

  var BASELAYOUTS = {
    topSmall: {
      name: "top-small",
      theme: STYLES.layoutThemeSmall,
      navbar: {
        position: STYLES.navPositionTop, 
        margin: "",
        fixedPosition: STYLES.navFixedTop,
      },
      panels: STYLES.panelsRight,
      padding: PADDING.topSmall
    },
    top: {
      name: "top",
      theme: "",
      navbar: {
        position: STYLES.navPositionTop, 
        margin: "",
        fixedPosition: STYLES.navFixedTop,
      },
      panels: STYLES.panelsRight,
      padding: PADDING.topMedium
    },
    topMargin: {
      name: "top-margin",
      theme: "",
      navbar: {
        position: STYLES.navPositionTop, 
        margin: STYLES.navMarginTop,
        fixedPosition: STYLES.navFixedTop,
      },
      panels: STYLES.panelsRight,
      padding: PADDING.topMediumMargin
    },
    topLarge: {
      name: "top-large",
      theme: STYLES.layoutThemeLarge,
      navbar: {
        position: STYLES.navPositionTop, 
        margin: "",
        fixedPosition: STYLES.navFixedTop,
      },
      panels: STYLES.panelsRight,
      padding: PADDING.topLarge
    },
    bottomSmall: {
      name: "bottom-small",
      theme: STYLES.layoutThemeSmall,
      navbar: {
        position: STYLES.navPositionBottom, 
        margin: "",
        fixedPosition: STYLES.navFixedBottom,
      },
      panels: STYLES.panelsRight,
      padding: PADDING.bottomSmall
    },
    bottom: {
      name: "bottom",
      theme: "",
      navbar: {
        position: STYLES.navPositionBottom, 
        margin: "",
        fixedPosition: STYLES.navFixedBottom,
      },
      panels: STYLES.panelsRight,
      padding: PADDING.bottomMedium
    },
    bottomMargin: {
      name: "bottom-margin",
      theme: "",
      navbar: {
        position: STYLES.navPositionBottom, 
        margin: STYLES.navMarginBottom,
        fixedPosition: STYLES.navFixedBottom,
      },
      panels: STYLES.panelsRight,
      padding: PADDING.bottomMediumMargin
    },
    bottomLarge: {
      name: "bottom-large",
      theme: STYLES.layoutThemeLarge,
      navbar: {
        position: STYLES.navPositionBottom, 
        margin: "",
        fixedPosition: STYLES.navFixedBottom,
      },
      panels: STYLES.panelsRight,
      padding: PADDING.bottomLarge
    }
  }

  return BASELAYOUTS;
});