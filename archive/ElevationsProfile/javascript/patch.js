
define(["dojo/_base/lang", "./_base", "./matrix", "dojo/_base/Color", "dojo/_base/array", "dojo/_base/fx", "dojo/_base/connect"], 
  function(lang, g, m, Color, arr, fx, Hub){
define(["dojo/_base/lang", "./_base", "./matrix", "dojo/_base/Color", "dojo/_base/array", "dojo/_base/fx", "dojo/_base/connect", "dojo/sniff"], 
  function(lang, g, m, Color, arr, fx, Hub, has){
    var fxg = g.fx = {};
 
    // Generic interpolators. Should they be moved to dojox.fx?
//@@ -276,6 276,44 @@
            this.curve = new InterpolTransform(args.transform, original);
        });
        Hub.connect(anim, "onAnimate", shape, "setTransform");
       if(g.renderer === "svg" && has("ie") >= 10){
        console.log("10");
           var handlers = [
                   Hub.connect(anim, "onBegin", anim, function(){
                       var parent = shape.getParent();
                       while(parent && parent.getParent){
                           parent = parent.getParent();
                       }
                       if(parent){
                           shape.__svgContainer = parent.rawNode.parentNode;
                       }
                   }),
                   Hub.connect(anim, "onAnimate", anim, function(){
                       try{
                           if(shape.__svgContainer){
                               var ov = shape.__svgContainer.style.visibility;
                               shape.__svgContainer.style.visibility = "visible";
                               var pokeNode = shape.__svgContainer.offsetHeight;
                               shape.__svgContainer.style.visibility = ov;
                           }
                       }catch(e){}
                   }),
                   Hub.connect(anim, "onEnd", anim, function(){
                       arr.forEach(handlers, Hub.disconnect);
                       if(shape.__svgContainer){
                           var ov = shape.__svgContainer.style.visibility;
                           var sn = shape.__svgContainer;
                           shape.__svgContainer.style.visibility = "visible";
                           setTimeout(function(){
                               try{
                                   sn.style.visibility = ov;
                                   sn = null;
                               }catch(e){}
                           },100);
                       }
                       delete shape.__svgContainer;
                   })
               ];
       }
        return anim; // dojo.Animation
    });
    
