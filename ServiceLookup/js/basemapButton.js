        define([
            "dojo/Evented",
            "dojo",
            "dojo/ready",
            "dojo/_base/declare",
            "dojo/_base/lang",
            "dojo/_base/array",
            "dojo/on",
            "dojo/Deferred",
            "dojo/request/xhr",
            "dijit/layout/ContentPane",
            "dijit/TitlePane",
            "esri",
            "esri/dijit/BasemapGallery",
            "esri/dijit/Basemap",
            "dojo/dom",
            "dojo/topic",
            "dojo/i18n!application/nls/resources"
    
        ],
        function (
            Evented,
            dojo,
            ready,
            declare,
            lang,
            array,
            on,
            Deferred,
            xhr,
            ContentPane,
            TitlePane,
            esri,
            BasemapGallery,
            Basemap,
            dom,
            topic,
            i18n
            ) {
            return declare([Evented], {
                options: {
                    basemapGalleryGroupQuery: null,
                    domNode: null,
                    config: null
                },
                constructor: function (options) {
                    // mix in settings and defaults
                    var defaults = lang.mixin({}, this.options, options);
                    this._i18n = i18n;
                    this.basemapGalleryGroupQuery = defaults.basemapGalleryGroupQuery;
                    this.domNode = defaults.domNode;
                    this.config = defaults.config;

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
                    this._events.push(topic.subscribe("app/mapLoaded", lang.hitch(this, this._mapLoaded)));
                },
                _mapLoaded: function () {
                    this.map = arguments[0];
                    this._addBaseMapGallery();
                },
                _removeEvents: function () {
                    if (this._events && this._events.length) {
                        for (var i = 0; i < this._events.length; i++) {
                            this._events[i].remove();
                        }
                    }
                    this._events = [];
                },
                _addBaseMapGallery: function () {
                    this._basemapGallery = dojo.byId(this.domNode);
                    if (this._basemapGallery) {
                        var title = "Switch Basemap";
                        if (this._i18n) {
                            if (this._i18n.ui) {
                                if (this._i18n.ui.basemapButton) {

                                    title = this._i18n.ui.basemapButton;

                                }
                            }
                        }

                        dojo.addClass(this._basemapGallery, "basemapButton");

                        var tp = new TitlePane({ title: title, closable: false, open: false });

                        this._basemapGallery.appendChild(tp.domNode);

                        tp.startup();
                        var cp = new ContentPane({
                            content: "<div id='basemapContent'>Switch Basemap</div>",
                            style: "width: 380px; height: 280px; overflow: auto;"
                        }).placeAt(tp.containerNode);
                        cp.startup();

                        // We'll try to use the webmap's thumbnail to represent its basemap, but have a fallback to the configured
                        // value and then to a static value
                        var thumbnailUrl = this.webmapThumbnail || "images/webmap.png";
                        var testForWebmapThumbnail = new Deferred();
                        var webmapThumbnailUrl = null;
                        try {
                            if (this.config.proxyurl && this.config.itemInfo.item.thumbnail) {
                                webmapThumbnailUrl =
                                    this.config.sharinghost + "/sharing/rest/content/items/" + this.config.itemInfo.item.id +
                                        "/info/" + this.config.itemInfo.item.thumbnail;
                                xhr(this.config.proxyurl + "?" + webmapThumbnailUrl).then(function () {
                                    thumbnailUrl = webmapThumbnailUrl;
                                    testForWebmapThumbnail.resolve();
                                }, function (err) {
                                    testForWebmapThumbnail.resolve();
                                });
                            }else if (this.config.itemInfo.item.thumbnail) {
                                webmapThumbnailUrl =
                                    this.config.sharinghost + "/sharing/rest/content/items/" + this.config.itemInfo.item.id + 
                                        "/info/" + this.config.itemInfo.item.thumbnail;
                                xhr(webmapThumbnailUrl).then(function () {
                                    thumbnailUrl = webmapThumbnailUrl;
                                    testForWebmapThumbnail.resolve();
                                }, function (err) {
                                    thumbnailUrl = webmapThumbnailUrl;
                                    testForWebmapThumbnail.resolve();
                                });
                       
                            } else {

                                testForWebmapThumbnail.resolve();
                            }
                        } catch (err) {
                            testForWebmapThumbnail.resolve();
                        }

                        testForWebmapThumbnail.then(lang.hitch(this, function () {
                            // Create the gallery, adding in the basemap from the webmap (even if it is already represented
                            // via the ArcGIS basemaps or the custom basemap group
                            this.basemapGallery = new BasemapGallery({
                                basemaps: [new Basemap({
                                    layers: this.config.itemInfo.itemData.baseMap.baseMapLayers,
                                    title: this.config.itemInfo.itemData.baseMap.title,
                                    thumbnailUrl: thumbnailUrl
                                })],
                                showArcGISBasemaps: true,  // ignored if a group is configured
                                portalUrl: this.config.sharinghost,
                                basemapsGroup: this.basemapGalleryGroupQuery,
                                bingMapsKey: this.config.bingKey,
                                map: this.map
                            },  "basemapContent");
                    
                            this.basemapGallery.startup();
                            this.basemapGallery.on("error", function (msg) {
                                console.log("basemap gallery error:  ", msg);
                            });
                
                        }));

                    }
                },

            });
        });
