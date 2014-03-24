define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dojo/on",
    "application/StatsBlock",
    "dojo/dom-class",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol",
    "dojo/_base/Color",
    "dojo/_base/event",
    "esri/graphic",
    "esri/layers/GraphicsLayer",
    "esri/graphicsUtils",
    "esri/tasks/query",
    "dojo/window"
],
    function (
        declare,
        lang,
        dom,
        domConstruct,
        domStyle,
        on,
        StatsBlock,
         domClass,
        SimpleFillSymbol, SimpleLineSymbol,
        Color,
        event,
        Graphic, GraphicsLayer, graphicsUtils,
        Query,
        win
    ) {
        return declare("", null, {
            initArea: function () {
                this._entireAreaValue = "summarize";
                this.areaCSS = {
                    rendererMenu: 'menu-list',
                    rendererMenuItem: 'item',
                    rendererSelected: 'selected',
                    rendererLoading: 'loading-features',
                    rendererContainer: 'item-container',
                    rendererSummarize: 'summarize'
                };
                // if we have a layer title or layer id
                if (this.config.summaryLayer && this.config.summaryLayer.id) {
                    // get layer by id/title
                    this._aoiLayer = this._getAOILayer(this.config.summaryLayer.id);
                }
                // get layer infos
                this._getLayerInfos();
                // out fields
                this._getOutFields();
            },
            startupArea: function(){
                // stats block
                if (this._aoiLayer) {
                    this._sb = new StatsBlock({
                        config: this.config.summaryAttributes,
                        direction: this.config.i18n.direction,
                        appConfig: this.config //we need a config object here to check for edit mode and adding "+" variables
                    }, dom.byId('geoData'));   //So, i think we need not need this.data l.e entire response
                    this._sb.startup();
                    // init layer
                    // layer found
                    if (this._aoiLayer) {
                        // selected graphics layer
                        this._selectedGraphics = new GraphicsLayer({
                            id: "selectedArea",
                            visible: this._aoiLayer.visible
                        });
                        this.map.addLayer(this._selectedGraphics, (this._impactLayerIndex + 1));
                    }
                    // renderer layer infos
                    if (this._aoiInfos) {
                        // create renderer menu
                        this._createRendererItems(this._aoiInfos);
                    }
                    // if layer exists
                    if (this._aoiLayer) {
                        if(this.config.selectEntireAreaOnStart && this._selectAllNode){
                            this._queryFeatures(this._selectAllNode, this._entireAreaValue, false);
                        }
                        else{
                            // get highest value feature
                            this._queryGreatestFeature();
                        }
                        // selected poly from graphics layer
                        on(this._selectedGraphics, 'click', lang.hitch(this, function (evt) {
                            this._hideInfoWindow();
                            this._selectEvent(evt);
                        }));
                        // selected poly from layer
                        on(this._aoiLayer, 'click', lang.hitch(this, function (evt) {
                            this._hideInfoWindow();
                            this._selectEvent(evt);
                        }));
                        // layer show/hide
                        on(this._aoiLayer, 'visibility-change', lang.hitch(this, function (evt) {
                            // set visibility of graphics layer
                            this._selectedGraphics.setVisibility(evt.visible);
                            // if not visible
                            if (!evt.visible) {
                                // hide stats
                                this._sb.hide();
                            } else {
                                // show stats
                                this._sb.show();
                            }
                        }));
                    }
                    // set layer title
                    this._setImpactLayerTitle();
                    this._sb.show();
                        // drawer resize event
                    on(this._drawer, 'resize', lang.hitch(this, function () {
                        // resize stats block
                        if (this._sb) {
                            this._sb.resize();
                        }
                    }));
                }
                // description
                if (this.config.enableSummary) {
                    this._setSummary(this.config.summary || this.item.snippet);
                }
            },
            _setSummary: function (description) {
                // map title node
                var node = dom.byId('summary');
                if (node) {
                    // set title
                    node.innerHTML = description;
                }
            },
            _selectFeatures: function (features) {
                if (features && features.length) {
                    // add features to graphics layer
                    this._selectedGraphics.clear();
                    // each selected feature
                    for (var i = 0; i < features.length; i++) {
                        // selected line symbol
                        var sls = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 255, 255, 1]), 2);
                        // selected fill symbol
                        var symbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, sls, new Color([0, 255, 255, 0]));
                        // selected graphic
                        var g = new Graphic(features[i].geometry, symbol, features[i].attributes, null);
                        if (g) {
                            // add graphic to layer
                            this._selectedGraphics.add(g);
                        }
                    }
                    // single fature
                    if (features.length === 1) {
                        // has attribute field for renderer
                        if (this._attributeField && features[0].attributes.hasOwnProperty(this._attributeField)) {
                            var value = features[0].attributes[this._attributeField];
                            if (this._rendererNodes && this._rendererNodes.length) {
                                // each renderer nodes
                                for (i = 0; i < this._rendererNodes.length; i++) {
                                    // value matches
                                    if (this._rendererNodes[i].value.toString() === value.toString()) {
                                        // set selected
                                        domClass.add(this._rendererNodes[i].node, this.areaCSS.rendererSelected);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            },
            _setImpactLayerTitle: function(){
                var node;
                // set title of header to layer title
                if(this._impactAreaTitle && this._rendererNodes && this._rendererNodes.length){
                    node = dom.byId('impact_area_title');
                    if(node){
                        node.innerHTML = this._impactAreaTitle;
                    }
                }
                else{
                    node = dom.byId('impact_area_section');
                    if(node){
                        node.innerHTML = '';
                    }
                }
            },
            // get layer
            _getAOILayer: function (id) {
                if (id && this.layers && this.map) {
                    var mapLayer = this.map.getLayer(id);
                    if(mapLayer){
                        if(mapLayer.arcgisProps && mapLayer.arcgisProps.title){
                            this._impactAreaTitle = mapLayer.arcgisProps.title;
                        }
                        return mapLayer;
                    }
                    else{
                        return false;
                    }
                }
                return false;
            },
            _queryGreatestFeature: function () {
                // features query
                var q = new Query();
                q.returnGeometry = true;
                q.where = '1=1';
                q.num = 1;
                q.start = 0;
                if(this._aoiOutFields){
                    q.outFields = this._aoiOutFields;
                }
                // if multiple features. (determined by renderer)
                if (this._multiple && this._attributeField) {
                    // order by attribute field
                    q.orderByFields = [this._attributeField + ' ' + this.config.summaryAttributeOrder];
                }
                // get features
                this._aoiLayer.queryFeatures(q, lang.hitch(this, function (fs) {
                    // features were returned
                    if (fs.features && fs.features.length) {
                        // display stats
                        this._sb.set("features", [fs.features[0]]);
                        this._sb.startup();
                        // selected features
                        this._selectFeatures([fs.features[0]]);
                    }
                }));
            },
            _queryFeatures: function (node, value, zoom) {
                // show layer if invisible
                if (!this._aoiLayer.visible) {
                    this._aoiLayer.setVisibility(true);
                }
                // remove any selected
                this._clearSelected();
                domClass.add(node, this.areaCSS.rendererSelected);
                domClass.add(node, this.areaCSS.rendererLoading);
                // search query
                var q = new Query();
                q.returnGeometry = true;
                if (value === this._entireAreaValue || value === "") {
                    // results
                    q.where = '1 = 1';
                } else {
                    // match value
                    if (isNaN(value)) {
                        q.where = this._attributeField + ' = ' + "'" + value + "'";
                    } else {
                        q.where = this._attributeField + ' = ' + value;
                    }
                }
                if(this._aoiOutFields){
                    q.outFields = this._aoiOutFields;
                }
                var ct = node;
                // query features
                this._aoiLayer.queryFeatures(q, lang.hitch(this, function (fs) {
                    // remove current renderer
                    domClass.remove(ct, this.areaCSS.rendererLoading);
                    // display geo stats
                    this._sb.set("features", fs.features);
                    this._selectFeatures(fs.features);
                    // zoom to feature
                    if(zoom){
                        // set extent for features
                        this.map.setExtent(graphicsUtils.graphicsExtent(fs.features), true);
                    }
                }), lang.hitch(this, function () {
                    // remove selected
                    this._clearSelected();
                }));
            },
            _createRendererItemClick: function (node, value) {
                // renderer item click
                on(node, 'click', lang.hitch(this, function (evt) {
                    this._hideInfoWindow();
                    var ct = evt.currentTarget;
                    // current renderer isn't already selected
                    if (!domClass.contains(ct, this.areaCSS.rendererSelected)) {
                        // view screen
                        var vs = win.getBox();
                        // hide drawer for small res
                        if (vs.w < this._showDrawerSize) {
                            this._drawer.toggle().then(lang.hitch(this, function () {
                                // resize map
                                this.map.resize(true);
                                // wait for map to be resized
                                setTimeout(lang.hitch(this, function () {
                                    // get features
                                    this._queryFeatures(ct, value, true);
                                }), 250);
                            }));
                        } else {
                            // get features
                            this._queryFeatures(ct, value, true);
                        }
                    }
                }));
            },
            _createRendererItems: function (infos) {
                // renderer node items created
                this._rendererNodes = [];
                // create list
                var ulList = domConstruct.create('ul', {
                    className: this.areaCSS.rendererMenu
                });
                // Entire area button in renderer list
                if(this.config.enableEntireAreaButton){
                    // create select all item
                    var selectAll = domConstruct.create('li', {
                        title: this.config.i18n.general.summarizeTitle,
                        className: this.areaCSS.rendererMenuItem + " " + this.areaCSS.rendererSummarize
                    });
                    // create select all item container
                    domConstruct.create('div', {
                        className: this.areaCSS.rendererContainer,
                        innerHTML: this.config.i18n.general.summarize
                    }, selectAll);
                    // select all click event
                    this._createRendererItemClick(selectAll, this._entireAreaValue);
                    // place item
                    domConstruct.place(selectAll, ulList, 'last');
                    // save reference to select all node
                    this._rendererNodes.push({
                        value: this._entireAreaValue,
                        node: selectAll
                    });
                    // select all node
                    this._selectAllNode = selectAll;
                }
                // each renderer item
                for (var i = 0; i < infos.length; i++) {
                    // create list item
                    var liItem = domConstruct.create('li', {
                        title: this.config.i18n.general.rendererTitle,
                        className: this.areaCSS.rendererMenuItem
                    });
                    // symbol color
                    var symbolColor = infos[i].symbol.color;
                    var hex = symbolColor.toHex();
                    // i18n border direction
                    var borderDirection = 'left';
                    if(this.config.i18n.direction === 'rtl'){
                        borderDirection = 'right';
                    }
                    // create list container
                    domConstruct.create('div', {
                        className: this.areaCSS.rendererContainer,
                        style: 'border-' + borderDirection + '-color:' + hex + '; border-' + borderDirection + '-color:rgb(' + symbolColor.r + ',' + symbolColor.g + ',' + symbolColor.b + '); border-' + borderDirection + '-color:rgba(' + symbolColor.r + ',' + symbolColor.g + ',' + symbolColor.b + ',' + symbolColor.a + ');',
                        innerHTML: infos[i].label
                    }, liItem);
                    // value
                    var value = infos[i].maxValue || infos[i].value || "";
                    // click event
                    this._createRendererItemClick(liItem, value);
                    // place item
                    domConstruct.place(liItem, ulList, 'last');
                    // save node for reference
                    this._rendererNodes.push({
                        value: value,
                        node: liItem
                    });
                }
                // renderer dom node
                var rendererMenu = dom.byId('renderer_menu');
                if (rendererMenu) {
                    // place
                    domConstruct.place(ulList, rendererMenu);
                    // display renderer
                    domStyle.set(rendererMenu, 'display', 'block');
                }
            },
            _getLayerInfos: function () {
                this._multiple = false;
                if (this._aoiLayer) {
                    // multiple polygons
                    var renderer = this._aoiLayer.renderer;
                    // renderer exists
                    if (renderer) {
                        this._attributeField = renderer.attributeField;
                        // renderer layer infos
                        var infos = renderer.infos;
                        if (infos && infos.length) {
                            infos = (this.config.summaryAttributeOrder == "DESC") ? infos : infos.reverse();
                            this._multiple = true;
                            this._aoiInfos = infos;
                        }
                    }
                }
            },
            _getOutFields: function(){
                var outFields = [];
                // each parent
                for(var i = 0; i < this.config.summaryAttributes.length; i++){
                    var parent = this.config.summaryAttributes[i];
                    var children = parent.children;
                    // add parent field
                    outFields.push(parent.attribute);
                    // parent children
                    if(children && children.length){
                        // each child
                        for(var j = 0; j < children.length; j++){
                            var child = children[j];
                            // add child field
                            outFields.push(child.attribute);
                        }
                    }
                }
                // if outFields set
                if(outFields && outFields.length){
                    this._aoiOutFields = outFields;
                }
            },
            // clear selected renderer & loading status
            _clearSelected: function () {
                // if items are there
                if (this._rendererNodes && this._rendererNodes.length) {
                    // remove classes from each item
                    for (var i = 0; i < this._rendererNodes.length; i++) {
                        domClass.remove(this._rendererNodes[i].node, this.areaCSS.rendererSelected);
                        domClass.remove(this._rendererNodes[i].node, this.areaCSS.rendererLoading);
                    }
                }
            },
            _selectEvent: function (evt) {
                // graphic selected
                if (evt.graphic) {
                    this._clearSelected();
                    this._sb.set("features", [evt.graphic]);
                    this._selectFeatures([evt.graphic]);
                    event.stop(evt);
                }
            },
            _hideInfoWindow: function () {
                if (this.map && this.map.infoWindow) {
                    this.map.infoWindow.hide();
                }
            }
        });
    });