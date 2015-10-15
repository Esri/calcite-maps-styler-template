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

  "dojo/Deferred",
  "dojo/query",
  "dojo/on",

  "dojo/fx/Toggler",
  "dojo/fx",

  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dojo/dom-style",

  "dijit/registry",

  "esri/arcgis/utils",
  "esri/domUtils",

  "esri/dijit/HomeButton",

  "dojo/domReady!"
], function (
  declare, lang,
  Deferred,
  query, on,
  Toggler, coreFx,
  dom, domClass, domConstruct, domStyle,
  registry,
  arcgisUtils, 
  domUtils, 
  HomeButton
) {
  return declare(null, {
    config: {},
    startup: function (config) {
      var promise;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        this.config = config;
        // Hide legend container if not enabled
        dom.byId("legTogText").innerHTML = this.config.i18n.legendToggle.label;
        if(!this.config.legend){
          domUtils.hide(dom.byId("legendCon"));
        }
        // Hide header if embed is specified 
        if(this.config.embed){
          domUtils.hide(dom.byId("header"));
          registry.byId("mainWindow").layout();
        }else{
          // Set header height 
          domStyle.set(dom.byId("header"), "height", this.config.headerHeight + "px");
          registry.byId("mainWindow").layout();
        }

        //supply either the webmap id or, if available, the item info
        var itemInfo = this.config.itemInfo || this.config.webmap;
        promise = this._createWebMap(itemInfo);
      } else {
        var error = new Error("Main:: Config is not defined");
        this.reportError(error);
        var def = new Deferred();
        def.reject(error);
        promise = def.promise;
      }
      return promise;
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
      return error;
    },

    // create a map based on the input web map id
    _createWebMap: function (itemInfo) {
      // set extent from config/url
      itemInfo = this._setExtent(itemInfo);
      // Optionally define additional map config here for example you can
      // turn the slider off, display info windows, disable wraparound 180, slider position and more.
      var mapOptions = {};
      // set zoom level from config/url
      mapOptions = this._setLevel(mapOptions);
      // set map center from config/url
      mapOptions = this._setCenter(mapOptions);
      // create webmap from item
      return arcgisUtils.createMap(itemInfo, "mapDiv", {
        mapOptions: mapOptions,
        usePopupManager: true,
        layerMixins: this.config.layerMixins || [],
        editable: this.config.editable,
        bingMapsKey: this.config.bingKey
      }).then(lang.hitch(this, function (response) {

        this.map = response.map;
        // remove loading class from body
        domClass.remove(document.body, "app-loading");
        this._updateTheme();

        // Set default title and sub title 
        this.config.title = this.config.title || response.itemInfo.item.title || "";
        this.config.subtitle = this.config.subtitle || response.itemInfo.item.snippet || "";

        document.title = this.config.title;
        if(this.config.showTitle){
         dom.byId("title").innerHTML = this.config.title;
        }
        if(this.config.showSubTitle){
          dom.byId("subtitle").innerHTML = this.config.subtitle;
        }
        // Add the logo 
        if(this.config.showLogo && this.config.logo ){
          if(this.config.logoLink){
            dom.byId("logoLink").href = this.config.logoLink;
          }
          dom.byId("logoImg").src = this.config.logo;
        }
        // Add the social media text to the header
        if(this.config.showSocialText && this.config.socialText){
          domConstruct.create("a",{
            href: this.config.socialLink || "#",
            target : "_blank",
            innerHTML: this.config.socialText
          },"linkContainer", "first");       
        }
        // Show social icons
        if(this.config.showSocialIcons){
          query(".shareIcon").style("display", "inline-block");
          // Setup click events for sharing nodes
          require(["application/Share"],lang.hitch(this, function(Share){
            var share = new Share({
              config: this.config,
              map: this.map,
              title: this.config.title,
              summary: this.config.subtitle
            });
            query(".shareIcon").on("click", lang.hitch(this, function(node){
              share.shareLink(node);
            }));
          }));
        }

        // Add scalebar 
        if(this.config.scalebar){
          require(["esri/dijit/Scalebar"], lang.hitch(this, function(Scalebar){
            var scalebar = new Scalebar({
              map: this.map,
              scalebarUnit: this.config.units
            });
          }));
        }
        // Add Home Button to zoom slider 
        var homeButton = new HomeButton({
          map: this.map
        },domConstruct.create("div",{},query(".esriSimpleSliderIncrementButton")[0],"after"));
        homeButton.startup();

        // Add legend 
        if(this.config.legend){
          require(["esri/dijit/Legend"], lang.hitch(this, function(Legend){
            var layerInfo = arcgisUtils.getLegendLayers(response);
            if(layerInfo.length === 0){
              // hide the legend
              domUtils.hide(dom.byId("legendCon"));
            }else{
              var legend = new Legend({
                map: this.map,
                layerInfos: layerInfo
              },"legendDiv");
              legend.startup();
            }
          }));
          // Toggle legend display 
          var toggler = new Toggler({
            node:"legendDiv",
            showFunc: coreFx.wipeIn,
            hideFunc: coreFx.wipeOut
          });
          toggler.hide();
          on(dom.byId("legendToggle"), "click", lang.hitch(this, function(){
            var displayMode = domStyle.get(dom.byId("legendDiv"),"display");
            if(displayMode === "none"){
              domClass.remove("legToggleIcon","icon-down");
              domClass.add("legToggleIcon", "icon-up");
              toggler.show();
            }else{
              domClass.add("legToggleIcon","icon-down");
              domClass.remove("legToggleIcon", "icon-up");
              toggler.hide();
            }
          }));
        }

        // Add search 
        if(this.config.search){
          require(["esri/dijit/Search", "esri/tasks/locator", "application/SearchSources"], lang.hitch(this, function(Search, Locator, SearchSources){
             var searchOptions = {
                  map: this.map,
                  useMapExtent: this.config.searchExtent,
                  itemData: response.itemInfo.itemData
             };
             if(this.config.searchConfig){  
              searchOptions.applicationConfiguredSources = this.config.searchConfig.sources || [];
             }else if(this.config.searchLayers){
              var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);
              searchOptions.configuredSearchLayers = configuredSearchLayers;
              searchOptions.geocoders = this.config.locationSearch ? this.config.helperServices.geocode : [];
             }
              var searchSources = new SearchSources(searchOptions);
              var createdOptions = searchSources.createOptions();
          
              if(this.config.searchConfig && this.config.searchConfig.activeSourceIndex){
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
    _updateTheme: function(){
      // update app theme 
      query(".fg").style("color", this.config.color.toString());
      // Alt color (subtitle, social logo)
      query(".ac").style("color", this.config.subtitleColor.toString());
      query(".bg").style("backgroundColor", this.config.background.toString());
      query(".esriPopup .pointer").style("backgroundColor", this.config.background.toString());
      query(".esriPopup .titlePane").style({
        "backgroundColor": this.config.background.toString(),
        "color": this.config.color.toString()
      });
      query(".esriPopup. .titleButton").style("color", this.config.color.toString());
      query(".lbg").style({
        "backgroundColor": this.config.legendTitleBackground.toString()
      });
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