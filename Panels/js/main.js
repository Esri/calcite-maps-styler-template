define([
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/dom-class",
    "dojo/dom-style",
    "dojo/dom",
    "dojo/query",
    "dijit/registry",
    "dojo/dom-construct",
    "dojo/on",
    "dojo/_base/lang",
    "dojo/_base/array",
    "esri/arcgis/utils",
    "esri/IdentityManager",
    "esri/geometry/Point",
    "esri/geometry/Extent",
    "esri/dijit/Scalebar",
    "esri/lang",
    "dijit/layout/ContentPane",
    "dijit/layout/LayoutContainer"
],
function(
    ready,
    declare,
    domClass,
    domStyle,
    dom,
    query,
    registry,
    domConstruct,
    on,
    lang,
    array,
    arcgisUtils,
    IdentityManager,
    Point,
    Extent,
    Scalebar,
    esriLang,
    ContentPane,
    LayoutContainer
) {
    return declare("", null, {
        config: {},
        allResults: null,
        startup: function(config) {
            //config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            if(config){
                this.config = config;
                ready(lang.hitch(this, function() {
                    //supply either the webmap id or, if available, the item info
                    var itemInfo = this.config.itemInfo || this.config.webmap;

                    this._createWebMap(itemInfo);
                }));
            }else{
                var error = new Error("Main:: Config is not defined");
                this.reportError(error);
            }

        },
        reportError: function (error) {
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
        },
        _mapLoaded: function() {
          //apply the theme to the popups
          domClass.add(this.map.infoWindow.domNode,  this.config.theme);

          //add the scalebar
          var scalebar = new Scalebar({
            map: this.map,
            scalebarUnit: this.config.units
          });


          //add optional widgets
         if(this.config.home_button){//Add the home button to the small slider
             require(["esri/dijit/HomeButton", "dojo/query"], lang.hitch(this,function(HomeButton,query){
                var homeButton = new HomeButton({
                    map: this.map
                }, domConstruct.create("div",{},query(".esriSimpleSliderIncrementButton")[0], "after"));
                homeButton.startup();
            }));
         }




         if(this.config.locate_button){
            require(["esri/dijit/LocateButton"], lang.hitch(this,function(LocateButton){
                //add the location button as a child of the map div. This button
                //is positioned using css. Search main.css for the locateDiv selector
                var locateDiv = domConstruct.create("div",{id:"locateDiv"},"mapDiv");
                var locationButton = new LocateButton({
                    map: this.map
                },locateDiv);
                locationButton.startup();
            }));
         }

        if(this.config.geocoder){
            this._createGeocoder();
        }

        },
        _createGeocoder: function (){
            //Add the location search widget
            require(["esri/dijit/Search", "esri/tasks/locator"], lang.hitch(this, function (Search, Locator) {
                if (!Search && !Locator) {
                    return;
                }

                var options = {
                    map: this.map,
                    enableButtonMode: true,
                    expanded: false,
                    addLayersFromMap: false
                };
                var searchLayers = false;
                var search = new Search(options, domConstruct.create("div", {
                    id: "geocoderDiv"
                }, "mapDiv"));
                var defaultSources = [];

                //setup geocoders defined in common config 
                if (this.config.helperServices.geocode &&  this.config.locationSearch) {
                    var geocoders = lang.clone(this.config.helperServices.geocode);
                    array.forEach(geocoders, lang.hitch(this, function (geocoder) {
                        if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {

                            geocoder.hasEsri = true;
                            geocoder.locator = new Locator(geocoder.url);

                            geocoder.singleLineFieldName = "SingleLine";

                            geocoder.name = geocoder.name || "Esri World Geocoder";

                            if (this.config.searchExtent) {
                                geocoder.searchExtent = this.map.extent;
                            }
                            defaultSources.push(geocoder);
                        } else if (esriLang.isDefined(geocoder.singleLineFieldName)) {

                            //Add geocoders with a singleLineFieldName defined 
                            geocoder.locator = new Locator(geocoder.url);

                            defaultSources.push(geocoder);
                        }
                    }));
                }
                //add configured search layers to the search widget 
                var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);

                array.forEach(configuredSearchLayers, lang.hitch(this, function (layer) {
                  
                    var mapLayer = this.map.getLayer(layer.id);
                    if (mapLayer) {
                        var source = {};
                        source.featureLayer = mapLayer;

                        if (layer.fields && layer.fields.length && layer.fields.length > 0) {
                            source.searchFields = layer.fields;
                            searchLayers = true;
                            defaultSources.push(source);
                        }
                    }
                }));
                //Add search layers defined on the web map item 
                if (this.config.response.itemInfo.itemData && this.config.response.itemInfo.itemData.applicationProperties && this.config.response.itemInfo.itemData.applicationProperties.viewing && this.config.response.itemInfo.itemData.applicationProperties.viewing.search) {
                    var searchOptions = this.config.response.itemInfo.itemData.applicationProperties.viewing.search;
                
                    array.forEach(searchOptions.layers, lang.hitch(this, function (searchLayer) {
                        //we do this so we can get the title specified in the item
                        var operationalLayers = this.config.itemInfo.itemData.operationalLayers;
                        var layer = null;
                        array.some(operationalLayers, function (opLayer) {
                            if (opLayer.id === searchLayer.id) {
                                layer = opLayer;
                                return true;
                            }
                        });

                        if (layer && layer.url) {
                            var source = {};
                            var url = layer.url;

                            if (esriLang.isDefined(searchLayer.subLayer)) {
                                url = url + "/" + searchLayer.subLayer;
                                array.some(layer.layerObject.layerInfos, function (info) {
                                    if (info.id == searchLayer.subLayer) {
                                        name += " - " + layer.layerObject.layerInfos[searchLayer.subLayer].name;
                                        return true;
                                    }

                                });
                            }

                            source.featureLayer = new FeatureLayer(url);


                            source.name = layer.title || layer.name;

                            source.exactMatch = searchLayer.field.exactMatch;
                            source.searchField = [searchLayer.field.name];
                            source.placeholder = searchOptions.hintText;
                            defaultSources.push(source);
                            searchLayers = true;
                        }

                    }));
                }




                search.set("sources", defaultSources);
                //set the first non esri layer as active if search layers are defined. 
                var activeIndex = 0;
                if (searchLayers) {
                    array.some(defaultSources, function (s, index) {
                        if (!s.hasEsri) {
                            activeIndex = index;
                            return true;
                        }
                    });


                    if (activeIndex > 0) {
                        search.set("activeSourceIndex", activeIndex);
                    }
                }


                search.startup();


            }));

        },

        //create a map based on the input web map id
        _createWebMap: function(itemInfo) {
            arcgisUtils.createMap(itemInfo , "mapDiv", {
                mapOptions: {
                    //Optionally define additional map config here for example you can
                    //turn the slider off, display info windows, disable wraparound 180, slider position and more.
                },
                editable: false,
                bingMapsKey: this.config.bingmapskey
            }).then(lang.hitch(this, function(response) {
                //Once the map is created we get access to the response which provides important info
                //such as the map, operational layers, popup info and more. This object will also contain
                //any custom options you defined for the template. In this example that is the 'theme' property.
                //Here' we'll use it to update the application to match the specified color theme.

               this.map = response.map;
               this.config.response = response;

               //set the application title
               document.title = this.config.title || response.itemInfo.item.title;

               //Define the layout
               //Header
                if(this.config.header){
                    //add a header
                    var title = (this.config.title) ?  this.config.title : response.itemInfo.item.title;
                    var subtitle = (this.config.subtitle) ? this.config.subtitle : response.itemInfo.item.snippet;

                    var content = esriLang.substitute({"title": title, "subtitle": subtitle}, "<div class='fc' id='title'>${title}</div><div class='fc' id='subtitle'>${subtitle}</div>")
                    this._addContentPane("header","top", content, null);
                }
                //Footer
                if(this.config.footer){
                   //add a footer
                    var footerText = (this.config.footer_text) ? this.config.footer_text : null;
                    if(footerText){
                        var footerContent = "<span>" + footerText + "</span>";
                        this._addContentPane("footer", "bottom", footerContent, null);
                    }
                }

                //If both legend and description and same side then flip the legend to the other side. Consider alternatives here?
                //add a description
                if(this.config.description){
                    var descriptionContent = (this.config.description_content) ? this.config.description_content : response.itemInfo.item.description;
                    if(descriptionContent){
                        domConstruct.create("div",{
                            innerHTML: descriptionContent
                        });
                        this._addContentPane("descriptionPane",this.config.description_side,descriptionContent, "panel_content");
                    }

                }
                //add a legend
                if(this.config.legend){
                   require(["esri/dijit/Legend"], lang.hitch(this,function(Legend){
                      var legendContent = "<div id='legendDiv'></div>";

                      //Check to see if we already have content on the specified side. If we do flip it
                      if(this.config.legend_side === this.config.description_side && this.config.description){
                        this.config.legend_side = (this.config.legend_side === "left") ? "right" : "left";
                      }
                      this._addContentPane("legendPane",this.config.legend_side,legendContent,"panel_content");

                      var legend = new Legend({
                        map: this.map,
                        layerInfos: (arcgisUtils.getLegendLayers(response))
                      },"legendDiv");
                      //apply color scheme to legend if applicable
                      if(this.config.panelcolor){
                         query(".legendPane").style("background",this.config.panelcolor.toString());
                      }
                      if(this.config.textcolor){
                         query(".legendPane").style("color", this.config.textcolor.toString());
                      }
                      legend.startup();



                   }));
                }


                this._mapLoaded();
                //load a color theme (maintain to support old theme behavior)
                var ss = document.createElement("link");
                ss.type = "text/css";
                ss.rel = "stylesheet";
                ss.href = "css/" + this.config.theme + ".css";
                document.getElementsByTagName("head")[0].appendChild(ss);
                //update color scheme if configured values exist 
                if(this.config.backgroundcolor){
                    query(".bg").style("background",this.config.backgroundcolor.toString());
                }
                if(this.config.panelcolor){
                    query(".descriptionPane").style("background",this.config.panelcolor.toString());
                }
                if(this.config.textcolor){
                    query(".footer").style("color", this.config.textcolor.toString());
                    query("#descriptionPane").style("color", this.config.textcolor.toString());
                    query(".fc").style("color",this.config.textcolor.toString());
                }
                //refresh the layout to catch changes
                var bc = registry.byId("mainWindow");
                bc.resize();


            }), lang.hitch(this, function(error) {
                //an error occurred - notify the user. In this example we pull the string from the
                //resource.js file located in the nls folder because we've set the application up
                //for localization. If you don't need to support mulitple languages you can hardcode the
                //strings here and comment out the call in index.html to get the localization strings.
                if (this.config && this.config.i18n) {
                    alert(this.config.i18n.viewer.errors.createMap + ": " + error.message);
                } else {
                    alert("Unable to create map: " + error.message);
                }
            }));
        },
        _addContentPane: function(widgetId, region, content, customClass){

            //add content pane to the border container
            var bc = registry.byId("mainWindow");
            var cp = new ContentPane({
                    id: widgetId,
                    className: widgetId,
                    region: region,
                    content: content
            },domConstruct.create("div"));

            if(customClass){
                domClass.add(cp.domNode, customClass);
            }

            bc.addChild(cp);

            return cp;

        }
    });
});
