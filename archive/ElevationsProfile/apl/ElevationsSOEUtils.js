/*=============================================================================
 * 
 * Copyright 2010 ESRI. All rights reserved.
 * 
 * Use subject to ESRI license agreement.
 * 
 * Unpublished all rights reserved.
 * Use of this ESRI commercial Software, Data, and Documentation is limited to
 * the ESRI License Agreement. In no event shall the Government acquire greater
 * than Restricted/Limited Rights. At a minimum Government rights to use,
 * duplicate, or disclose is subject to restrictions as set for in FAR 12.211,
 * FAR 12.212, and FAR 52.227-19 (June 1987), FAR 52.227-14 (ALT I, II, and III)
 * (June 1987), DFARS 227.7202, DFARS 252.227-7015 (NOV 1995).
 * Contractor/Manufacturer is ESRI, 380 New York Street, Redlands,
 * CA 92373-8100, USA.
 * 
 * SAMPLE CODE IS PROVIDED "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 * INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE, ARE DISCLAIMED.  IN NO EVENT SHALL ESRI OR CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) SUSTAINED BY YOU OR A THIRD PARTY, HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT; STRICT LIABILITY; OR TORT ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SAMPLE CODE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE TO THE FULL EXTENT ALLOWED BY APPLICABLE LAW.
 * 
 * =============================================================================*/

/*
 *
 * Elevations SOE Utils
 *
 * John Grayson
 * Applications Prototype Lab, ESRI
 * Jul 2010
 * Jan 2012
 * Sep 2012
 *
 */
dojo.ready(function(){

  dojo.require("dojo.fx.easing");
  dojo.require("dojox.charting.Chart2D");
  dojo.require("dojox.charting.themes.ThreeD");
  dojo.require("dijit.Tooltip");
  dojo.require("dijit.Dialog");

  dojo.require("esri.map");
  dojo.require("esri.dijit.Measurement");

  dojo.require("dojo.i18n");
  dojo.requireLocalization('apl','template');

  /**
   * apl.ElevationsSOEUtils
   *
   */
  dojo.provide("apl.ElevationsSOEUtils");
  dojo.declare("apl.ElevationsSOEUtils",[],{

    // SOE PROPERTIES //
    _isValid:null,
    name:null,
    mapServiceUrl:null,
    resourceIndex:null,

    // PROFILE CHART //
    _profileChartInfo:null,

    // IS DEBUG //
    _isDebug:null,
    _inputsNode:null,
    _outputsNode:null,

    /**
     * apl.ElevationsSOEUtils constructor
     *
     * @constructor
     */
    constructor:function(){
      this._isValid = false;
      this._isDebug = false;

      // GET i18n MESSAGES //
      this.messages = dojo.i18n.getLocalization("apl","template",this.lang);

      // PROVIDE PROPER CONTEXT FOR METHODS //
      this._invokeOperation = dojo.hitch(this,this._invokeOperation);
      this.getElevationAtLonLat = dojo.hitch(this,this.getElevationAtLonLat);
      this.getElevations = dojo.hitch(this,this.getElevations);
      this.getElevationData = dojo.hitch(this,this.getElevationData);

      this._initProfileChart = dojo.hitch(this,this._initProfileChart);
      this.clearProfileChart = dojo.hitch(this,this.clearProfileChart);
      this.createProfileChart = dojo.hitch(this,this.createProfileChart);
      this._createProfileChart = dojo.hitch(this,this._createProfileChart);

      this._getElevationLabel = dojo.hitch(this,this._getElevationLabel);
      this._getDistanceLabel = dojo.hitch(this,this._getDistanceLabel);
      this._getDisplayLabel = dojo.hitch(this,this._getDisplayLabel);
      this._getDisplayValue = dojo.hitch(this,this._getDisplayValue);
      this._getDisplayUnits = dojo.hitch(this,this._getDisplayUnits);
      this._displayChartLocation = dojo.hitch(this,this._displayChartLocation);
    },

    /**
     *
     * @param soeInfo Object SOE INFO
     * @param profileChartParams Object PROFILE CHART PARAMS
     * @return {dojo.Deferred}
     */
    init:function(soeInfo,profileChartParams){
      var deferred = new dojo.Deferred();

      // SET SOE PROPERTIES //
      if(soeInfo){
        dojo.mixin(this,soeInfo);
      } else {
        throw new Error("Missing 'soeInfo' parameter.");
      }

      // GET SOE SCHEMA //
      esri.request({url:dojo.replace("{mapServiceUrl}/exts/{name}",this),
        content:{f:'schema'},
        callbackParamName:"callback"
      },{
        disableIdentityLookup:true
      }).then(dojo.hitch(this,function(schema){
        this._isValid = true;
        var hasInfoResource = dojo.some(schema.resources,function(resource){
          return (resource.name.toLowerCase() === 'info');
        });
        if(hasInfoResource){
          // GET INFO //
          esri.request({url:dojo.replace("{mapServiceUrl}/exts/{name}/Info",this),
            content:{f:'json'},
            callbackParamName:"callback"
          },{
            disableIdentityLookup:true
          }).then(dojo.hitch(this,function(response){
            // SET INFO //
            dojo.mixin(this,response);
            this._invokeOperation('',{}).then(dojo.hitch(this,function(resourceInfo){
              this.resourceInfo = dojo.mixin(resourceInfo,this.resourceInfo || {});
              this.resourceInfo.snippet = this.getDataSourceInfo(250);
              if(profileChartParams){
                this._initProfileChart(profileChartParams);
              }
              this._showHelp();
              deferred.resolve();
              console.log(dojo.replace("Elevations SOE version {soeVersion} initialized.",this));
            }),deferred.reject);
          }));
        } else {
          deferred.reject(new Error("The version of the Elevations SOE you are trying to connect to is not supported."));
        }
      }),dojo.hitch(this,function(error){
        deferred.reject(this.messages.errors.InvalidConfiguration);
        console.warn(this.messages.errors.InvalidConfiguration,this);
      }));

      return deferred;
    },

    /**
     *
     * @param soeInfo
     * @param profileChartParams
     * @param inputsNode
     * @param outputsNode
     * @return {dojo.Deferred}
     */
    initDebug:function(soeInfo,profileChartParams,inputsNode,outputsNode){
      var deferred = new dojo.Deferred();
      this._isDebug = true;
      this._inputsNode = inputsNode;
      this._outputsNode = outputsNode;
      dojo.toJsonIndentStr = "  ";
      this.init(soeInfo,profileChartParams).then(dojo.hitch(this,function(){
        this._debugInputMessage(this.toString());
        deferred.resolve();
      }),dojo.hitch(this,function(error){
        this._debugInputMessage(dojo.toJson(error,true));
        deferred.reject(error);
      }));
      return deferred;
    },

    /**
     *
     * @param msg
     * @private
     */
    _debugInputMessage:function(msg){
      dojo.create('pre',{innerHTML:msg},this._inputsNode,'only');
    },

    /**
     *
     * @param msg
     * @private
     */
    _debugOutputMessage:function(msg){
      dojo.create('pre',{innerHTML:msg},this._outputsNode,'only');
    },

    /**
     *
     * @return {String}
     */
    getDataSourceInfo:function(maxChars){
      var info = dojo.replace("{name}: {description}",this.resourceInfo);
      var maxSnippetLength = maxChars || 75;
      if(info.length < maxSnippetLength){
        return info;
      } else {
        var snippetIdx = info.indexOf(".");
        if((snippetIdx > -1) && (snippetIdx < maxSnippetLength)){
          return info.substr(0,snippetIdx);
        } else {
          return info.substr(0,maxSnippetLength) + "...";
        }
      }
    },

    /**
     *  MAKE ELEVATIONS SOE REQUEST
     *
     * @param operation
     * @param content
     * @return {dojo.Deferred}
     * @private
     */
    _invokeOperation:function(operation,content){
      var deferred = new dojo.Deferred();
      if(this._isValid){
        if(this._isDebug){
          this._debugInputMessage(dojo.toJson(content,true));
        }
        var operationUrl = dojo.replace("{mapServiceUrl}/exts/{name}/ElevationLayers/{resourceIndex}",this);
        if(operation && (operation.length > 0)){
          operationUrl += ("/" + operation);
        }
        // MAKE SOE REQUEST //
        esri.request({
          url:operationUrl,
          content:dojo.mixin({f:'json'},content),
          callbackParamName:"callback"
        },{
          disableIdentityLookup:true
        }).then(dojo.hitch(this,function(response){
          if(this._isDebug){
            this._debugOutputMessage(dojo.toJson(response,true));
          }
          deferred.resolve(response);
        }),dojo.hitch(this,function(error){
          if(this._isDebug){
            this._debugOutputMessage(dojo.toJson(error,true));
          }
          deferred.reject(error);
        }));
      } else {
        deferred.reject('Invalid SOE url or resource index.');
      }
      return deferred;
    },

    /**
     * GET ELEVATION AT LON/LAT
     *
     * @param {esri.geometry.Point} geoPoint
     */
    getElevationAtLonLat:function(geoPoint){
      return this._invokeOperation('GetElevationAtLonLat',{
        'lon':geoPoint.x,
        'lat':geoPoint.y
      });
    },

    /**
     *
     * GET ELEVATIONS ALONG GEOMETRY
     * @param {esri.geometry.Geometry} geometry
     * @return {dojo.Deferred}
     */
    getElevations:function(geometry){
      var deferred = new dojo.Deferred();

      this._invokeOperation('GetElevations',{
        'geometries':dojo.toJson([geometry.toJson()]),
        'simplify':true
      }).then(dojo.hitch(this,function(response){
        var elevGeom = esri.geometry.fromJson(response.geometries[0]);
        var elevationInfo = {
          geometry:elevGeom,
          data:this.getElevationsFromGeometry(elevGeom)
        };
        deferred.resolve(elevationInfo);
      }),deferred.reject);

      return deferred;
    },

    /**
     * GET ELEVATION DATA FOR EXTENT
     *
     * @param {esri.geometry.Extent} extent
     * @param {Number} rows
     * @param {Number} cols
     */
    getElevationData:function(extent,rows,cols){
      return this._invokeOperation('GetElevationData',{
        'Extent':dojo.toJson(extent.toJson()),
        'Rows':rows,
        'Columns':cols
      });
    },

    /**
     *
     * @param geometry
     * @return {*}
     */
    getElevationsFromGeometry:function(geometry){
      var elevationData = null;
      switch(geometry.type){
        case 'point':
          elevationData = [geometry.z];
          break;
        case 'multipoint':
          elevationData = this._coordinatesToZs(geometry.points);
          break;
        case 'polyline':
          elevationData = this._partsToZs(geometry.paths);
          break;
        case 'polygon':
          elevationData = this._partsToZs(geometry.rings);
          break;
      }
      return elevationData;
    },

    /**
     *
     * @param parts
     * @return {Array}
     * @private
     */
    _partsToZs:function(parts){
      var elevationPoints = [];
      dojo.forEach(parts,function(part){
        elevationPoints = elevationPoints.concat(this._coordinatesToZs(part));
      },this);
      return elevationPoints;
    },

    /**
     *
     * @param coordinates
     * @return {*}
     * @private
     */
    _coordinatesToZs:function(coordinates){
      return dojo.map(coordinates,function(coords){
        return coords[2];
      },this);
    },

    /**
     *
     * @param geometry
     * @return {*}
     */
    getPointsFromGeometry:function(geometry){
      var elevationPoints = null;
      switch(geometry.type){
        case 'point':
          elevationPoints = [geometry];
          break;
        case 'multipoint':
          elevationPoints = this._coordinatesToPoints(geometry.points,geometry.spatialReference);
          break;
        case 'polyline':
          elevationPoints = this._partsToPoints(geometry.paths,geometry.spatialReference);
          break;
        case 'polygon':
          elevationPoints = this._partsToPoints(geometry.rings,geometry.spatialReference);
          break;
      }
      return elevationPoints;
    },

    /**
     *
     * @param parts
     * @param spatialReference
     * @return {Array}
     * @private
     */
    _partsToPoints:function(parts,spatialReference){
      var elevationPoints = [];
      dojo.forEach(parts,function(part){
        elevationPoints = elevationPoints.concat(this._coordinatesToPoints(part,spatialReference));
      },this);
      return elevationPoints;
    },

    /**
     *
     * @param coordinates
     * @param spatialReference
     * @return {*}
     * @private
     */
    _coordinatesToPoints:function(coordinates,spatialReference){
      return dojo.map(coordinates,function(coords){
        var pnt = new esri.geometry.Point(coords,spatialReference);
        pnt.z = coords[2];
        return pnt;
      },this);
    },

    /**
     *
     * @param polyline
     * @return {esri.geometry.Polyline}
     * @private
     */
    _polylineToSinglePart:function(polyline){

      // PROFILE GRAPHIC //
      var profilePolyline = new esri.geometry.Polyline(polyline.spatialReference);
      // CREATE A SINGLE PATH FROM ALL PATHS                //
      // ISSUE: WHEN MULTIPLE PATHS ARE RETURNED WE HAVE    //
      //        DUPLICATE POINTS AT END AND START OF PATHS, //
      //        NOT A HUGE ISSUE AS ELEVATIONS VALUES MATCH //
      var profilePath = [];
      dojo.forEach(polyline.paths,function(path){
        profilePath = profilePath.concat(path);
      },this);
      profilePolyline.addPath(profilePath);

      return profilePolyline;
    },

    /**
     *
     * @param {Object} profileChartParams
     */
    _initProfileChart:function(profileChartParams){

      // PROFILE CHART PROPERTIES //
      this._profileChartInfo = dojo.mixin(profileChartParams || {},{
        profileChart:null,
        elevationData:null,
        profilePolyline:null,
        sampleDistMeters:null,
        chartMoveGroup:null,
        chartLocationGraphic:null
      });

      if(!this._profileChartInfo.map){
        throw new Error("Missing 'map' parameters");
      }

      // POPUP WINDOW EVENTS //
      dojo.connect(this._profileChartInfo.map.infoWindow,'onSelectionChange',this,this.mapFeatureSelectionChange);
      dojo.connect(this._profileChartInfo.map.infoWindow,'onHide',this,this.mapInfoWindowHide);


      // CLEAR PREVIOUS CONTENT //
      if(this._profileChartInfo.chartNode != null){
        this._profileChartInfo.chartNode.innerHTML = '';
      }

      if(profileChartParams.measurement){
        dojo.connect(profileChartParams.measurement,'onMeasureEnd',this,this._onMeasureEnd);
      } else {
        this._profileChartInfo.measurement = new esri.dijit.Measurement({
          map:this._profileChartInfo.map,
          defaultLengthUnit:esri.Units.MILES
        },dojo.create('div'));
        this._profileChartInfo.measurement.startup();
      }
      this._profileChartInfo.measurement.setTool("distance",true);
      this._profileChartInfo.measurement.setTool("distance",false);

      this._createProfileChart(null);
    },

    /**
     * mapFeatureSelectionChange
     *
     * CALLED WHEN THE SELECTED FEATURE OF THE POPUP WINDOW CHANGES
     */
    mapFeatureSelectionChange:function(){
      var selectedFeature = this._profileChartInfo.map.infoWindow.getSelectedFeature();
      var isPolyline = (selectedFeature && (selectedFeature.geometry.type === 'polyline'));
      if(isPolyline){
        this.createProfileChart(selectedFeature.geometry);
      } else {
        this.clearProfileChart();
      }
    },

    /**
     * mapInfoWindowHide
     *
     * CALLED WHEN THE POPUP WINDOW IS CLOSED
     */
    mapInfoWindowHide:function(){
      this.clearProfileChart();
      //this.setProfileWindowVisible(false);
    },

    /**
     *
     */
    clearProfileChart:function(){
      if(this._profileChartInfo && (this._profileChartInfo.chartNode != null)){
        this._createProfileChart(null);
        //this._profileChartInfo.elevationData = null;
      } else {
        throw new Error("Profile Chart is not initialized: 'initProfileChart(...)' must be called before 'clearProfileChart()' method can can be used.");
      }
    },

    /**
     *
     * @param geometry
     * @param chartNode
     */
    createProfileChart:function(geometry,chartNode){
      var deferred = new dojo.Deferred();

      if(this._profileChartInfo){
        if(chartNode){
          this._profileChartInfo.chartMoveGroup = null;
          this._profileChartInfo.profileChart = null;
          this._profileChartInfo.chartNode = chartNode;
          this._profileChartInfo.chartNode.innerHTML = '';
        } else {
          if(this._profileChartInfo.chartNode == null){
            deferred.reject(new Error("Profile chart node not specified."));
          }
        }
        this.getElevations(geometry).then(dojo.hitch(this,function(elevationInfo){
          this._createProfileChart(elevationInfo).then(deferred.resolve,deferred.reject);
        }),deferred.reject);
      } else {
        deferred.reject(new Error("Profile Chart is not initialized: 'initProfileChart(...)' must be called before 'createProfileChart()' method can can be used."));
      }

      return deferred;
    },

    /**
     * _onMeasureEnd
     *
     * CALCULATE PROFILE ELEVATIONS FOR GEOMETRIES
     *
     * @param {String} activeToolName
     * @param {esri.geometry.Geometry} geometry
     */
    _onMeasureEnd:function(activeToolName,geometry){

      switch(activeToolName){
        case 'area':
          var distancePolyline = new esri.geometry.Polyline(geometry.spatialReference);
          distancePolyline.addPath(geometry.rings[0]);
          this.createProfileChart(distancePolyline);
          break;

        case 'distance':
          this.createProfileChart(geometry);
          break;

        case 'location':
          var geoPoint = esri.geometry.webMercatorToGeographic(geometry);
          this.getElevationAtLonLat(geoPoint).then(dojo.hitch(this,function(response){
            var elevStr = dojo.number.format(response.elevation,{ places:2 });
            var parentNode = this._profileChartInfo.measurement.resultValue.containerNode;
            dojo.create('div',{
              'class':'measureLocationResult',
              innerHTML:dojo.replace(this.messages.locationResultTemplate,[elevStr])
            },parentNode,'last');
          }),dojo.hitch(this,function(error){
            console.warn(error.message);
          }));
          break;

        default:
          //...
          break;
      }
    },

    /**
     *
     * @param elevationInfo
     * @private
     */
    _createProfileChart:function(elevationInfo){
      var deferred = new dojo.Deferred();

      if(elevationInfo && this._profileChartInfo && (this._profileChartInfo.chartNode != null)){
        // PROFILE POLYLINE //
        this._profileChartInfo.profilePolyline = elevationInfo.geometry;
        // ELEVATION DATA //
        this._profileChartInfo.elevationData = elevationInfo.data;

        var profileLengthMeters = esri.geometry.geodesicLengths([esri.geometry.webMercatorToGeographic(this._profileChartInfo.profilePolyline)],esri.Units.METERS)[0];
        this._profileChartInfo.sampleDistMeters = (profileLengthMeters / this._profileChartInfo.elevationData.length);
      } else {
        this._profileChartInfo.elevationData = this._getFilledArray(1,0.0);
        this._profileChartInfo.sampleDistMeters = 1.0;
      }

      // ADJUSTED MIN/MAX ELEVATIONS //
      var yMinSource = this._getArrayMin(this._profileChartInfo.elevationData);
      var yMaxSource = this._getArrayMax(this._profileChartInfo.elevationData);
      var yRange = (yMaxSource - yMinSource);
      var yMin = yMinSource - (yRange * 0.05);
      var yMax = yMaxSource + (yRange * 0.05);
      var yTickStep = this._adjustYTickStep((yRange / 5.0));

      // FILLED ZERO ARRAY //
      var waterData = this._getFilledArray(this._profileChartInfo.elevationData.length);

      if(this._profileChartInfo.profileChart != null){
        this._profileChartInfo.chartMoveGroup = null;

        // UPDATE CHART //
        this._profileChartInfo.profileChart.getAxis("y").opt.min = yMin;
        this._profileChartInfo.profileChart.getAxis("y").opt.max = yMax;
        this._profileChartInfo.profileChart.getAxis("y").opt.majorTickStep = yTickStep;
        this._profileChartInfo.profileChart.getAxis("y").opt.title = dojo.replace(this.messages.chart.elevationTitleTemplate,[this._getDisplayUnits(true)]);
        this._profileChartInfo.profileChart.getAxis("x").opt.title = dojo.replace(this.messages.chart.distanceTitleTemplate,[this._getDisplayUnits(false)]);
        this._profileChartInfo.profileChart.dirty = true;
        this._profileChartInfo.profileChart.updateSeries("Water",waterData);
        this._profileChartInfo.profileChart.updateSeries("Elevation Profile",this._profileChartInfo.elevationData);
        this._profileChartInfo.profileChart.render();

      } else if(this._profileChartInfo && (this._profileChartInfo.chartNode != null)){

        // ANIMATION OPTIONS //
        var chartAnimationOpts = {
          duration:1500,
          easing:dojo.fx.easing.linear
        };

        var nodeCoords = dojo.position(this._profileChartInfo.chartNode,true);
        if(nodeCoords.h === 0){
          deferred.reject(new Error("Height of chart node NOT specified: chart node must have height specified in pixels."));
        }

        // CREATE CHART //
        this._profileChartInfo.profileChart = new dojox.charting.Chart2D(this._profileChartInfo.chartNode,{
          title:"Elevation Profile",
          titlePos:"top",
          titleGap:5,
          titleFont:this._getFontSize('legendTitle',false),
          titleFontColor:'darkgreen',
          animationType:chartAnimationOpts.easing
        });

        // SET THEME //
        this._profileChartInfo.profileChart.setTheme(dojox.charting.themes.ThreeD);
        // OVERRIDE DEFAULTS //
        this._profileChartInfo.profileChart.fill = 'white';
        this._profileChartInfo.profileChart.theme.axis.stroke.width = 2;
        this._profileChartInfo.profileChart.theme.axis.majorTick = {
          color:dojo.Color.named.white.concat(0.5),
          width:1.0
        };
        this._profileChartInfo.profileChart.theme.plotarea.fill = {
          type:"linear",
          space:"plot",
          x1:50,y1:100,x2:50,y2:0,
          colors:[
            { offset:0.0,color:dojo.Color.named.powderblue },
            { offset:1.0,color:dojo.Color.named.steelblue }
          ]
        };

        // Y AXIS //
        this._profileChartInfo.profileChart.addAxis("y",{
          min:yMin,
          max:yMax,
          majorTickStep:yTickStep,
          fontColor:'black',
          font:this._getFontSize('axisLabel',false),
          vertical:true,
          fixLower:"major",
          fixUpper:"minor",
          natural:true,
          fixed:true,
          includeZero:false,
          majorTicks:true,
          majorTick:{ color:'black',length:4 },
          minorTicks:false,
          labelFunc:this._getElevationLabel,
          title:dojo.replace(this.messages.chart.elevationTitleTemplate,[this._getDisplayUnits(true)]),
          titleGap:30,
          titleFont:this._getFontSize('axisTitle',false),
          titleFontColor:'green',
          titleOrientation:'axis'
        });

        // X AXIS //
        this._profileChartInfo.profileChart.addAxis("x",{
          fontColor:'black',
          font:this._getFontSize('axisLabel',false),
          fixLower:"none",
          fixUpper:"none",
          includeZero:false,
          natural:false,
          fixed:true,
          majorTicks:true,
          majorTick:{ color:'black',length:4 },
          labelFunc:this._getDistanceLabel,
          minorTicks:true,
          minorTick:{ color:'black',length:4 },
          title:dojo.replace(this.messages.chart.elevationTitleTemplate,[this._getDisplayUnits(false)]),
          titleGap:5,
          titleFont:this._getFontSize('axisTitle',false),
          titleFontColor:'green',
          titleOrientation:'away'
        });

        // GRID //
        this._profileChartInfo.profileChart.addPlot("Grid",{
          type:"Grid",
          hMajorLines:true,
          hMinorLines:false,
          vMajorLines:false,
          vMinorLines:false
        });

        // PROFIlE PLOT //
        this._profileChartInfo.profileChart.addPlot("default",{
          type:"Areas",
          tension:"X",
          animate:chartAnimationOpts
        });

        // WATER PLOT //
        this._profileChartInfo.profileChart.addPlot("water",{
          type:"Areas",
          animate:chartAnimationOpts
        });

        // WATER DATA //
        this._profileChartInfo.profileChart.addSeries("Water",waterData,{
          plot:"water",
          stroke:{ color:dojo.Color.named.white,width:2.0 },
          fill:{
            type:"linear",
            space:"plot",
            x1:50,y1:0,x2:50,y2:100,
            colors:[
              { offset:0.0,color:dojo.Color.named.lightblue.concat(0.5) },
              { offset:1.0,color:dojo.Color.named.blue.concat(0.5) }
            ]
          }
        });

        // PROFILE DATA //
        this._profileChartInfo.profileChart.addSeries("Elevation Profile",this._profileChartInfo.elevationData,{
          stroke:{ color:dojo.Color.named.tan,width:1.5 },
          fill:{
            type:"linear",
            space:"plot",
            x1:50,y1:0,x2:50,y2:100,
            colors:[
              { offset:0.0,color:dojo.Color.named.saddlebrown },
              { offset:1.0,color:dojo.Color.named.peru }
            ]
          }
        });

        if(this._profileChartInfo.showElevationDifference){
          // DISPLAY CHART LOCATION ON MAP //
          if(!esri.isTouchEnabled){
            // MOUSE MOVE EVENT //
            this._profileChartInfo.profileChart.surface.connect("onmousemove",this,function(evt){
              dojo.stopEvent(evt);
              this._onChartLocationMove(evt.clientX,evt.clientY);
            });
          } else {
            // TOUCH MOVE EVENT //
            this._profileChartInfo.profileChart.surface.connect("ontouchmove",this,function(evt){
              dojo.stopEvent(evt);
              if(evt.touches && (evt.touches.length > 0)){
                this._onChartLocationMove(evt.touches[0].clientX,evt.touches[0].clientY);
              }
            });
            // TOUCH END EVENT //
            this._profileChartInfo.profileChart.surface.connect("ontouchend",this,function(evt){
              dojo.stopEvent(evt);
              this._onChartLocationMove(0,0);
            });
          }
        }

        // RENDER CHART //
        this._profileChartInfo.profileChart.render();
      }

      if(this._profileChartInfo.profileChart != null){
        // ELEVATION INFO //
        var elevDisplayUnits = this._getDisplayUnits(true);

        var elevMinStr = this._getDisplayLabel(yMinSource,elevDisplayUnits);
        var elevMaxStr = this._getDisplayLabel(yMaxSource,elevDisplayUnits);
        var elevFirst = this._profileChartInfo.elevationData[0];
        var elevLast = this._profileChartInfo.elevationData[this._profileChartInfo.elevationData.length - 1];
        var elevStartStr = this._getDisplayLabel(elevFirst,elevDisplayUnits);
        var elevEndStr = this._getDisplayLabel(elevLast,elevDisplayUnits);
        var startElev = this._getDisplayValue(elevFirst,elevDisplayUnits);
        var endElev = this._getDisplayValue(elevLast,elevDisplayUnits);
        var gainloss = (endElev - startElev);
        var gainlossStr = dojo.number.format(gainloss,{places:1});

        var elevInfo = {
          min:elevMinStr,
          max:elevMaxStr,
          start:elevStartStr,
          end:elevEndStr,
          gainloss:gainlossStr
        };

        // ELEVATION INFO TEXT //
        var elevMinMaxMsg = dojo.replace(this.messages.chart.gainLossTemplate,elevInfo);
        var chartCoords = this._profileChartInfo.profileChart.getCoords();
        var elevMinMaxMsgText = this._profileChartInfo.profileChart.surface.createText({
          x:chartCoords.x,
          y:(chartCoords.h - 5.0),
          text:elevMinMaxMsg,
          align:"start"
        }).setFont({family:"Tahoma",style:"bold",size:"8pt"}).setFill('darkred');
        var maxWidth = (chartCoords.w - elevMinMaxMsgText.getTextWidth());
        var dataSourceInfo = this.getDataSourceInfo(dojox.gfx.px2pt(maxWidth) / 9.0);
        // ELEVATION SOURCE TEXT //
        var dataSourceText = this._profileChartInfo.profileChart.surface.createText({
          x:(chartCoords.w - 5.0),
          y:(chartCoords.h - 5.0),
          text:dataSourceInfo,
          align:"end"
        }).setFont({family:"Tahoma",style:"bold",size:"8pt"}).setFill('gray');
        dataSourceText.connect('onclick',dojo.hitch(this,function(){
          dijit.showTooltip(this.getDataSourceInfo(Infinity),dataSourceText.parent._parent,["above","below","after","before"]);
        }));
        dataSourceText.connect('onmouseover',dojo.hitch(this,function(){
          dojo.style(dataSourceText.parent._parent,'cursor','pointer');
        }));
        dataSourceText.connect('onmouseout',dojo.hitch(this,function(){
          dojo.style(dataSourceText.parent._parent,'cursor','default');
          dijit.hideTooltip(dataSourceText.parent._parent);
        }));

        // TEMPLATE HELP LINK //
        if(this._profileChartInfo.showTemplateHelp){
          var helpText = this._profileChartInfo.profileChart.surface.createText({
            x:(chartCoords.w - 25.0),
            y:25.0,
            text:"Help",
            align:"end"
          }).setFont({family:"Tahoma",weight:"bold",size:"9pt"}).setFill("darkblue").setStroke({color:"gray",width:0.25});
          helpText.connect('onmouseover',dojo.hitch(this,function(){
            dojo.style(helpText.parent._parent,'cursor','pointer');
          }));
          helpText.connect('onmouseout',dojo.hitch(this,function(){
            dojo.style(helpText.parent._parent,'cursor','default');
          }));
          helpText.connect('onclick',dojo.hitch(this,function(){
              this._showHelp();
            }
          ));
        }
        deferred.resolve();
      } else {
        deferred.resolve();
      }

      return deferred;
    },

    /**
     *  _showHelp
     *
     *  DISPLAY HELP DIALOG
     *
     * @private
     */
    _showHelp:function(){
      var helpDlg = dijit.byId('helpDlg');
      if(!helpDlg){

        var helpContent = dojo.create('div',{});
        var optionsList = dojo.create('ul',{},helpContent);

        var selectOption = dojo.create('li',{
          innerHTML:dojo.replace('{display.selectLine}&nbsp;<a id="showmeselect" target="_blank" href="{display.selectFeatureHelpUrl}">{display.showMe}</a><br/><span style="color:gray;padding-left:6px;font-size:smaller;">{display.popupRequirement}</span><br/><br/>',this.messages)
        },optionsList);

        var measureOption = dojo.create('li',{
          innerHTML:dojo.replace('{display.digitizeDistanceMeasureTool}&nbsp;<a id="showmemeasure" target="_blank" href="{display.measureToolHelpUrl}">{display.showMe}</a>',this.messages)
        },optionsList);

        var hoverInfo = dojo.create('div',{
          style:"margin:15px 10px 5px 10px;",
          innerHTML:dojo.replace('{display.hoverOver}',this.messages)
        },helpContent);

        helpDlg = new dijit.Dialog({
          id:"helpDlg",
          style:"width:500px;",
          title:this.messages.display.elevationProfileTitle,
          content:helpContent
        });
        dojo.style(helpDlg.titleNode,{'fontWeight':'bolder'});
      }
      helpDlg.show();
      setTimeout(function(){helpDlg.hide();},4000);
    },

    /**
     * onChartLocationMove
     *
     * DISPLAY INTERACTIVE VERTICAL LINE AND ELEVATION TEXT AT MOUSE/TOUCH LOCATION
     *
     * @param {Number} clientX
     * @param {Number} clientY
     */
    _onChartLocationMove:function(clientX,clientY){

      if(this._profileChartInfo.elevationData){
        var chartCoords = dojo.position(this._profileChartInfo.profileChart.node,true);
        var chartOffsets = this._profileChartInfo.profileChart.offsets;

        // PLOT COORDINATES //
        var plotCoords = {
          x:(clientX - chartCoords.x),
          y:(clientY - chartCoords.y),
          l:(chartCoords.x + chartOffsets.l),
          r:(chartCoords.x + chartCoords.w - chartOffsets.r),
          t:(chartCoords.y + chartOffsets.t),
          b:(chartCoords.y + chartCoords.h - chartOffsets.b)
        };

        if(!this._profileChartInfo.chartMoveGroup){
          // CREATE GROUP OF GRAPHICS TO MOVE //
          this._profileChartInfo.chartMoveGroup = this._profileChartInfo.profileChart.surface.createGroup();
        } else {
          // REMOVE PREVIOUS //
          this._profileChartInfo.chartMoveGroup.clear();
        }

        // IS CURSOR OVER CHART PLOT AREA //
        if(((clientX > plotCoords.l) && (clientX < plotCoords.r)) &&
          ((clientY > plotCoords.t) && (clientY < plotCoords.b))){

          var elevationData = this._profileChartInfo.elevationData;

          // X POINT INDEX //
          var plotPercentAlongX = ((clientX - plotCoords.l) / (plotCoords.r - plotCoords.l));
          var pointIndex = parseInt((elevationData.length - 1) * plotPercentAlongX);
          // DISPLAY CHART LOCATION ON MAP //
          this._displayChartLocation(pointIndex);

          // Y COORDINATE //
          var elev = elevationData[pointIndex];
          var elevDisplayUnits = this._getDisplayUnits(true);
          var elevStr = this._getDisplayLabel(elev,elevDisplayUnits);
          var yAxisBounds = this._profileChartInfo.profileChart.getAxis('y').scaler.bounds;
          var plotPercentAlongY = ((yAxisBounds.upper - elev) / (yAxisBounds.upper - yAxisBounds.lower));
          var chartElevationLineY = (plotCoords.t + ((plotCoords.b - plotCoords.t) * plotPercentAlongY)) - chartCoords.y;
          var chartElevationMiddle = (plotCoords.t + ((plotCoords.b - plotCoords.t) * 0.5)) - chartCoords.y;

          // ELEVATION CHANGE //
          var currentElev = this._getDisplayValue(elevationData[pointIndex],elevDisplayUnits);
          var startElev = this._getDisplayValue(elevationData[0],elevDisplayUnits);
          var gainloss = (currentElev - startElev);
          var gainlossStr = gainloss ? dojo.number.format(gainloss,{places:1}) : "0.0";

          var plotPercentAlongYChange = ((yAxisBounds.upper - elevationData[0]) / (yAxisBounds.upper - yAxisBounds.lower));
          var chartElevationLineYChange = (plotCoords.t + ((plotCoords.b - plotCoords.t) * plotPercentAlongYChange)) - chartCoords.y;

          // VERTICAL LINE //
          this._profileChartInfo.chartMoveGroup.createLine({
            x1:plotCoords.x,
            y1:plotCoords.t - chartCoords.y,
            x2:plotCoords.x,
            y2:plotCoords.b - chartCoords.y
          }).setStroke({color:"black",width:1.5});

          if(!isNaN(chartElevationLineY)){

            // ELEVATION TEXT //
            var leftOfCenter = (plotCoords.x < (plotCoords.l + ((plotCoords.r - plotCoords.l) * 0.5)));
            var bottomOfMiddle = (chartElevationLineY > chartElevationMiddle);
            var textOffset = 10.0;
            var textX = (leftOfCenter ? (plotCoords.x + textOffset) : (plotCoords.x - textOffset));
            var textY = (bottomOfMiddle ? (chartElevationLineY - textOffset) : (chartElevationLineY + (textOffset * 3)));

            this._profileChartInfo.chartMoveGroup.createText({
              x:textX,
              y:textY,
              text:elevStr,
              align:leftOfCenter ? "start" : "end"
            }).setFont({family:"Tahoma",weight:"bold",size:"22pt"}).setFill("black").setStroke({color:"white",width:1.5});

            // ELEVATION CHANGE //
            if(this._profileChartInfo.showElevationDifference && (gainloss != 0.0)){
              var changeTextX = (!leftOfCenter ? (plotCoords.x + 5.0) : (plotCoords.x - 5.0));
              var gainlosslabelcolor = ((gainloss > 0.0) ? "green" : "red");

              this._profileChartInfo.chartMoveGroup.createLine({
                x1:plotCoords.x,
                y1:chartElevationLineYChange,
                x2:plotCoords.x,
                y2:chartElevationLineY
              }).setStroke({color:gainlosslabelcolor,width:3.0});

              var textLength = gainlossStr.length - ((gainloss > 1000) ? 2 : 1);
              var textWidth = (textLength * 10.0) + 5.0;
              this._profileChartInfo.chartMoveGroup.createRect({
                x:leftOfCenter ? (changeTextX - textWidth - 5.0) : changeTextX + 5.0,
                y:chartElevationLineYChange - 10.0,
                width:textWidth,
                height:20.0,
                r:5.0
              }).setFill(dojo.Color.named.white.concat(0.75)).setStroke({color:gainlosslabelcolor,width:1});

              this._profileChartInfo.chartMoveGroup.createText({
                x:leftOfCenter ? changeTextX - 10.0 : changeTextX + 10.0,
                y:chartElevationLineYChange + 5.0,
                text:gainlossStr,
                align:leftOfCenter ? "end" : "start"
              }).setFont({family:"Tahoma",weight:"normal",size:"10pt"}).setFill(gainlosslabelcolor);
            }

            // CIRCLE //
            this._profileChartInfo.chartMoveGroup.createCircle({
              cx:plotCoords.x,
              cy:chartElevationLineY,
              r:6
            }).setStroke({color:"white",width:2.0});

          }
        } else {
          this._displayChartLocation(-1);
        }
      }
    },

    /**
     * displayChartLocation
     *
     * DISPLAY CHART LOCATION AS RED X GRAPHIC ON THE MAP
     *
     * @param {Number} pointIndex
     */
    _displayChartLocation:function(pointIndex){
      if(this._profileChartInfo.map && this._profileChartInfo.elevationData && this._profileChartInfo.profilePolyline){

        if(!this._profileChartInfo.chartLocationGraphic){
          var red = new dojo.Color(dojo.Color.named.red);
          var outline = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,red,3);
          var chartLocationSymbol = new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_X,13,outline,red);
          this._profileChartInfo.chartLocationGraphic = new esri.Graphic(null,chartLocationSymbol);
          this._profileChartInfo.map.graphics.add(this._profileChartInfo.chartLocationGraphic);
        }

        if((pointIndex >= 0) && (pointIndex < this._profileChartInfo.elevationData.length)){
          this._profileChartInfo.chartLocationGraphic.setGeometry(this._profileChartInfo.profilePolyline.getPoint(0,pointIndex));
        } else {
          this._profileChartInfo.chartLocationGraphic.setGeometry(null);
        }
      }
    },

    /**
     *
     * @param yTickStep
     * @return {*}
     * @private
     */
    _adjustYTickStep:function(yTickStep){
      var newYTickStep = yTickStep;
      var limits = [1000,100,10,1];
      dojo.some(limits,function(limit){
        newYTickStep = ((yTickStep + limit) - ((yTickStep + limit) % limit));
        return (yTickStep > limit);
      });
      return newYTickStep;
    },

    /**
     *
     * @param size
     * @param value
     * @return {Array}
     * @private
     */
    _getFilledArray:function(size,value){
      var dataArray = new Array(size);
      for(var dataIdx = 0; dataIdx < size; ++dataIdx){
        dataArray[dataIdx] = value || 0;
      }
      return dataArray;
    },

    /**
     *
     * @param chartPart
     * @param sizeOnly
     * @return {*}
     * @private
     */
    _getFontSize:function(chartPart,sizeOnly){
      var fontSizes = {
        legendTitle:13,
        axisTitle:11,
        chartLabel:9,
        axisLabel:7
      };
      return sizeOnly ? dojo.replace("{0}pt",[fontSizes[chartPart]]) : dojo.replace("normal normal bold {0}pt Tahoma",[fontSizes[chartPart]]);
    },

    /**
     *
     * @param array
     * @return {Object}
     * @private
     */
    _getArrayMax:function(array){
      return Math.max.apply(Math,array);
    },

    /**
     *
     * @param array
     * @return {Object}
     * @private
     */
    _getArrayMin:function(array){
      return Math.min.apply(Math,array);
    },

    /**
     * getDistanceLabel
     *
     * X-AXIS LABEL FUNCTION
     *
     * @param {String} label
     * @param {Number} val
     */
    _getDistanceLabel:function(label,val){
      var displayUnits = this._getDisplayUnits(false);
      return this._getDisplayLabel((val * this._profileChartInfo.sampleDistMeters),displayUnits);
    },

    /**
     * getElevationLabel
     *
     * Y-AXIS LABEL FUNCTION
     *
     * @param {String} label
     * @param {Number} val
     */
    _getElevationLabel:function(label,val){
      var displayUnits = this._getDisplayUnits(true);
      return this._getDisplayLabel(val,displayUnits);
    },

    /**
     * getDisplayLabel
     *
     * GET DISPLAY LABEL GIVEN A VALUE IN METERS AND THE DISPLAY UNITS
     * CONVERT FROM METERS TO MILES THEN FROM MILES TO DISPLAY UNITS
     *
     * @param {Number} valueMeters
     * @param {String} displayUnits
     */
    _getDisplayLabel:function(valueMeters,displayUnits){
      var displayDistance = this._getDisplayValue(valueMeters,displayUnits);
      return dojo.number.format(displayDistance,{ 'places':1 });
    },

    /**
     * getDisplayValue
     *
     * GET DISPLAY VALUE GIVEN A VALUE IN METERS AND THE DISPLAY UNITS
     * CONVERT FROM METERS TO MILES THEN FROM MILES TO DISPLAY UNITS
     *
     * @param {Number} valueMeters
     * @param {String} displayUnits
     */
    _getDisplayValue:function(valueMeters,displayUnits){
      if(displayUnits === this._profileChartInfo.measurement.units.esriMeters){
        return valueMeters;
      } else {
        var distanceMiles = (valueMeters / this._profileChartInfo.measurement.unitDictionary[this._profileChartInfo.measurement.units.esriMeters]);
        return (distanceMiles * this._profileChartInfo.measurement.unitDictionary[displayUnits]);
      }
    },

    /**
     * getDisplayUnits
     *
     * GET DISPLAY UNITS FOR AXIS LABELS
     * IF USING A SELECTED FEATURE WE'LL USE THE DEFAULT DISTANCE UNITS BASED ON THE MAP SCALEBAR (OR MILES IF NO SCALEBAR)
     * IF GETTING DISPLAY UNITS FOR ELEVATION WE'LL SWITCH TO FEET OR METERS
     *
     * @param {Boolean} isElevation
     */
    _getDisplayUnits:function(isElevation){
      var displayUnits = this._profileChartInfo.measurement.unit.label;
      if(isElevation){
        switch(displayUnits){
          case this._profileChartInfo.measurement.units.esriMiles:
            displayUnits = this._profileChartInfo.measurement.units.esriFeet;
            break;
          case this._profileChartInfo.measurement.esriYards:
            displayUnits = this._profileChartInfo.measurement.esriFeet;
            break;
          case this._profileChartInfo.measurement.units.esriKilometers:
            displayUnits = this._profileChartInfo.measurement.units.esriMeters;
            break;
        }
      }
      return displayUnits;
    },

    /**
     *
     * @return {*}
     */
    toString:function(){
      return dojo.toJson(this,true);
    }

  });
});
