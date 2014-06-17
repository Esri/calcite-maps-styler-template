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
         
         var queryTask = new QueryTask(this.config.demographicsURL);
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
         var me = this;
         queryTask.execute(query, lang.hitch(me, me.resultsHandler), lang.hitch(me, me.errorHandler));
       },
        	
    		    
      // results handler
      resultsHandler: function(results) {
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
      errorHandler: function(error) {
         this.container.innerHTML = "";
         var div = domConstruct.create("div", {
             innerHTML: error.message
         }, this.container);
      }
		    
	});
	
	return demographicsInfo;
	
});