/*global define,document */
/*jslint sloppy:true,nomen:true */
/*
 | Copyright 2014 Esri
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
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/_base/array",

  "dojo/parser",
  "dojo/Deferred",
  "dojo/query",
  "dojo/on",

  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dojo/dom-style",

  "dijit/layout/ContentPane",
  "dijit/registry",

  "esri/arcgis/utils",
  "esri/tasks/query",

  "esri/layers/FeatureLayer",
  "esri/graphicsUtils",

  "application/MapUrlParams",

  "dojo/domReady!"
], function(
  declare, lang,
  array,
  parser,
  Deferred,
  domQuery, on,
  dom, domClass, domConstruct, domStyle,
  ContentPane,
  registry,
  arcgisUtils,
  Query,
  FeatureLayer,
  graphicsUtils,
  MapUrlParams
) {
  return declare(null, {
    config: {},
    startup: function(config) {
      parser.parse();
      var promise;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        this.config = config;
        //supply either the webmap id or, if available, the item info
        var itemInfo = this.config.itemInfo || this.config.webmap;


        if (this.config.sharedThemeConfig && this.config.sharedThemeConfig.attributes && this.config.sharedThemeConfig.attributes.theme) {
          var sharedTheme = this.config.sharedThemeConfig.attributes;
          this.config.logo = sharedTheme.layout.header.component.settings.logoUrl || sharedTheme.theme.logo.small || null;
          this.config.color = sharedTheme.theme.text.color;
          this.config.theme = sharedTheme.theme.body.bg;
        }
        // Create and add custom style sheet
        if (this.config.customstyle) {
          var style = document.createElement("style");
          style.appendChild(document.createTextNode(this.config.customstyle));
          document.head.appendChild(style);
        }
        this._updateColorScheme();
        this._addLocalizedText();

        // Check for center, extent, level and marker url parameters.
        var mapParams = new MapUrlParams({
          center: this.config.center || null,
          extent: this.config.extent || null,
          level: this.config.level || null,
          marker: this.config.marker || null,
          mapSpatialReference: itemInfo.itemData.spatialReference,
          defaultMarkerSymbol: this.config.markerSymbol,
          defaultMarkerSymbolWidth: this.config.markerSymbolWidth,
          defaultMarkerSymbolHeight: this.config.markerSymbolHeight,
          geometryService: this.config.helperServices.geometry.url
        });

        mapParams.processUrlParams().then(lang.hitch(this, function(urlParams) {
          promise = this._createWebMap(itemInfo, urlParams);
        }), lang.hitch(this, function(error) {
          this.reportError(error);
        }));

      } else {
        var error = new Error("Main:: Config is not defined");
        this.reportError(error);
        var def = new Deferred();
        def.reject(error);
        promise = def.promise;
      }
      return promise;
    },
    reportError: function(error) {
      // remove loading class from body
      domClass.remove(document.body, "app-loading");
      domClass.add(document.body, "app-error");
      var node = dom.byId("loading_message");
      if (node) {
        node.innerHTML = error;
      }

      return error;
    },
    _addLocalizedText: function() {
      dom.byId("closeInfo").innerHTML = this.config.buttontext || this.config.i18n.closebutton.label;
      dom.byId("legendInfo").title = this.config.i18n.toolbar.legendLabel;
      dom.byId("toggleInfo").title = this.config.i18n.toolbar.infoLabel;
      dom.byId("next").title = this.config.i18n.navigation.nextLabel;
      dom.byId("prev").title = this.config.i18n.navigation.previousLabel;
    },
    _updateColorScheme: function() {
      // Update app to use color scheme defined in config
      domQuery(".navcolor").addClass("swiper-button-" + this.config.navcolor);
      domQuery(".nav-btn").style("color", this.config.textcolor);
      domStyle.set(dom.byId("sidebar"), "background-color", this.config.bgcolor);
      domQuery(".fgcolor").style("color", this.config.textcolor);
      domQuery(".hzLine").style("background-color", this.config.textcolor);
      domQuery("#closeInfo").style({
        "background": this.config.buttoncolor,
        "border-color": this.config.buttoncolor,
        "background-image": "none",
        "color": this.config.buttontextcolor
      });
    },
    // create a map based on the input web map id
    _createWebMap: function(itemInfo, params) {
      // Optionally define additional map config here for example you can
      // turn the slider off, display info windows, disable wraparound 180,
      // slider position and more.
      params.mapOptions.showInfoWindowOnClick = false;
      return arcgisUtils.createMap(itemInfo, "mapDiv", {
        mapOptions: params.mapOptions || {},
        usePopupManager: true,
        layerMixins: this.config.layerMixins || [],
        editable: this.config.editable,
        bingMapsKey: this.config.bingKey
      }).then(lang.hitch(this, function(response) {
        this.map = response.map;


        dom.byId("title").innerHTML = this.config.title || response.itemInfo.item.title;
        dom.byId("description").innerHTML = this.config.description || response.itemInfo.item.description;

        if (params.markerGraphic) {
          // Add a marker graphic with an optional info window if
          // one was specified via the marker url parameter
          require(["esri/layers/GraphicsLayer"], lang.hitch(this, function(GraphicsLayer) {
            var markerLayer = new GraphicsLayer();

            this.map.addLayer(markerLayer);
            markerLayer.add(params.markerGraphic);

            if (params.markerGraphic.infoTemplate) {
              this.map.infoWindow.setFeatures([params.markerGraphic]);
              this.map.infoWindow.show(params.markerGraphic.geometry);
            }
            this.map.centerAt(params.markerGraphic.geometry);
          }));
        }

        if (this.config.legend) {
          // enable legend button and add legend
          require(["esri/dijit/Legend"], lang.hitch(this, function(Legend) {
            if (!Legend) {
              return;
            }
            //get legend layers
            var layers = arcgisUtils.getLegendLayers(response);
            if (layers && layers.length > 0) {
              domClass.remove(dom.byId("legendInfo"), "hide");
              var legend = new Legend({
                map: this.map,
                layerInfos: layers
              }, "legendDiv");
              legend.startup();
            }
          }));
        }
        // Get the analysis layer and make sure it supports statistics

        var analysisLayer = null;
        if (this.config.layerInfo.id !== null && this.config.layerInfo.fields.length > 0) {
          analysisLayer = this.map.getLayer(this.config.layerInfo.id);
        } else {
          response.itemInfo.itemData.operationalLayers.forEach(lang.hitch(this, function(l) {
            if (l.layerType === "ArcGISFeatureLayer" && l.layerObject) {
              analysisLayer = l.layerObject;
              this.config.layerInfo.fields = [l.layerObject.fields[0].name];
            }
          }));
        }
        if (analysisLayer) {
          analysisLayer.styling = false;
          // Setup selection color, opacity, size
          var style = document.createElement("style");
          var customStyle = "path[data-selected] {stroke:" + this.config.symbolcolor + ";stroke-width: " + this.config.symbolsize + ";stroke-opacity: " + this.config.symbolopacity + ";}";
          style.appendChild(document.createTextNode(customStyle));
          document.head.appendChild(style);
          this._calculateStatistics(analysisLayer);
        } else {
          console.log(this.config.i18n.errors.layerNotFound);
          this.reportError(this.config.i18n.errors.layerNotFound);
        }
        return response;
      }), this.reportError(this.config.i18n.map.error));
    },
    _calculateStatistics: function(layer) {
      // does the layer support adv queries (necessary for order by)?
      if (layer && layer.type && layer.type === "Feature Layer") {
        if (layer.supportsAdvancedQueries) {
          domClass.add(document.body, "app-loading");
          var query = new Query();
          query.where = "1=1";
          query.returnGeometry = false;
          query.orderByFields = [this.config.layerInfo.fields[0] + " " + this.config.order]; // field + ASC or DESC
          query.outFields = ["*"];

          layer.queryFeatures(query, lang.hitch(this, function(results) {
            // get top x features and create slides.
            domClass.remove(document.body, "app-loading");
            var topResults = results.features.slice(0, this.config.count);
            // enable explore button
            domClass.remove("closeInfo", "disabled");
            on.once(dom.byId("closeInfo"), "click", lang.hitch(this, function() {
              // hide the info panel
              domClass.add("titleHeader", "hide");
              domClass.remove("slideNav", "hide");
              this._createFeatureSlides(topResults, layer);
            }));
          }), lang.hitch(this, function(error) {
            console.log("Error", error);
            this.reportError(error);
          }));
        } else {
          this.reportError(this.config.layer + " does not support advanced queries");
          console.log("Advanced Queries not supported");
        }
      }
    },
    _createFeatureSlides: function(features, layer) {
      features.forEach(lang.hitch(this, function(feature, i) {
        var idAttributeField = feature.getLayer().objectIdField;
        var featureContent = feature.getContent();
        var featureTitle = feature.getTitle();
        // create slides and add to the slide container
        var slide = domConstruct.create("div", {
          className: "swiper-slide",
          id: feature.attributes[idAttributeField]
        }, "slideWrapper");
        var pane = new ContentPane({
          tooltip: feature.getTitle() || feature.attributes[idAttributeField],
          title: featureTitle, //i + 1,
          content: featureContent
        }, domConstruct.create("div"));
        pane.startup();
        domConstruct.place(pane.domNode, dom.byId(slide.id));
      }));
      var featureSwipe = new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
      });
      //setup click handle for button to toggle title and desc on small devices
      on(dom.byId("toggleInfo"), "click", lang.hitch(this, function(e) {
        this._toggleInfoPanel("info");
      }));
      // Button on info dialog that closes info panel
      on(dom.byId("closeInfo"), "click", lang.hitch(this, function(e) {
        this._toggleInfoPanel("popup");
      }));
      if (this.config.legend) {
        on(dom.byId("legendInfo"), "click", lang.hitch(this, function() {
          this._toggleInfoPanel("legend");
        }));
        on(dom.byId("closeLegend"), "click", lang.hitch(this, function() {
          this._toggleInfoPanel("popup");
        }));
      }
      // Navigate to the first feature
      if (featureSwipe && featureSwipe.slides && featureSwipe.slides.length && featureSwipe.slides.length > 0) {
        this._selectFeatures(featureSwipe.slides[featureSwipe.activeIndex].id, layer);
      }
      featureSwipe.on("SlideChangeStart", lang.hitch(this, function() {
        this._selectFeatures(featureSwipe.slides[featureSwipe.activeIndex].id, layer);
      }));
    },
    _toggleInfoPanel: function(active) {
      domQuery(".panel-nav").addClass("hide");
      // remove just the active
      if (active === "legend") {
        domClass.remove("legendPanel", "hide");
      } else if (active === "popup") {
        domClass.remove("popupContainer", "hide");
        domClass.remove("slideNav", "hide");
      } else { // activate info
        domClass.remove("titleHeader", "hide");
      }
    /*if (active === "legend") {
      //hide slide nav, title area and popup and show legend
      domClass.add("slideNav", "hide");
      domClass.add("titleHeader", "hide");
      domClass.add("popupContainer", "hide");
      domClass.remove("legendPanel", "hide");
    } else if (active === "info") {
      // hide slide nav, legend and popup and show title area
      domClass.add("slideNav", "hide");
      domClass.remove("titleHeader", "hide");
      domClass.add("popupContainer", "hide");
      domClass.add("legendPanel", "hide");
    } else if (active === "popup") {
      // show slide nav and hide title area and legend
      domClass.remove("slideNav", "hide");
      domClass.add("titleHeader", "hide");
      domClass.remove("popupContainer", "hide");
      domClass.add("legendPanel", "hide");
    }*/
    /*domClass.toggle(dom.byId("titleHeader"), "hide");
    domClass.toggle("slideNav", "hide");
    if (this.config.legend) {
      domClass.add("legendPanel", "hide");
    }*/
    },
    _selectFeatures: function(id, layer) {
      var q = new Query();
      q.objectIds = [id];
      layer.selectFeatures(q).then(lang.hitch(this, function() {
        var sel = layer.getSelectedFeatures();
        if (sel && sel.length && sel.length > 0) {
          var extent = graphicsUtils.graphicsExtent(sel);
          this.map.setExtent(extent, true);
        }
      }));
    }
  });
});
