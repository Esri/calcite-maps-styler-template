define([
	'dojo/_base/declare',
	'dojo/_base/array',
	'dojo/_base/lang',
	'dojo/_base/Color',
	
	'esri/layers/GraphicsLayer',
	'esri/graphic',
	'esri/SpatialReference',
	'esri/geometry/Extent',
	'esri/geometry/Point',
	'esri/symbols/SimpleMarkerSymbol',
	'esri/symbols/SimpleLineSymbol',
	'esri/symbols/Font',
	'esri/symbols/TextSymbol'
	],

	function(declare, array, lang, Color, GraphicsLayer, Graphic, SpatialReference, Extent, Point, SimpleMarkerSymbol, SimpleLineSymbol, Font, TextSymbol) {
		var clusterLayer = declare('ClusterLayer', [GraphicsLayer], {
	
		    constructor: function(options) {
				var me = this;

				//basic esri.layers.GraphicsLayer option(s)
		        me.displayOnPan = options.displayOnPan || false;
		
		        //set the map
		        me._map = options.map;
		        
				me.clusterSize = options.clusterSize || 100;
				
				me.color = options.color || '#ff0000';
				
		        //base connections to update clusters during user/map interaction
		        me._map.on('zoom-start', lang.hitch(me, me.handleMapZoomStart));
		        me._map.on('extent-change', lang.hitch(me, me.handleMapExtentChange));
				
				me.on('update', lang.hitch(me, me.handleOnUpdate));
		
		        //holds all the features for this cluster layer
		        me._features = [];
		        
		        //set incoming features
		        try {
		            me.setFeatures(options.features);
		        } catch (ex) {
		            console.log(ex);
		        }
		
		        //connects for cluster layer itself that handles the loading and mouse events on the graphics
		        me.on('load', lang.hitch(me, me.handleLayerLoaded));
		        //me.on('click', lang.hitch(me, me.handleClick));

		        //following the basics of creating a custom layer
		        me.loaded = true;
		        me.onLoad(me);
		    },
		    
		    //clear all graphics when zoom starts
		    handleMapZoomStart: function() {
		        this.clear();
		    },
		
		    //re-cluster on extent change
		    handleMapExtentChange: function(extent, delta, leveChange, lod) {
                if (this._map.infoWindow.isShowing)
                    this._map.infoWindow.hide();
				this.clear();
		        this.clusterFeatures();
		    },
			
			//on update
		    handleOnUpdate: function() {
		        if (this._map.infoWindow.isShowing)
			        this._map.infoWindow.hide();
		    },
		
		    //set features
		    setFeatures: function(features) {
		    	var me = this;
		    	if (me._map.infoWindow.isShowing)
			        me._map.infoWindow.hide();

				me._features = [];
		        array.forEach(features, function(feature) {
					me._features.push(feature);
	            }, me);
		        me.clusterFeatures();
		    },
		    
		    //set color
		    setColor: function(color) {
				this.color = color;
		    },
		
		    //fires when cluster layer is loaded, but not added to map yet.
		    handleLayerLoaded: function(lyr) {
		        this.clusterFeatures();
		    },
			
			
			// cluster features
			clusterFeatures: function(redraw) {
				
				this.clear();
				var features = this._features;
				if (features.length > 0) {
					
					var clusterSize = this.clusterSize;
					var clusterGraphics = new Array();
					
					var sr = this._map.spatialReference;
					var mapExt = this._map.extent;
					var o = new Point(mapExt.xmin, mapExt.ymax, sr);
					
					var rows = Math.ceil(this._map.height / clusterSize);
					var cols = Math.ceil(this._map.width / clusterSize);
					var distX = mapExt.getWidth() / this._map.width * clusterSize;
					var distY = mapExt.getHeight() / this._map.height * clusterSize;
					
					for (var r = 0; r < rows; r++) {
						for (var c = 0; c < cols; c++) {
							var x1 = o.x + (distX * c);
							var y2 = o.y - (distY * r);
							var x2 = x1 + distX;
							var y1 = y2 - distY;
							
							var ext = new Extent(x1, y1, x2, y2, sr);
							
							var cGraphics = new Array();
							for (var i in features) {
								var feature = features[i];
								if (ext.contains(feature.geometry)) {
									cGraphics.push(feature);
								}
							}
							if (cGraphics.length > 0) {
								var cPt = this.getClusterCenter(cGraphics);
								clusterGraphics.push({
									center: cPt,
									graphics: cGraphics
								});
							}
						}
					}
					
					//add cluster to map
					for (var g in clusterGraphics) {
						var clusterGraphic = clusterGraphics[g];
						var count = clusterGraphic.graphics.length;
						var data = clusterGraphic.graphics;
						var label = count.toString();
						var size = label.length * 16;
						var symColor = this.getSymbolColor();
						var cls = new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL, new Color(0,0,0,0), 0);
						var csym = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, size * 1.6, cls, new Color([symColor[0], symColor[1], symColor[2], 0.3]));
						var csym2 = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, size, cls, new Color([symColor[0], symColor[1], symColor[2], 0.7]));
						var fnt = new Font();
						fnt.family = "Arial";
						fnt.size = "10px";
						var symText = new TextSymbol(label, fnt, "#ffffff");
						symText.setOffset(0, -4);
											
						var attr = {
							Count: count,
							Data: data
						};
						if (count > 1) {
							this.add(new Graphic(clusterGraphic.center, csym, attr));
							this.add(new Graphic(clusterGraphic.center, csym2, attr));
							this.add(new Graphic(clusterGraphic.center, symText, attr));
						} else {
							var pt = clusterGraphic.graphics[0].geometry;
							var lineSym = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color(0,0,0,1), 1);
							var ptSym = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10, lineSym, new Color([symColor[0], symColor[1], symColor[2], 1]));
							this.add(new Graphic(pt, ptSym, attr));
						}
						
					}
					
				}				
		                        
			},
			
			getSymbolColor: function(alpha) {
				var symColor = Color.fromString(this.color);
				return symColor.toRgb(); 
			},
			
			getClusterCenter: function(graphics) {
				var xSum = 0;
				var ySum = 0;
				var count = graphics.length;
				array.forEach (graphics, function(graphic) {
					xSum += graphic.geometry.x;
					ySum += graphic.geometry.y;
				}, this);
				var cPt = new Point(xSum/count, ySum/count, graphics[0].geometry.spatialReference);
				return cPt;
			}
			
			
		});
		return clusterLayer;
	}
);