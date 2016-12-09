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

    constructor: function (view, share) {
    	if (view) {
	    	this._view = view;
	    	this._is2d = view.type === "2d";
        this._share = share;
	    	this._setMapCoordsEvents();		
    	}
    },

    _view: null,

    _is2d: false,

    _share: true,

    _fadeTimeout: 2000,

    _mapCoordsHtml: `<div class="calcite-coords-container esri-component fade">
                        <div id="coordsFlipDiv" class="coords-flip-container">
                          <div class="flipper">
                            <div class="front">
                              <span class="calcite-coords"></span><span class="esri-icon-share calcite-coords-icon"></span>
                            </div>
                            <div class="back">
                              <textarea class="calcite-coords-textarea" value=""></textarea><span class="esri-icon-close calcite-coords-icon"></span>
                            </div>
                          </div>
                        </div>
                      </div>`,

    _mapCoordsHtmlNoShare: `<div class="calcite-coords-container esri-component fade">
                        <div id="coordsFlipDiv" class="coords-flip-container">
                          <div class="flipper">
                            <div class="front">
                              <span class="calcite-coords"></span>
                            </div>
                            <div class="back">
                              <textarea class="calcite-coords-textarea" value=""></textarea><span class="esri-icon-close calcite-coords-icon"></span>
                            </div>
                          </div>
                        </div>
                      </div>`,

    _uiContainer: null,

    _coordsElement: null,

    _coordsInner: null,

    _coordsShare: null,

    _coordsClose: null,

    _timeoutCoords: null,

    _uiVisible: false,

    _inTouch: false,

    _inCoordTouch: false,

    _isUpdatingUI: false,

    _isCoordsLocked: false,

    _coordsUrlTextarea: null,

    _setMapCoordsEvents: function() {
      var view = this._view;
      if (view) {
        view.then(function() {
          this._setWidgetEvents(view);
          this._setViewEvents(view);
          this._setTouchEvents(view);
        }.bind(this)).otherwise(function(err) {
          //console.log(err);
        }.bind(this));
      }
    }, 

    _setWidgetEvents: function(view) {
      this._uiContainer = query(".esri-ui-inner-container.esri-ui-corner-container")[0];
      var html = this._share ? this._mapCoordsHtml : this._mapCoordsHtmlNoShare;
      this._coordsElement = domConstruct.place(html, this._uiContainer);
      this._coordsInner = query(".calcite-coords")[0];
      this._coordsShare = query(".calcite-coords-container .esri-icon-share")[0];
      this._coordsClose = query(".calcite-coords-container .esri-icon-close")[0];
      this._coordsUrlTextarea = query(".calcite-coords-textarea")[0];

      // Widget UI - show on hover, hide on out

      on(this._coordsElement, [touch.over, touch.press], function() {
        this._showCoordsUI(true);
      }.bind(this));
      on(this._coordsElement, [touch.out, touch.release], function() {
        this._showCoordsUI(false);
      }.bind(this));

      // Widget UI Elements - show/hide on icon click
      
      function setCoordsUIVisible(visible, me) {
        var coordsFlip = query("#coordsFlipDiv")[0];
        if (visible) {
          me._isCoordsLocked = true;
          me._showCoordsUI(true);
          me._updateUrlUI();
          query(coordsFlip).addClass("flip");
          setTimeout(function() {
            // this._coordsUrlTextarea.focus();
            me._coordsUrlTextarea.select();
          }.bind(me), 250);   
        } else {
          me._isCoordsLocked = false;
          me._showCoordsUI(false);
          query(coordsFlip).removeClass("flip");
        }
      }

      // Button share
      var me = this;
      if (this._coordsShare) {
        on(this._coordsShare, touch.press, function() {
          setCoordsUIVisible(true, me);
        }.bind(this));        
      }
      // Button close
      on(this._coordsClose, touch.press, function() {
        setCoordsUIVisible(false, me);        
      }.bind(this));
      // Menu share
      query("#menuShare").on(touch.press, function() {
        var flip = !domClass.contains(query("#coordsFlipDiv")[0], "flip");
        setCoordsUIVisible(flip, me);
      }.bind(this));

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
        this._showCoordsUI(true);            
      }.bind(this));
      query(".esri-view-surface").on(touch.release, function(evt) {
        this._inTouch = false;
        if (!this._isCoordsLocked) {
          this._showCoordsUI(false);            
        }
      }.bind(this));
    },

    _getCoordParams: function() {
      var params = {};
      var pt = this._view.center; //this._is2d ? this._view.center : this._view.viewpoint.camera.position;
      if (pt.latitude) { // Geographic // TODO - let user choose coords to display
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
  					//this._coordsInner.innerHTML = (params.lat || params.x) + "," + params.lon + " | " + params.zoom + " | 1:" + params.scale;
            this._coordsInner.innerHTML = (params.lat || params.x) + "," + (params.lon || params.x);
          } else {
            if (this._is2d) {
              this._coordsInner.innerHTML = (params.lat || params.x) + "," + (params.lon || params.y) + " | " + params.zoom + " | 1:" + params.scale + " | " + (params.rotation === 360 ? 0 : params.rotation) + "&deg;" ;  
            } else {
              this._coordsInner.innerHTML = (params.lat || params.x) + "," + (params.lon || params.y) + " | " + params.zoom + " | 1:" + params.scale + " | " + (params.heading === 360 ? 0 : params.heading) + "&deg;" +  " | " + params.tilt + "&deg;";
            }
          }
          // Update panel url
          if (this._isCoordsLocked) {
            this._updateUrlUI(params);
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
        //console.log("showing...")
      } else if (!show && this._uiVisible && !this._inTouch && !this._isCoordsLocked) { // lots of tests...
        this._timeoutCoords = setTimeout(function() {
          this._uiVisible = false;
          query(".calcite-coords-container").removeClass("in");              
          //console.log("hiding...");              
        }.bind(this), this._fadeTimeout); 
      }
    },

    _updateUrlUI: function(params) {
      var params = params || this._getCoordParams();
      var queryParams = this._queryStringToJSON();
      var queryAll = lang.mixin(queryParams, params); // TODO - sort params in preferred order
      var querySearch = this._jsonToQueryString(queryAll);
      var baseUrl;
      if (window.location.href.indexOf("?") > -1) {
        baseUrl = window.location.href.split('?')[0];
      } else {
        baseUrl = window.location.href;
      }
      var pushUrl = baseUrl + "?" + querySearch;
      // Auto-update browser URL...
      // window.history.pushState("", "", pushUrl);
      //window.history.replaceState("", "", pushUrl);
      //this._sharePanelUrlText.value = pushUrl;
      this._coordsUrlTextarea.value = pushUrl;
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
      // TODO - Add sorting code in here lat,lon,zoom,scale,heading,rotation,tilt...
      for (key in obj) {
        str += seperator;
        str += encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
        seperator = "&";
      }
      return str;
    }

  })
});
