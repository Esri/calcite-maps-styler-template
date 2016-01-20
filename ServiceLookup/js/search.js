define([
  "dojo/Evented",
  "dojo",
  "dojo/_base/declare",
  "dojo/_base/lang",
  "esri/dijit/Search",
  "esri/lang",
  "dojo/topic",
  "dojo/i18n!application/nls/resources",
  "application/SearchSources",
  "esri/urlUtils"
],
function (
  Evented,
  dojo,
  declare,
  lang,
  Search,
  esriLang,
  topic,
  i18n,
  SearchSources,
  urlUtils
    ) {
  return declare([Evented], {

    options: {
      domNode: null,
      config: null,
      map: null
    },

    constructor: function (options) {
      // mix in settings and defaults
      var defaults = lang.mixin({}, this.options, options);
      // properties
      // widget node

      this._i18n = i18n;
      this.map = defaults.map;
      this.config = defaults.config;
      this.domNode = defaults.domNode;
      this.href = defaults.href;
    },
    // start widget. called by user
    startup: function () {
      this._init();
    },

    /* ---------------- */
    /* Private Functions */
    /* ---------------- */
    _init: function () {
      this._removeEvents();

      this._addSearch();

    },
    _removeEvents: function () {
      if (this._events && this._events.length) {
        for (var i = 0; i < this._events.length; i++) {
          this._events[i].remove();
        }
      }
      this._events = [];
    },
    _addSearch: function () {
      if (this.config.search === true) {
        var searchOptions = {
          map: this.map,
          autoNavigate: false,
          useMapExtent: true,
          itemData: this.config.response.itemInfo.itemData
        };

        if (this.config.searchConfig) {
          searchOptions.applicationConfiguredSources = this.config.searchConfig.sources || [];
        } else {
          var configuredSearchLayers = (this.config.searchLayers instanceof Array) ?
            this.config.searchLayers : JSON.parse(this.config.searchLayers);
          searchOptions.configuredSearchLayers = configuredSearchLayers;
          searchOptions.geocoders = this.config.helperServices.geocode;
        }
        var searchSources = new SearchSources(searchOptions);
        var createdOptions = searchSources.createOptions();

        if (this.config.searchConfig != null && this.config.searchConfig != undefined){
          if (this.config.searchConfig.activeSourceIndex != null && this.config.searchConfig.activeSourceIndex != undefined) {
            createdOptions.activeSourceIndex = this.config.searchConfig.activeSourceIndex;
          }
        }


        this.search = new Search(createdOptions, this.domNode);

        this.search.on("select-result", lang.hitch(this, this._showLocation));
        this.search.on("clear", lang.hitch(this, this._clear));

        this.search.startup();

        dojo.addClass(this.domNode, "searchControl");
      }

      //Feature Search
      if (this.config.searchByLayer !== null &&
        this.config.searchByLayer !== undefined &&
          this.config.searchByLayer.id !== null &&
        this.config.searchByLayer.id !== undefined &&
          this.config.searchByLayer.fields !== null &&
        this.config.searchByLayer.fields !== undefined &&
          this.config.searchByLayer.fields.length > 0 &&
        this.config.searchByLayerUrlParam !== null &&
          this.config.searchByLayerUrlParam !== undefined) {
        require(["esri/dijit/Search"], lang.hitch(this, function (Search) {
          var source = null,
              value = null,
              searchLayer = null;

          var urlObject = urlUtils.urlToObject(this.href);
          urlObject.query = urlObject.query || {};
          urlObject.query = esriLang.stripTags(urlObject.query);
          //Support find or custom url param
          value = this._getValueFromPropIgnoreCase(urlObject.query,
            this.config.searchByLayerUrlParam);
          if (value) {

            searchLayer = this.map.getLayer(this.config.searchByLayer.id);
            if (searchLayer) {

              var searchFields = this.config.searchByLayer.fields[0].fields;
              source = {
                exactMatch: true,
                outFields: ["*"],
                featureLayer: searchLayer,
                displayField: searchFields[0],
                searchFields: searchFields
              };
            }
            var urlSearch = new Search({
              map: this.map,
              autoNavigate: false
            });
            //urlSearch.on("search-results", lang.hitch(this, this._showLocation));

            if (source) {
              urlSearch.set("sources", [source]);
            }
            urlSearch.on("load", lang.hitch(this, function () {
              urlSearch.search(value).then(lang.hitch(this, function (response) {
                if (response) {
                  try {
                    if (response[0][0].hasOwnProperty("feature")) {
                      if (response[0][0].feature.hasOwnProperty("geometry")) {
                        topic.publish("app.mapLocate", {
                          "feature": response[0][0].feature,
                          "layerId": this.config.searchByLayer.id
                        });
                      }
                    }
                  }
                  catch (e) {
                    console.log(e);
                  }
                }


              }));
            }));
            urlSearch.startup();
          }


        }));
      }
      //Feature Search
      if (this.config.customUrlLayer !== null &&
        this.config.customUrlLayer !== undefined &&
          this.config.customUrlLayer.id !== null &&
        this.config.customUrlLayer.id !== undefined &&
          this.config.customUrlLayer.fields !== null &&
        this.config.customUrlLayer.fields !== undefined &&
          this.config.customUrlLayer.fields.length > 0 &&
        this.config.customUrlParam !== null &&
          this.config.customUrlParam !== undefined) {
        require(["esri/dijit/Search"], lang.hitch(this, function (Search) {
          var source = null,
              value = null,
              searchLayer = null;

          var urlObject = urlUtils.urlToObject(this.href);
          urlObject.query = urlObject.query || {};
          urlObject.query = esriLang.stripTags(urlObject.query);
          //Support find or custom url param
          value = this._getValueFromPropIgnoreCase(urlObject.query, this.config.customUrlParam);
          if (value) {

            searchLayer = this.map.getLayer(this.config.customUrlLayer.id);
            if (searchLayer) {

              var searchFields = this.config.customUrlLayer.fields[0].fields;
              source = {
                exactMatch: true,
                outFields: ["*"],
                featureLayer: searchLayer,
                displayField: searchFields[0],
                searchFields: searchFields
              };
            }
            var urlSearch = new Search({
              map: this.map,
              autoNavigate: false
            });
            //urlSearch.on("search-results", lang.hitch(this, this._showLocation));

            if (source) {
              urlSearch.set("sources", [source]);
            }
            urlSearch.on("load", lang.hitch(this, function () {
              urlSearch.search(value).then(lang.hitch(this, function (response) {
                if (response) {
                  try {
                    if (response[0][0].hasOwnProperty("feature")) {
                      if (response[0][0].feature.hasOwnProperty("geometry")) {
                        topic.publish("app.mapLocate", {
                          "feature": response[0][0].feature,
                          "layerId": this.config.customUrlLayer.id
                        });
                      }
                    }
                  }
                  catch (e) {
                    console.log(e);
                  }
                }


              }));
            }));
            urlSearch.startup();
          }


        }));
      }
    },
    _getValueFromPropIgnoreCase: function (obj, prop) {

      prop = (prop + "").toLowerCase();
      for (var p in obj) {
        if (obj.hasOwnProperty(p) && prop === (p + "").toLowerCase()) {
          return obj[p];
        }
      }
      return null;
    },
    _clear: function (evt) {
      this.emit("clear", evt);

    },
    _showLocation: function (evt) {
      if (evt) {
        var msg;
        if (evt.feature) {
          msg = {
            "geometry": evt.feature.geometry,
            "layerId": "Search"
          };
          topic.publish("app.mapLocate", msg);
        }
        else if (evt.result) {
          if (evt.result.feature) {

            if (evt.source) {
              if (evt.source.flayerId) {
                msg = {
                  "feature": evt.result.feature,
                  "layerId": evt.source.flayerId
                };

              } else {
                msg = {
                  "geometry": evt.result.feature.geometry,
                  "layerId": "Geocode"
                };

              }

            } else {
              msg = {
                "geometry": evt.result.feature.geometry,
                "layerId": "Geocode"
              };

            }
            topic.publish("app.mapLocate", msg);
          }
        }
      }
    }
  });
});