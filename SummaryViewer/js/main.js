define([
        "dojo/ready", 
        "dojo/_base/declare", 
        "dojo/dom", 
        "dojo/dom-style", 
        "dojo/dom-class",
        "dojo/dom-construct",
        "dojo/_base/lang", 
        "dojo/_base/array",
        "dojo/_base/event",
        "dojo/query",
        "dojo/number",
        "dojo/mouse",
        "esri/arcgis/utils", 
        "esri/dijit/BasemapGallery",
        "esri/geometry/normalizeUtils",
        "esri/graphic",
        "esri/graphicsUtils",
        "esri/tasks/query",
        "esri/tasks/StatisticDefinition",
        "application/ClusterLayer",
        "dojo/on"
    ], function(
        ready, 
        declare, 
        dom, 
        domStyle, 
        domClass,
        domConstruct,
        lang, 
        array,
        dojoEvent,
        query,
        number,
        mouse,
        arcgisUtils, 
        BasemapGallery,
        normalizeUtils,
        Graphic,
        graphicsUtils,
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
      opLayers : [],
      opLayer : null,
      opFeatureCollection : false,
      opFeatures : [],
      opSignal : null,
      sumFields : [],
      avgFields : [],
      minFields : [],
      maxFields : [],
      fields : [],
      aliases : [],
      fieldCount : 0,
      pageCount : 0,
      page : 0,
      visCount : 4,
      clusterLayer : null,
      cluster : false,
      sumData : [],
      fieldTypes : "esriFieldTypeSmallInteger,esriFieldTypeInteger,esriFieldTypeSingle,esriFieldTypeDouble",
      filterString : false,
      timer : null,

      // constructor
      constructor : function(config) {
         //config will contain application and user defined info for the template such as i18n strings, the web map id
         // and application id
         // any url parameters and any application specific configuration information.
         //console.log(config);
         this.config = config;
         ready(lang.hitch(this, function() {
            this.initUI();
            this.createWebMap();
            var me = this;
            window.onresize = function() {
               me.resizeWindow();
            };
         }));
      },

      // initialize UI
      initUI : function() {
         this.loadUI();
         this.loadCounters();
      },

      // load UI
      loadUI : function() {
         var tip = "Close";
         if (this.config && this.config.i18n) {
            tip = this.config.i18n.tooltips.close;
         }
         var msgClose = dom.byId("msgClose");
         msgClose.alt = tip;
         on(msgClose, "click", this.closeMessage);
         query(".bg").style("backgroundColor", this.config.color);
         
         if (this.config.logo)
            dom.byId("logo").src = this.config.logo;
         dom.byId("panelMain").innerHTML = this.config.title;

         tip = "Switch base map";
         if (this.config && this.config.i18n) {
            tip = this.config.i18n.tooltips.switchbasemap;
         }
         dom.byId("basemap").alt = tip;
         dom.byId("basemap").title = tip;
         
         var basemapTitle = dom.byId("basemapTitle");
         on(basemapTitle, "click", function() {
            domClass.toggle("panelBasemaps", "panelBasemapsOn");
         });
         on(basemapTitle, mouse.enter, function() {
            domClass.add("panelBasemaps", "panelBasemapsOn");
         });
         var panelBasemaps = dom.byId("panelBasemaps");
         on(panelBasemaps, mouse.leave, function() {
            domClass.remove("panelBasemaps", "panelBasemapsOn");
         });
      },

      // load counters
      loadCounters : function() {
         var config = {
            digitsNumber : 17,
            direction : Counter.ScrollDirection.Upwards,
            characterSet : "0123456789.,- ",
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
               showAttribution : false,
               editable : false
            },
            bingMapsKey : this.config.bingmapskey
         }).then(lang.hitch(this, function(response) {

            this.map = response.map;

            // cluster layer
            var clusterLayer = new ClusterLayer({
               displayOnPan : true,
               map : this.map,
               clusterSize : 120,
               color : this.config.color,
               features : []
            });
            this.map.addLayer(clusterLayer);
            this.clusterLayer = clusterLayer;
            on(this.clusterLayer, "click", lang.hitch(this, this.clusterClick));

            // process operational layers
            this.opLayers = response.itemInfo.itemData.operationalLayers;
            //console.log(this.opLayers);

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
         query(".esriSimpleSlider").style("backgroundColor", this.config.color);
         var basemapGallery = new BasemapGallery({
            showArcGISBasemaps : true,
            portalUrl: this.config.sharinghost,
            basemapsGroup: this._getBasemapGroup(),
            map : this.map
         }, "basemapGallery");
         basemapGallery.startup();
         basemapGallery.on("selection-change", function() {
            domClass.remove("panelBasemaps", "panelBasemapsOn");
         });
         this.processOperationalLayers();
      },
     
      // get basemap group
      _getBasemapGroup: function () {
            //Get the id or owner and title for an organizations custom basemap group.
            var basemapGroup = null;
            if (this.config.basemapgroup && this.config.basemapgroup.title && this.config.basemapgroup.owner) {
                basemapGroup = {
                    "owner": this.config.basemapgroup.owner,
                    "title": this.config.basemapgroup.title
                };
            } else if (this.config.basemapgroup && this.config.basemapgroup.id) {
                basemapGroup = {
                    "id": this.config.basemapgroup.id
                };
            }
            return basemapGroup;
        },

      // process operational layers
      processOperationalLayers : function() {
         var opLayerName = this.config.summaryLayer.id;
         var me = this;
         if (opLayerName !== "") {
            array.forEach(this.opLayers, function(layer) {
               if (layer.featureCollection) {
                  for (var i = 0; i < layer.featureCollection.layers.length; i++) {
                     if (layer.featureCollection.layers[i].id == opLayerName) {
                        me.opFeatureCollection = true;
                        me.opLayer = layer.featureCollection.layers[i].layerObject;
                        me.opFeatures = me.opLayer.graphics.slice(0);
                     }
                  }
               } else if (layer.layerObject && layer.layerObject.type == "Feature Layer" && layer.id == opLayerName) {
                  me.opLayer = layer.layerObject;
               }
            });
         } else {
            this.opLayer = this.getDefaultOperationalLayer();
         }
         if (this.opLayer) {
            this.setLayer();
         } else {
            this.showMessage("No Operational Layers in Web Map.");
         }
      },

      // get default operational layer
      getDefaultOperationalLayer : function() {
         this.opLayers.reverse();
         for (var i = 0; i < this.opLayers.length; i++) {
            var layer = this.opLayers[i];
            if (layer.featureCollection) {
               for (var l = 0; l < layer.featureCollection.layers.length; l++) {
                  var flds = this.getSummaryFields(layer.featureCollection.layers[l].layerObject);
                  if (flds.length > 0) {
                     this.opFeatureCollection = true;
                     this.opFeatures  = layer.featureCollection.layers[l].layerObject.graphics.slice(0);
                     return layer.featureCollection.layers[l].layerObject;
                  }
               }
            } else if (layer.layerObject && layer.layerObject.type == "Feature Layer") {
               var flds = this.getSummaryFields(layer.layerObject);
               if (flds.length > 0)
                  return layer.layerObject;
            }
         }
         return null;
      },

      // get summary fields
      getSummaryFields : function(layer) {
         var array = [];

         // FIELDS
         var fields = layer.fields;
         var infos = layer.infoTemplate.info.fieldInfos;
         for (var i = 0; i < fields.length; i++) {
            var fld = fields[i];
            var fldType = fld.type;
            if ((this.fieldTypes.indexOf(fldType) > -1) && (fld.name != layer.objectIdField)) {
               var fldInfo = this.getFieldInfo(fld.name, infos);
               if ((fldInfo.visible) && (!fld.domain))
                  array.push(fld.name);
            }
         }

         return array;
      },

      // get field info
      getFieldInfo : function(name, infos) {
         for (var i = 0; i < infos.length; i++) {
            var info = infos[i];
            if (info.fieldName == name)
               return info;
         }
         return null;
      },

      // set layer
      setLayer : function() {
         if (this.map.infoWindow.isShowing)
            this.map.infoWindow.hide();
         this.closeMessage();
         if (this.opSignal)
            this.opSignal.remove();

         this.opSignal = on(this.opLayer, "update-end", lang.hitch(this, this.summarizeFeatures));
         on(this.map, "extent-change", lang.hitch(this, this.summarizeFeatures));

         this.configureFields();
         this.populateFilterValues();
         this.loadPages();

         if (this.opLayer.geometryType == "esriGeometryPoint") {
            if (this.config.cluster === true) {
               this.cluster = true;
               this.clusterLayer.setVisibility(true);
               this.opLayer.setOpacity(0.0001);
            }
            this.opLayer.setVisibility(true);
         }

         if (this.fields.length === 0) {
            this.showMessage("No Numeric Attributes in Operational Layer");
         } else {
            this.closeMessage();
         }

         this.summarizeFeatures();

      },

      // configure fields
      configureFields : function() {
         var sumFields = [];
         var avgFields = [];
         var minFields = [];
         var maxFields = [];
         // var str = this.config.sumFields + this.config.avgFields + this.config.minFields + this.config.maxFields;
         var str = "";
         if (this.config.summaryLayer && this.config.summaryLayer.fields) {
            array.forEach(this.config.summaryLayer.fields, lang.hitch(this, function(field) {
               if (field.id != "filterField")
                  str += field.fields;
               this.config[field.id] = field.fields;
            }));
         }
         var aliases = ["COUNT"];
         var i = 0;
         var sumType = "";
         if (str.length > 0) {
            if (this.config.sumFields && this.config.sumFields.length > 0) {
               sumType = "SUM: ";
               if (this.config.hideSummaryType)
                  sumType = "";
               sumFields = this.config.sumFields;
               for ( i = 0; i < sumFields.length; i++) {
                  aliases.push(sumType + this.getFieldAlias(sumFields[i]));
               }
            }

            if (this.config.avgFields && this.config.avgFields.length > 0) {
               sumType = "AVG: ";
               if (this.config.hideSummaryType)
                  sumType = "";
               avgFields = this.config.avgFields;
               for ( i = 0; i < avgFields.length; i++) {
                  aliases.push(sumType + this.getFieldAlias(avgFields[i]));
               }
            }

            if (this.config.minFields && this.config.minFields.length > 0) {
               sumType = "MIN: ";
               if (this.config.hideSummaryType)
                  sumType = "";
               minFields = this.config.minFields;
               for ( i = 0; i < minFields.length; i++) {
                  aliases.push(sumType + this.getFieldAlias(minFields[i]));
               }
            }

            if (this.config.maxFields && this.config.maxFields.length > 0) {
               sumType = "MAX: ";
               if (this.config.hideSummaryType)
                  sumType = "";
               maxFields = this.config.maxFields;
               for ( i = 0; i < maxFields.length; i++) {
                  aliases.push(sumType + this.getFieldAlias(maxFields[i]));
               }
            }

         } else {
            sumType = "SUM: ";
            if (this.config.hideSummaryType)
               sumType = "";
            sumFields = this.getSummaryFields(this.opLayer);
            for ( i = 0; i < sumFields.length; i++) {
               aliases.push(sumType + this.getFieldAlias(sumFields[i]));
            }
         }

         var fields = ["COUNT"].concat(sumFields, avgFields, minFields, maxFields);

         this.sumFields = sumFields;
         this.avgFields = avgFields;
         this.minFields = minFields;
         this.maxFields = maxFields;
         this.fields = fields;
         this.aliases = aliases;
         this.fieldCount = fields.length;

      },

      // get field alias
      getFieldAlias : function(name) {
         if (this.opLayer.infoTemplate) {
            var flds = this.opLayer.infoTemplate.info.fieldInfos;
            for (var i = 0; i < flds.length; i++) {
               var f = flds[i];
               if (f.fieldName == name)
                  return f.label;
            }
         }
         return name;
      },

      // load pages
      loadPages : function() {
         var w = domStyle.get("panelContainer", "width");
         this.visCount = Math.floor(w / 220);
         this.fieldCount = this.fields.length;
         var count = this.fieldCount;
         if (this.config.hideCount)
            count -= 1;
         this.pageCount = Math.ceil(count / this.visCount);
         var list = dom.byId("pages");
         list.innerHTML = "";
         if (this.pageCount > 1) {
            domStyle.set(list, "width", this.pageCount * 20 + 'px');
            for (var i = 0; i < this.pageCount; i++) {
               var id = "page" + i;
               var link = domConstruct.create("li", {
                  id : id
               }, list);
               on(link, "click", lang.hitch(this, this.setPage, i));
            }
            domClass.add("page0", "active");
         }
         this.page = 0;
      },

      // set page
      setPage : function(num) {
         domClass.remove("page" + this.page, "active");
         this.page = num;
         domClass.add("page" + this.page, "active");
         for (var i = 0; i < 4; i++) {
            var p = dom.byId("panel" + i);
            if (i < this.visCount) {
               domStyle.set(p, "display", "block");
            } else {
               domStyle.set(p, "display", "none");
            }
         }
         this.updateCounters();
      },

      // get alias
      getAlias : function(name) {
         if (this.opLayer.infoTemplate) {
            var flds = this.opLayer.infoTemplate.info.fieldInfos;
            for (var i = 0; i < flds.length; i++) {
               var f = flds[i];
               if (f.fieldName == name)
                  return f.label;
            }
         }
         return name;
      },

      // populate filter values
      populateFilterValues : function() {

         if (this.config.filterField) {

            var array = [];
            var fld = this.getFilterField();

            if (fld) {

               // check for string
               if (fld.type == "esriFieldTypeString")
                  this.filterString = true;

               // domains
               if (fld.domain && fld.domain.type == "codedValue") {
                  var codedValues = fld.domain.codedValues;
                  for (var i = 0; i < codedValues.length; i++) {
                     var obj = codedValues[i];
                     var name = obj.name;
                     var code = obj.code;
                     array.push({
                        value : code,
                        label : name
                     });
                  }
                  this.populateOptions(array);

                  // unique values
               } else {
                  // feature collection
                  if (this.opFeatureCollection) {
                     var test = {};
                     var graphics = this.opLayer.graphics;
                     for (var i = 0; i < graphics.length; i++) {
                        var g = graphics[i];
                        var name = g.attributes[fld.name];
                        if (!test[name]) {
                           test[name] = true;
                           array.push({
                              value : name,
                              label : name
                           });
                        }
                     }
                     this.populateOptions(array);
                  } else {
                     // feature layer
                     var query = new Query();
                     var statDef = new StatisticDefinition();
                     statDef.statisticType = "count";
                     statDef.onStatisticField = fld.name;
                     statDef.outStatisticFieldName = "RECCOUNT";
                     query.returnGeometry = false;
                     query.where = "1=1";
                     query.orderByFields = [fld.name];
                     query.groupByFieldsForStatistics = [fld.name];
                     query.outStatistics = [statDef];
                     var me = this;
                     this.opLayer.queryFeatures(query, function(featureSet) {
                        for (var i = 0; i < featureSet.features.length; i++) {
                           var feature = featureSet.features[i];
                           var name = feature.attributes[fld.name];
                           array.push({
                              value : name,
                              label : name
                           });
                        }
                        me.populateOptions(array);
                     });
                  }
               }
            }
         }
      },

      // populate options
      populateOptions : function(array) {
         if (array.length > 0) {
            var list = dom.byId("selFilter");
            domConstruct.create("option", {
               value : "",
               innerHTML : "All"
            }, list);
            for (var i = 0; i < array.length; i++) {
               var obj = array[i];
               var value = obj.value;
               var label = obj.label;
               domConstruct.create("option", {
                  value : value,
                  innerHTML : label
               }, list);
            }
            domStyle.set("panelFilter", "display", "block");
            domStyle.set("panelMain", "width", "225px");
            on(list, "change", lang.hitch(this, this.setFilter));
         }
      },

      // get filter field
      getFilterField : function() {
         for (var i = 0; i < this.opLayer.fields.length; i++) {
            var f = this.opLayer.fields[i];
            if (f.name == this.config.filterField) {
               var str = this.fieldTypes + ",esriFieldTypeString";
               if (str.indexOf(f.type) > -1) {
                  return f;
               } else {
                  return null;
               }
            }
         }
         return null;
      },

      // set filter
      setFilter : function() {
         var list = dom.byId("selFilter");
         var value = list.options[list.selectedIndex].value;
         if (this.opFeatureCollection) {
            var graphics = this.opFeatures;
            this.opLayer.clear();
            for (var i = 0; i < graphics.length; i++) {
               var g = graphics[i];
               if ((g.attributes[this.config.filterField] == value) || (value === "")){
                  var newg = new Graphic(g.geometry, g.symbol, g.attributes);
                  this.opLayer.add(newg);
               } 
            }
            var ext = graphicsUtils.graphicsExtent(this.opLayer.graphics);
            if (ext) {
               this.map.setExtent(ext.expand(2));
            } else {
               if (this.opLayer.graphics.length > 0)
                  this.map.centerAt(this.opLayer.graphics[0].geometry);
            }
         } else {
            var expr = this.config.filterField + " = " + value;
            if (this.filterString)
               expr = this.config.filterField + " = '" + value + "'";
            if (value === "")
               expr = null;
            this.opLayer.setDefinitionExpression(expr);
            if (expr) {
               var query = new Query();
               query.returnGeometry = true;
               query.where = expr;
               var me = this;
               this.opLayer.queryFeatures(query, function(featureSet) {
                  var ext = graphicsUtils.graphicsExtent(featureSet.features);
                  if (ext) {
                     me.map.setExtent(ext.expand(2));
                  } else {
                     if (featureSet.features.length > 0)
                        me.map.centerAt(featureSet.features[0].geometry);
                  }
               });
            }
         }
      },

      // summarize features
      summarizeFeatures : function() {
         var ext = this.map.extent;
         var features = [];
         
         normalizeUtils.normalizeCentralMeridian([ext], null, 
            lang.hitch(this, function(results){
               if (results.length > 0) {
                  var poly  = results[0];
                  var normExt = poly.getExtent();
                  for (var i = 0; i < this.opLayer.graphics.length; i++) {
                     var gra = this.opLayer.graphics[i];
                     if (normExt.intersects(gra.geometry)) {
                        features.push(gra);
                     }
                  }
                  if (this.cluster)
                     this.clusterLayer.setFeatures(features);
                  this.count = features.length;
                  this.sumData = this.summarizeAttributes(features);
                  this.updateCounters();
               }
            }), 
            function(error){
               console.log(error);
            }
         );
         
      },

      // cluster click
      clusterClick : function(evt) {
         var gra = evt.graphic;
         var count = gra.attributes.Count;
         var data = gra.attributes.Data;
         var title = count + " Features";
         if (count == 1)
            title = count + " Feature";
         var sumData = this.summarizeAttributes(data);
         var info = "";
         for ( var f = 0; f < this.fieldCount; f++) {
            if (f === 0 && this.config.hideCount) {
               //skip
            } else {
               info += this.aliases[f] + ": " + sumData[f] + "<br/><br/>";
            }
         }
         this.map.infoWindow.setTitle(title);
         this.map.infoWindow.setContent(info);
         this.map.infoWindow.show(evt.mapPoint);
         dojoEvent.stop(evt);
      },

      //summarize attributes
      summarizeAttributes : function(features) {

         var f;
         var i;
         var value;

         // COUNT
         var countArray = [features.length];

         // SUM
         var sumArray = [];
         for ( f = 0; f < this.sumFields.length; f++) {
            sumArray.push(0);
         }
         for ( i = 0; i < features.length; i++) {
            var gra = features[i];
            for ( f = 0; f < this.sumFields.length; f++) {
               var fld = this.sumFields[f].replace(/^\s+|\s+$/g, '');
               sumArray[f] += gra.attributes[fld];
            }
         }

         // AVG
         var avgArray = [];
         for ( f = 0; f < this.avgFields.length; f++) {
            avgArray.push(0);
         }
         for ( i = 0; i < features.length; i++) {
            var gra = features[i];
            for ( f = 0; f < this.avgFields.length; f++) {
               var fld = this.avgFields[f].replace(/^\s+|\s+$/g, '');
               avgArray[f] += gra.attributes[fld];
            }
         }
         for ( f = 0; f < avgArray.length; f++) {
            avgArray[f] = avgArray[f] / features.length;
         }

         // MIN
         var minArray = [];
         for ( f = 0; f < this.minFields.length; f++) {
            minArray.push(0);
         }
         for ( i = 0; i < features.length; i++) {
            var gra = features[i];
            for ( f = 0; f < this.minFields.length; f++) {
               var fld = this.minFields[f].replace(/^\s+|\s+$/g, '');
               value = gra.attributes[fld];
               if (i === 0) {
                  minArray[f] = value;
               } else {
                  if (value < minArray[f])
                     minArray[f] = value;
               }
            }
         }

         // MAX
         var maxArray = [];
         for ( f = 0; f < this.maxFields.length; f++) {
            maxArray.push(0);
         }
         for ( i = 0; i < features.length; i++) {
            var gra = features[i];
            for ( f = 0; f < this.maxFields.length; f++) {
               var fld = this.maxFields[f].replace(/^\s+|\s+$/g, '');
               value = gra.attributes[fld];
               if (i === 0) {
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
      updateCounters : function() {
         var vis = this.visCount;
         for (var i = 0; i < vis; i++) {
            var fldIndex = this.page * vis + i;
            if (this.config.hideCount)
               fldIndex += 1;
            var p = dom.byId("panel" + i);
            if (fldIndex < this.fieldCount) {
               domStyle.set(p, "display", "block");
               this.updateCounter(i, fldIndex);
            } else {
               domStyle.set(p, "display", "none");
            }
         }
      },

      //update counter
      updateCounter : function(index, fldIndex) {
         var value = this.sumData[fldIndex];
         // if (fldIndex >= this.fields.length)
         // value = Math.round(value/this.count);
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
         if (value >= 10000000000000) {
            num = Math.floor(value * 10 / 1000000000000) / 10;
            units = "TRILLIONS";
         }
         var counter = this["counter" + index];
         var newValue = number.format(num);
         if (counter.value != newValue)
            ;
         counter.setValue(newValue);
         //dom.byId("title"+index).innerHTML = this.getAlias(this.fields[fldIndex]);
         dom.byId("title" + index).innerHTML = this.aliases[fldIndex];
         dom.byId("units" + index).innerHTML = units;
      },

      // show message
      showMessage : function(msg) {
         domStyle.set(dom.byId("panelContainer"), "display", "none");
         dom.byId("msgText").innerHTML = msg;
         domStyle.set(dom.byId("panelMessage"), "display", "block");
      },

      // close message
      closeMessage : function() {
         domStyle.set(dom.byId("panelMessage"), "display", "none");
         domStyle.set(dom.byId("panelContainer"), "display", "block");
      },

      // resize
      resizeWindow : function() {
         if (this.opLayer) {
            this.loadPages();
            this.timer = setTimeout(lang.hitch(this, this.resizeRefresh), 1000);
         }
      },

      // resize refresh
      resizeRefresh : function() {
         clearTimeout(this.timer);
         this.updateCounters();
      }
   });
});
