define([
        'dojo/_base/declare',
        'dojo/_base/array',
        'dojo/_base/lang',
        'dojo/_base/Color',
        'dojo/dom', 
        'dojo/dom-class',
        'dojo/dom-construct',
        'dojo/dom-style', 
        'dojo/number',
        'esri/config',
        'esri/geometry/mathUtils',
        'esri/geometry/Point',
        'esri/geometry/webMercatorUtils',
        'esri/graphic',
        'esri/request',
        'esri/symbols/SimpleMarkerSymbol',
        'esri/symbols/SimpleLineSymbol',
        'esri/symbols/Font',
        'esri/symbols/TextSymbol',
        'esri/tasks/query',
        'esri/tasks/QueryTask',
        'esri/tasks/StatisticDefinition'
        
	],function(
        declare, 
        array, 
        lang, 
        Color,
        dom, 
        domClass, 
        domConstruct, 
        domStyle, 
        number,
        esriConfig,
        mathUtils,
        Point, 
        webMercatorUtils,
        Graphic,
        esriRequest,
        SimpleMarkerSymbol,
        SimpleLineSymbol,
        Font,
        TextSymbol,
        Query,
        QueryTask,
        StatisticDefinition
){
		
   var weatherInfo = declare('WeatherInfo', null, {
       
      config : null,
      location : null,
      buffer : null,
      container : null,
      
      // **
      
      weatherData : {
         119:["Cloudy","cloudy5.png","cloudy5.png"],
         377:["Moderate or heavy showers of ice pellets","hail.png","hail.png"],
         374:["Light showers of ice pellets","hail.png","hail.png"],
         350:["Ice pellets","hail.png","hail.png"],
         353:["Light rain shower","light_rain.png","light_rain.png"],
         302:["Moderate rain","light_rain.png","light_rain.png"],
         296:["Light rain","light_rain.png","light_rain.png"],
         293:["Patchy light rain","light_rain.png","light_rain.png"],
         266:["Light drizzle","light_rain.png","light_rain.png"],
         263:["Patchy light drizzle","light_rain.png","light_rain.png"],
         122:["Overcast","overcast.png","overcast.png"],
         359:["Torrential rain shower","shower3.png","shower3.png"],
         308:["Heavy rain","shower3.png","shower3.png"],
         365:["Moderate or heavy sleet showers","sleet.png","sleet.png"],
         362:["Light sleet showers","sleet.png","sleet.png"],
         320:["Moderate or heavy sleet","sleet.png","sleet.png"],
         317:["Light sleet","sleet.png","sleet.png"],
         314:["Moderate or Heavy freezing rain","sleet.png","sleet.png"],
         311:["Light freezing rain","sleet.png","sleet.png"],
         284:["Heavy freezing drizzle","sleet.png","sleet.png"],
         281:["Freezing drizzle","sleet.png","sleet.png"],
         185:["Patchy freezing drizzle nearby","sleet.png","sleet.png"],
         182:["Patchy sleet nearby","sleet.png","sleet.png"],
         395:["Moderate or heavy snow in area with thunder","snow4.png","snow4.png"],
         335:["Patchy heavy snow","snow4.png","snow4.png"],
         230:["Blizzard","snow4.png","snow4.png"],
         227:["Blowing snow","snow4.png","snow4.png"],
         371:["Moderate or heavy snow showers","snow5.png","snow5.png"],
         338:["Heavy snow","snow5.png","snow5.png"],
         389:["Moderate or heavy rain in area with thunder","tstorm3.png","tstorm3.png"],
         392:["Patchy light snow in area with thunder","snow2.png","snow2_night.png"],
         386:["Patchy light rain in area with thunder","tstorm1.png","tstorm1_night.png"],
         368:["Light snow showers","snow2.png","snow2_night.png"],
         356:["Moderate or heavy rain shower","shower2.png","shower2_night.png"],
         332:["Moderate snow","snow3.png","snow3_night.png"],
         329:["Patchy moderate snow","snow2.png","snow2_night.png"],
         326:["Light snow","snow1.png","snow1_night.png"],
         323:["Patchy light snow","snow1.png","snow1_night.png"],
         305:["Heavy rain at times","shower2.png","shower2_night.png"],
         299:["Moderate rain at times","shower2.png","shower2_night.png"],
         260:["Freezing fog","fog.png","fog_night.png"],
         248:["Fog","fog.png","fog_night.png"],
         200:["Thundery outbreaks in nearby","tsstorm1.png","tsstorm1_night.png"],
         179:["Patchy snow nearby","snow1.png","snow1_night.png"],
         176:["Patchy rain nearby","shower1.png","shower1_night.png"],
         143:["Mist","mist.png","mist_night.png"],
         116:["Partly Cloudy","cloudy3.png","cloudy3_night.png"],
         113:["Clear/Sunny", "sunny.png", "sunny_night.png"]
      },
         
      // **
	
      constructor: function(config) {
         this.config = config;
      },
    		
      // update for location
      updateForLocation: function(location, container) {
         this.location = location;
         this.container = container;
         this.container.innerHTML = "<br/><br/><img src='images/ajax-loader.gif'/>";
         
         var pt = webMercatorUtils.webMercatorToGeographic(location);
         var coords = pt.y + "," + pt.x;
         var requestURL = this.config.weatherURL + "&q=" + coords;
         
         var weatherDeferred = esriRequest({
             url: requestURL,
             callbackParamName: "callback"
         }, {
             useProxy: false
         });
         var me = this;
         weatherDeferred.then(
             function(response){
                 me.resultsHandler(response);
             }, 
             function(error){
                 me.errorHandler(error);
             });
       },
        	
    		    
      // results handler
      resultsHandler: function(results) {
         this.container.innerHTML = "";
         
         var content = domConstruct.create("div", {
                 class: "resultsContent"
         }, this.container);
         
         var data = results.data;
         var current = data.current_condition;
         var weather = data.weather;
         var timeInfo = 1;
         
         // current
         if (current.length > 0) {
            var cur = current[0];
                
            // time info
            var obs = cur.localObsDateTime.split(" ");
            var ampm = obs[2];
            var hrArray = obs[1].split(":");
            var hr = parseInt(hrArray[0]);
            if (ampm == "AM") {
               if ((hr < 6) || (hr == 12))
                  timeInfo = 2;
            } else {
               if ((hr > 6) && (hr < 12))
                  timeInfo = 2;
            }
                
            // current
            var temp = cur.temp_F;
            var code = cur.weatherCode;
            var w = this.weatherData[parseInt(code)];
            var rec = domConstruct.create("div", {
               class: "recWeather"
            }, content);
            var recLeft = domConstruct.create("div", {
               class: "recLeft",
               innerHTML: "NOW<br/><span class='num'>" + temp + "&deg;</span>"
            }, rec);
            var recRight = domConstruct.create("div", {
               class: "recRight",
               innerHTML: "<img class='imgWeather' src='images/w/" + w[timeInfo] + "' />"
            }, rec);
                
                
         }
             
         // forecast
         for (var i=0; i<weather.length; i++) {
            var cur = weather[i];
            var day = this.getDay(cur.date);
            var tempMax = cur.tempMaxF;
            var tempMin = cur.tempMinF;
            var code = cur.weatherCode;
            var w = this.weatherData[parseInt(code)];
            var rec = domConstruct.create("div", {
               class: "recWeather"
            }, content);
            var recLeft = domConstruct.create("div", {
               class: "recLeft",
               innerHTML: day + "<br/><span class='num'>" + tempMax + "&deg; - " + tempMin + "&deg;</span>"
            }, rec);
            var recRight = domConstruct.create("div", {
               class: "recRight",
               innerHTML: "<img class='imgWeather' src='images/w/" + w[timeInfo] + "' />"
            }, rec);
         }
            
      },
    
      // error handler
      errorHandler: function(error) {
         this.container.innerHTML = "";
         var div = domConstruct.create("div", {
             innerHTML: error.message
         }, this.container);
      },
      
      // get day
      getDay: function(dateString) {
         var array = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
         var dtArray = dateString.split("-");
         var d = new Date(dtArray[0], dtArray[1]-1, dtArray[2]);
         var day = array[d.getDay()];
         return day;
      }
		    
	});
	
	return weatherInfo;
	
});