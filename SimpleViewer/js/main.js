define(["dojo/ready", "dojo/_base/declare", "dojo/_base/lang", "dojo/_base/array", "dojo/_base/Color", "esri/arcgis/utils", "esri/urlUtils", "dojo/on", "dojo/has", "dojo/sniff", "dijit/registry", "application/Drawer", "esri/dijit/Search", "application/SearchSources", "esri/tasks/locator", "esri/lang", "esri/dijit/Legend", "dojo/dom-class", "dojo/dom", "dojo/query", "dojo/dom-construct", "esri/dijit/LocateButton", "esri/dijit/HomeButton", "esri/layers/FeatureLayer"], function (
ready, declare, lang, array, Color, arcgisUtils, urlUtils, on, has, sniff, registry, Drawer, Search, SearchSources, Locator, esriLang, Legend, domClass, dom, query, domConstruct, LocateButton, HomeButton,FeatureLayer) {
    return declare("", null, {
        config: {},
        theme: null,
        color: null,
        paneltheme: null,
        startup: function (config) {
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
            ready(lang.hitch(this, function () {

                this.theme = this.setColor(this.config.theme);
                this.color = this.setColor(this.config.color);
                this.paneltheme = this.setColor(this.config.paneltheme);
                //supply either the webmap id or, if available, the item info
                var itemInfo = this.config.itemInfo || this.config.webmap;

                //If a custom extent is set as a url parameter handle that before creating the map
                if (this.config.extent) {
                    var extArray = decodeURIComponent(this.config.extent).split(",");

                    if (extArray.length === 4) {
                        itemInfo.item.extent = [
                            [parseFloat(extArray[0]), parseFloat(extArray[1])],
                            [parseFloat(extArray[2]), parseFloat(extArray[3])]
                        ];
                    } else if (extArray.length === 5) {
                        this.initExt = new Extent(JSON.parse(this.config.extent));

                    }
                }
                this._createWebMap(itemInfo);


            }));
        },
        _mapLoaded: function () {

            // remove loading class
            domClass.remove(dom.byId("ac-container"), "node-hidden");
            domClass.remove(document.body, "app-loading");


            //Add the geocoder if search is enabled
            if (this.config.search) {

                var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);
                var searchSources = new SearchSources({
                    map: this.map,
                    useMapExtent: this.config.searchExtent,
                    geocoders: this.config.locationSearch ? this.config.helperServices.geocode : [],
                    itemData: this.config.response.itemInfo.itemData,
                    configuredSearchLayers: configuredSearchLayers
                });
                var createdOptions = searchSources.createOptions();
                var search = new Search(createdOptions, domConstruct.create("div"));

                search.startup();


                if (search && search.domNode) {
                    domConstruct.place(search.domNode, "search");
                }

            }
            //Feature Search or find (if no search widget)
            if ((this.config.find || (this.config.customUrlLayer.id !== null && this.config.customUrlLayer.fields.length > 0 && this.config.customUrlParam !== null))) {
                require(["esri/dijit/Search"], lang.hitch(this, function (Search) {
                    var source = null,
                        value = null,
                        searchLayer = null;

                    var urlObject = urlUtils.urlToObject(document.location.href);
                    urlObject.query = urlObject.query || {};
                    urlObject.query = esriLang.stripTags(urlObject.query);
                    //Support find or custom url param 
                    if (this.config.find) {
                        value = decodeURIComponent(this.config.find);
                    } else if (urlObject.query[this.config.customUrlParam.toLowerCase()]) {
                        value = urlObject.query[this.config.customUrlParam.toLowerCase()];

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
                    urlSearch.on("load", lang.hitch(this, function () {
                        urlSearch.search(value).then(lang.hitch(this, function () {
                            on.once(this.map.infoWindow, "hide", lang.hitch(this, function () {
                                urlSearch.clear();
                                urlSearch.destroy();
                                if(this.editor){
                                    this._destroyEditor();
                                    this._createEditor();
                                }
                            }));
                        }));
                    }));
                    urlSearch.startup();

                }));
            }

            //Add the location button if enabled
            if (this.config.locate) {
                var location = new LocateButton({
                    map: this.map
                }, domConstruct.create("div", {
                    id: "locateDiv"
                }, "mapDiv"));
                location.startup();
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
            var noLegend = null, noAbout = null;
            var layerInfo = arcgisUtils.getLegendLayers(this.config.response);
            if(layerInfo && layerInfo.length && layerInfo.length > 0){
                dom.byId("legend-label").innerHTML = this.config.i18n.tools.legend;
                var legend_div = domConstruct.create("div", {
                    className: "panel_content"
                }, dom.byId("legendDiv"));

                var legend = new Legend({
                    map: this.map,
                    layerInfos: layerInfo
                }, legend_div);
                legend.startup();                
            }else{
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
                noAbout= true;
            }
            //hide arrows if legend or about if both options aren't shown
            if(noAbout ||  noLegend){
                query(".ac-container").forEach(function(node){
                    domClass.add(node, "no-label");
                });
            }
            this._updateTheme();

        },
        //create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            itemInfo = this._setExtent(itemInfo);
            var mapOptions = {};
            mapOptions = this._setLevel(mapOptions);
            mapOptions = this._setCenter(mapOptions);
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: mapOptions,
                editable:false,
                usePopupManager: true,
                bingMapsKey: this.config.bingmapskey
            }).then(lang.hitch(this, function (response) {

                //define the application title
                var title = this.config.title || response.itemInfo.item.title;
                dom.byId("title").innerHTML = title;
                document.title = title;


                this.map = response.map;
                domClass.add(this.map.infoWindow.domNode, "light");

                this.config.response = response;

                // make sure map is loaded
                if (this.map.loaded) {
                    // do something with the map
                    this._mapLoaded();
                } else {
                    on.once(this.map, "load", lang.hitch(this, function () {
                        // do something with the map
                        this._mapLoaded();
                    }));
                }
            }), lang.hitch(this, function (error) {
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
        setColor: function (value) {
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


        _updateTheme: function () {
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
    _setLevel: function (options) {
      var level = this.config.level;
      //specify center and zoom if provided as url params 
      if (level) {
        options.zoom = level;
      }
      return options;
    },

    _setCenter: function (options) {
      var center = this.config.center;
      if (center) {
        var points = center.split(",");
        if (points && points.length === 2) {
          options.center = [parseFloat(points[0]), parseFloat(points[1])];
        }
      }
      return options;
    },

    _setExtent: function (info) {
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
