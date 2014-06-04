define(["dojo/_base/declare", "dojo/Deferred", "esri/dijit/Geocoder", "esri/geometry/Extent", "esri/geometry/Point", "esri/lang", "dojo/dom-construct", "dojo/dom", "dojo/dom-style", "dojo/on", "dijit/registry", "dojo/query", "dojo/_base/lang", "dojo/_base/array"

], function (
declare, Deferred, Geocoder, Extent, Point, esriLang, domConstruct, dom, domStyle, on, registry, query, lang, array

) {
    return declare(null, {
        map: null,
        geocoder: null,
        allResults: null,
        config: null,
        content: null,
        constructor: function (args) {
            this.map = args.map;
            this.config = args.config;



            var options = this._createGeocoderOptions();
            var geocoderDiv = domConstruct.create("div", {});
            this.geocoder = new Geocoder(options, geocoderDiv);


            this.geocoder.startup();
            this.geocoder.on("find-results", lang.hitch(this, this.checkResults));
            this.geocoder.on("select", lang.hitch(this, this.showGeocodingResult));
            this.geocoder.on("auto-complete", lang.hitch(this, this.clearGeocodeResults));
            this.geocoder.on("clear", lang.hitch(this, this.clearGeocodeResults));



        },

        checkResults: function (geocodeResults) {
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
        clearGeocodeResults: function () {
            if (this.map.infoWindow.isShowing) {
                this.map.infoWindow.hide();
            }
            this.allResults = null;

        },
        showGeocodingResult: function (geocodeResult, pos) {
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
        setupInfoWindowAndZoom: function (content, geocodeLocation, newExtent, geocodeResult, pos) {
            this.map.infoWindow.clearFeatures();

            //Show info window
            if (this.allResults && this.allResults.length > 1) {
                //let's update the content to show additional results 
                var currentLocationName = content;
                var attr = this.allResults[pos].feature.attributes;
                content = "<div id='geocodeCurrentResult' style='display:none;'><span style='font-weight:bold;'>";
                content += "Current Location"; //this.config.i18n.viewer.main.search.currentLocation;
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

                content += "Not what you wanted?"; //this.config.i18n.viewer.main.search.notWhatYouWanted;
                content += "</a>";
                content += "</div>";
                content += "<div id='geocodeOtherResults' style='display:none;'><span style='font-weight:bold;'>";
                content += "Select another location"; //this.config.i18n.viewer.main.search.selectAnother;
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



            query(".li_item").forEach(lang.hitch(this, function (node) {
                on(node, "click", lang.hitch(this, function () {
                    if (node.id >= 0) {
                        this.selectAnotherResult(node.id);
                    }
                }));

            }));
            var resDiv = dom.byId("results");
            if (resDiv) {
                on(resDiv, "click", lang.hitch(this, function () {
                    this.showOtherResults();
                }));
            }






            var location = new Point(geocodeLocation.x, geocodeLocation.y, geocodeLocation.spatialReference);
            on.once(this.map, "extent-change", lang.hitch(this, function () {
                this.map.infoWindow.show(location);
            }));
            this.map.setExtent(newExtent);


        },
        showOtherResults: function () {

            domStyle.set(dom.byId("geocodeWantOtherResults"), "display", "none");
            domStyle.set(dom.byId("geocodeCurrentResult"), "display", "block");
            domStyle.set(dom.byId("geocodeOtherResults"), "display", "block");

        },
        selectAnotherResult: function (pos) {
            this.showGeocodingResult(this.allResults[pos], pos);
        },
        _createGeocoderOptions: function () {
            //Check for multiple geocoder support and setup options for geocoder widget. 
            var hasEsri = false,
                geocoders = lang.clone(this.config.helperServices.geocode);

            array.forEach(geocoders, function (geocoder, index) {
                if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
                    hasEsri = true;
                    geocoder.name = "Esri World Geocoder";
                    geocoder.outFields = "Match_addr, stAddr, City";
                    geocoder.singleLineFieldName = "SingleLine";
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
                autoComplete: hasEsri

            };


            if (hasEsri && esriIdx === 0) {

                options.minCharacters = 0;
                options.maxLocations = 5;
                options.searchDelay = 100;
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


        }
    });

});