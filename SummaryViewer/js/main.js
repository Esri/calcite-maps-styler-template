define([
        "dojo/ready", 
        "dojo/_base/declare", 
        "dojo/dom", 
        "dojo/dom-style", 
        "dojo/_base/lang", 
        "dojo/number",
        "esri/arcgis/utils", 
        "esri/dijit/BasemapGallery",
        "esri/IdentityManager", 
        "esri/layers/FeatureLayer", 
        "esri/tasks/query",
        "esri/tasks/StatisticDefinition",
        "application/ClusterLayer",
        "dojo/on"
    ], function(
        ready, 
        declare, 
        dom, 
        domStyle, 
        lang, 
        number,
        arcgisUtils, 
        BasemapGallery,
        IdentityManager, 
        FeatureLayer,
        Query,
        StatisticDefinition,
        ClusterLayer,
        on
) {
    return declare("", null, {
        config : {},
        counter0 : null,
        counter1 : null,
        counter2 : null,
        counter3 : null,
        opLayers: [],
        opLayer: null,
        opSignal: null,
        sumFields: [],
        avgFields: [],
        minFields: [],
        maxFields: [],
        fields: [],
        aliases: [],
        fieldCount : 0,
        pageCount : 0,
        page : 0,
        clusterLayer: null,
        cluster: false,
        sumData: [],

        // constructor
        constructor : function(config) {
            //config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            this.config = config;
            ready(lang.hitch(this, function() {
                this.initUI();
                this.createWebMap();
            }));
        },

        // initialize UI
        initUI : function() {
            this.loadUI();
            this.loadCounters();
        },
        
        // load UI
        loadUI: function() {
            var msgClose = dom.byId("msgClose");
            on(msgClose, "click", this.closeMessage);
            dojo.query(".bg").style("backgroundColor", this.config.color);
            if (this.config.logo)
                dom.byId("logo").src = this.config.logo;
            dom.byId("panelMain").innerHTML = this.config.title;
        },
        
        // load counters
        loadCounters : function() {
            var config = {
                digitsNumber : 17,
                direction : Counter.ScrollDirection.Upwards,
                characterSet : "0123456789., ",
                charsImageUrl : "images/c.png",
                markerImageUrl : "images/m.png"
            };
            this.counter0 = new Counter("counter0", config);
            this.counter0.value = 0;
            this.counter1 = new Counter("counter1", config);
            this.counter1.value = 0;
            this.counter2 = new Counter("counter2", config);
            this.counter2.value = 0;
            this.counter3 = new Counter("counter3", config);
            this.counter3.value = 0;
        },

        //create a map based on the input web map id
        createWebMap : function() {
            arcgisUtils.createMap(this.config.webmap, "mapDiv", {
                mapOptions : {
                    showAttribution: false
                },
                bingMapsKey : this.config.bingmapskey
            }).then(lang.hitch(this, function(response) {
                
                this.map = response.map;
                
                // cluster layer
                var clusterLayer = new ClusterLayer({
                    displayOnPan: true,
                    map: this.map,
                    clusterSize: 120,
                    color: this.config.color,
                    features: []
                });
                this.map.addLayer(clusterLayer);
                this.clusterLayer = clusterLayer;
                on(this.clusterLayer, "click", lang.hitch(this, this.clusterClick));
                
                // process operational layers
                this.opLayers = response.itemInfo.itemData.operationalLayers;
                
                //on(this.map, "extent-change", lang.hitch(this, this.summarizeFeatures));
                
                if (this.map.loaded) {
                    this.mapLoaded();
                } else {
                    on.once(this.map, "load", lang.hitch(this, function() {
                        this.mapLoaded();
                    }));
                }
            }), lang.hitch(this, function(error) {
                //an error occurred - notify the user. In this example we pull the string from the
                //resource.js file located in the nls folder because we've set the application up
                //for localization. If you don't need to support mulitple languages you can hardcode the
                //strings here and comment out the call in index.html to get the localization strings.
                if (this.config && this.config.i18n) {
                    alert(this.config.i18n.map.error + ": " + error.message);
                } else {
                    alert("Unable to create map: " + error.message);
                }
            }));
        },
        
        // map loaded
        mapLoaded : function() {
            // Map is ready
            console.log('map loaded');
            dojo.query(".esriSimpleSlider").style("backgroundColor", this.config.color);
             var basemapGallery = new BasemapGallery({
                    showArcGISBasemaps: true,
                    map: this.map
                }, "basemapGallery");
             basemapGallery.startup();
             this.processOperationalLayers();
        },
        
        // process operational layers
        processOperationalLayers: function() {
            var opLayerName = this.config.summaryLayer;
            var me = this;
            if (opLayerName != "") {
                dojo.forEach(this.opLayers,function(layer){
                    if (layer.layerObject && layer.layerObject.type == "Feature Layer" && layer.title == opLayerName){
                        me.opLayer = layer.layerObject;
                    }
                });
            } else {
                this.opLayer = this.getDefaultOperationalLayer();
            }
            console.log(this.opLayer);
            if (this.opLayer) {
                on(this.map, "extent-change", lang.hitch(this, this.summarizeFeatures));
                this.setLayer();
            } else {
                this.showMessage("No Operational Layers in Web Map.");
            }
        },
        
        // get default operational layer
        getDefaultOperationalLayer: function() {
            this.opLayers.reverse();
            for (var i=0; i<this.opLayers.length; i++) {
                var layer = this.opLayers[i];
                if (layer.layerObject && layer.layerObject.type == "Feature Layer"){
                    var flds = this.getSummaryFields(layer.layerObject);
                    if (flds.length > 0)
                        return layer.layerObject;
                }
            }
            return null;
        },
        
        // get summary fields
        getSummaryFields: function(layer) {
            var array = [];
            var infos = layer.infoTemplate.info.fieldInfos;
            for (var i=0; i<infos.length; i++) {
                var fld = infos[i];
                if (fld.visible && fld.format && fld.fieldName != layer.objectIdField){
                    array.push(fld.fieldName);
                }
            }
            return array;
        },
        
         // set layer
        setLayer: function() {
            if (this.map.infoWindow.isShowing)
                this.map.infoWindow.hide();
            this.closeMessage();
            if (this.opSignal)
                this.opSignal.remove();
            
            this.populateFilterValues();
            this.opSignal = on(this.opLayer, "update-end", lang.hitch(this, this.summarizeFeatures));
            
            this.configureFields();
            this.loadPages();
            
            if (this.opLayer.geometryType == "esriGeometryPoint") {
               if (this.config.cluster == true) {
                    this.cluster = true; 
                    this.clusterLayer.setVisibility(true);
                    this.opLayer.setOpacity(0.01);
               }
               this.opLayer.setVisibility(true);
               //this.opLayer.refresh();
            } 
            
           if (this.fields.length == 0) {
               this.showMessage("No Numeric Attributes in Operational Layer");
           } else {
               this.closeMessage();
           }
           
           this.summarizeFeatures();
                
        },
        
        // configure fields
        configureFields: function() {
            var sumFields = [];
            var avgFields = [];
            var minFields = [];
            var maxFields = [];
            var str = this.config.sumFields + this.config.avgFields + this.config.minFields + this.config.maxFields;
            if (str.length > 0) {
                if (this.config.sumFields != "")
                    sumFields = this.config.sumFields.split(",");
                if (this.config.avgFields != "")
                    avgFields = this.config.avgFields.split(",");
                if (this.config.minFields != "")
                    minFields = this.config.minFields.split(",");
                if (this.config.maxFields != "")
                    maxFields = this.config.maxFields.split(",");
            } else {
                console.log("here");
                sumFields = this.getSummaryFields(this.opLayer);
            }
                
            var fields = ["COUNT"].concat(sumFields, avgFields, minFields, maxFields);
            var aliases = [];
            for (var i=0; i<fields.length; i++) {
                aliases.push(this.getFieldAlias(fields[i]));
            }
            
            this.sumFields = sumFields;
            this.avgFields = avgFields;
            this.minFields = minFields;
            this.maxFields = maxFields;
            this.fields = fields;
            this.aliases = aliases;
            this.fieldCount = fields.length;
        },
        
        // get field alias
        getFieldAlias: function(name) {
            if (this.opLayer.infoTemplate) {
                 var flds = this.opLayer.infoTemplate.info.fieldInfos;
                 for (var i=0; i<flds.length; i++) {
                    var f = flds[i];
                    if (f.fieldName == name)
                        return f.label;
                }
            }
            return name;
        },
        
        // load pages
        loadPages : function() {
            this.fieldCount = this.fields.length;
            this.pageCount = Math.ceil(this.fieldCount / 4);
            var list = dom.byId("pages");
            list.innerHTML = "";
            if (this.pageCount > 1) {
                domStyle.set(list, "width", this.pageCount * 20 + 'px');
                for (var i = 0; i < this.pageCount; i++) {
                    var id = "page" + i;
                    var link = dojo.create("li", {
                        id : id
                    }, list);
                    on(link, "click", lang.hitch(this, this.setPage, i));
                }
                dojo.addClass("page0", "active");
            }
            this.page = 0;
        },
        
        // set page
        setPage : function(num) {
            dojo.removeClass("page" + this.page, "active");
            this.page = num;
            dojo.addClass("page" + this.page, "active");
            this.updateCounters();
        },
        
        // get alias
        getAlias: function(name) {
            if (this.opLayer.infoTemplate) {
                 var flds = this.opLayer.infoTemplate.info.fieldInfos;
                 for (var i=0; i<flds.length; i++) {
                    var f = flds[i];
                    if (f.fieldName == name)
                        return f.label;
                }
            }
            return name;
        },
        
        // populate filter values
        populateFilterValues: function () {
            if (this.config.filterField) {
                var list = dom.byId("selFilter");
                domStyle.set(list, "display", "block");
                on(list, "change", lang.hitch(this, this.setFilter));
                    
                var fld = this.config.filterField;
                var query = new Query();
                var statDef = new StatisticDefinition();
                statDef.statisticType = "count";
                statDef.onStatisticField = fld;
                statDef.outStatisticFieldName = "COUNT";
                query.returnGeometry = false;
                query.where = "1=1";
                query.groupByFieldsForStatistics = [fld];
                query.outStatistics = [ statDef ];
                this.opLayer.queryFeatures(query, function(featureSet){
                    var list = dom.byId("selFilter");
                    dojo.create("option", {
                            value: "",
                            innerHTML: "All"
                        }, list);
                    dojo.forEach(featureSet.features, function(feature){
                        var value = feature.attributes[fld];
                        dojo.create("option", {
                            value: value,
                            innerHTML: value
                        }, list);
                    });
                });
            }
        },
        
        // set filter
        setFilter: function() {
            var list = dom.byId("selFilter");
            var value = list.options[list.selectedIndex].value;
            var expr = this.config.filterField + " = '" + value + "'";
            if (value == "")
                expr = null;
            //this.opLayer.setVisibility(true);
            this.opLayer.setDefinitionExpression(expr);
            //if (this.cluster)
            //    this.opLayer.setVisibility(false);
        },
        
        // summarize features
        summarizeFeatures: function() {
            var ext = this.map.extent;
            var features = [];
            for (var i=0; i<this.opLayer.graphics.length; i++) {
                var gra = this.opLayer.graphics[i];
                if (ext.intersects(gra.geometry)) {
                    features.push(gra);
                }
            }
            if (this.cluster)
                this.clusterLayer.setFeatures(features);
            this.count = features.length;
            this.sumData = this.summarizeAttributes(features);
            this.updateCounters();
        },
        
        
        // cluster click
        clusterClick: function(evt) {
            var gra = evt.graphic;
            var count = gra.attributes.Count;
            var data = gra.attributes.Data;
            var title = count + " Features";
            if (count ==1)
                title = count + " Feature";
            var sumData = this.summarizeAttributes(data); 
            var info = "";
            for (f=0; f<this.fieldCount; f++) {
                info += this.getAlias(this.fields[f]) + ": " + sumData[f] + "<br/><br/>";
            }
            this.map.infoWindow.setTitle(title);
            this.map.infoWindow.setContent(info);
            this.map.infoWindow.show(evt.mapPoint); 
            dojo.stopEvent(evt); 
        },
        
        //summarize attributes
        summarizeAttributes: function(features) {
            
            var f;
            var i;
            var value;
            
            // COUNT
            var countArray = [features.length];
            
            // SUM
            var sumArray = [];
            for (f=0; f<this.sumFields.length; f++) {
                sumArray.push(0);    
            }
            for (i=0; i<features.length; i++) {
                var gra = features[i];
                for (f=0; f<this.sumFields.length; f++) {
                    var fld = this.sumFields[f].replace(/^\s+|\s+$/g,'');
                    sumArray[f] += gra.attributes[fld];
                }
            }
            
            // AVG
            var avgArray  = [];
            for (f=0; f<this.avgFields.length; f++) {
                avgArray.push(0);    
            }
            for (i=0; i<features.length; i++) {
                var gra = features[i];
                for (f=0; f<this.avgFields.length; f++) {
                    var fld = this.avgFields[f].replace(/^\s+|\s+$/g,'');
                    avgArray[f] += gra.attributes[fld];
                }
            }
            for (f=0; f<avgArray.length; f++) {
                avgArray[f] = avgArray[f] / features.length;    
            }
            
            // MIN
            var minArray  = [];
            for (f=0; f<this.minFields.length; f++) {
                minArray.push(0);    
            }
            for (i=0; i<features.length; i++) {
                var gra = features[i];
                for (f=0; f<this.minFields.length; f++) {
                    var fld = this.minFields[f].replace(/^\s+|\s+$/g,'');
                    value = gra.attributes[fld];
                    if (i == 0) {
                        minArray[f] = value;
                    } else {
                        if (value < minArray[f])
                            minArray[f] = value;
                    }
                }
            }
            
            // MAX
            var maxArray  = [];
            for (f=0; f<this.maxFields.length; f++) {
                maxArray.push(0);    
            }
            for (i=0; i<features.length; i++) {
                var gra = features[i];
                for (f=0; f<this.maxFields.length; f++) {
                    var fld = this.maxFields[f].replace(/^\s+|\s+$/g,'');
                    value = gra.attributes[fld];
                    if (i == 0) {
                        maxArray[f] = value;
                    } else {
                        if (value > maxArray[f])
                            maxArray[f] = value;
                    }
                }
            }
            
            var data = countArray.concat(sumArray, avgArray, minArray, maxArray);
            return data;
        },
        
        //update counters
        updateCounters: function() {
            for (var i=0; i<4; i++) {
                var fldIndex = this.page * 4 + i;
                var p = dom.byId("panel"+i);
                if (fldIndex<this.fieldCount) {
                    domStyle.set(p, "display", "block");
                    this.updateCounter(i, fldIndex);
                } else {
                    domStyle.set(p, "display", "none");
                }
            }
        },
        
        //update counter
        updateCounter: function(index, fldIndex) {
            var value = this.sumData[fldIndex];
            if (fldIndex >= this.fields.length)
                value = Math.round(value/this.count);
            var num = value;
            var units = "";
            // if (value > 1000) {
                // num = Math.floor(value*10/ 1000)/10;
                // units = "THOUSANDS";
            // }
            // if (value > 1000000) {
                // num = Math.floor(value*10/ 1000000)/10;
                // units = "MILLIONS";
            // }
            // if (value > 1000000000) {
                // num = Math.floor(value*10/ 1000000000)/10;
                // units = "BILLIONS";
            // }
            if (value >= 10,000,000,000,000) {
                num = Math.floor(value*10/ 1000000000000)/10;
                units = "TRILLIONS";
            }
            var counter = this["counter"+index];
            counter.setValue(number.format(num));
            dom.byId("title"+index).innerHTML = this.getAlias(this.fields[fldIndex]);
            dom.byId("units"+index).innerHTML = units;
        },
        
        // show message
        showMessage: function(msg) {
            domStyle.set(dom.byId("panelContainer"), "display", "none");
            dom.byId("msgText").innerHTML = msg;
            domStyle.set(dom.byId("panelMessage"), "display", "block");
        },
        
        // close message
        closeMessage: function() {
            domStyle.set(dom.byId("panelMessage"), "display", "none");
            domStyle.set(dom.byId("panelContainer"), "display", "block");
        }
        
    });
}); 