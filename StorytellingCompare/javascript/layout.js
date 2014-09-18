  var map0,map1,map2;
  var mapCount = 0;
  var syncLoc = true;
  var syncLevel = true;
  var sync = true;
  var mapExtent, mapCenter, mapScale;
  var mouseDown = 0;

	function bannerSetup(){
		document.title = configOptions.title || "";
        dojo.byId("title").innerHTML = configOptions.title || "";
		dojo.byId("subtitle").innerHTML = configOptions.subtitle ||  "";
		if (configOptions.description == false || configOptions.description == "false"){
			$(".descriptionCon").hide();
			$(".desToggle").hide();
			$(".map").css('height','100%');
		}
		if (configOptions.legend == false || configOptions.legend == "false"){
			$(".legendCon").hide();
			$(".legToggle").hide();
		}
		dijit.byId('mainWindow').resize();
	}

	function initMaps(){
	    if ($("#titleCon2").position().top === 45){
			$("#titleCon2").css('margin-top','-45px');
	  	}
		if(configOptions.webmaps.length == 2){
			$("#mapCon2").hide();
			$("#titleCon2").hide()
			$("#titleCon0").css('width','50%');
			$("#titleCon1").css('width','50%');
			$("#titleCon1").css('float','right');
			$("#titleCon1").css('margin-right','-1px');
			$("#mapCon0").css('width','50%');
			dijit.byId('mainWindow').resize();
		}
    	bannerSetup();
		createMap(0);
		createMap(1);
		if (configOptions.webmaps.length == 3){
			createMap(2);
		}
		$("#mapDiv0").mousemove(function(e) {
			if (mouseDown == 0){
            	mapCount = 0;
			}
        });
		$("#mapDiv1").mousemove(function(e) {
			if (mouseDown == 0){
	            mapCount = 1;
			}
        });
		if (configOptions.webmaps.length == 3){
			$("#mapDiv2").mousemove(function(e) {
				if (mouseDown == 0){
					mapCount = 2;
				}
			});
		}
	}

	function enableSyncing(){
		sync = true;
		syncMaps();
	}

	function syncMaps(){
		if (sync == true){
			if (syncLoc == true && syncLevel == false){
				if (mapExtent != eval("map"+[mapCount]).extent){
					mapExtent = eval("map"+[mapCount]).extent;
					mapCenter = eval("map"+[mapCount]).extent.getCenter();
					for(i=0;i<configOptions.webmaps.length;i++){
						if(eval("map"+[i]) != null){
							if(i != mapCount ){
								eval("map"+[i]).centerAt(mapCenter);
							}
						}
					}
				}
			}
			else if (syncLoc == false && syncLevel == true){
				if (mapScale != eval("map"+[mapCount]).getLevel()){
					mapScale = eval("map"+[mapCount]).getLevel();
					for(i=0;i<configOptions.webmaps.length;i++){
						if(eval("map"+[i]) != null){
							if(i != mapCount ){
								eval("map"+[i]).setLevel(mapScale);
							}
						}
					}
				}
			}
			else if (syncLoc == true && syncLevel == true){
				if (mapExtent != eval("map"+[mapCount]).extent){
					mapExtent = eval("map"+[mapCount]).extent;
					for(i=0;i<configOptions.webmaps.length;i++){
						if(eval("map"+[i]) != null){
							if(i != mapCount ){
								eval("map"+[i]).setExtent(mapExtent);
							}
						}
					}
				}
			}
		}
	}

	$(document).ready(function(e) {
		$(document).mousedown(function(e) {
			mouseDown = 1;
		});
		$(document).mouseup(function(e) {
			mouseDown = 0;
		});
        $("#scaleCheck").click(function(e) {
			if($("#syncScale").hasClass('checked')){
				$("#syncScale").removeClass('checked');
				$("#syncScale").addClass('unchecked');
				$("#mapDiv0_zoom_slider").show();
				if(configOptions.webmaps.length == 3){
					$("#mapDiv1_zoom_slider").show();
				}
				syncLevel = false;
			}
			else{
				$("#syncScale").removeClass('unchecked');
				$("#syncScale").addClass('checked');
				$("#mapDiv0_zoom_slider").hide();
				if(configOptions.webmaps.length == 3){
					$("#mapDiv1_zoom_slider").hide();
				}
				syncLevel = true;
				mapExtent = null;
				syncMaps();
			}
        });
		$("#locCheck").click(function(e) {
			if($("#syncLoc").hasClass('checked')){
				$("#syncLoc").removeClass('checked');
				$("#syncLoc").addClass('unchecked');
				syncLoc = false;
			}
			else{
				$("#syncLoc").removeClass('unchecked');
				$("#syncLoc").addClass('checked');
				syncLoc = true;
				syncMaps();
			}
        });
    });

	function legendToggle(){
		sync = false;
		if ($(".legendCon").is(':visible')){
			$(".legendCon").hide();
			$(".legToggle").html(configOptions.i18n.viewer.toggles.legend+' &#9660;');
			if ($(".descriptionCon").is(':visible')){
				$(".map").css('height','75%');
			}
			else{
				$(".map").css('height','100%');
			}
			resizeMaps();
		}
		else{
			$(".legendCon").show();
			$(".legToggle").html(configOptions.i18n.viewer.toggles.legend+' &#9650;');
			if ($(".descriptionCon").is(':visible')){
				$(".map").css('height','40%');
			}
			else{
				$(".map").css('height','65%');
			}
			resizeMaps();
		}
	}

	function descriptionToggle(){
		sync = false;
		if ($(".descriptionCon").is(':visible')){
			$(".descriptionCon").hide();
			$(".desToggle").html(configOptions.i18n.viewer.toggles.description+' &#9650;');
			$(".desToggle").css('bottom','0%');
			if ($(".legendCon").is(':visible')){
				$(".map").css('height','65%');
			}
			else{
				$(".map").css('height','100%');
			}
			resizeMaps();
		}
		else{
			$(".descriptionCon").show();
			$(".desToggle").html(configOptions.i18n.viewer.toggles.description+' &#9660;');
			$(".desToggle").css('bottom','25%');
			if ($(".legendCon").is(':visible')){
				$(".map").css('height','40%');
			}
			else{
				$(".map").css('height','75%');
			}
			resizeMaps();
		}
	}