define([
        'dojo/_base/declare',
        'dojo/_base/lang',
        'dojo/dom-class',
        'dojo/dom-construct',
        'dojo/number',
        'esri/tasks/query',
        'esri/tasks/QueryTask',
        'esri/tasks/StatisticDefinition'
	],function(
        declare, 
        lang, 
        domClass, 
        domConstruct, 
        number,
        Query,
        QueryTask,
        StatisticDefinition
){
		
   var demographicsInfo = declare('DemographicsInfo', null, {
       
      config : null,
      fields : [],
      aliases : [],
      location : null,
      container : null,
      pageObj : null,
	
      constructor: function(config) {
         this.config = config;
         this.fields = this.config.demographicsFields.split(",");
         this.aliases =  this.config.demographicsAliases.split(",");
      },
    		
      // update for location
      updateForLocation: function(location, container, pageObj) {
         this.location = location;
         this.container = container;
         this.container.innerHTML = "<br/><br/><img src='images/ajax-loader.gif'/>";
         this.pageObj = pageObj;
         
         var url = this.config.demographicsURL + "?ts=" + new Date().getTime();
         var queryTask = new QueryTask(url);
         var query = new Query();
         var outStats = [];
         for (var i=0; i<this.fields.length; i++) {
            var fld = this.fields[i];
            var statDef = new StatisticDefinition();
            statDef.statisticType = "sum";
            statDef.onStatisticField = fld;
            statDef.outStatisticFieldName = fld;
            outStats.push(statDef);
         }
         //query.distance = bufferDist;
         //query.units = "miles";
         query.returnGeometry = false;
         query.geometry = pageObj.buffer;
         query.outStatistics = outStats;
         queryTask.execute(query, lang.hitch(this, this._resultsHandler), lang.hitch(this, this._errorHandler));
       },
        	
    		    
      // results handler
      _resultsHandler: function(results) {
         this.container.innerHTML = "";
         
         var content = domConstruct.create("div", {
                 //class: "resultsContent"
         }, this.container);
         domClass.add(content, 'resutsContent');
             
         if (results.features.length > 0) {
            var feature = results.features[0];
            for (var i=0; i<this.fields.length; i++) {
               var fld = this.fields[i];
               var alias = this.aliases[i];
               var div = domConstruct.create("div", {
                 //class: "recDemographics",
                 innerHTML: alias + "<br/><span class='num'>" + number.format(feature.attributes[fld]) + "</span>"
               }, content);
               domClass.add(div, 'recDemographics');
            }
            
         }
      },
    
      // error handler
      _errorHandler: function(error) {
         this.container.innerHTML = "";
         domConstruct.create("div", {
             innerHTML: error.message
         }, this.container);
      }
		    
	});
	
	return demographicsInfo;
	
});