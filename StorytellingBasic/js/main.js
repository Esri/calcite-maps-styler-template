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
  "dojo/_base/kernel",

  "dojo/Deferred",
  "dojo/query",
  "dojo/on",

  "dojo/fx/Toggler",
  "dojo/fx",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dojo/dom-style",

  "dijit/registry",

  "esri/arcgis/utils",
  "esri/domUtils",
  "esri/lang",

  "esri/dijit/HomeButton",

  "application/MapUrlParams",

  "dojo/domReady!"
], function(
  declare, lang, kernel,
  Deferred,
  query, on,
  Toggler, coreFx,
  dom, domAttr, domClass, domConstruct, domStyle,
  registry,
  arcgisUtils,
  domUtils,
  esriLang,
  HomeButton,
  MapUrlParams
) {
  return declare(null, {
    config: {},
    startup: function(config) {
      // Set lang attribute to current locale
      document.documentElement.lang = kernel.locale;

      var promise;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        this.config = config;
        if (this.config.sharedThemeConfig && this.config.sharedThemeConfig.attributes && this.config.sharedThemeConfig.attributes.theme) {
          var sharedTheme = this.config.sharedThemeConfig.attributes;
          console.log(sharedTheme);
          this.config.logo = sharedTheme.layout.header.component.settings.logoUrl || sharedTheme.theme.logo.small || null;
          if (this.config.logo !== null) {
            this.config.logoLink = null;
          }
          this.config.background = sharedTheme.theme.body.bg;
          this.config.color = sharedTheme.theme.text.color;
          this.config.legendTitleBackground = sharedTheme.theme.brand.primary;
          this.config.subtitleColor = sharedTheme.theme.brand.secondary;
        }

        // Create and add custom style sheet
        if (this.config.customstyle) {
          var style = document.createElement("style");
          style.appendChild(document.createTextNode(this.config.customstyle));
          document.head.appendChild(style);
        }

        // Hide legend container if not enabled
        dom.byId("legTogText").innerHTML = this.config.i18n.legendToggle.label;
        if (!this.config.legend) {
          domUtils.hide(dom.byId("legendCon"));
        }
        // Hide header if embed is specified
        if (this.config.embed || this.config.headerHeight == "0") {
          domUtils.hide(dom.byId("header"));
          registry.byId("mainWindow").layout();
        } else {
          // Set header height
          domStyle.set(dom.byId("header"), "height", this.config.headerHeight + "px");
          registry.byId("mainWindow").layout();
        }

        //supply either the webmap id or, if available, the item info
        var itemInfo = this.config.itemInfo || this.config.webmap;
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
          this._createWebMap(itemInfo, urlParams);
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
      // an error occurred - notify the user. In this example we pull the string from the
      // resource.js file located in the nls folder because we've set the application up
      // for localization. If you don't need to support multiple languages you can hardcode the
      // strings here and comment out the call in index.html to get the localization strings.
      // set message
      var node = dom.byId("loading_message");
      if (node) {
        if (this.config && this.config.i18n) {
          node.innerHTML = this.config.i18n.map.error + ": " + error.message;
        } else {
          node.innerHTML = "Unable to create map: " + error.message;
        }
      }
      return error;
    },

    // create a map based on the input web map id
    _createWebMap: function(itemInfo, params) {

      // create webmap from item
      return arcgisUtils.createMap(itemInfo, "mapDiv", {
        mapOptions: params.mapOptions,
        usePopupManager: true,
        layerMixins: this.config.layerMixins || [],
        editable: this.config.editable,
        bingMapsKey: this.config.bingKey
      }).then(lang.hitch(this, function(response) {

        this.map = response.map;
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
          }));

        }
        // remove loading class from body
        domClass.remove(document.body, "app-loading");
        this._updateTheme();

        // Set default title and sub title
        this.config.title = this.config.title || response.itemInfo.item.title || "";
        this.config.subtitle = this.config.subtitle || response.itemInfo.item.snippet || "";

        document.title = esriLang.stripTags(this.config.title);
        if (this.config.showTitle) {
          dom.byId("title").innerHTML = esriLang.stripTags(this.config.title);
        }
        if (this.config.showSubTitle) {
          dom.byId("subtitle").innerHTML = esriLang.stripTags(this.config.subtitle);
        }
        // Add the logo
        if (this.config.showLogo && this.config.logo) {
          if (this.config.logoLink) {
            dom.byId("logoLink").href = this.config.logoLink;
          }
          dom.byId("logoImg").src = this.config.logo;
        }
        // Add the social media text to the header
        if (this.config.showSocialText && this.config.socialText) {
          domConstruct.create("a", {
            href: this.config.socialLink || "#",
            target: "_blank",
            innerHTML: this.config.socialText
          }, "linkContainer", "first");
        }
        // Show social icons
        if (this.config.showSocialIcons) {
          domAttr.set("facebook", "title", this.config.i18n.social.facebook);
          domAttr.set("twitter", "title", this.config.i18n.social.twitter);
          domAttr.set("link", "title", this.config.i18n.social.link);

          query(".shareIcon").style("display", "inline-block");
          // Setup click events for sharing nodes
          require(["application/Share"], lang.hitch(this, function(Share) {
            var share = new Share({
              config: this.config,
              map: this.map,
              title: this.config.title,
              summary: this.config.subtitle
            });
            query(".shareIcon").on("click", lang.hitch(this, function(node) {
              share.shareLink(node);
            }));
          }));
        }

        // Add scalebar
        if (this.config.scalebar) {
          require(["esri/dijit/Scalebar"], lang.hitch(this, function(Scalebar) {
            var scalebar = new Scalebar({
              map: this.map,
              scalebarUnit: this.config.units
            });
          }));
        }
        // Add Home Button to zoom slider
        var homeButton = new HomeButton({
          map: this.map
        }, domConstruct.create("div", {}, query(".esriSimpleSliderIncrementButton")[0], "after"));
        homeButton.startup();

        // Add legend
        if (this.config.legend) {
          domUtils.hide(dom.byId("legendDiv"));
          require(["esri/dijit/Legend"], lang.hitch(this, function(Legend) {
            var layerInfo = arcgisUtils.getLegendLayers(response);
            if (layerInfo.length === 0) {
              // hide the legend
              domUtils.hide(dom.byId("legendCon"));
            } else {

              // Toggle legend display
              var toggler = new Toggler({
                node: "legendDiv",
                showFunc: coreFx.wipeIn,
                hideFunc: coreFx.wipeOut
              });

              on(dom.byId("legendToggle"), "click", lang.hitch(this, function() {
                var displayMode = domStyle.get(dom.byId("legendDiv"), "display");
                if (displayMode === "none") {
                  domClass.remove("legToggleIcon", "icon-down");
                  domClass.add("legToggleIcon", "icon-up");
                  toggler.show();
                } else {
                  domClass.add("legToggleIcon", "icon-down");
                  domClass.remove("legToggleIcon", "icon-up");
                  toggler.hide();
                }
              }));

              var legend = new Legend({
                map: this.map,
                layerInfos: layerInfo
              }, "legendDiv");
              legend.startup();
            }
          }));

        }

        // Add search
        if (this.config.search) {
          require(["esri/dijit/Search", "esri/tasks/locator", "application/SearchSources"], lang.hitch(this, function(Search, Locator, SearchSources) {
            var searchOptions = {
              map: this.map,
              useMapExtent: this.config.searchExtent,
              itemData: response.itemInfo.itemData
            };
            if (this.config.searchConfig) {
              searchOptions.applicationConfiguredSources = this.config.searchConfig.sources || [];
            } else if (this.config.searchLayers) {
              var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);
              searchOptions.configuredSearchLayers = configuredSearchLayers;
              searchOptions.geocoders = this.config.locationSearch ? this.config.helperServices.geocode : [];
            }
            var searchSources = new SearchSources(searchOptions);
            var createdOptions = searchSources.createOptions();

            if (this.config.searchConfig && this.config.searchConfig.activeSourceIndex) {
              createdOptions.activeSourceIndex = this.config.searchConfig.activeSourceIndex;
            }
            createdOptions.enableButtonMode = true;
            var search = new Search(createdOptions, domConstruct.create("div"));

            search.startup();

            if (search && search.domNode) {
              domConstruct.place(search.domNode, "search");
            }

          }));
        }

        // return for promise
        return response;
      // map has been created. You can start using it.
      // If you need map to be loaded, listen for it's load event.
      }), this.reportError);
    },
    _updateTheme: function() {
      // update app theme
      query(".fg").style("color", this.config.color.toString());
      // Alt color (subtitle, social logo)
      query(".ac").style("color", this.config.subtitleColor.toString());
      query(".bg").style("backgroundColor", this.config.background.toString());
      //query(".esriPopup .pointer").style("backgroundColor", this.config.background.toString());
      query(".esriPopup .titlePane").style({
        "backgroundColor": this.config.background.toString(),
        "color": this.config.color.toString()
      });
      query(".esriPopup. .titleButton").style("color", this.config.color.toString());
      query(".lbg").style({
        "backgroundColor": this.config.legendTitleBackground.toString()
      });
    }
  });
});
