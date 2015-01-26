define([
  "dojo/ready",
  "dojo/_base/declare",
  "dojo/_base/connect",
  "dojo/_base/lang",
  "dojo/on",
  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dijit/registry",
  "dijit/layout/ContentPane",
  "esri/arcgis/utils",
  "esri/dijit/Legend",
  "esri/dijit/Scalebar",
  "esri/dijit/Measurement",
  "esri/units",
  "esri/IdentityManager",
  "application/CreateGeocoder",
  "application/ElevationsProfile/Widget"
], function (ready, declare, connect, lang, on, dom, domClass, domConstruct, registry, ContentPane, arcgisUtils, Legend, Scalebar, Measurement, Units, IdentityManager, CreateGeocoder, ElevationsProfile) {

  return declare([], {

    config: {},

    startup: function (config) {
      this.config = config;
      //supply either the webmap id or, if available, the item info
      var itemInfo = this.config.itemInfo || this.config.webmap;
      this._createWebMap(itemInfo);

      if(config){
        this.config = config;
        this._createWebMap(itemInfo);
      }else{

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
    /**
     * CREATE MAP FROM WEBMAP
     *
     * @private
     */
    _createWebMap: function (itemInfo) {
      // CREATE MAP FROM WEBMAP //
      arcgisUtils.createMap(itemInfo, "mapPane", {
        mapOptions: {
          wrapAround180: true
        },
        editable: false,
        ignorePopups: false,
        bingMapsKey: this.config.bingmapskey
      }).then(lang.hitch(this, function (response) {
            this.config.response = response;
      
            // TITLE //
            dom.byId('titleNode').innerHTML = response.itemInfo.item.title || "";
            dom.byId('snippetNode').innerHTML = response.itemInfo.item.snippet || "";
            // DESCRIPTION //
            dom.byId('descriptionNode').innerHTML = response.itemInfo.item.description || "";
            registry.byId('infoContainer').layout();

            // MAP //
            this.map = response.map;
            this.clickEventHandle = response.clickEventHandle;
            this.clickEventListener = response.clickEventListener;

            // MAP CURSOR //
            this.map.on('update-start', lang.hitch(this.map, this.map.setMapCursor, 'wait'));
            this.map.on('update-end', lang.hitch(this.map, this.map.setMapCursor, 'default'));

            // SCALEBAR //
            var scalebar = new Scalebar({
              map: this.map,
              scalebarUnit: this.config.scalebarUnits || 'dual'
            });

            // LEGEND //
            var legendDijit = new Legend({
              map: this.map,
              layerInfos: arcgisUtils.getLegendLayers(response)
            }, "legendNode");
            legendDijit.startup();


             //Create the Geocoder
             if(this.config.geocoder){
                var geocoder = new CreateGeocoder({
                    map: this.map,
                    config: this.config
                });
                if (geocoder.geocoder && geocoder.geocoder.domNode) {
                    domConstruct.place(geocoder.geocoder.domNode, "geocoder");
                }
             }



            // ===========================================================================================//
            // ELEVATIONS PROFILE PARAMETERS //
            
						if(this.config.elevationSync){
								this.config.helperServices.elevationSync.url = this.config.elevationSync;
						}

						var profileParams = {
              map: this.map,
              profileTaskUrl: this.config.helperServices.elevationSync.url,
              scalebarUnits: this.config.scalebarUnits
            };

            // ELEVATIONS PROFILE //
            var elevationsProfile = new ElevationsProfile(profileParams, dom.byId('profileChartNode'));
            // SEND ERRORS TO THE CONSOLE //
            elevationsProfile.on("error", console.warn);
            // ENABLE/DISABLE MAP EVENTS WHEN USER IS DRAWING WITH MEASUREMENT DISTANCE TOOL //
            elevationsProfile.on("measure-distance-checked", lang.hitch(this, function (evt) {
              if (evt.checked) {
                connect.disconnect(this.clickEventHandle);
                this.clickEventHandle = null;
              } else {
                this.clickEventHandle = connect.connect(this.map, "onClick", this.clickEventListener);
              }
            }));
            // STARTUP THE DIJIT //
            elevationsProfile.startup();
            // ===========================================================================================//

          }), lang.hitch(this, function (error) {
            if (this.config && this.config.i18n) {
              alert(this.config.i18n.map.error + ": " + error.message);
            } else {
              alert("Unable to create map: " + error.message);
            }
          }));

    }
  });
});
