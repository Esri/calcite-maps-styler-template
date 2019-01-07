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
  "application/base/selectors",

  "esri/support/basemapDefinitions",

  "esri/webscene/Slide",
  "esri/core/Collection",
  "esri/views/MapView",
  "esri/Map",
  "esri/Viewpoint",
  "esri/geometry/Extent",

  "esri/core/watchUtils",

  "dojo/_base/lang",

  "dojo/on",
  "dojo/touch",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",
  "dojo/dom-construct",

  "dojo/_base/declare",
], function (
  SELECTORS,
  basemapDefs,
  Slide, Collection, MapView, Map, Viewpoint, Extent,
  watchUtils,
  lang,
  on, touch,
  dom, domAttr, domClass, query, domConstruct,
  declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (boilerplate, webItem, i18n) {

      this._boilerplate = boilerplate;

      this._webItem = webItem;

      this._isWebMap = this._getIsWebMap(webItem);

      this._i18n = i18n;

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _boilerplate: null,

    _webItem: null,

    _isWebMap: false,

    _i18n: null,

    _defaultBasemap: null,

    //--------------------------------------------------------------------------
    //
    //  Public Members
    //
    //--------------------------------------------------------------------------

    // Set content for menus and panels, no view required!

    setBaseHtml: function() {
      this.setNavbarHtml();
      this.setMenusHtml();
      this.setPanelsHtml();
      this.setWidgetsVisible();
      this.setActivePanelVisible();
    },

    setNavbarHtml: function() {
      this._setNavbarTitleText();
      this._setNavbarSubTitleText();
      this._setNavbarVisible(true);
    },

    setMenusHtml: function() {
      this._setMenuTitles();
      this._setMenusVisible(); // TODO
    },

    setPanelsHtml: function() {
      this._setPanelTitles();
      this._setAboutPanelText();
    },

    setWidgetsVisible: function() {
      // Nav Search
      this._setSearchWidgetVisible();
    },

    // Create content, requires view

    createViewPanelsHtml: function(view, webMapOrWebScene) {
      this._setSlidesPanel(view, webMapOrWebScene);
      this._setDefaultBasemap(view);
      this._setBasemapPanel(view);
      this._setTooltips(view);
    },

    // Active panel

    setActivePanelVisible: function() {
      var panelName = this._boilerplate.config.activepanel;
      if (panelName) {
        var panelSelector;
        switch (panelName) {
          case "about":
            panelSelector = SELECTORS.panelAbout;
            break;
          case "legend":
            panelSelector = SELECTORS.panelLegend;
            break;
          case "layers":
            panelSelector = SELECTORS.panelLayers;
            break;
          case "basemaps":
            panelSelector = SELECTORS.panelBasemaps;
            break;
          case "bookmarks":
            panelName = "slides";
            panelSelector = SELECTORS.panelSlides;
            break;
          case "slides":
            panelSelector = SELECTORS.panelSlides;
            break;
          case "print":
            panelSelector = SELECTORS.panelPrint;
            break;
           case "share":
            panelSelector = SELECTORS.panelShare;
            break;
          default:
            panelSelector = null;
        }
        if (panelSelector) {
          var menu = this._boilerplate.config["menu" + panelName]; // has menu visible
          if (menu) {
            query(panelSelector + ", " + panelSelector + " .panel-collapse").addClass("in");
          }
        }
      }
    },

    showValidMenusOnly:function(view) {
      if (view.map) {
        // Only show menus if layers are present
        var cnt = view.map.layers.length;
        if (cnt === 0) {
          domConstruct.destroy(SELECTORS.menuLegend.replace("#",""));
          domConstruct.destroy(SELECTORS.menuLayers.replace("#",""));
        }
        // Slides
        if (!view.map.bookmarks && !view.map.presentation) {
          domConstruct.destroy(SELECTORS.menuSlides.replace("#",""));
        }
        // Printing is not supported in 3D
        if (!this._isWebMap) {
          domConstruct.destroy(SELECTORS.menuPrint.replace("#",""));
        }
      }
    },

    setCustomCSS: function() {
      var customCSS = this._boilerplate.config.css;
      if (customCSS) {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(customCSS));
        document.head.appendChild(style);
      }
    },

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _getIsWebMap: function(webItem) {
      if (webItem && webItem.type) {
        return webItem.type === "Web Map";
      }
    },

    // Navbar Title

    _setNavbarTitleText: function() {
      if (this._boilerplate.config.title) {
        query(SELECTORS.mainTitle)[0].innerHTML = this._boilerplate.config.title;
      }
    },

    _setNavbarSubTitleText: function() {
     if (this._boilerplate.config.subtitle) {
        query(SELECTORS.titleDivider).removeClass("hidden");
        query(SELECTORS.subTitle)[0].innerHTML = this._boilerplate.config.subtitle;
      }
    },

    _setNavbarVisible: function(visible) {
      if (visible) {
        query(SELECTORS.navbar).removeClass("hidden");
      } else {
        query(SELECTORS.navbar).addClass("hidden");
      }
    },

    // Navbar Menu

    _setMenuTitles: function() {
      var i18n = this._i18n;
      query(SELECTORS.dropdownMenuTitle)[0].innerHTML = i18n.menu.title;
      query(SELECTORS.menuAbout + " a")[0].innerHTML = query(SELECTORS.menuAbout + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.about;
      query(SELECTORS.menuLegend + " a")[0].innerHTML = query(SELECTORS.menuLegend + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.legend;
      query(SELECTORS.menuLayers + " a")[0].innerHTML = query(SELECTORS.menuLayers + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.layers;
      query(SELECTORS.menuBasemaps + " a")[0].innerHTML = query(SELECTORS.menuBasemaps + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.basemaps;
      query(SELECTORS.menuSlides + " a")[0].innerHTML = query(SELECTORS.menuSlides + " a")[0].innerHTML + "&nbsp;" + (this._isWebMap ? i18n.menu.items.bookmarks : i18n.menu.items.slides);
      query(SELECTORS.menuShare + " a")[0].innerHTML = query(SELECTORS.menuShare + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.share;
      query(SELECTORS.menuPrint + " a")[0].innerHTML = query(SELECTORS.menuPrint + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.print;
      query(SELECTORS.menuToggleNav + " a")[0].innerHTML = query(SELECTORS.menuToggleNav + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.toggleNav;
    },

    // Panels

    _setPanelTitles: function() {
      var i18n = this._i18n;
      query(SELECTORS.panelAbout + " " + SELECTORS.panelTitle)[0].innerHTML = i18n.menu.items.about;
      query(SELECTORS.panelLegend + " " + SELECTORS.panelTitle)[0].innerHTML = i18n.menu.items.legend;
      query(SELECTORS.panelLayers + " " + SELECTORS.panelTitle)[0].innerHTML = i18n.menu.items.layers;
      query(SELECTORS.panelBasemaps + " " + SELECTORS.panelTitle)[0].innerHTML = i18n.menu.items.basemaps;
      query(SELECTORS.panelSlides + " " + SELECTORS.panelTitle)[0].innerHTML = (this._isWebMap ? i18n.menu.items.bookmarks : i18n.menu.items.slides);
      query(SELECTORS.panelPrint + " " + SELECTORS.panelTitle)[0].innerHTML = i18n.menu.items.print;
      query(SELECTORS.panelShare + " " + SELECTORS.panelTitle)[0].innerHTML = i18n.menu.items.share;
    },

    _setMenusVisible: function(boilerplate) {
      var boilerplate = this._boilerplate;
      // Remove main menu if no menus are visible
      if (boilerplate.config.menuabout === false && boilerplate.config.menulegend === false && boilerplate.config.menulayers === false && boilerplate.config.menubasemaps === false && boilerplate.config.menutogglenav === false && boilerplate.config.menuslides === false && boilerplate.config.menubookmarks === false) {
        query(SELECTORS.dropdown).addClass("hidden");
        query(SELECTORS.title).addClass("calcite-title-left-margin");
      } else { // Hide menus, default is visible
        if (boilerplate.config.menuabout === false) {
          domConstruct.destroy(SELECTORS.menuAbout.replace("#",""));
        }
        if (boilerplate.config.menulegend === false) {
          domConstruct.destroy(SELECTORS.menuLegend.replace("#",""));
        }
        if (boilerplate.config.menulayers === false) {
          domConstruct.destroy(SELECTORS.menuLayers.replace("#",""));
        }
        if (boilerplate.config.menubasemaps === false) {
          domConstruct.destroy(SELECTORS.menuBasemaps.replace("#",""));
        }
        if (boilerplate.config.menuslides === false && boilerplate.config.menubookmarks === false) {
          domConstruct.destroy(SELECTORS.menuSlides.replace("#",""));
        } else {
          boilerplate.config.menuslides = true;
          boilerplate.config.menubookmarks = true;
        }
        if (boilerplate.config.menuprint === false) {
          domConstruct.destroy(SELECTORS.menuPrint.replace("#",""));
        }
        if (boilerplate.config.menushare === false) {
          domConstruct.destroy(SELECTORS.menuShare.replace("#",""));
        }
        if (boilerplate.config.menutogglenav === false) {
          domConstruct.destroy(SELECTORS.menuToggleNav.replace("#",""));
        }
      }
    },

    // Widgets

    _setSearchWidgetVisible: function() {
      var visible = this._boilerplate.config.searchnav;
      if (visible === false) {
        query(SELECTORS.widgetSearchContainer).addClass("hidden");
      }
    },

    // Panels

    _getAboutPanelText: function() {
      var config = this._boilerplate.config;
      var webItem = this._webItem;
      if (webItem) {
        var aboutText  = config.abouttext;
        var addSummary = config.aboutsummary;
        var addDesc = config.aboutdescription;
        var summaryText = null;
        var descriptionText = null;

        if (addDesc || addSummary) {
          descriptionText = webItem.description;
          summaryText =  webItem.snippet;
        }
        // Summary text
        if (addSummary && summaryText) {
          if (aboutText) {
            aboutText = aboutText + "<br>" +  summaryText;
          } else {
            aboutText = summaryText;
          }
        }
        // Description text
        if (addDesc && descriptionText) {
          if (aboutText) {
            aboutText = aboutText + "<br>" +  descriptionText;
          } else {
            aboutText = descriptionText;
          }
        }
        // TODO
        if (aboutText) {
          config.abouttext = aboutText;
        }
        return aboutText;
      }
    },

    _setAboutPanelText: function() {
      var aboutText = this._getAboutPanelText();
      if (aboutText) {
        // boilerplate.config.abouttext = aboutText; // TODO
        query(SELECTORS.panelAbout + " " + SELECTORS.panelBody)[0].innerHTML = aboutText;
      }
    },

    // Basemaps

    _setDefaultBasemap: function(view) {
      this._defaultBasemapId;
      view.when(function(){
        this._defaultBasemap = view.map.basemap;
      }.bind(this));
    },

    _setBasemapEvents: function(view) {
      if (view) {
        query("#selectBasemapPanel").on("change", function(e) {
          if (e.target.value === "Default") {
            view.map.basemap = this._defaultBasemap;
          } else {
            view.map.basemap = e.target.value;
          }
        }.bind(this));
      }
    },

    _setBasemapPanel: function(view) {
      if (view) {
        var id = "select";
        var title = "--- " + this._i18n.basemaps.select + " ---";
        // Add select option
        //var optionsHtml = "<option value='" + id + "'" + title + "</option>";
        var optionsHtml = "<option value='Default' selected>Default</option>";

        // Add all basemap options
        for (var key in basemapDefs) {
          if (basemapDefs.hasOwnProperty(key)){
            id = basemapDefs[key].id;
            title = basemapDefs[key].title;
            var option = "<option value='" + id + "'" + ">" + (id.indexOf("vector") > -1 ? "Vector " : "") + title + "</option>";
            optionsHtml += option;
          }
        }
        // Set HTML
        query("#selectBasemapPanel")[0].innerHTML = optionsHtml;
        this._setBasemapEvents(view);
      }
    },

    // Slides

    _createSlidesFromBookmarks: function(bookmarks) {
      var slides = new Collection();
      if (bookmarks) {
        for (var i = 0; i < bookmarks.length; i++) {
          var bookmark = bookmarks.items[i];
          var extent = new Extent({
                xmin: bookmark.extent.xmin,
                xmax: bookmark.extent.xmax,
                ymin: bookmark.extent.ymin,
                ymax: bookmark.extent.ymax,
                spatialReference: {wkid: bookmark.extent.spatialReference.wkid}
              });
          var slide = new Slide({
            id: bookmark.name.replace(/\s+/g, '_'),
            title: {text: bookmark.name},
            viewpoint: new Viewpoint({
              targetGeometry: extent
            }),
            thumbnail: {url: "assets/bookmark.png"}
          });
          slides.add(slide);
        }
      }
      return slides;
    },

    _setSlidesPanel: function(view, webMapOrWebScene) {
      if (view && webMapOrWebScene) {

        // Prevent auto-start - configurable option?
        query(SELECTORS.carouselSlides).carousel({interval: false});

        // Build the slides when the view is ready
        view.when(function(view) {

          var slides;
          var isWebMap = this._isWebMap;

          var slideMap;

          function goToSlide(slide) {
            if (slide) {
              if (isWebMap) { // Map
                view.goTo({target: slide.viewpoint.targetGeometry});
              } else { // Scene
               slide.applyTo(view);
              }
            }
          }

          if (isWebMap) { // Map
            slides = this._createSlidesFromBookmarks(webMapOrWebScene.bookmarks);
            slideMap = new Map({
              basemap: view.map.basemap
            });
          } else { // Scene
            slides = webMapOrWebScene.presentation.slides;
          }

          // Create html
          if (slides && slides.length > 0) {
            var carouselIndicators = query(SELECTORS.carouselSlides + " .carousel-indicators")[0];
            var carouselInner = query(SELECTORS.carouselSlides + " .carousel-inner")[0];

            slides.forEach(function(slide, i) {
              var active = i === 0 ? "active" : "";
              var indicator = "<li data-target='#carouselSlides' data-slide-to=" + i + " data-toggle='tooltip' data-placement='bottom' title='" + slide.title.text + "' class='" + active + "'></li>";
              domConstruct.place(indicator, carouselIndicators, i);
              // FF to slide indicator
              query(SELECTORS.carouselSlides + " [data-slide-to='" + i + "']").on("click", function() {
                goToSlide(slide);
                query(SELECTORS.carouselSlides).carousel(i);
              });
              var item;
              if (isWebMap) {
                var mapId = slide.id + "map" + i;
                item = "<div id='" + slide.id + "' class='item " + active + "'><div class='slide-map' id='" + mapId + "'><div class='carousel-caption'>" + slide.title.text + "</div></div>";
              } else {
                item = "<div id='" + slide.id + "' class='item " + active + "'><img src=" + slide.thumbnail.url + "><div class='carousel-caption'>" + slide.title.text + "</div></div>";
              }
              domConstruct.place(item, carouselInner, i);

              // Create a view for each slide
              if (isWebMap) {
                var slideView = new MapView({
                  container: mapId,
                  map: slideMap,
                  ui: {components: []},
                  extent: slide.viewpoint.targetGeometry
                });
                slideView.when(function(){
                  slideView.constraints = {
                    minScale: slideView.scale,
                    maxScale: slideView.scale,
                    rotationEnabled: false
                  }
                });
              }
            }.bind(this));

            // Zoom to slide after it is slid
            query(SELECTORS.carouselSlides).on("slid.bs.carousel", function(e) {
              var id = query(SELECTORS.carouselSlides + " .item.active")[0].id;
              if (slides) {
                var slide = slides.find(function(slide) {
                  return slide.id === id;
                });
                goToSlide(slide);
              }
            });

          } else {
            query(SELECTORS.menuSlides).addClass("hidden");
            query(SELECTORS.panelSlides).addClass("hidden");
          }
        }.bind(this));
      } else {
        query(SELECTORS.menuSlides).addClass("hidden");
        query(SELECTORS.panelSlides).addClass("hidden");
      }
    },


    // Bootstrap tooltips

    _setTooltips: function(view) {
      if (view) {
        view.when(function() {
          query('[data-toggle="tooltip"]').tooltip({
            "show": 100,
            "hide": 100,
            container: "panelSlides"
          });
        })
      }
    }

  })
});
