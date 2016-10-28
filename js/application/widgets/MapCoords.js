/*
 | Copyright 2016 Esri
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

  "esri/core/watchUtils",

  "dojo/_base/lang",
  "dojo/on",
  "dojo/touch",
  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/query",
  "dojo/dom-construct",

  "dojo/_base/declare",
], function (
  watchUtils,
  lang, on, touch, dom, domAttr, domClass, query, domConstruct,
  declare
) {

  return declare(null, {

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function (view) {
    	if (view) {
	    	this._view = view;
	    	this._isView2d = view.type === "2d";
	    	this._setMapCoordsEvents();    		
    	}
    },

    _view: null,

    _isView2d: false,

    _mapCoordsHtml: `<div class="calcite-coords-container esri-component fade">
                  		<span class="calcite-coords"></span><span class="esri-icon-share calcite-coords-share"></span>
                		</div>`,

    _uiContainer: null,

    _coordsElement: null,

    _coordsInner: null,

    _coordsShare: null,

    _timeoutCoords: null,

    _uiVisible: false,

    _uiVisible: false,

    _inTouch: false,

    _inCoordTouch: false,

    _isUpdatingUI: false,

		_setMapCoordsEvents: function() {
			var view = this._view;
      if (view) {
        // Set up listeners
        view.then(function() {

          // UI element
          this._uiContainer = query(".esri-ui-inner-container.esri-ui-corner-container")[0];
          this._coordsElement = domConstruct.place(this._mapCoordsHtml, this._uiContainer);
          this._coordsInner = this._coordsElement.children[0];
          this._coordsShare = this._coordsElement.children[1];
          
          // Elements
          on(this._coordsElement, [touch.over, touch.press], function() {
            this._inCoordTouch = true;
            this._showCoordsUI(true);
            //console.log("inCoordTouch");
          }.bind(this));
          on(this._coordsElement, [touch.out, touch.release], function() {
            this._inCoordTouch = false;
            this._showCoordsUI(false);
            //console.log("outcoordtouch");
          }.bind(this));
          on(this._coordsShare, touch.press, function() {
          	this._updateUrl();
          }.bind(this));

          // View 2d
          if (this._isView2d) {
            view.watch(["stationary", "interacting"], function(isTrue,oldVal,evt) {
              //console.log(evt + " " + isTrue); // TODO
              if (evt === "stationary" && !isTrue || evt === "interacting" && isTrue) {
                this._showCoordsUI(true);
              } else {
                this._showCoordsUI(false);
              }
            }.bind(this));
          } else { // 3d
            view.watch(["stationary", "interacting", "updating"], function(isTrue,oldVal,evt) {
              if (!view.stationary || view.updating) {
                this._showCoordsUI(true);
              } else if (view.stationary && !view.updating && !view.animating && !view.interacting) {
                this._showCoordsUI(false);
              }
            }.bind(this));
          }

          // Update ui while user interacts
          view.watch("extent", function(ext){
          	// console.log("extent");
            if (this._isView2d) {
              this._updateCoordsUI();
            } else {
              if (view.interacting || view.updating) {
                this._updateCoordsUI();            
              }
            }
          }.bind(this));

          //view.watch("rotation", function(val){ // fails in 3d
          view.watch(["viewpoint.rotation"], function(val){ // fails in 3d
          	// console.log("rotation: " + val);
          	this._updateCoordsUI();
          }.bind(this));

          // view.watch("scale", function(scale) {
          //   //console.log("scale: " + scale + " " + view.zoom);
          // });
          // view.watch("zoom", function(val) {
          //   //console.log("zoom: " + val);
          // });

          // Touch
          query(".esri-view-surface").on(touch.press, function(evt) {
            this._inTouch = true;
            if (!this._inCoordTouch) {
              this._showCoordsUI(true);            
            }
          }.bind(this));
          query(".esri-view-surface").on(touch.release, function(evt) {
            this._inTouch = false;
            if (!this._inCoordTouch) {
              this._showCoordsUI(false);            
            }
          }.bind(this));       
        }.bind(this)).otherwise(function(err) {
          console.log(err);
        }.bind(this));
      }
    }, 

    _getCoordParams: function() {
      var pt = this._isView2d ? this._view.center : this._view.viewpoint.camera.position;
      //var pt = this._view.center;
      var params = {};
      params.lat = Math.round(pt.latitude * 100000) / 100000; 
      params.lon = Math.round(pt.longitude * 100000) / 100000;
      params.zoom =  Math.round(this._view.zoom * 1) / 1;
      // var zoom = this._view.zoom; // Bug 1 - sometimes -1, can't watch this value
      // zoom = this._scaleToZoom(); // TODO
      //zoom = this._isView2d ? Math.round(zoom * 1) / 1 : Math.round(zoom * 10) / 10; // Bug 2 - can pass in decimals
      //zoom = Math.round(zoom * 1) / 1;
      params.scale = Math.round(this._view.viewpoint.scale);
      //if (this._isView2d) {
      	params.rotation = Math.round(this._view.viewpoint.rotation);
      // } else {
      // 	params.heading = this._view.viewpoint.camera.heading;
      // }
      // params.rotation = Math.round(this._view.viewpoint.rotation);
      if (!this._isView2d) {
      	params.tilt = Math.round(this._view.viewpoint.camera.tilt * 1) / 1;
      }
      return params;
    },

    _updateCoordsUI: function() {
      if (this._uiVisible && !this._isUpdatingUI) {
      	this._isUpdatingUI = true;
        var params = this._getCoordParams();
        if (this._view.widthBreakpoint === "xsmall" || this._view.widthBreakpoint === "small") {
					this._coordsInner.innerHTML = params.lat + "," + params.lon + " | " + params.zoom + " | 1:" + params.scale;
        } else {
          this._coordsInner.innerHTML = "Center: " + params.lat + "," + params.lon + " | Zoom: " + params.zoom + " | 1:" + params.scale + " | " + params.rotation + "&deg;" + (params.tilt ?  " | " + params.tilt + "&deg;" : "");
        }
        this._isUpdatingUI = false;
      }
    },

    _showCoordsUI: function(show) {
       clearTimeout(this._timeoutCoords);
      if (show && !this._uiVisible) {
        this._uiVisible = true;   
        this._updateCoordsUI();
        query(".calcite-coords-container").addClass("in"); 
        console.log("showing...")
      } else if (!show && this._uiVisible && !this._inTouch && !this._inCoordTouch){
        this._timeoutCoords = setTimeout(function() {
          this._uiVisible = false;
          query(".calcite-coords-container").removeClass("in");              
          console.log("hiding...");              
        }.bind(this), 2000); 
      }
    },

    _updateUrl: function() {
      var newParams = this._getCoordParams();
      // Limit params to url...
      // var newParams = {
      //   lat: params.lat,
      //   lon: params.lon,
      //   //zoom: params.zoom//,
      //   scale: params.scale
      // }
      var queryParams = this._queryStringToJSON();
      var queryAll = lang.mixin(queryParams, newParams);
      var querySearch = this._jsonToQueryString(queryAll);

      var baseUrl;
      if (window.location.href.indexOf("?") > -1) {
        baseUrl = window.location.href.split('?')[0];
      } else {
        baseUrl = window.location.href;
      }
      var pushUrl = baseUrl + "?" + querySearch;
      // window.history.pushState("", "", pushUrl);
      window.history.replaceState("", "", pushUrl);
      console.log(pushUrl);
    },

    _queryStringToJSON() {
      var search = location.search;
      var result = {};
      if (search) {
        var pairs = location.search.slice(1).split('&');
        pairs.forEach(function(pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '');
        });
      }
      return JSON.parse(JSON.stringify(result));
    },

    _jsonToQueryString(obj) {
      var str = "";
      var seperator = "";
      for (key in obj) {
        str += seperator;
        str += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
        seperator = "&";
      }
      return str;
    }

  })
});
