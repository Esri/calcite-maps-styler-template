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
	    	this._is2d = view.type === "2d";
	    	this._setMapCoordsEvents();    		
    	}
    },

    _view: null,

    _is2d: false,

    _fadeTimeout: 2000,

    _mapCoordsHtml2d: `<div class="calcite-coords-container calcite-coords-2d esri-component fade">
                  		<span class="calcite-coords"></span><span class="esri-icon-share calcite-coords-share"></span>
                		</div>`,

    _mapCoordsHtml3d: `<div class="calcite-coords-container calcite-coords-3d esri-component fade">
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

    _isSharePanelVisible: false,

    _sharePanelUrlText: query("#shareUrlText")[0],

    _setWidgetEvents: function(view) {
      this._uiContainer = query(".esri-ui-inner-container.esri-ui-corner-container")[0];
      var html = this._is2d ? this._mapCoordsHtml2d : this._mapCoordsHtml3d;
      this._coordsElement = domConstruct.place(html, this._uiContainer);
      this._coordsInner = this._coordsElement.children[0];
      this._coordsShare = this._coordsElement.children[1];
      // Widget UI Elements
      on(this._coordsElement, [touch.over, touch.press], function() {
        this._inCoordTouch = true;
        this._showCoordsUI(true);
      }.bind(this));
      on(this._coordsElement, [touch.out, touch.release], function() {
        this._inCoordTouch = false;
        this._showCoordsUI(false);
      }.bind(this));
      // Show panel from widget
      on(this._coordsShare, touch.press, function() {
        this._isSharePanelVisible = true;
        this._updateUrl();
        on.emit(query("#menuShare > a")[0], "click", { bubbles: true, cancelable: true });
        //query("#shareUrlText")[0].select();
      }.bind(this));
    },

    _setPanelEvents: function(view) {
      // Update panel
      if (domClass.contains("collapseShare","in")) {
        this._isSharePanelVisible = true;
        this._updateUrl();
      }
      query("#collapseShare").on("show.bs.collapse", function(e) {
          this._isSharePanelVisible = true;
          this._updateUrl();  
      }.bind(this));
      query("#collapseShare").on("hide.bs.collapse", function(e) {
          this._isSharePanelVisible = false;  
      }.bind(this));
      // Select text
      query("#shareUrlBtn").on("click", function() {
        query("#shareUrlText")[0].select();
      });
    },

    _setViewEvents: function(view) {
      // View 2d
      if (this._is2d) {
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
        if (this._is2d) {
          this._updateCoordsUI();
        } else {
          if (view.interacting || view.updating) {
            this._updateCoordsUI();            
          }
        }
      }.bind(this));
      //view.watch("rotation", function(val){ // fails in 3d
      view.watch(["viewpoint.rotation"], function(val){ // fails in 3d
        this._updateCoordsUI();
      }.bind(this));
      // view.watch("zoom", function(val) { // fails
      //   //console.log("zoom: " + val);
      // });
    },

    _setTouchEvents: function(view) {
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
    },
 
		_setMapCoordsEvents: function() {
			var view = this._view;
      if (view) {
        view.then(function() {
          this._setWidgetEvents(view);
          this._setPanelEvents(view);
          this._setViewEvents(view);
          this._setTouchEvents(view);
        }.bind(this)).otherwise(function(err) {
          console.log(err);
        }.bind(this));
      }
    }, 

    _getCoordParams: function() {
      var params = {};
      var pt = this._view.center; //this._is2d ? this._view.center : this._view.viewpoint.camera.position;
      if (pt.latitude) { // Geographic
        params.lat = parseFloat(Math.round(pt.latitude * 100000) / 100000).toFixed(5); 
        params.lon = parseFloat(Math.round(pt.longitude * 100000) / 100000).toFixed(5);        
      } else { // Web Mercator or projected
        params.x = parseFloat(Math.round(pt.x * 1000) / 1000).toFixed(3); 
        params.y = parseFloat(Math.round(pt.y * 1000) / 1000).toFixed(3);
      }
      params.zoom =  Math.round(this._view.zoom * 1) / 1; // Bug 1 - always "-1", can't access this value or watch it
      // params.zoom = this._scaleToZoom(this._view.scale); // TODO
      //zoom = this._is2d ? Math.round(zoom * 1) / 1 : Math.round(zoom * 10) / 10; // Bug 2 - can't pass in decimals, crashes
      params.scale = Math.round(this._view.viewpoint.scale);
      if (this._is2d) {
        params.rotation = Math.round(this._view.viewpoint.rotation);
      } else {
        params.heading =  Math.round(this._view.viewpoint.camera.heading);
      	params.tilt = Math.round(this._view.viewpoint.camera.tilt);
        params.altitude = Math.round(this._view.viewpoint.camera.position.z);
      }
      return params;
    },

    _updateCoordsUI: function() {
      if (this._uiVisible && !this._isUpdatingUI) {
      	this._isUpdatingUI = true;
        // Update coords
        var params = this._getCoordParams();
        if (this._view.widthBreakpoint === "xsmall" || this._view.widthBreakpoint === "small") {
					this._coordsInner.innerHTML = (params.lat || params.x) + "," + params.lon + " | " + params.zoom + " | 1:" + params.scale;
        } else {
          if (this._is2d) {
            this._coordsInner.innerHTML = "Center: " + (params.lat || params.x) + "," + (params.lon || params.y) + " | Zoom: " + params.zoom + " | 1:" + params.scale + " | " + (params.rotation === 360 ? 0 : params.rotation) + "&deg;" ;  
          } else {
            this._coordsInner.innerHTML = "Center: " + (params.lat || params.x) + "," + (params.lon || params.y) + " | Zoom: " + params.zoom + " | 1:" + params.scale + " | " + (params.heading === 360 ? 0 : params.heading) + "&deg;" +  " | " + params.tilt + "&deg;";
          }
        }
        // Update panel url
        if (this._isSharePanelVisible) {
          this._updateUrl(params);
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
        // console.log("showing...")
      } else if (!show && this._uiVisible && !this._inTouch && !this._inCoordTouch) { // lots of tests...
        this._timeoutCoords = setTimeout(function() {
          this._uiVisible = false;
          query(".calcite-coords-container").removeClass("in");              
          // console.log("hiding...");              
        }.bind(this), this._fadeTimeout); 
      }
    },

    _updateUrl: function(params) {
      var params = params || this._getCoordParams();
      var queryParams = this._queryStringToJSON();
      var queryAll = lang.mixin(queryParams, params);
      var querySearch = this._jsonToQueryString(queryAll);
      var baseUrl;
      if (window.location.href.indexOf("?") > -1) {
        baseUrl = window.location.href.split('?')[0];
      } else {
        baseUrl = window.location.href;
      }
      var pushUrl = baseUrl + "?" + querySearch;
      // window.history.pushState("", "", pushUrl);
      //window.history.replaceState("", "", pushUrl);
      if (this._isSharePanelVisible) {
        this._sharePanelUrlText.value = pushUrl;
      }
      // console.log(pushUrl);
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
