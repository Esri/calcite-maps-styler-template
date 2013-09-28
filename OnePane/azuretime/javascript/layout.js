 dojo.require("esri.widgets");
dojo.require("esri.arcgis.utils");


  var map;
  var timeSlider;
  var timeProperties = null;
  var configOptions;
   function initMap(options) {
     configOptions  = options;


       
      
      //read the legend header text from the localized strings file 
      dojo.byId('legendHeader').innerHTML = configOptions.i18n.tools.legend.label;
      
      if(configOptions.bingMapsKey){
        configOptions.bingmapskey = configOptions.bingMapsKey;
      }

    
     
        var mapDeferred = esri.arcgis.utils.createMap(configOptions.webmap, "map", {
          mapOptions: {
            slider: true,
            sliderStyle:'small',
            nav: false,
            showAttribution:true,
            wrapAround180:true
          },
          ignorePopups:false,
          bingMapsKey: configOptions.bingmapskey
        });

        mapDeferred.addCallback(function (response) {
		      document.title = configOptions.title ||response.itemInfo.item.title;	
          dojo.byId("title").innerHTML =  configOptions.title ||response.itemInfo.item.title;
          dojo.byId("subtitle").innerHTML = configOptions.subtitle || response.itemInfo.item.snippet || "";
       

        
          map = response.map;

          //get any time properties that are set on the map
          if(response.itemInfo.itemData.widgets && response.itemInfo.itemData.widgets.timeSlider){
            timeProperties =  response.itemInfo.itemData.widgets.timeSlider.properties;
          }
          if(map.loaded){
              initUI(response);
            }
            else{
              dojo.connect(map,"onLoad",function(){
                initUI(response);
              });
           } 
          //resize the map when the browser resizes
          dojo.connect(dijit.byId('map'), 'resize', map,map.resize);
        });

        mapDeferred.addErrback(function (error) {
          alert(configOptions.i18n.viewer.errors.createMap + " : " +  error.message);
        });



    }
   
   function initUI(response) {
    //add chrome theme for popup
    dojo.addClass(map.infoWindow.domNode, "chrome");
    //add the scalebar 
    var scalebar = new esri.dijit.Scalebar({
      map: map,
      scalebarUnit: configOptions.i18n.viewer.main.scaleBarUnits //metric or english
    }); 
    
    //create the legend - exclude basemaps and any note layers
    var layerInfo = esri.arcgis.utils.getLegendLayers(response);
    if(layerInfo.length > 0){
      var legendDijit = new esri.dijit.Legend({
        map:map,
        layerInfos:layerInfo
      },"legendDiv");
      legendDijit.startup();
    }
    else{
      dojo.byId('legendDiv').innerHTML = configOptions.i18n.tools.legend.layerMessage;
    }
    
    //check to see if the web map has any time properties
    
    if(timeProperties){

      var startTime = timeProperties.startTime;
      var endTime = timeProperties.endTime;
      var fullTimeExtent = new esri.TimeExtent(new Date(startTime), new Date(endTime));

      map.setTimeExtent(fullTimeExtent);
      //create the slider
      timeSlider = new esri.dijit.TimeSlider({
        style: "width: 100%;"
      }, dojo.byId("timeSliderDiv"));
      
      map.setTimeSlider(timeSlider);
      //Set time slider properties 
      timeSlider.setThumbCount(timeProperties.thumbCount);
      timeSlider.setThumbMovingRate(timeProperties.thumbMovingRate);
      //define the number of stops
      if(timeProperties.numberOfStops){
        timeSlider.createTimeStopsByCount(fullTimeExtent,timeProperties.numberOfStops);
      }else{
        timeSlider.createTimeStopsByTimeInterval(fullTimeExtent,timeProperties.timeStopInterval.interval,timeProperties.timeStopInterval.units);
      }
      //set the thumb index values if the count = 2
      if(timeSlider.thumbCount ==2){
        timeSlider.setThumbIndexes([0,1]);
      }


      dojo.connect(timeSlider,'onTimeExtentChange',function(timeExtent){
        //update the time details span.
        var timeString; 
        if(timeProperties.timeStopInterval !== undefined){
        switch(timeProperties.timeStopInterval.units){   
        case 'esriTimeUnitsCenturies':	
          datePattern =  configOptions.i18n.tools.time.centuryPattern; //'yyyy G'
          break;          
        case 'esriTimeUnitsDecades':
          datePattern = configOptions.i18n.tools.time.decadePattern; //'yyyy'
          break;  
         case 'esriTimeUnitsYears':
          datePattern =  configOptions.i18n.tools.time.yearPattern; //'MMMM yyyy'
          break;
        case 'esriTimeUnitsWeeks':	 
          datePattern =  configOptions.i18n.tools.time.weekPattern; //'MMMM d, yyyy'
          break;
        case 'esriTimeUnitsDays':
          datePattern = configOptions.i18n.tools.time.weekPattern;  //'MMMM d, yyyy' same as week pattern
          break;        
        case 'esriTimeUnitsHours':
          datePattern = configOptions.i18n.tools.time.hourTimePattern; //'h a'
          break;
        case 'esriTimeUnitsMilliseconds':
          datePattern = configOptions.i18n.tools.time.millisecondTimePattern; //'h:m:ss.SSS a'
          break;          
        case 'esriTimeUnitsMinutes':
          datePattern = configOptions.i18n.tools.time.minuteTimePattern; //'h:mm a'
          break;          
        case 'esriTimeUnitsMonths':
          datePattern = configOptions.i18n.tools.time.monthPattern; //'MMMM d, y'
          break;          
        case 'esriTimeUnitsSeconds':
          datePattern = configOptions.i18n.tools.time.secondTimePattern;//'h:m:s.SSS a'
          break;          
      }
       var startTime=formatDate(timeExtent.startTime,datePattern);
       var endTime = formatDate(timeExtent.endTime,datePattern);
       timeString= esri.substitute({"start_time": startTime, "end_time": endTime}, configOptions.i18n.tools.time.timeRange);
       
      }
      else{
       timeString = esri.substitute({"time":formatDate(timeExtent.endTime,datePattern)},configOptions.i18n.tools.time.timeRangeSingle);

      }

        
        dojo.byId('timeSliderLabel').innerHTML =  timeString;
      });

      timeSlider.startup();
   }
  }
  function formatDate(date,datePattern){
    return dojo.date.locale.format(date, {
        selector: 'date',
        datePattern: datePattern
      });
  }
  

