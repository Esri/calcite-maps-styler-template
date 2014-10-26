define([
    'dojo/_base/declare', 
    'dojo/_base/Color', 
    'dojo/_base/fx',
    'dojox/gfx/fx',
    'esri/geometry/geodesicUtils',
    'esri/graphic', 
    'esri/symbols/SimpleMarkerSymbol', 
    'esri/symbols/SimpleLineSymbol'
], function(
    declare, 
    Color, 
    fx,
    gfxFx,
    geodesicUtils,
    Graphic, 
    SimpleMarkerSymbol, 
    SimpleLineSymbol
) {
   
   var trackingPt = declare('TrackingPt', [Graphic], {

      constructor : function() {
         this.type = "trackingpoint";
         this.delay = 1000;
      },

      sizeIn : function() {
         var shp = this.getDojoShape();
         var delay = this.delay;
         if (shp) {
            var anim = new fx.Animation({
               delay : delay,
               node : this,
               duration : 900,
               curve : [100, 20],
               onAnimate : function(v) {
                  shp.setShape({
                     r : v
                  });
               },
               onEnd : function() {
                  var me = this.node;
                  var symL = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color.fromString(me.attributes.color), 2);
                  var sym = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 16, symL, Color.fromArray([255,255,255]));
                  me.setSymbol(sym);
                  me.drive();
               }
            });
            anim.play();
         }
      },
      
      fadeIn : function() {
         var delay = this.delay;
         var rgb = Color.fromString(this.attributes.color).toRgb();
         var rgbStart = rgb.slice();
         rgbStart.push(0);
         var rgbEnd = rgb.slice();
         rgbEnd.push(0.8);
         var shp = this.getShape();
         if (shp) {
            var anim = new gfxFx.animateFill({
               delay : delay,
               shape : shp,
               duration : 900,
               color : {
                  start : Color.fromArray(rgbStart),
                  end : Color.fromArray(rgbEnd)
               }
            });
            anim.play();
         }
      },

      sizeOut : function() {
         var shp = this.getDojoShape();
         if (shp) {
            var anim = new fx.Animation({
               node : this,
               duration : 902,
               curve : [20, 100],
               onAnimate : function(v) {
                  shp.setShape({
                     r : v
                  });
               },
               onEnd : function() {
                  var gra = this.node;
                  gra.hide();
               }
            });
            anim.play();
         }
      },

      fadeOut : function() {
         var rgb = Color.fromString(this.attributes.color).toRgb();
         var rgbStart = rgb.slice();
         rgbStart.push(0.8);
         var rgbEnd = rgb.slice();
         rgbEnd.push(0);
         var shp = this.getShape();
         if (shp) {
            var anim = new gfxFx.animateFill({
               shape : shp,
               duration : 900,
               color : {
                  start : Color.fromArray(rgbStart),
                  end : Color.fromArray(rgbEnd)
               }
            });
            anim.play();
         }
      },

      drive : function() {
         var route = this.attributes.route;
         var count = route.paths[0].length;
         var anim = new fx.Animation({
            node : this,
            duration : 1000,
            curve : [0, count - 1],
            onAnimate : function(v) {
               var i = parseInt(v);
               var pt = route.getPoint(0, i);
               this.node.setGeometry(pt);
            },
            onEnd : function() {
               var symL = new SimpleLineSymbol(SimpleLineSymbol.STYLE_NULL, new Color.fromArray([0,0,0,0]), 0);
               var sym = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 20, symL, Color.fromString(this.node.attributes.color));
               this.node.setSymbol(sym);
               this.node.fadeOut();
               this.node.sizeOut();
            }
         });
         anim.play();
      },

      updateSymbol : function() {
         this.sizeIn();
         this.fadeIn();
      }
      
   });

   return trackingPt;
});
