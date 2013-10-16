define([
    "dojo/ready", 
    "dojo/_base/declare",
    "dojo/dom-class",
    "dijit/registry",
    "dojo/dom-construct",
    "dojo/_base/lang",
    "esri/arcgis/utils",
    "esri/IdentityManager",
    "esri/lang",
    "dijit/layout/ContentPane",
    "dijit/layout/LayoutContainer"
],
function(
    ready, 
    declare, 
    domClass, 
    registry,
    domConstruct,
    lang,
    arcgisUtils,
    IdentityManager,
    esriLang,
    ContentPane,
    LayoutContainer
) {
    return declare("", null, {
        config: {},
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
                
                this._createWebMap();
            }));
        },
        _mapLoaded: function() {
          //apply the theme to the popups 
          domClass.add(this.map.infoWindow.domNode,  this.config.theme);

          //add optional widgets 

         if(this.config.home_button){//Add the home button to the small slider 
             require(["esri/dijit/HomeButton", "dojo/query"], lang.hitch(this,function(HomeButton,query){
                var homeButton = new HomeButton({
                    map: this.map
                }, domConstruct.create("div",{},query(".esriSimpleSliderIncrementButton")[0], "after"));
                homeButton.startup();
            }));
         }

         if(this.config.basemap_toggle){
            require(["esri/dijit/BasemapToggle"], lang.hitch(this,function(BasemapToggle){
                //add the basemap toggle button as a child of the map div. This button
                //is positioned using css. Search main.css for the basemapDiv selector
                var basemapDiv = domConstruct.create("div",{id:"basemapDiv"},"mapDiv");
                var basemapToggle = new BasemapToggle({
                    map: this.map,
                    basemap: (this.config.basemap_option) ? this.config.basemap_option : "hybrid"
                },basemapDiv);
                basemapToggle.startup();
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
            require(["esri/dijit/Geocoder", "dojo/_base/array"], lang.hitch(this,function(Geocoder, array){
                //add the geocoder widget as a child of the map div. This widget
                //is positioned using css. Search main.css for the geocoderDiv selector

                //Use the geocode helper service if available 
                var geocodeUrl = null;
                var params = {};
                if(this.config.helperServices && this.config.helperServices.geocode && this.config.helperServices.geocode.length > 0){
                   var geocoders = [];
                   array.forEach(this.config.helperServices.geocode, function(g){
                        //If the default geocoder is the wold geocoder service then we can ignore because that's the service default
                        if(g.url.indexOf("/World/GeocodeServer") === -1){
                            var customGeocoder = {};
                            customGeocoder.url = g.url;
                            if(g.singleLineFieldName){
                                customGeocoder.singleLineFieldName = g.singleLineFieldName;
                            }
                            geocoders.push(customGeocoder);
                        }
             
                   });
                   if(geocoders.length >0){
                    params.arcgisGeocoder = false;
                    params.geocoders = geocoders;
                   }
                }
                params.map = this.map;
                var geocoderDiv = domConstruct.create("div",{id:"geocoderDiv"},"mapDiv");
                var geocoder = new Geocoder(params,geocoderDiv);


                geocoder.startup();

            }));
         }      



        },
        //create a map based on the input web map id
        _createWebMap: function() {
            arcgisUtils.createMap(this.config.webmap, "mapDiv", {
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