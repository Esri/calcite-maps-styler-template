dojo.provide("utilities.app");
dojo.require("dojo.colors");
dojo.require("esri.widgets");
dojo.require("esri.arcgis.utils");
dojo.require("apl.ElevationsSOEUtils");
dojo.require("utilities.AppConfigUtils");

  
    var map;
    var measure;

    function init(){
    var defaults = {
        webmap: "de5ae0c2040c49d38e9ea0637454ac73", 
        appid: "",
        helperServices: commonConfig.helperServices,
        bingmapskey:commonConfig.bingMapsKey,
        proxyurl: "",
        sharingurl:"",
        scalebarUnits: "metric",
        soeInfoDefault:{
          name:"ElevationsSOE_NET",
          mapServiceUrl: location.protocol + "//sampleserver6.arcgisonline.com/arcgis/rest/services/Elevation/WorldElevations/MapServer",
          resourceIndex:0
        }
    };
    
   
    var app = new AppConfigUtils(defaults);
    app.init().then(dojo.hitch(this,function(options){
        dijit.byId("measureDropDown").set("label",options.i18n.measure.label);//.innerHTML = options.i18n.measure.label;
        dojo.byId("measurementNote").innerHTML = options.i18n.measure.snappingMessage;

        this.initMap(options);

    }));
}
function initMap(options) {
    esri.arcgis.utils.createMap(options.webmap, 'map',{
      bingMapsKey: options.bingmapskey || ""
    }).then(dojo.hitch(this, function (response) {
         map = response.map;
          // TITLE //
      if (response.itemInfo.item.title !== null) {
        dojo.byId('title').innerHTML = response.itemInfo.item.title;
      }

       // SNIPPET //
      if (response.itemInfo.item.snippet !== null) {
        dojo.byId('snippet').innerHTML = response.itemInfo.item.snippet;
      }
      // DESCRIPTION //
    if(response.itemInfo.item.description !== null){
      var descriptionPane = new dijit.layout.ContentPane({
        region:'top',
        innerHTML:response.itemInfo.item.description,
        style:"max-height:50%;"
      },dojo.create('div'));
      dijit.byId('infoContainer').addChild(descriptionPane);
    }
      
    if(map.loaded){
      this.initUI(options,response);
    }else{
      dojo.connect(map, "onLoad",dojo.hitch(this, function(){
        this.initUI(options,response);
      }));
    }

}),dojo.hitch(this, function (err) {
    console.log("Error creating map", err);
}));
}

 function initUI(options,response){

      // LEGEND //
      var legendDijit = new esri.dijit.Legend({
        map : map,
        layerInfos: esri.arcgis.utils.getLegendLayers(response)
      }, "legendDiv");
      legendDijit.startup();

      // SCALEBAR //
      var scalebar = new esri.dijit.Scalebar({
        map : map,
        scalebarUnit : options.scalebarUnits
      });

      // MEASUREMENT DIJIT //
      measure = new esri.dijit.Measurement({
        map : map,
        defaultAreaUnit : (options.scalebarUnits === 'metric') ? esri.Units.SQUARE_KILOMETERS : esri.Units.SQUARE_MILES,
        defaultLengthUnit : (options.scalebarUnits === 'metric') ? esri.Units.KILOMETERS : esri.Units.MILES
      }, dojo.byId('measurement'));
      measure.startup();
  

      // PROFILE TOOLS //
      this.createElevationProfileTools(options);
}

 function createElevationProfileTools (options) {
  /**
   *  ELEVATIONS SOE CONFIG
   *
   */

  /**
   *  PROFILE CHART PARAMS
   *
   *  @property {esri.Map} map
   *  @property {esri.dijit.Measurement} measurement
   *  @property {string} scalebarUnits
   *  @property {node} chartNode
   *  @property {boolean} showElevationDifference
   *  @property {boolean} showTemplateHelp
   */
  var profileChartParams = {
    map : map,
    measurement : measure,
    chartNode : dojo.byId('profileChartPane'),
    showElevationDifference : true,
    showTemplateHelp : true
  };

  // ELEVATIONS SOE UTILS //
  var elevationsSOEUtils = new apl.ElevationsSOEUtils();
  elevationsSOEUtils.init(options.soeInfoDefault, profileChartParams);

}

