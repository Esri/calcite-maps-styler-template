define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "esri/arcgis/utils",
    "dojo/dom-construct",
    "dojo/dom",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-attr",
    "dojo/dom-class",
    "esri/dijit/LayerList",
    "application/ShareDialog",
    "application/Drawer",
    "application/DrawerMenu",
    "application/SearchSources",
    "esri/dijit/HomeButton",
    "esri/dijit/LocateButton",
    "esri/dijit/BasemapToggle",
    "esri/dijit/Search",
    "esri/dijit/Popup",
    "esri/dijit/Legend",
    "application/AreaOfInterest",
    "dijit/registry",
    "dojo/_base/array",
    "application/signInHelper",
    "dojo/date/locale"
],
function (
    declare,
    lang,
    arcgisUtils,
    domConstruct,
    dom,
    on,
    domStyle,
    domAttr,
    domClass,
    LayerList, ShareDialog, Drawer, DrawerMenu, SearchSources,
    HomeButton, LocateButton, BasemapToggle,
    Search,
    Popup,
    Legend,
    AreaOfInterest,
    registry,
    array, signInHelper,
    locale
) {
    return declare("", [AreaOfInterest], {
        config: {},
        constructor: function () {
            // css classes
            this.css = {
                mobileSearchDisplay: "mobile-locate-box-display",
                toggleBlue: 'toggle-grey',
                toggleBlueOn: 'toggle-grey-on',
                panelPadding: "panel-padding",
                panelContainer: "panel-container",
                panelHeader: "panel-header",
                panelSection: "panel-section",
                panelSummary: "panel-summary",
                panelModified: "panel-modified-date",
                panelMoreInfo: "panel-more-info",
                pointerEvents: "pointer-events",
                iconRight: "icon-right",
                locateButtonTheme: "LocateButtonCalcite",
                homebuttonTheme: "HomeButtonCalcite",
                desktopGeocoderTheme: "geocoder-desktop",
                mobileGeocoderTheme: "geocoder-mobile",
                iconList: "icon-list",
                iconLayers: "icon-layers",
                //iconMap: "icon-map",
                iconInfo: 'icon-info-circled-1',
                iconText: "icon-text",
                appLoading: "app-loading",
                appError: "app-error"
            };
            // mobile size switch domClass
            this._showDrawerSize = 850;
            // pointer event support
            if (this._pointerEventsSupport()) {
                domClass.add(document.documentElement, this.css.pointerEvents);
            }
            // mobile size switch domClass
            this._showDrawerSize = 850;
        },
        startup: function (config, appResponse, userInfo) {
            //config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.
            this.config = config;
            this.data = appResponse;
            this.userInfo = userInfo;
            // drawer
            this._drawer = new Drawer({
                showDrawerSize: this._showDrawerSize,
                borderContainer: 'bc_outer',
                contentPaneCenter: 'cp_outer_center',
                contentPaneSide: 'cp_outer_left',
                toggleButton: 'hamburger_button'
            });
            // drawer resize event
            on(this._drawer, 'resize', lang.hitch(this, function () {
                // check mobile button status
                this._checkMobileGeocoderVisibility();
            }));
            // startup drawer
            this._drawer.startup();
            //supply either the webmap id or, if available, the item info
            var itemInfo = this.config.itemInfo || this.config.webmap;
            this._createWebMap(itemInfo);
        },
        reportError: function (error) {
            // remove spinner
            this._hideLoadingIndicator();
            // add app error
            domClass.add(document.body, this.css.appError);
            // set message
            var node = dom.byId('error_message');
            if (node) {
                if (this.config && this.config.i18n) {
                    node.innerHTML = this.config.i18n.map.error + ": " + error.message;
                } else {
                    node.innerHTML = "Unable to create map: " + error.message;
                }
            }
        },
        _pointerEventsSupport: function () {
            var element = document.createElement('x');
            element.style.cssText = 'pointer-events:auto';
            return element.style.pointerEvents === 'auto';
        },
        _initLegend: function () {
            var legendNode = dom.byId('LegendDiv');
            if (legendNode) {
                this._mapLegend = new Legend({
                    map: this.map,
                    layerInfos: this.layerInfos
                }, legendNode);
                this._mapLegend.startup();
            }
        },
        _initTOC: function () {
            // layers
            var tocNode = dom.byId('LayerList');
            if (tocNode) {
                var tocLayers = this.layers;
                var toc = new LayerList({
                    map: this.map,
                    layers: tocLayers
                }, tocNode);
                toc.startup();
            }
        },
        _init: function () {
            // menu panels
            this.drawerMenus = [];
            var menuObj, content, mapPanelHeader;

            // multiple polygons
            if (this.config.enableAboutPanel) {
                mapPanelHeader = (this.config.title || this.config.itemInfo.item.title);
                content = '';
                content += '<div class="' + this.css.panelContainer + '">';
                // if summary enabled
                if (this.config.enableSummary) {
                    content += '<div class="' + this.css.panelHeader + '" title=" ' + mapPanelHeader + '">' + mapPanelHeader + '</div>';
                    content += '<div class="' + this.css.panelSummary + '" id="summary"></div>';
                }
                if (this.config.enableModifiedDate) {
                    content += '<div class="' + this.css.panelModified + '" id="date_modified"></div>';
                }
                if (this.config.enableMoreInfo) {
                    content += '<div class="' + this.css.panelMoreInfo + '" id="more_info_link"></div>';
                }
                // show summary layer
                if (this.config.summaryLayer && this.config.summaryLayer.id) {
                    content += '<div id="impact_area_section">';
                    content += '<div class="' + this.css.panelHeader + '"><span id="impact_area_title">' + this.config.i18n.general.impactArea + '</span></div>';
                    content += '<div id="renderer_menu"></div>';
                    content += '</div>';
                }
                content += '</div>';
                // menu
                menuObj = {
                    title: this.config.i18n.general.about,
                    label: '<div class="' + this.css.iconInfo + '"></div><div class="' + this.css.iconText + '">' + this.config.i18n.general.about + '</div>',
                    content: content
                };
                // map menu
                if (this.config.defaultPanel === 'about') {
                    this.drawerMenus.splice(0, 0, menuObj);
                }
                else {
                    this.drawerMenus.push(menuObj);
                }
            }
            // legend panel
            if (this.config.enableLegendPanel) {
                content = '';
                content += '<div class="' + this.css.panelHeader + '">' + this.config.i18n.general.legend + '</div>';
                content += '<div class="' + this.css.panelContainer + '">';
                content += '<div class="' + this.css.panelPadding + '">';
                content += '<div id="LegendDiv"></div>';
                content += '</div>';
                content += '</div>';
                // menu info
                menuObj = {
                    title: this.config.i18n.general.legend,
                    label: '<div class="' + this.css.iconList + '"></div><div class="' + this.css.iconText + '">' + this.config.i18n.general.legend + '</div>',
                    content: content
                };
                // legend menu
                if (this.config.defaultPanel === 'legend') {
                    this.drawerMenus.splice(0, 0, menuObj);
                }
                else {
                    this.drawerMenus.push(menuObj);
                }
            }
            // Layers Panel
            if (this.config.enableLayersPanel) {
                content = '';
                content += '<div class="' + this.css.panelHeader + '">' + this.config.i18n.general.layers + '</div>';
                content += '<div class="' + this.css.panelContainer + '">';
                content += '<div id="LayerList"></div>';
                content += '</div>';
                // menu info
                menuObj = {
                    title: this.config.i18n.general.layers,
                    label: '<div class="' + this.css.iconLayers + '"></div><div class="' + this.css.iconText + '">' + this.config.i18n.general.layers + '</div>',
                    content: content
                };
                // layers menu
                if (this.config.defaultPanel === 'layers') {
                    this.drawerMenus.splice(0, 0, menuObj);
                }
                else {
                    this.drawerMenus.push(menuObj);
                }
            }
            // menus
            this._drawerMenu = new DrawerMenu({
                menus: this.drawerMenus
            }, dom.byId("drawer_menus"));
            this._drawerMenu.startup();
            // locate button
            if (this.config.enableLocateButton) {
                this._LB = new LocateButton({
                    map: this.map,
                    theme: this.css.locateButtonTheme
                }, 'LocateButton');
                this._LB.startup();
            }
            // home button
            if (this.config.enableHomeButton) {
                this._HB = new HomeButton({
                    map: this.map,
                    theme: this.css.homebuttonTheme
                }, 'HomeButton');
                this._HB.startup();
                // clear locate on home button
                on(this._HB, 'home', lang.hitch(this, function () {
                    if (this._LB) {
                        this._LB.clear();
                    }
                }));
            }
            // basemap toggle
            if (this.config.enableBasemapToggle) {
                var BT = new BasemapToggle({
                    map: this.map,
                    basemap: this.config.nextBasemap,
                    defaultBasemap: this.config.defaultBasemap
                }, 'BasemapToggle');
                BT.startup();
                /* Start temporary until after JSAPI 4.0 is released */
                var bmLayers = [],
                  mapLayers = this.map.getLayersVisibleAtScale(this.map.getScale());
                if (mapLayers) {
                  for (var i = 0; i < mapLayers.length; i++) {
                    if (mapLayers[i]._basemapGalleryLayerType) {
                      var bmLayer = this.map.getLayer(mapLayers[i].id);
                      if (bmLayer) {
                        bmLayers.push(bmLayer);
                      }
                    }
                  }
                }
                on.once(this.map, 'basemap-change', lang.hitch(this, function () {
                  if (bmLayers && bmLayers.length) {
                    for (var i = 0; i < bmLayers.length; i++) {
                      bmLayers[i].setVisibility(false);
                    }
                  }
                }));
                /* END temporary until after JSAPI 4.0 is released */
            }
            // share dialog
            if (this.config.enableShareDialog) {
                this._ShareDialog = new ShareDialog({
                    theme: this.css.iconRight,
                    bitlyLogin: this.config.bitlyLogin,
                    bitlyKey: this.config.bitlyKey,
                    map: this.map,
                    image: this.config.sharinghost + '/sharing/rest/content/items/' + this.item.id + '/info/' + this.item.thumbnail,
                    title: this.config.title,
                    summary: this.item.snippet,
                    hashtags: 'esriDSM'
                }, 'ShareDialog');
                this._ShareDialog.startup();
            }
            // startup legend
            this._initLegend();
            //  startup toc
            this._initTOC();
            // geocoders
            this._createGeocoders();
            // init area panel
            this.initArea();
            this.startupArea();
            // on body click containing underlay class
            var dijitHandler = on.pausable(document.body, '.dijitDialogUnderlay:click', function () {
                // get all dialogs
                var filtered = array.filter(registry.toArray(), function (w) {
                    return w && w.declaredClass == "dijit.Dialog";
                });
                // hide all dialogs
                array.forEach(filtered, function (w) {
                    w.hide();
                });
            });
            if (this.config.appid) {
                var signIn = new signInHelper();
                // builder mode
                if (signIn.userIsAppOwner(this.data, this.userInfo)) {
                    // require module
                    require(["application/TemplateBuilder"], lang.hitch(this, function (TemplateBuilder) {
                        // create template builder
                        var builder = new TemplateBuilder({
                            drawer: this._drawer,
                            config: this.config,
                            response: this.data,
                            layers: this.layers,
                            userInfo: this.userInfo,
                            map: this.map,
                            dijitClickHandler: dijitHandler
                        });
                        builder.startup();
                    }));
                }
            }
            // hide loading div
            this._hideLoadingIndicator();
            // drawer size check
            this._drawer.resize();
            // modified date
            if (this.config.enableModifiedDate) {
                this._setModifiedDate();
            }
            // more information link
            if (this.config.enableMoreInfo) {
                this._moreInfoLink();
            }
        },
        _setModifiedDate: function () {
            var node = dom.byId('date_modified');
            if (node && this.item && this.item.modified) {
                // modified date
                var m = new Date(this.item.modified);
                var modifiedDate = locale.format(m, {});
                // set date
                node.innerHTML = this.config.i18n.general.dateModified + ' ' + modifiedDate;
            }
        },
        _moreInfoLink: function () {
            var node = dom.byId('more_info_link');
            if (node && this.item && this.item.id) {
                node.innerHTML = '<a target="_blank" href="' + this.config.sharinghost + "/home/item.html?id=" + this.item.id + '">' + this.config.i18n.general.moreInfo + '</a>';
            }
        },
        _checkMobileGeocoderVisibility: function () {
            if (this._mobileGeocoderIconNode && this._mobileSearchNode) {
                // check if mobile icon needs to be selected
                if (domClass.contains(this._mobileGeocoderIconNode, this.css.toggleBlueOn)) {
                    domClass.add(this._mobileSearchNode, this.css.mobileSearchDisplay);
                }
            }
        },
        _showMobileGeocoder: function () {
            if (this._mobileSearchNode && this._mobileGeocoderIconContainerNode) {
                domClass.add(this._mobileSearchNode, this.css.mobileSearchDisplay);
                domClass.replace(this._mobileGeocoderIconContainerNode, this.css.toggleBlueOn, this.css.toggleBlue);
            }
        },
        _hideMobileGeocoder: function () {
            if (this._mobileSearchNode && this._mobileGeocoderIconContainerNode) {
                domClass.remove(this._mobileSearchNode, this.css.mobileSearchDisplay);
                domStyle.set(this._mobileSearchNode, "display", "none");
                domClass.replace(this._mobileGeocoderIconContainerNode, this.css.toggleBlue, this.css.toggleBlueOn);
            }
        },
        _setTitle: function (title) {
            // set config title
            this.config.title = title;
            // map title node
            var node = dom.byId('title');
            if (node) {
                // set title
                node.innerHTML = title;
                // title attribute
                domAttr.set(node, "title", title);
            }
            // window title
            window.document.title = title;
        },
        // create geocoder widgets
        _createGeocoders: function () {
        var searchOptions = {
          map: this.map,
          geocoders: this.config.helperServices.geocode || [],
          itemData: this.config.itemInfo.itemData
        };
        if (this.config.searchConfig) {
          searchOptions.applicationConfiguredSources = this.config.searchConfig.sources || [];
        } else {
          var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);
          searchOptions.configuredSearchLayers = configuredSearchLayers;
          searchOptions.geocoders = this.config.locationSearch ? this.config.helperServices.geocode : [];
        }
        var searchSources = new SearchSources(searchOptions);
        // get options
        var createdOptions = searchSources.createOptions();
        // desktop size geocoder
        this._geocoder = new Search(createdOptions, dom.byId("geocoderSearch"));
        // mobile sized geocoder
        this._mobileGeocoder = new Search(createdOptions, dom.byId("geocoderMobile"));
        this._mobileGeocoder.startup();
        this._geocoder.startup();
        // geocoder results
        on(this._mobileGeocoder, 'search-results', lang.hitch(this, function () {
          this._hideMobileGeocoder();
        }));
        // keep geocoder values in sync
        this._geocoder.watch("value", lang.hitch(this, function () {
          var value = arguments[2];
          var current = this._mobileGeocoder.value;
          if(current !== value){
            this._mobileGeocoder.set("value", value);
          }
        }));
        // keep geocoder values in sync
        this._mobileGeocoder.watch("value", lang.hitch(this, function () {
          var value = arguments[2];
          var current = this._geocoder.value;
          if(current !== value){
            this._geocoder.set("value", value);
          }
        }));
        // geocoder nodes
        this._mobileGeocoderIconNode = dom.byId("mobileGeocoderIcon");
        this._mobileSearchNode = dom.byId("mobileSearch");
        this._mobileGeocoderIconContainerNode = dom.byId("mobileGeocoderIconContainer");
        // mobile geocoder toggle 
        if (this._mobileGeocoderIconNode) {
          on(this._mobileGeocoderIconNode, "click", lang.hitch(this, function () {
            if (domStyle.get(this._mobileSearchNode, "display") === "none") {
              this._showMobileGeocoder();
            } else {
              this._hideMobileGeocoder();
            }
          }));
        }
        var closeMobileGeocoderNode = dom.byId("btnCloseGeocoder");
        if (closeMobileGeocoderNode) {
          // cancel mobile geocoder
          on(closeMobileGeocoderNode, "click", lang.hitch(this, function () {
            this._hideMobileGeocoder();
          }));
        }
      },
        // hide map loading spinner
        _hideLoadingIndicator: function () {
            // add loaded class
            domClass.remove(document.body, this.css.appLoading);
        },
        _setLayerMode: function (itemInfo, id) {
            // if we have a layer id
            if (id && itemInfo && itemInfo.itemData && itemInfo.itemData.operationalLayers) {
                for (var i = 0; i < itemInfo.itemData.operationalLayers.length; i++) {
                    if (itemInfo.itemData.operationalLayers[i].id === id) {
                        // set snapshot mode
                        if (itemInfo.itemData.operationalLayers[i].hasOwnProperty('mode')) {
                            itemInfo.itemData.operationalLayers[i].mode = 0;
                        }
                        // record layer order index
                        this._impactLayerIndex = i;
                    }
                }
            }
            return itemInfo;
        },
        //create a map based on the input web map id
        _createWebMap: function (itemInfo) {
            // set impact layer mode to snapshot
            if (this.config.summaryLayer && this.config.summaryLayer.id) {
                itemInfo = this._setLayerMode(itemInfo, this.config.summaryLayer.id);
            }
            // popup dijit
            var customPopup = new Popup({}, domConstruct.create("div"));
            // add popup theme
            domClass.add(customPopup.domNode, "calcite");
            // set extent from URL Param
            if (this.config.extent) {
                var e = this.config.extent.split(',');
                if (e.length === 4) {
                    itemInfo.item.extent = [
                        [
                            parseFloat(e[0]),
                            parseFloat(e[1])
                        ],
                        [
                            parseFloat(e[2]),
                            parseFloat(e[3])
                        ]
                    ];
                }
            }
            //can be defined for the popup like modifying the highlight symbol, margin etc.
            arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: {
                    infoWindow: customPopup
                    //Optionally define additional map config here for example you can
                    //turn the slider off, display info windows, disable wraparound 180, slider position and more.
                },
                editable: false,
                usePopupManager: true,
                bingMapsKey: this.config.bingmapskey
            }).then(lang.hitch(this, function (response) {
                //Once the map is created we get access to the response which provides important info
                //such as the map, operational layers, popup info and more. This object will also contain
                //any custom options you defined for the template. In this example that is the 'theme' property.
                //Here' we'll use it to update the application to match the specified color theme.
                this.map = response.map;
                this.layers = arcgisUtils.getLayerList(response);
                this.item = response.itemInfo.item;
                this.bookmarks = response.itemInfo.itemData.bookmarks;
                this.layerInfos = arcgisUtils.getLegendLayers(response);
                this.map.webmapTitle = response.itemInfo.item.title;
                // if title is enabled
                if (this.config.enableTitle) {
                    this._setTitle(this.config.title || response.itemInfo.item.title);
                }
                if (this.map.loaded) {
                    this._init();
                } else {
                    on.once(this.map, 'load', lang.hitch(this, function () {
                        this._init();
                    }));
                }
            }), lang.hitch(this, function (error) {
                //an error occurred - notify the user. In this example we pull the string from the
                //resource.js file located in the nls folder because we've set the application up
                //for localization. If you don't need to support multiple languages you can hardcode the
                //strings here and comment out the call in index.html to get the localization strings.
                if (this.config && this.config.i18n) {
                    alert(this.config.i18n.map.error + ": " + error.message);
                } else {
                    alert("Unable to create map: " + error.message);
                }
                // hide loading div
                this._hideLoadingIndicator();
            }));
        }
    });
});