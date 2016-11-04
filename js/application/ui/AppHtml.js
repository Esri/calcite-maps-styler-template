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
          case "basemaps":
            panelSelector = SELECTORS.panelBasemaps;
            break;
          case "slides":
            panelSelector = SELECTORS.panelSlides;
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
 
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _getIsWebMap: function(webItem) {
      if (webItem && webItem.data && webItem.data.type) {
        return webItem.data.type === "Web Map";
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
      query(SELECTORS.menuBasemaps + " a")[0].innerHTML = query(SELECTORS.menuBasemaps + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.basemaps;
      query(SELECTORS.menuSlides + " a")[0].innerHTML = query(SELECTORS.menuSlides + " a")[0].innerHTML + "&nbsp;" + (this._isWebMap ? i18n.menu.items.bookmarks : i18n.menu.items.slides);
      query(SELECTORS.menuShare + " a")[0].innerHTML = query(SELECTORS.menuShare + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.share;
      query(SELECTORS.menuToggleNav + " a")[0].innerHTML = query(SELECTORS.menuToggleNav + " a")[0].innerHTML + "&nbsp;" + i18n.menu.items.toggleNav;
    },

    // Panels

    _setPanelTitles: function() {
      var i18n = this._i18n;
      query(SELECTORS.panelAbout + " " + SELECTORS.panelTitle)[0].innerHTML = i18n.menu.items.about;
      query(SELECTORS.panelLegend + " " + SELECTORS.panelTitle)[0].innerHTML = i18n.menu.items.legend;
      query(SELECTORS.panelBasemaps + " " + SELECTORS.panelTitle)[0].innerHTML = i18n.menu.items.basemaps;
      query(SELECTORS.panelSlides + " " + SELECTORS.panelTitle)[0].innerHTML = (this._isWebMap ? i18n.menu.items.bookmarks : i18n.menu.items.slides);      
    },

    _setMenusVisible: function(boilerplate) {
      var boilerplate = this._boilerplate;
      // Remove main menu if no menus are visible
      if (boilerplate.config.menuabout === false && boilerplate.config.menulegend === false && boilerplate.config.menubasemaps === false && boilerplate.config.menutogglenav === false) {
        query(SELECTORS.mainMenu).addClass("hidden");
        query(SELECTORS.title).addClass("calcite-title-left-margin");
      } else { // Hide menus, default is visible
        if (boilerplate.config.menuabout === false) {
          query(SELECTORS.menuAbout).addClass("hidden");
        }
        if (boilerplate.config.menulegend === false) {
          query(SELECTORS.menuLegend).addClass("hidden");
        }
        if (boilerplate.config.menubasemaps === false) {
          query(SELECTORS.menuBasemaps).addClass("hidden");
        }
        if (boilerplate.config.menuslides === false) {
          query(SELECTORS.menuSlides).addClass("hidden");
        }
        if (boilerplate.config.menushare === false) {
          query(SELECTORS.menuShare).addClass("hidden");
        }
        if (boilerplate.config.menutogglenav === false) {
          query(SELECTORS.menuToggleNav).addClass("hidden");
        }
      }
    },

    // Widgets

    _setSearchWidgetVisible: function() {
      var visible = this._boilerplate.config.widgetsearchnav;
      if (visible === false) {
        query(SELECTORS.widgetSearchContainer).addClass("hidden");
      }
    },

    // Panels

    _getAboutPanelText: function() {
      var config = this._boilerplate.config;
      var webItem = this._webItem;
      if (webItem && webItem.data) {
        var aboutText  = config.abouttext;
        var addSummary = config.aboutsummary;
        var addDesc = config.aboutdescription;
        var summaryText = null;
        var descriptionText = null;
        
        if (addDesc || addSummary) {
          descriptionText = webItem.data.description;
          summaryText =  webItem.data.snippet;
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

    _setBasemapEvents: function(view) {
      if (view) {
        query("#selectBasemapPanel").on("change", function(e) {
          if (e.target.value !== "select") {
            if (this._isWebMap) {
              view.map.basemap = e.target.options[e.target.selectedIndex].dataset.vector;
            } else {
              view.map.basemap = e.target.value;  
            }
          }
        }.bind(this));
      }
    },

    _setBasemapPanel: function(view) {
      if (view) {
        var isWebMap = this._isWebMap;
        query("#selectBasemapPanel [data-vector=select]")[0].innerHTML = "--- " + this._i18n.basemaps.select + " ---";
        query("#selectBasemapPanel [data-vector=streets-vector]")[0].innerHTML = isWebMap ? basemapDefs["streets-vector"].title : basemapDefs["streets"].title;
        query("#selectBasemapPanel [data-vector=satellite]")[0].innerHTML = basemapDefs["satellite"].title;
        query("#selectBasemapPanel [data-vector=hybrid]")[0].innerHTML = basemapDefs["hybrid"].title;
        query("#selectBasemapPanel [data-vector=national-geographic]")[0].innerHTML = basemapDefs["national-geographic"].title;
        query("#selectBasemapPanel [data-vector=topo-vector]")[0].innerHTML = isWebMap ? basemapDefs["topo-vector"].title : basemapDefs["topo"].title;
        query("#selectBasemapPanel [data-vector=oceans]")[0].innerHTML = basemapDefs["oceans"].title;
        query("#selectBasemapPanel [data-vector=gray-vector]")[0].innerHTML = isWebMap ? basemapDefs["gray-vector"].title : basemapDefs["gray"].title;
        query("#selectBasemapPanel [data-vector=dark-gray-vector]")[0].innerHTML = isWebMap ? basemapDefs["dark-gray-vector"].title : basemapDefs["dark-gray"].title;
        query("#selectBasemapPanel [data-vector=osm]")[0].innerHTML = basemapDefs["osm"].title;
        if (isWebMap) {
          query("#selectBasemapPanel [data-vector=streets-night-vector]")[0].innerHTML = basemapDefs["streets-night-vector"].title;
          query("#selectBasemapPanel [data-vector=streets-navigation-vector]")[0].innerHTML = basemapDefs["streets-navigation-vector"].title;
          query("#selectBasemapPanel [data-vector=streets-relief-vector]")[0].innerHTML = basemapDefs["streets-relief-vector"].title;
        } else {
          query("#selectBasemapPanel [data-vector=streets-night-vector]").addClass("hidden");
          query("#selectBasemapPanel [data-vector=streets-navigation-vector]").addClass("hidden");
          query("#selectBasemapPanel [data-vector=streets-relief-vector]").addClass("hidden");
        }       
      }
      this._setBasemapEvents(view);
    },

    // Slides

    _createSlidesFromBookmarks: function(bookmarks) {
      var slides = new Collection();
      if (bookmarks) {
        for (var i = 0; i < bookmarks.length; i++) {
          var bookmark = bookmarks[i];
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
            thumbnail: {url: "images/bookmark.png"}
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
        view.then(function(view) {

          var slides;
          var isWebMap = this._isWebMap;

          var slideMap;

          function goToSlide(slide) {
            if (isWebMap) { // Map
              view.goTo({target: slide.viewpoint.targetGeometry});
            } else { // Scene
             slide.applyTo(view);
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
              var indicator = `<li data-target="#carouselSlides" data-slide-to="${i}" data-toggle="tooltip" data-placement="bottom" title="${slide.title.text}" class="${active}"></li>`;
              domConstruct.place(indicator, carouselIndicators, i);
              // FF to slide indicator
              query(SELECTORS.carouselSlides + " [data-slide-to=" + i + "]").on("click", function() {
                goToSlide(slide);
                query(SELECTORS.carouselSlides).carousel(i);
              });
              var item;
              if (isWebMap) {
                var mapId = slide.id + "map";
                item = "<div id=" + slide.id + " class='item " + active + "'><div class='slide-map' id='" + mapId + "'><div class='carousel-caption'>" + slide.title.text + "</div></div>";
              } else {
                item = "<div id=" + slide.id + " class='item " + active + "'><img src=" + slide.thumbnail.url + "><div class='carousel-caption'>" + slide.title.text + "</div></div>";
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
                slideView.then(function(){
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
              var slide = slides.find(function(slide) {
                return slide.id === id;
              });
              goToSlide(slide);
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
        view.then(function() {
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
