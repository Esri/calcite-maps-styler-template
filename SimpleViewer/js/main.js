define([
  "dojo/ready",
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/_base/kernel",
  "dojo/_base/array",
  "dojo/_base/Color",
  "esri/arcgis/utils",
  "esri/urlUtils",
  "dojo/on",
  "dojo/has",
  "dojo/sniff",
  "dijit/registry",
  "application/Drawer",
  "application/MapUrlParams",
  "esri/dijit/Search",
  "application/SearchSources",
  "esri/tasks/locator",
  "esri/lang",
  "esri/dijit/Legend",
  "dojo/dom-class",
  "dojo/dom-style",
  "dojo/dom",
  "dojo/query",
  "dojo/dom-construct",
  "esri/dijit/LocateButton",
  "esri/dijit/HomeButton",
  "esri/layers/FeatureLayer"
], function(
  ready,
  declare, lang, kernel,
  array, Color,
  arcgisUtils, urlUtils,
  on,
  has, sniff,
  registry,
  Drawer,
  MapUrlParams,
  Search, SearchSources,
  Locator,
  esriLang,
  Legend,
  domClass, domStyle,
  dom,
  query,
  domConstruct,
  LocateButton, HomeButton,
  FeatureLayer
) {
  return declare("", null, {
    config: {},
    theme: null,
    color: null,
    paneltheme: null,
    startup: function(config) {
      // Set lang attribute to current locale
      document.documentElement.lang = kernel.locale;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      this.config = config;
      // responsive drawer
      var rtl = (query(".esriRTL").length > 0) ? "rtl" : "ltr";
      this._drawer = new Drawer({
        showDrawerSize: 820,
        borderContainer: "border_container",
        contentPaneCenter: "cp_center",
        contentPaneSide: "cp_left",
        toggleButton: "toggle_button",
        direction: rtl
      });

      this._drawer.startup();

      // document ready
      ready(lang.hitch(this, function() {

        this.theme = this.setColor(this.config.theme);
        this.color = this.setColor(this.config.color);
        this.paneltheme = this.setColor(this.config.paneltheme);
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
          promise = this._createWebMap(itemInfo, urlParams);
        }), lang.hitch(this, function(error) {
          console.log(error);
        }));

      }));
    },
    _mapLoaded: function() {

      // remove loading class
      domClass.remove(dom.byId("ac-container"), "node-hidden");
      domClass.remove(document.body, "app-loading");


      //Add the geocoder if search is enabled
      if (this.config.search) {
        var searchOptions = {
          map: this.map,
          useMapExtent: this.config.searchExtent,
          itemData: this.config.response.itemInfo.itemData
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

        var search = new Search(createdOptions, domConstruct.create("div"));

        search.startup();

        if (search && search.domNode) {
          domConstruct.place(search.domNode, "search");
        }

      }
      //Feature Search or find (if no search widget)
      if ( (this.config.find || (this.config.customUrlLayer.id !== null && this.config.customUrlLayer.fields.length > 0 && this.config.customUrlParam !== null)) ) {
        require(["esri/dijit/Search"], lang.hitch(this, function(Search) {
          var source = null,
            value = null,
            searchLayer = null;

          var urlObject = urlUtils.urlToObject(document.location.href);
          urlObject.query = urlObject.query || {};
          urlObject.query = esriLang.stripTags(urlObject.query);
          var customUrl = null;
          for (var prop in urlObject.query) {
            if (urlObject.query.hasOwnProperty(prop)) {
              if (prop.toUpperCase() === this.config.customUrlParam.toUpperCase()) {
                customUrl = prop;
              }
            }
          }

          //Support find or custom url param
          if (this.config.find) {
            value = decodeURIComponent(this.config.find);
          } else if (customUrl) {

            value = urlObject.query[customUrl];
            searchLayer = this.map.getLayer(this.config.customUrlLayer.id);
            if (searchLayer) {

              var searchFields = this.config.customUrlLayer.fields[0].fields;
              source = {
                exactMatch: true,
                outFields: ["*"],
                featureLayer: searchLayer,
                displayField: searchFields[0],
                searchFields: searchFields
              };
            }
          }
          var urlSearch = new Search({
            map: this.map
          });

          if (source) {
            urlSearch.set("sources", [source]);
          }
          urlSearch.on("load", lang.hitch(this, function() {
            urlSearch.search(value).then(lang.hitch(this, function() {
              on.once(this.map.infoWindow, "hide", lang.hitch(this, function() {
                urlSearch.clear();
                urlSearch.destroy();
              }));
            }));
          }));
          urlSearch.startup();

        }));
      }


      //Add the location button if enabled
      if (this.config.locate && document.location.protocol === "https:") {
        var location = new LocateButton({
          map: this.map
        }, domConstruct.create("div", {
          id: "locateDiv"
        }, "mapDiv"));
        location.startup();
      } else {
        domClass.add(document.body, "nolocate");
      }
      //Add the home button if configured
      if (this.config.home) {
        var homeButton = new HomeButton({
          map: this.map
        }, domConstruct.create("div", {
          id: "homeDiv"
        }, "mapDiv"));
        homeButton.startup();
      }


      //Define legend panel content
      var noLegend = null,
        noAbout = null;
      var layerInfo = arcgisUtils.getLegendLayers(this.config.response);
      if (layerInfo && layerInfo.length && layerInfo.length > 0) {
        dom.byId("legend-label").innerHTML = this.config.i18n.tools.legend;
        var legend_div = domConstruct.create("div", {
          className: "panel_content"
        }, dom.byId("legendDiv"));

        var legend = new Legend({
          map: this.map,
          layerInfos: layerInfo
        }, legend_div);
        legend.startup();
      } else {
        domClass.add(dom.byId("legend-cont"), "node-hidden");
        noLegend = true;
      }



      //Define about panel content

      var about_content = this.config.about || this.config.itemInfo.item.description;
      if (about_content !== null && about_content !== "") {
        dom.byId("about-label").innerHTML = this.config.i18n.tools.about;
        domConstruct.create("div", {
          innerHTML: about_content,
          className: "panel_content"
        }, dom.byId("aboutDiv"));
      } else {
        domClass.add(dom.byId("about-cont"), "node-hidden");
        noAbout = true;
      }
      //hide arrows if legend or about if both options aren't shown
      if (noAbout || noLegend) {
        query(".ac-container").forEach(function(node) {
          domClass.add(node, "no-label");
        });
      }
      if (noAbout && noLegend) { //hide drawer
        domStyle.set(dom.byId("toggle_button"), "display", "none");
        domStyle.set(dom.byId("cp_left"), "display", "none");
        query(".top-bar-title").style("margin-left", "5px");
        registry.byId("border_container").layout();
      }
      this._updateTheme();

    },
    //create a map based on the input web map id
    _createWebMap: function(itemInfo, params) {

      arcgisUtils.createMap(itemInfo, "mapDiv", {
        mapOptions: params.mapOptions,
        editable: false,
        usePopupManager: true,
        layerMixins: this.config.layerMixins || [],
        bingMapsKey: this.config.bingmapskey
      }).then(lang.hitch(this, function(response) {

        //define the application title
        var title = this.config.title || response.itemInfo.item.title;
        dom.byId("title").innerHTML = title;
        document.title = title;


        this.map = response.map;
        domClass.add(this.map.infoWindow.domNode, "light");
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
        this.config.response = response;

        // make sure map is loaded
        if (this.map.loaded) {
          // do something with the map
          this._mapLoaded();
        } else {
          on.once(this.map, "load", lang.hitch(this, function() {
            // do something with the map
            this._mapLoaded();
          }));
        }
      }), lang.hitch(this, function(error) {
        //an error occurred - notify the user. In this example we pull the string from the
        //resource.js file located in the nls folder because we've set the application up
        //for localization. If you don't need to support multiple languages you can hardcode the
        //strings here and comment out the call in index.html to get the localization strings.
        if (this.config && this.config.i18n) {
          alert(this.config.i18n.map.error + ": " + error.message);
        } else {
          alert("Unable to create map: " + error.message);
        }
      }));
    },
    setColor: function(value) {
      var colorValue = null;
      var rgb = Color.fromHex(value).toRgb();

      if (has("ie") == 8) {
        colorValue = value;
      } else {
        rgb.push(0.9);
        colorValue = Color.fromArray(rgb);
      }
      return colorValue;

    },


    _updateTheme: function() {
      //Apply the configured theme to the template
      //Add the bg class to any elements that you want to display using the specified background color
      //Apply the fc class to elements that should display using the specified font color
      query(".bg").style("backgroundColor", this.theme.toString());
      query(".bg").style("color", this.color.toString());
      query(".fc").style("color", this.color.toString());
      query(".ac-container label:after").style("color", this.color.toString());


      //Style the popup title bar to use the theme color.
      query(".esriPopup .pointer").style("backgroundColor", this.theme.toString());
      query(".esriPopup .titlePane").style("backgroundColor", this.theme.toString());


      query(".esriPopup .titlePane").style("color", this.color.toString());
      query(".esriPopup. .titleButton").style("color", this.color.toString());



      //Query for the title areas in the drawer and  apply the panel theme.
      query(".ab").style("backgroundColor", this.paneltheme.toString());

      this._drawer.resize();
      registry.byId("border_container").resize();
    },
    _setLevel: function(options) {
      var level = this.config.level;
      //specify center and zoom if provided as url params
      if (level) {
        options.zoom = level;
      }
      return options;
    },

    _setCenter: function(options) {
      var center = this.config.center;
      if (center) {
        var points = center.split(",");
        if (points && points.length === 2) {
          options.center = [parseFloat(points[0]), parseFloat(points[1])];
        }
      }
      return options;
    },

    _setExtent: function(info) {
      var e = this.config.extent;
      //If a custom extent is set as a url parameter handle that before creating the map
      if (e) {
        var extArray = e.split(",");
        var extLength = extArray.length;
        if (extLength === 4) {
          info.item.extent = [[parseFloat(extArray[0]), parseFloat(extArray[1])], [parseFloat(extArray[2]), parseFloat(extArray[3])]];
        }
      }
      return info;
    }
  });
});
