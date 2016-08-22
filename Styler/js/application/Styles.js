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
  "dojo/_base/declare"
], function (declare) {

  return {

    THEMES: {
      LIGHT: {
        nav: {
          bgStyle: "calcite-bg-light",
          textStyle: "calcite-text-dark",
          bgRgbColor: null
        },
        dropdown: {
          bgStyle: "calcite-bg-light",
          textStyle: "calcite-text-dark",
          bgRgbColor: null
        },
        panel: {
          bgStyle: "calcite-bg-light",
          textStyle: "calcite-text-dark",
          bgRgbColor: null
        }
      },
      DARK: {
        nav: {
          bgStyle: "calcite-bg-dark",
          textStyle: "calcite-text-light",
          bgRgbColor: null
        },
        dropdown: {
          bgStyle: "calcite-bg-dark",
          textStyle: "calcite-text-light",
          bgRgbColor: null
        },
        panel: {
          bgStyle: "calcite-bg-dark",
          textStyle: "calcite-text-light",
          bgRgbColor: null
        }
      },
      CUSTOM: {
        nav: {
          bgStyle: "calcite-bg-custom",
          textStyle: "calcite-text-light",
          bgRgbColor: null
        },
        dropdown: {
          bgStyle: "calcite-bg-light",
          textStyle: "calcite-text-dark",
          bgRgbColor: null
        },
        panel: {
          bgStyle: "calcite-bg-custom",
          textStyle: "calcite-text-light",
          bgRgbColor: null
        }
      }
    },

    THEME_SELECTORS: {
      NAVBAR: ".calcite-navbar",
      DROPDOWN: ".calcite-dropdown",
      DROPDOWN_MENU: ".calcite-dropdown .dropdown-menu",
      PANELS: ".calcite-panels",
      MAP: ".calcite-map"
    },

    THEME_STYLES: {
      BG_LIGHT: "calcite-bg-light", // default
      BG_DARK: "calcite-bg-dark",
      BG_CUSTOM: "calcite-bg-custom",
      TEXT_LIGHT: "calcite-text-light",
      TEXT_DARK: "calcite-text-dark", // default
      WIDGETS_DARK: "calcite-widgets-dark",
      WIDGETS_LIGHT: "calcite-widgets-light", // default
      RGBA_DEFAULT: "", // default (no bg color),
      NULL: null
    },

    THEME_BASE: {
      LIGHT: {
        bgStyle: "calcite-bg-light",
        textStyle: "calcite-text-dark",
        bgRgbColor: null
      },
      DARK: {
        bgStyle: "calcite-bg-dark",
        textStyle: "calcite-text-light",
        bgRgbColor: null
      }
    },

    LAYOUT_STYLES: {
      body:
        // Custom themes
        "calcite-layout-large-title calcite-layout-medium-title calcite-layout-inline-right calcite-layout-inline-left " +
        // Nav
        "calcite-nav-top calcite-nav-bottom calcite-nav-top-fixed calcite-nav-bottom-fixed " +
        // Nav space
        "calcite-margin-top calcite-margin-bottom calcite-margin-all " + 
        // Zoom
        "calcite-zoom-top-left calcite-zoom-top-right calcite-zoom-bottom-left calcite-zoom-bottom-right " +
        // Minibar
        "calcite-nav-transparent",
      nav: 
        // Navbar
        "navbar-fixed-top navbar-fixed-bottom",
      // Panels
      panels: "calcite-panels-right calcite-panels-left"
    },
 
    LAYOUTS: {
      TOP: {
          navPosition: "calcite-nav-top", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 50 , bottom: 0 },
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 15, bottom: 30 },
          layoutName: ""
      },
      TOP_MARGIN: {
          navPosition: "calcite-nav-top", 
          navSpace: "calcite-margin-top", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 65, bottom: 0 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 15, bottom: 30 },
          layoutName: ""
      }, 
      TOP_MARGIN_ALL: {
          navPosition: "calcite-nav-top", 
          navSpace: "calcite-margin-all", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 65, bottom: 0 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 15, bottom: 30 },
          layoutName: ""
      }, 
      TOP_FIXED: {
          navPosition: "calcite-nav-top-fixed", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 0, bottom: 0 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 },
          uiPadding: { top: 15, bottom: 30 },
          layoutName: ""
      },
      BOTTOM: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 50  },
          viewPaddingNavHidden: { top: 0 , bottom: 0 },
          uiPadding: { top: 30, bottom: 15 },
          layoutName: ""
      },
      BOTTOM_MARGIN: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "calcite-margin-bottom", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 65 },
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 30, bottom: 15 },
          layoutName: ""
      }, 
      BOTTOM_MARGIN_ALL: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "calcite-margin-all", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 65 },
          viewPaddingNavHidden: { top: 0 , bottom: 0 }, 
          uiPadding: { top: 30, bottom: 15 },
          layoutName: ""
      }, 
      BOTTOM_FIXED: {
          navPosition: "calcite-nav-bottom-fixed", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 0 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 },
          uiPadding: { top: 30, bottom: 15 },
          layoutName: ""
      },
      // Custom layouts...
      TOP_MEDIUM: {
          navPosition: "calcite-nav-top", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 60, bottom: 0 }, 
          viewPaddingSmallScreen: { top: 60, bottom: 0 }, 
          uiPadding: { top: 15, left: 15, right: 15, bottom: 30 },
          layoutName: "calcite-layout-medium-title"
      },
      BOTTOM_MEDIUM: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 60 },
          viewPaddingSmallScreen: { top: 0, bottom: 60 }, 
          uiPadding: { top: 30, left: 15, right: 15, bottom: 15 },
          layoutName: "calcite-layout-medium-title"
      },
      TOP_LARGE: {
          navPosition: "calcite-nav-top", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 85, bottom: 0 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 },
          viewPaddingSmallScreen: { top: 50, bottom: 0 }, 
          uiPadding: { top: 15, left: 15, bottom: 30 },
          layoutName: "calcite-layout-large-title"
      },
      BOTTOM_LARGE: {
          navPosition: "calcite-nav-bottom", 
          navSpace: "", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-bottom",
          viewPadding: { top: 0, bottom: 85 }, 
          viewPaddingNavHidden: { top: 0 , bottom: 0 },
          viewPaddingSmallScreen: { top: 0, bottom: 50 }, 
          uiPadding: { top: 30, bottom: 30 },
          layoutName: "calcite-layout-large-title"
      },
      TOP_INLINE_LEFT: {
          navPosition: "calcite-nav-top", 
          navSpace: "calcite-margin-all", 
          panelPosition: "calcite-panels-right", 
          zoomPosition: "calcite-zoom-top-left", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 0, bottom: 0 }, 
          uiPadding: { top: 15, bottom: 30 },
          layoutName: "calcite-layout-inline-left"
      },
      TOP_INLINE_RIGHT: {
          navPosition: "calcite-nav-top", 
          navSpace: "calcite-margin-all", 
          panelPosition: "calcite-panels-left", 
          zoomPosition: "calcite-zoom-top-right", 
          navFixedPosition: "navbar-fixed-top",
          viewPadding: { top: 0, bottom: 0 }, 
          uiPadding: { top: 15, bottom: 30 },
          layoutName: "calcite-layout-inline-right"
      }
    }
  }
});
