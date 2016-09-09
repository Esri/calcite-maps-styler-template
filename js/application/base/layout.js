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
], function (
  STYLES, PADDING) {

  var LAYOUT = {
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
        theme: STYLES.layoutThemeMedium,
        navbar: {
          position: STYLES.navPositionTop, 
          margin: "",
          fixedPosition: STYLES.navFixedTop,
        },
        panels: STYLES.panelsRight,
        padding: PADDING.topLarge
      },

      // TOP_MARGIN: {
      //     navPosition: "calcite-nav-top", 
      //     navSpace: "calcite-margin-top", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-top",
      //     viewPadding: { top: 65, bottom: 0 }, 
      //     viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
      //     uiPadding: { top: 15, bottom: 30 },
      //     layoutName: ""
      // }, 
      // TOP_MARGIN_ALL: {
      //     navPosition: "calcite-nav-top", 
      //     navSpace: "calcite-margin-all", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-top",
      //     viewPadding: { top: 65, bottom: 0 }, 
      //     viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
      //     uiPadding: { top: 15, bottom: 30 },
      //     layoutName: ""
      // }, 
      // TOP_FIXED: {
      //     navPosition: "calcite-nav-top-fixed", 
      //     navSpace: "", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-top",
      //     viewPadding: { top: 0, bottom: 0 }, 
      //     viewPaddingNavHidden: { top: 0 , bottom: 0 },
      //     uiPadding: { top: 15, bottom: 30 },
      //     layoutName: ""
      // },
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
        theme: STYLES.layoutThemeMedium,
        navbar: {
          position: STYLES.navPositionBottom, 
          margin: "",
          fixedPosition: STYLES.navFixedBottom,
        },
        panels: STYLES.panelsRight,
        padding: PADDING.bottomLarge
      },

      // BOTTOM_MARGIN: {
      //     navPosition: "calcite-nav-bottom", 
      //     navSpace: "calcite-margin-bottom", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-bottom",
      //     viewPadding: { top: 0, bottom: 65 },
      //     viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
      //     uiPadding: { top: 30, bottom: 15 },
      //     layoutName: ""
      // }, 
      // BOTTOM_MARGIN_ALL: {
      //     navPosition: "calcite-nav-bottom", 
      //     navSpace: "calcite-margin-all", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-bottom",
      //     viewPadding: { top: 0, bottom: 65 },
      //     viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
      //     uiPadding: { top: 30, bottom: 15 },
      //     layoutName: ""
      // }, 
      // BOTTOM_FIXED: {
      //     navPosition: "calcite-nav-bottom-fixed", 
      //     navSpace: "", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-bottom",
      //     viewPadding: { top: 0, bottom: 0 }, 
      //     viewPaddingNavHidden: { top: 0 , bottom: 0 },
      //     uiPadding: { top: 30, bottom: 15 },
      //     layoutName: ""
      // },
      // // Custom layouts...
      // TOP_MEDIUM: {
      //     navPosition: "calcite-nav-top", 
      //     navSpace: "", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-top",
      //     viewPadding: { top: 60, bottom: 0 }, 
      //     viewPaddingSmallScreen: { top: 60, bottom: 0 }, 
      //     uiPadding: { top: 15, left: 15, right: 15, bottom: 30 },
      //     layoutName: "calcite-layout-medium-title"
      // },
      // BOTTOM_MEDIUM: {
      //     navPosition: "calcite-nav-bottom", 
      //     navSpace: "", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-bottom",
      //     viewPadding: { top: 0, bottom: 60 },
      //     viewPaddingSmallScreen: { top: 0, bottom: 60 }, 
      //     uiPadding: { top: 30, left: 15, right: 15, bottom: 15 },
      //     layoutName: "calcite-layout-medium-title"
      // },
      // TOP_LARGE: {
      //     navPosition: "calcite-nav-top", 
      //     navSpace: "", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-top",
      //     viewPadding: { top: 85, bottom: 0 }, 
      //     viewPaddingNavHidden: { top: 0 , bottom: 0 },
      //     viewPaddingSmallScreen: { top: 50, bottom: 0 }, 
      //     uiPadding: { top: 15, left: 15, bottom: 30 },
      //     layoutName: "calcite-layout-large-title"
      // },
      // BOTTOM_LARGE: {
      //     navPosition: "calcite-nav-bottom", 
      //     navSpace: "", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-bottom",
      //     viewPadding: { top: 0, bottom: 85 }, 
      //     viewPaddingNavHidden: { top: 0 , bottom: 0 },
      //     viewPaddingSmallScreen: { top: 0, bottom: 50 }, 
      //     uiPadding: { top: 30, bottom: 30 },
      //     layoutName: "calcite-layout-large-title"
      // },
      // TOP_INLINE_LEFT: {
      //     navPosition: "calcite-nav-top", 
      //     navSpace: "calcite-margin-all", 
      //     panelPosition: "calcite-panels-right", 
      //     zoomPosition: "calcite-zoom-top-left", 
      //     navFixedPosition: "navbar-fixed-top",
      //     viewPadding: { top: 0, bottom: 0 }, 
      //     uiPadding: { top: 15, bottom: 30 },
      //     layoutName: "calcite-layout-inline-left"
      // },
      // TOP_INLINE_RIGHT: {
      //     navPosition: "calcite-nav-top", 
      //     navSpace: "calcite-margin-all", 
      //     panelPosition: "calcite-panels-left", 
      //     zoomPosition: "calcite-zoom-top-right", 
      //     navFixedPosition: "navbar-fixed-top",
      //     viewPadding: { top: 0, bottom: 0 }, 
      //     uiPadding: { top: 15, bottom: 30 },
      //     layoutName: "calcite-layout-inline-right"
      // }
    }

  // })

  return LAYOUT;
});