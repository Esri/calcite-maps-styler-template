dojo.require("esri.map");
dojo.require("esri.arcgis.utils");
dojo.require("esri.tasks.identify");
dojo.require("esri.dijit.Scalebar");
dojo.require("esri.IdentityManager");

      var map, urlObject;
   // IDENTIFY OPTIONS
      var identifyOptions = {
        // ==================== OK TO CHANGE THESE VALUES ====================
        'tolerance': 4,
        'excludeServices': ['SERVICENAME1', 'SERVICENAME5'],
        'excludeLayers': ['SERVICENAME2.LAYERNAME1', 'SERVICENAME2.LAYERNAME2'],
        'excludeFields': ['SERVICENAME2.LAYERNAME3.FIELDALIAS1', '*.*.ID', '*.*.*shape*'],
        'fieldFormats': {
          'SERVICENAME2.LAYERNAME3.FIELDALIAS2': formatNumber,
          'USA Median Household Income.*.2010 Total Population': formatNumber,
          'USA Median Household Income.*.2010 Households by Income Base': formatNumber,
          'USA Median Household Income.*.Land Area in Square Miles': formatNumber,
          'USA Median Household Income.*.2010 Median Household Income': formatNumber2,
          'USA Median Household Income.*.*Household Income*': formatNumber
        },
        // ==================== DO NOT CHANGE BELOW THIS LINE ==================== 
        'getQualifiedLayerNames': function(serviceName, layerName) {
          var qualifiedLayerName1 = dojo.replace('{0}.{1}', [serviceName, layerName]);
          var qualifiedLayerName2 = dojo.replace('{0}.{1}', ['*', layerName]);
          var qualifiedLayerName3 = dojo.replace('{0}.{1}', [serviceName, '*']);
          return [qualifiedLayerName1, qualifiedLayerName2, qualifiedLayerName3];
        },
        'getQualifiedFieldNames': function(serviceName, layerName, fieldAlias) {
          var qualifiedFiedName1 = dojo.replace('{0}.{1}.{2}', [serviceName, layerName, fieldAlias]);
          var qualifiedFiedName2 = dojo.replace('{0}.{1}.{2}', ['*', layerName, fieldAlias]);
          var qualifiedFiedName3 = dojo.replace('{0}.{1}.{2}', [serviceName, '*', fieldAlias]);
          var qualifiedFiedName4 = dojo.replace('{0}.{1}.{2}', ['*', '*', fieldAlias]);
          return [qualifiedFiedName1, qualifiedFiedName2, qualifiedFiedName3, qualifiedFiedName4];
        },
        'isServiceExcluded': function(serviceName) {
          return (dojo.indexOf(this.excludeServices, serviceName) > -1);
        },
        'isLayerExcluded': function(serviceName, layerName) {
          var _excludeLayers = this.excludeLayers;
          var qualifiedLayerNames = this.getQualifiedLayerNames(serviceName, layerName);
          return dojo.some(qualifiedLayerNames, function(qualifiedLayerName) {
            return (dojo.indexOf(_excludeLayers, qualifiedLayerName) > -1);
          });
        },
        'isFieldExcluded': function(serviceName, layerName, fieldAlias) {
          var _excludeFields = this.excludeFields;
          var qualifiedFieldNames = this.getQualifiedFieldNames(serviceName, layerName, fieldAlias);
          var isExcluded = dojo.some(qualifiedFieldNames, function(qualifiedFieldName) {
            return (dojo.indexOf(_excludeFields, qualifiedFieldName) > -1);
          });
          if (!isExcluded) {
            isExcluded = dojo.some(_excludeFields, function(exludeField) {
              var excludeFieldAlias = exludeField.split('.')[2];
              return ((dojo.string.contains('*', excludeFieldAlias)) && (dojo.string.contains(excludeFieldAlias.replace(/\u002A/g, ''), fieldAlias)));
            });
          }
          return isExcluded;
        },
        'getFormat': function(serviceName, layerName, fieldAlias) {
          var _fieldFormats = this.fieldFormats;
          var qualifiedFieldNames = this.getQualifiedFieldNames(serviceName, layerName, fieldAlias);
          var formatFunctionNames = dojo.filter(qualifiedFieldNames, function(qualifiedFieldName) {
            return (qualifiedFieldName in _fieldFormats);
          });
          if (formatFunctionNames.length === 0) {
            for (var userFieldName in _fieldFormats) {
              var searchFieldAlias = userFieldName.split('.')[2];
              if ((dojo.string.contains('*', searchFieldAlias)) && (dojo.string.contains(searchFieldAlias.replace(/\u002A/g, ''), fieldAlias))) {
                formatFunctionNames.push(userFieldName);
              }
            }
          }
          if (formatFunctionNames.length > 0) {
            return _fieldFormats[formatFunctionNames[0]];
          } else {
            return null;
          }
        }
      };
      

      function initMap() {

        i18n = dojo.i18n.getLocalization("esriTemplate","template"); 
  	 
        dojo.byId('footerText').innerHTML = i18n.viewer.footer.label;
        dojo.byId('rightPaneHeader').innerHTML = i18n.viewer.rightPane.title;
        dojo.byId('leftPaneHeader').innerHTML = i18n.viewer.leftPane.title;
        if(configOptions.geometryserviceurl && location.protocol === "https:"){
          configOptions.geometryserviceurl = configOptions.geometryserviceurl.replace('http:','https:');
        }
        esri.config.defaults.geometryService = new esri.tasks.GeometryService(configOptions.geometryserviceurl);  
        
              
        if(!configOptions.sharingurl){
          configOptions.sharingurl = location.protocol + '//' + location.host + "/sharing/content/items";
        }
        esri.arcgis.utils.arcgisUrl = configOptions.sharingurl;
         
        if(!configOptions.proxyurl){   
          configOptions.proxyurl = location.protocol + '//' + location.host + "/sharing/proxy";
        }

        esri.config.defaults.io.proxyUrl =  configOptions.proxyurl;

        esri.config.defaults.io.alwaysUseProxy = false;
        
        urlObject = esri.urlToObject(document.location.href);
        urlObject.query = urlObject.query || {};
        
        if(urlObject.query.title){
          configOptions.title = urlObject.query.title;
        }
        if(urlObject.query.subtitle){
          configOptions.title = urlObject.query.subtitle;
        }
        if(urlObject.query.webmap){
          configOptions.webmap = urlObject.query.webmap;      
        } 
        if(urlObject.query.bingMapsKey){
          configOptions.bingmapskey = urlObject.query.bingMapsKey;      
        }
  
        var itemDeferred = esri.arcgis.utils.getItem(configOptions.webmap);
        
        itemDeferred.addCallback(function(itemInfo) {
          dojo.byId("title").innerHTML = configOptions.title || itemInfo.item.title;
		  document.title = configOptions.title || itemInfo.item.title;
          dojo.byId("subtitle").innerHTML = configOptions.subtitle || itemInfo.item.snippet || "";
          dojo.byId("owner").innerHTML = itemInfo.item.owner;

          dojo.byId("description").innerHTML = configOptions.description || itemInfo.item.description || "";

          
          var mapDeferred = esri.arcgis.utils.createMap(itemInfo, "map", {
            mapOptions: {
              slider: true,
              nav: false,
              wrapAround180:true
            },
            ignorePopups:true,
            bingMapsKey: configOptions.bingmapskey,
            geometryServiceURL: configOptions.geometryserviceurl
          });
          
          mapDeferred.addCallback(function(response) {
            map = response.map;  
            if (map.loaded) {
              addScalebar();
              addIdentify(response.itemInfo);
            } else {
              dojo.connect(map, "onLoad", function() {
                addScalebar();
                addIdentify(response.itemInfo);
              });
            }
          //resize the map when the browser resizes
          dojo.connect(dijit.byId('map'), 'resize', map,map.resize);
          });
          
          mapDeferred.addErrback(function(error) {
           alert(i18n.viewer.errors.createMap + " : " +  error.message);
          });
        });
        
        itemDeferred.addErrback(function(error) {
          if (error && error.message === "BingMapsKey must be provided.") {
              alert(i18n.viewer.errors.bingError);
          } else {
           alert(i18n.viewer.errors.createMap + " : " +  error.message);
          }
        });
      }
      function addScalebar(){
        var scalebar = new esri.dijit.Scalebar({
          map: map,
    	  scalebarUnit: i18n.viewer.main.scaleBarUnits //metric or english
        }); 
      }

      
      // ADD IDENTIFY FUNCTIONALITY
      function addIdentify(webMapItem) {
        map.setMapCursor("url(./images/identify.cur),auto");
        var operationalLayers = webMapItem.itemData.operationalLayers;
        dojo.connect(map, "onClick", function(evt) {
          identifyLocation(evt.mapPoint, operationalLayers);
        });
      }
      
      
      // IDENTIFY AT MAP LOCATION
      function identifyLocation(mapPoint, operationalLayers) {
        // INFOPANE    
        var infoPane = dojo.byId('identifyDiv');
        infoPane.innerHTML = '';
        try {
          // IDENTIFY EACH OPERATIONAL LAYER
          dojo.forEach(operationalLayers, function(operationalLayer) {
   
            // SERVICE NAME
            var serviceName = operationalLayer.title;
            // IS THIS SERVICE EXCLUDED?
            var excludeService = identifyOptions.isServiceExcluded(serviceName);
            if (!excludeService) {
              // IDENTIFY LAYER
    
              if(!operationalLayer.featureCollection){
                var identifyLayer = operationalLayer.layerObject;
              }else{
                return;
              }
              
              if (identifyLayer.visible && (identifyLayer.layerInfos) && (identifyLayer.layerInfos.length > 0)) {
                // RESULTS      
                var resultsDiv = dojo.create('div');
                // SERVICE NAME
                var serviceNameNode = dojo.create('div');
                serviceNameNode.innerHTML = serviceName;
                dojo.addClass(serviceNameNode, 'identifyServiceNameLabel');
                resultsDiv.appendChild(serviceNameNode);
                // VALID LAYER INFOS
                var validLayerInfos = dojo.filter(identifyLayer.layerInfos, function(layerInfo) {
                  return ((!identifyOptions.isLayerExcluded(serviceName, layerInfo.name)) && (layerInfo.subLayerIds == null));
                });
                // INDENTIFY PARAMETERS
                var identifyParams = new esri.tasks.IdentifyParameters();
                identifyParams.tolerance = identifyOptions.tolerance;
                identifyParams.returnGeometry = false;
                identifyParams.layerIds = dojo.map(validLayerInfos, function(layerInfo) {
                  return layerInfo.id;
                });
                identifyParams.layerOption = esri.tasks.IdentifyParameters.LAYER_OPTION_VISIBLE;
                identifyParams.width = map.width;
                identifyParams.height = map.height;
                identifyParams.mapExtent = map.extent;
                identifyParams.geometry = mapPoint;
                // IDENTIFY TASK
                var identifyTask = new esri.tasks.IdentifyTask(identifyLayer.url);
                // EXECUTE IDENTIFY TASK
                identifyTask.execute(identifyParams, function(identifyResults) {
                  if (identifyResults.length === 0) {
                    // NO RESULTS FOR THIS MAP SERVICE
                    var resultDiv = dojo.create('div');
                    resultDiv.innerHTML = i18n.viewer.rightPane.identifyTool.message;
                    dojo.addClass(resultDiv, 'identifyResult');
                    resultsDiv.appendChild(resultDiv);
                  } else {
                    // ORGANIZE RESULTS BASED ON LAYER NAME
                    var organizedResults = [];
                    dojo.forEach(identifyResults, function(identifyResult) {
                      if (organizedResults[identifyResult.layerName]) {
                        organizedResults[identifyResult.layerName].push(identifyResult);
                      } else {
                        organizedResults[identifyResult.layerName] = [identifyResult];
                      }
                    });
                    // FOR EACH LAYER
                    for (var layerName in organizedResults) {
                      // IDENTIFY RESULTS FOR LAYER NAME
                      var organizedResult = organizedResults[layerName];
                      if (organizedResult.length > 0) {
                        // LAYER NAME
                        var layerNameNode = dojo.create('div');
                        dojo.addClass(layerNameNode, 'identifyLayerNameLabel');
                        layerNameNode.innerHTML = layerName;
                        resultsDiv.appendChild(layerNameNode);
                        // IDENTIFY RESULTS
                        dojo.forEach(organizedResult, function(identifyResult) {
                          // IDENTIFY RESULT
                          var resultDiv = dojo.create('div');
                          dojo.addClass(resultDiv, 'identifyResult');
                          // IDENTIFY ATTRIBUTES
                          var atts = identifyResult.feature.attributes;
                          // ATTRIUTE NAMES
                          for (var attName in atts) {
                            // NOT EXCLUDED FIELD?													
                            var excludeField = identifyOptions.isFieldExcluded(serviceName, layerName, attName);
                            if (!excludeField) {
                              // ATTRIBUTE VALUE
                              var val = atts[attName].toString();
                              // FIELD FORMATTING
                              var formatFunction = identifyOptions.getFormat(serviceName, layerName, attName);
                              if (formatFunction) {
                                val = formatFunction(val);
                              }
                              // LINK FORMATTING
                              if (val.indexOf('www.') === 0) {
                                val = dojo.replace("<a href='http://{0}' target='_blank'>link</a>", [val]);
                              }
                              if (val.indexOf('http://') === 0) {
                                val = dojo.replace("<a href='{0}' target='_blank'>link</a>", [val]);
                              }
                              // ATTRIBUTE NAME
                              var attributeName = dojo.create('span');
                              dojo.addClass(attributeName, 'identifyAttribute');
                              attributeName.innerHTML = attName + ': ';
                              // ATTRIBUTE VALUE
                              var attributeValue = dojo.create('span');
                              dojo.addClass(attributeValue, 'identifyValue');
                              attributeValue.innerHTML = val;
                              // ATTRIBUTE NAME AND VALUE
                              var attributeNode = dojo.create('div');
                              attributeNode.appendChild(attributeName);
                              attributeNode.appendChild(attributeValue);
                              // APPEND ATTRIBUTE TO RESULT
                              resultDiv.appendChild(attributeNode);
                            }
                          }
                          // APPEND RESULT TO RESULTS
                          resultsDiv.appendChild(resultDiv);
                        });
                      }
                    }
                  }
                }, function(error) {
                  // ERROR WHILE DOING IDENTIFY
                  var resultDiv = dojo.create('div');
                  resultDiv.innerHTML = (error.details) ? dojo.toJson(error.details[0]) : dojo.toJson(error);
                  dojo.addClass(resultDiv, 'identifyResultError');
                  resultsDiv.appendChild(resultDiv);
                });
                // APPEND RESULTS TO INFO PANE
                infoPane.appendChild(resultsDiv);
              }
            }
          });
        } catch (error) {
          console.warn(dojo.toJson(error));
        }
      }
      
      // STRING CONTAINS
      dojo.string.contains = function(/* string */needle, /* string */ haystack, /* bool */ caseInsensitive) {
        if (!caseInsensitive) {
          needle = needle.toLowerCase();
          haystack = haystack.toLowerCase();
        }
        return haystack.indexOf(needle) !== -1;
      };
      
      // FORMAT NUMBERS
      function formatNumber(numberValue) {
        try {
          var formattedNumberValue = dojo.number.format(numberValue);
          if (formattedNumberValue) {
            return formattedNumberValue;
          } else {
            return numberValue;
          }
        } catch (error) {
          return numberValue;
        }
      }
      
      // FORMAT NUMBERS: RED WITH DOLLAR SIGN
      function formatNumber2(numberValue) {
        try {
          var formattedNumberValue = dojo.number.format(numberValue);
          if (formattedNumberValue) {
            return dojo.replace('<span style="color:red">${0}</span>', [formattedNumberValue]);
          } else {
            return numberValue;
          }
        } catch (error) {
          return numberValue;
        }
      }
      
     