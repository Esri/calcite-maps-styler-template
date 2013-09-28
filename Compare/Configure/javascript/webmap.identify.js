
dojo.require("esri.tasks.identify");

// IDENTIFY OPTIONS
var identifyOptions = {
  // ==================== OK TO CHANGE THESE VALUES ====================
  'tolerance': 4,
  'excludeServices': ['SERVICENAME1', 'SERVICENAME5'],
  'excludeLayers': ['SERVICENAME2.LAYERNAME1', 'SERVICENAME2.LAYERNAME2'],
  'excludeFields': ['SERVICENAME2.LAYERNAME3.FIELDALIAS1', '*.*.*ID*', '*.*.*shape*'],
  'fieldFormats': {
    'SERVICENAME2.LAYERNAME3.FIELDALIAS2': formatNumber
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

// ADD IDENTIFY FUNCTIONALITY
function addIdentify(webMapItem) {
  map.setMapCursor("url(./images/identify.cur),auto");
  var operationalLayers = webMapItem.itemData.operationalLayers;
  dojo.connect(map, "onClick", function(evt) {
    // INFOPANE    
    var infoPane = dojo.byId('identifyDiv');
    infoPane.innerHTML = '';
    identifyLocation(evt.mapPoint, operationalLayers, map, infoPane);
  });
}

// IDENTIFY AT MAP LOCATION
function identifyLocation(mapPoint, operationalLayers, map, infoPane) {

  try {
    // IDENTIFY EACH OPERATIONAL LAYER
    dojo.forEach(operationalLayers, function(operationalLayer) {
      // SERVICE NAME
      var serviceName = operationalLayer.title;
      // IS THIS SERVICE EXCLUDED?
      var excludeService = identifyOptions.isServiceExcluded(serviceName);
      if (!excludeService) {
        // IDENTIFY LAYER
        var identifyLayer = operationalLayer.layerObject;
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
              resultDiv.innerHTML = 'No informaiton at this location...';
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
