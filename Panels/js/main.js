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
        constructor: function(config) {
            //config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information. 
            this.config = config;
            ready(lang.hitch(this, function() {

                //load a color theme 
                var ss = document.createElement("link");
                ss.type = "text/css";
                ss.rel = "stylesheet";
                ss.href = "css/" + this.config.theme + ".css";
                document.getElementsByTagName("head")[0].appendChild(ss);

                arcgisUtils.getItem(this.config.webmap).then(lang.hitch(this, function (itemInfo) {
                    //let's get the web map item and update the extent if needed. 
                    if (this.config.appid && this.config.application_extent.length > 0) {
                        itemInfo.item.extent = [
                            [parseFloat(this.config.application_extent[0][0]), parseFloat(this.config.application_extent[0][1])],
                            [parseFloat(this.config.application_extent[1][0]), parseFloat(this.config.application_extent[1][1])]
                        ];
                    }
                    this._createWebMap(itemInfo);
                }));

            }));
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
            require(["esri/dijit/Geocoder"], lang.hitch(this,function(Geocoder){
                //add the geocoder widget as a child of the map div. This widget
                //is positioned using css. Search main.css for the geocoderDiv selector

                var options = this._createGeocoderOptions();

                var geocoderDiv = domConstruct.create("div",{id:"geocoderDiv"},"mapDiv");
                var geocoder = new Geocoder(options,geocoderDiv);


                geocoder.startup();

                geocoder.on("find-results", lang.hitch(this, this.checkResults)); 
                geocoder.on("select", lang.hitch(this, this.showGeocodingResult));
                geocoder.on("auto-complete", lang.hitch(this, this.clearGeocodeResults));
                geocoder.on("clear", lang.hitch(this, this.clearGeocodeResults));



            }));
        },
        checkResults: function(geocodeResults){
            this.allResults = null;
            if (geocodeResults && geocodeResults.results && geocodeResults.results.results) {
                geocodeResults.results = geocodeResults.results.results;
            }
            if ((!geocodeResults || !geocodeResults.results || !geocodeResults.results.length)) {
                //No results
                console.log("No results found");
            } else if (geocodeResults) {
                this.allResults = geocodeResults.results;
            }
        },
        clearGeocodeResults: function(){
            if(this.map.infoWindow.isShowing){
                this.map.infoWindow.hide();
            }
            this.allResults = null;

        },
        showGeocodingResult: function(geocodeResult, pos) {
            if (!esriLang.isDefined(pos)) {
                pos = 0;
            }

            if (geocodeResult.result) {
                geocodeResult = geocodeResult.result;
            }

            if (geocodeResult.extent) {
                this.setupInfoWindowAndZoom(geocodeResult.name, geocodeResult.feature.geometry, geocodeResult.extent, geocodeResult, pos);
            } else { //best view 
                var bestView = this.map.extent.centerAt(geocodeResult.feature.geometry).expand(0.0625);
                this.setupInfoWindowAndZoom(geocodeResult.name, geocodeResult.feature.geometry, bestView, geocodeResult, pos);
            }
        },  
        setupInfoWindowAndZoom: function(content, geocodeLocation, newExtent, geocodeResult, pos) {
            this.map.infoWindow.clearFeatures();

            //Show info window
            if (this.allResults && this.allResults.length > 1) {
                    //let's update the content to show additional results 
                var currentLocationName = content;
                var attr = this.allResults[pos].feature.attributes;
                content = "<div id='geocodeCurrentResult' style='display:none;'><span style='font-weight:bold;'>";
                content += "Current Location";//this.config.i18n.viewer.main.search.currentLocation;
                content += "</span></div>";
                content += "<span>";

                if (!attr.Match_addr) {
                    content += currentLocationName;
                } else {
                    content += attr.Match_addr;
                    if (attr.stAddr && attr.City) {
                        content += " - " + attr.stAddr + ", " + attr.City;
                    } else if (attr.stAddr) {
                        content += " - " + attr.stAddr;
                    }
                }

                content += "</span>";
                content += "<div id='geocodeWantOtherResults'>";
                content += "<a id='results' style='cursor:pointer'>";

                content += "Not what you wanted?";//this.config.i18n.viewer.main.search.notWhatYouWanted;
                content += "</a>";
                content += "</div>";
                content += "<div id='geocodeOtherResults' style='display:none;'><span style='font-weight:bold;'>";
                content += "Select another location";//this.config.i18n.viewer.main.search.selectAnother;
                content += "</span><br/>";
                for (var i = 0; i < this.allResults.length; i++) {
                    if (i !== pos) {
                        var result = this.allResults[i];
                        attr = result.feature.attributes;
                        content += "<a style='cursor:pointer' class='li_item' id=" + i + ">"; 
               
                        if (!attr.Match_addr) {
                            content += result.name;
                        } else {
                            //content += result.feature.attributes.Place_addr ? (" - " + result.feature.attributes.Place_addr) : ""
                            content += attr.Match_addr;
                            if (attr.stAddr && attr.City) {
                                content += " - " + attr.stAddr + ", " + attr.City;
                            } else if (attr.stAddr) {
                                content += " - " + attr.stAddr;
                            }
                        }

                        content += "</a><br/>";
                    }
                }
                content += "</div>";

            }

            //display a popup for the result
            //this.config.i18n.viewer.main.search.popupTitle
            this.map.infoWindow.setTitle("Location");

            this.map.infoWindow.setContent(content);
            query(".li_item").forEach(lang.hitch(this, function(node){
                on(node, "click", lang.hitch(this, function(){
                    if(node.id >= 0){
                        this.selectAnotherResult(node.id);
                    }
                }));

            }));
            var resDiv = dom.byId("results");
            if(resDiv){
                on(resDiv,"click",lang.hitch(this, function(){
                    this.showOtherResults();
                }));
            }

    
 



            var location = new Point(geocodeLocation.x, geocodeLocation.y, geocodeLocation.spatialReference);
            on.once(this.map, "extent-change", lang.hitch(this, function(){
                this.map.infoWindow.show(location);
            }));
            this.map.setExtent(newExtent);


        },      
        showOtherResults: function() {
        
            domStyle.set(dom.byId("geocodeWantOtherResults"), "display", "none");
            domStyle.set(dom.byId("geocodeCurrentResult"), "display", "block");
            domStyle.set(dom.byId("geocodeOtherResults"), "display", "block");

        },
        selectAnotherResult: function(pos) {
            this.showGeocodingResult(this.allResults[pos], pos);
        },
        _createGeocoderOptions: function(){
            //Check for multiple geocoder support and setup options for geocoder widget. 
            var hasEsri = false,
                geocoders = lang.clone(this.config.helperServices.geocode);

            array.forEach(geocoders, function (geocoder, index) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    hasEsri = true;
                    geocoder.name = "Esri World Geocoder";
                    geocoder.outFields = "Match_addr, stAddr, City";
                    geocoder.singleLineFieldName = "Single Line";
                    geocoder.esri = geocoder.placefinding = true;
  
                }

            });
            //only use geocoders with a singleLineFieldName that allow placefinding
            geocoders = array.filter(geocoders, function (geocoder) {
                return (esriLang.isDefined(geocoder.singleLineFieldName) && esriLang.isDefined(geocoder.placefinding) && geocoder.placefinding);
            });
            var esriIdx;
            if (hasEsri) {
                for (var i = 0; i < geocoders.length; i++) {
                    if (esriLang.isDefined(geocoders[i].esri) && geocoders[i].esri === true) {
                        esriIdx = i;
                        break;
                    }
                }
            }
            var options = {
                map: this.map,
                autoNavigate: false,
                theme: "simpleGeocoder",
                autoComplete:hasEsri

            }
   
   
            if (hasEsri && esriIdx === 0) {

                options.minCharacters = 0;
                options.maxLocations = 5;
                options.searchDelay = 100
                options.arcgisGeocoder = geocoders.splice(0, 1)[0]; //geocoders[0];
                if (geocoders.length > 0) {
                    options.geocoders = geocoders;
                }
            } else {
                //options.autoComplete = false;
                options.arcgisGeocoder = false;
                options.geocoders = geocoders;
            }

            return options;


        },
        //create a map based on the input web map id
        _createWebMap: function(itemInfo) {
            arcgisUtils.createMap(itemInfo , "mapDiv", {
                mapOptions: {
                    //Optionally define additional map config here for example you can 
                    //turn the slider off, display info windows, disable wraparound 180, slider position and more. 
                },
                bingMapsKey: this.config.bingmapskey
            }).then(lang.hitch(this, function(response) {
                //Once the map is created we get access to the response which provides important info 
                //such as the map, operational layers, popup info and more. This object will also contain
                //any custom options you defined for the template. In this example that is the 'theme' property.
                //Here' we'll use it to update the application to match the specified color theme.  
   
               this.map = response.map;
               
               
           
               //set the application title 
               document.title = this.config.title || response.itemInfo.item.title;

               //Define the layout 
               //Header 
                if(this.config.header){
                    //add a header 
                    var title = (this.config.title) ?  this.config.title : response.itemInfo.item.title;
                    var subtitle = (this.config.subtitle) ? this.config.subtitle : response.itemInfo.item.snippet;

                    var content = esriLang.substitute({"title": title, "subtitle": subtitle}, "<div id='title'>${title}</div><div id='subtitle'>${subtitle}</div>")
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
                      legend.startup();


                   }));
                }

                if (this.map.loaded) {
                    // do something with the map
                    this._mapLoaded();
                } else {
                    on(this.map, "load", lang.hitch(this, function() {
                        // do something with the map
                        this._mapLoaded();
                    }));
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