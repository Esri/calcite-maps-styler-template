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

  // CALCITE_STYLES.THEME.bgLight
  // CALCITE_STYLES.THEME.WIDGETS.dark
  // CALCITE_STYLES.LAYOUT.THEME.small
  // CALCITE_STYLES.LAYOUT.NAV.POSITION.top
  // CALCITE_STYLES.LAYOUT.PANELS.left

  var CALCITE_STYLES = {
    calciteMaps: "calcite-maps",
    bgLight: "calcite-bg-light", // default
    bgDark: "calcite-bg-dark",
    bgCustom: "calcite-bg-custom",
    textLight: "calcite-text-light",
    textDark: "calcite-text-dark", // default
    widgetsDark: "calcite-widgets-dark",
    widgetsLight: "", // default
    menuDrawer: "calcite-menu-drawer",
    rgbaDefault: "", // default (no bg color), // TODO
    null: "", // TODO
    layoutThemeSmall: "calcite-layout-small-title",
    layoutThemeLarge: "calcite-layout-large-title",
    layoutThemeInlineRight: "calcite-layout-inline-right",
    layoutThemeInlineLeft: "calcite-layout-inline-left",
    navPositionTop: "calcite-nav-top",
    navPositionBottom: "calcite-nav-bottom",
    navPositionTopFixed: "calcite-nav-top-fixed",
    navPositionBottomFixed: "calcite-nav-bottom-fixed",
    navMarginTop:"calcite-margin-top",
    navMarginBottom:"calcite-margin-bottom",
    navMarginAll:"calcite-margin-all",
    navFixedTop: "navbar-fixed-top",
    navFixedBottom: "navbar-fixed-bottom",
    navMiniBar: "calcite-nav-transparent",
    calcitePanels: "calcite-panels",
    panelsLeft: "calcite-panels-left",
    panelsRight: "calcite-panels-right",
    calciteMap: "calcite-map"
  }

  CALCITE_STYLES.ALL = {
    body: CALCITE_STYLES.layoutThemeSmall + " " + CALCITE_STYLES.layoutThemeLarge + " " + CALCITE_STYLES.layoutThemeInlineLeft + " " + CALCITE_STYLES.layoutThemeInlineRight + " " +
      CALCITE_STYLES.navPositionTop + " " + CALCITE_STYLES.navPositionBottom + " " + CALCITE_STYLES.navPositionTopFixed + " " + CALCITE_STYLES.navPositionBottomFixed + " " +
      CALCITE_STYLES.navMarginTop + " " + CALCITE_STYLES.navMarginBottom + " " + CALCITE_STYLES.navMarginAll + " " +
      CALCITE_STYLES.navMiniBar + " " + 
      CALCITE_STYLES.panelsLeft + " " + CALCITE_STYLES.panelsRight,
    navbar: CALCITE_STYLES.navFixedTop + " " + CALCITE_STYLES.navFixedBottom,
    panels: CALCITE_STYLES.panelsLeft + " " + CALCITE_STYLES.panelsRight
  }

	return CALCITE_STYLES;

});