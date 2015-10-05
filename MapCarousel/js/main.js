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
  "dojo/_base/array",
  "dojo/_base/fx",

  "dojo/on",
  "dojo/string",
  "dojo/Deferred",

  "dojo/query",
  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-style",
  "dojo/dom-construct",

  "esri/request",
  "esri/domUtils",

  "esri/arcgis/utils",
  "esri/arcgis/Portal",

  "esri/dijit/LocateButton",
  "esri/dijit/HomeButton",

  "dojo/domReady!"
], function (
  declare, lang,
  array, fx, 
  on, string,
  Deferred,
  query,
  dom, domClass,
  domStyle, domConstruct,
  esriRequest, domUtils,
  arcgisUtils,
  Portal,
  LocateButton, HomeButton
) {
  return declare(null, {
    config: {},
    portal: null,
    items: null,
    webmaps: [],
    map: null,
    currentMap: 0,
    startup: function (config) {
      var promise;
      // config will contain application and user defined info for the template such as i18n strings, the web map id
      // and application id
      // any url parameters and any application specific configuration information.
      if (config) {
        this.config = config;
        document.title = this.config.i18n.app.title;

        //setup click handlers 
        on(dom.byId("galleryNext"), "click", lang.hitch(this, this._getNext));
        on(dom.byId("galleryPrev"), "click", lang.hitch(this, this._getPrevious));
        on(dom.byId("thumbs"), "click", lang.hitch(this, this._toggleGallery));
        
        //Get the group id 
        var id = this.config.group || this.config.id;
        this.config.group = id;
        promise = this._createGroup(id);
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
          node.innerHTML = this.config.i18n.app.errors._createGroup + ": " + error.message;
        } else {
          node.innerHTML = "Unable to create map: " + error.message;
        }
      }
      return error;
    },

    // display the web maps in the group in a gallery 
    _createGroup: function (id) {

      return esriRequest({
        url: this.config.sharinghost + "/sharing/rest/community/groups/" + id,
        content: {"f":"json"},
        callbackParamName: "callback"
      }).then(lang.hitch(this, function (response) {
        // remove loading class from body
        domClass.remove(document.body, "app-loading");

        // load the portal 
        var signInRequired = (response.access !== "public") ? true : false;
        this.portal = new Portal.Portal(this.config.sharinghost);
        this.portal.on("load", lang.hitch(this, function(){
          this._loadPortal(signInRequired);
        }));

        // return for promise
        return response;
      }), this.reportError);
    }, 
    _createMap: function(item){
      arcgisUtils.createMap(item.id, domConstruct.create('div', {
        id: item.id
      }, dom.byId("mainMap")), {
        mapOptions: {
          usePopupManager: true,
          slider: this.config.mapwidgets
        },
        editable: false,
        layerMixins: this.config.layerMixins || [],
        bingMapsKey: this.config.bingmapskey
      }).then(lang.hitch(this, function(response){

        this.map = response.map;
        this.map.id = item.id;
        this.map.title = item.title;
        this.map.owner = item.owner;
        this.map.snippet = item.snippet;
        this.webmaps[this.currentMap] = this.map;

        // add home and locate button if enabled. 
        if(this.config.mapwidgets){
          var thisMap = this.webmaps[this.currentMap];
          //Find the increment button on the slider
          var qs = "#" + thisMap.id + " .esriSimpleSliderIncrementButton";

          var home = new HomeButton({
              map: thisMap
          },domConstruct.create("div",{},query(qs)[0], "after"));
          home.startup(); 

          var locate = new LocateButton({
            map: thisMap
          },domConstruct.create("div",{},thisMap.id));
          locate.startup();
        }
        this._updateDetails(this.map);
        this._resizeMap();
        domUtils.hide(dom.byId("loadingImg"));

      }),lang.hitch(this, function(error){
        if(map){
          map.destroy();
          domConstruct.destroy(map.container);
          this._getNext();
        }
      }));   
    },
    _updateDetails: function(item){
      dom.byId('mapTitle').innerHTML = item.title;
      dom.byId('mapOwner').innerHTML = item.snippet;
      dom.byId('mapCount').innerHTML = string.substitute(
      this.config.i18n.app.mapcount, {
        page: (this.currentMap + 1),
        total: this.items.length
      });     
    },
    _createThumbs: function(items){
      var frag = document.createDocumentFragment();
      array.forEach(items, lang.hitch(this, function(item,index){
        if(item.id){
          var thumbnail = item.thumbnailUrl || "images/desktopapp.png"; //use default image if one is not provided
          var li = domConstruct.create("li", {
           innerHTML: '<img src="' + thumbnail + '"/><p class="ellipsis">' + item.title + '</p>'
          }, frag);
          domClass.add(li, "grid_2 gallery_grid");

          on(li, "click", lang.hitch(this, function(){
            this._hideMap();
            domUtils.hide(dom.byId("thumbnailContainer"));
            this.currentMap = index;
            this._showMap();
          }));
        }
      }));
      domConstruct.place(frag, "thumbnailList");
    },
    _showMap: function(){
      //animate the display of the next map to fade-in
      //increment the map count div
      var myMap = this.webmaps[this.currentMap];
      if (myMap && myMap.id) {
        var node = dom.byId(myMap.id);
        domUtils.show(node);
        this._updateDetails(myMap);
        var anim = fx.fadeIn({
          node: node
        });
        anim.play();
      } else {
        //create the map
        domUtils.show(dom.byId("loadingImg"));
        this._createMap(this.items[this.currentMap]);
      }      
    },
    _hideMap: function(){
      // Fade out the previous  map 
      var node = dom.byId(this.webmaps[this.currentMap].id);
      domUtils.hide(node);
      dom.byId("mapTitle").innerHTML = "";
      dom.byId("mapCount").innerHTML = "";
      dom.byId("mapOwner").innerHTML = "";
      var anim = fx.fadeOut({
        node: node
      });
      anim.play();
    },
    _getNext: function(){
      // hide the existing map 
      this._hideMap();
      (this.currentMap >= -1 && this.currentMap < (this.items.length - 1)) ? this.currentMap += 1 : this.currentMap = 0;
      this._showMap();
    },
    _getPrevious: function(){
      this._hideMap();
      (this.currentMap <= this.items.length && this.currentMap > 0) ? this.currentMap -= 1 : this.currentMap = this.items.length - 1;
      this._showMap();    
    },
    _toggleGallery: function(){
      var node = dom.byId("thumbnailContainer");
      var disp = domStyle.get(node,"display");
      disp === "none" ? domUtils.show(node) : domUtils.hide(node);    
   
    },
    _resizeMap: function(){
      if(this.webmaps && this.webmaps.length && this.webmaps.length > 0){
        this.webmaps[this.currentMap].reposition();
        this.webmaps[this.currentMap].resize();
      }
    },
    _loadPortal: function(signInRequired){
      if(signInRequired){
        this.portal.signIn();
      }
      domUtils.show(dom.byId("loadingImg"));
      this.portal.queryGroups(this.config.group).then(lang.hitch(this, function(response){
        if(response.results && response.results.length && response.results.length > 0){
          var group = response.results[0];
          var queryParams = {
            q: 'type:"Web Map" -type:"Web Mapping Application"',
            num: this.config.numitems
          };
          group.queryItems(queryParams).then(lang.hitch(this, function(response){
            if(response.results && response.results.length && response.results.length > 0){
              
              this.items = response.results;
              
              // Load the first map 
              this._createMap(this.items[0]);
              this._createThumbs(this.items);
              
              // enable auto play 
              if(this.config.autoplay && this.config.autoplaydelay){
                // convert delay seconds to milliseconds
                var time = Number(this.config.autoplaydelay) * 1000;
                setInterval(lang.hitch(this, this._getNext), time);

              }
              if(this.config.galleryopen){
                this._toggleGallery();
              }
            }else{
                alert(this.config.i18n.app.errors.noMaps);
                domUtils.hide(dom.byId("loadingImg"));
            }
          }));
        }else{
          alert(this.config.i18n.app.errors.noGroup);
          domUtils.hide(dom.byId("loadingImg"));
        }
      }));
    }
  });
});