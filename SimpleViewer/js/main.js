define(["dojo/ready", "dojo/_base/declare", "dojo/_base/lang", "dojo/_base/Color", "esri/arcgis/utils", "dojo/on", "dijit/registry", "application/Drawer", "application/CreateGeocoder", "esri/dijit/Legend", "dojo/dom-class", "dojo/dom", "dojo/query", "dojo/dom-construct", "esri/dijit/LocateButton", "esri/dijit/HomeButton"], function (
ready, declare, lang, Color, arcgisUtils, on, registry, Drawer, CreateGeocoder, Legend, domClass, dom, query, domConstruct, LocateButton, HomeButton) {
    return declare("", null, {
        config: {},
        theme: null,
        color: null,
        constructor: function (config) {
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

            // startup drawer
            this._drawer.startup();

            // document ready
            ready(lang.hitch(this, function () {
                this.theme = this.setColor(this.config.theme);
                this.color = this.setColor(this.config.color);
                //supply either the webmap id or, if available, the item info 
                var itemInfo = this.config.itemInfo || this.config.webmap;
                this._createWebMap(itemInfo);
            }));
        },
        _mapLoaded: function () {

            // remove loading class
            domClass.remove(dom.byId("ac-container"), "hidden");
            domClass.remove(document.body, "app-loading");


            //Add the geocoder if search is enabled 
            if (this.config.search) {
                var options = {
                    map: this.map,
                    config: this.config
                };
                var myGeocoder = new CreateGeocoder(options);

                if (myGeocoder.geocoder && myGeocoder.geocoder.domNode) {
                    domConstruct.place(myGeocoder.geocoder.domNode, "search");
                }
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
            dom.byId("legend-label").innerHTML = this.config.i18n.tools.legend;
            var legend_div = domConstruct.create("div", {
                className: "panel_content"
            }, dom.byId("legendDiv"));
            var legend = new Legend({
                map: this.map
            }, legend_div);
            legend.startup();


            //Define about panel content 
            var about_content = this.config.about || this.config.itemInfo.item.description;
            if (about_content !== null || about_content !== "") {
                dom.byId("about-label").innerHTML = this.config.i18n.tools.about;
                domConstruct.create("div", {
                    innerHTML: about_content,
                    className: "panel_content"
                }, dom.byId("aboutDiv"));
            } else {
                domClass.add(dom.byId("about-cont"), "hidden");
            }
            this._updateTheme();

        },
        //create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {},
                bingMapsKey: this.config.bingmapskey
            }).then(lang.hitch(this, function (response) {

                //define the application title 
                dom.byId("title").innerHTML = this.config.title || response.itemInfo.item.title;


                this.map = response.map;

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
            var rgb = Color.fromHex(value).toRgb();
            rgb.push(0.9);
            return Color.fromArray(rgb);

        },
        _updateTheme: function () {
            //Apply the configured theme to the template
            //Add the bg class to any elements that you want to display using the specified background color
            //Apply the fc class to elements that should display using the specified font color 
            query(".bg").style("backgroundColor", this.theme.toString());
            query(".bg").style("color", this.color.toString());
            query(".fc").style("color", this.color.toString());
            //Style the popup title bar to use the theme color. 
            query(".esriPopup .pointer").style("backgroundColor", this.theme.toString());
            query(".esriPopup .titlePane").style("backgroundColor", this.theme.toString());
            query(".esriPopup .titlePane").style("color", this.color.toString());

            registry.byId("border_container").resize();
        }
    });
});