var map0, map1, map2, map3;
var mapsSyncing = false;
$(document).ready(function (e) {
    $("#modalBackground").fadeTo('fast', '0.9');
    $("#intro").css('left', (($(document).width() / 2) - 400));
    $("#intro").fadeIn();
    $("#continue").click(function () {
        $("#modalBackground").fadeOut('slow');
        $("#intro").fadeOut('slow');
    });
    $('#introTab').click(function () {
        intro();
    });
});

function introImgSetup() {
    $("#introImg").load(function (e) {
        if (($("#introImg").width()) == 405) {
            $("#introImg").css("margin-top", (((455 - ($("#introImg").height())) / 2) + 15));
        } else if (($("#introImg").height()) == 440) {
            $("#introImg").css("margin-right", (((420 - ($("#introImg").width())) / 2) + 15));
        } else {
            $("#introImg").css("margin-right", (((420 - ($("#introImg").width())) / 2) + 15));
            $("#introImg").css("margin-top", (((455 - ($("#introImg").height())) / 2) + 15));
        }
        $("#introImg").show();
    });
}

function bannerSetup() {
    document.title = configOptions.title || "";
    dojo.byId("introHeader").innerHTML = configOptions.introTitle || "";
    dojo.byId("introText").innerHTML = configOptions.introText || "";
    document.getElementById('introImg').src = configOptions.introImage || "";
    dojo.byId("title").innerHTML = configOptions.title || "";
    $("#continue").fadeIn();
    for (i = 0; i < configOptions.webmaps.length; i++) {
        if (configOptions.navigationTabs[i].title !== '') {
            $("#links").append("<div id='" + (i) + "nav' class='links'><p class='navText'>" + configOptions.navigationTabs[i].title + "</p></div>");
        }
    }
    $("#0nav").addClass("selected");
    $(".links").click(function () {
        if (mapChange == true) {
            var t = setTimeout("timeoutMap()", 18000);
            j = $(this).attr('id').split("", 1);
            $(".links").removeClass("selected");
            $(this).addClass("selected");
            $(".map").hide();
            $(".sideContent").hide();
            $("#mapDiv" + [j]).show();
            $("#content" + [j]).show();
            if ($("#mapDiv" + [j]).length == 0) {
                $('#loadImg').show();
                mapChange = false;
                $(".links").css('cursor', 'wait');
                createMap();
            }
        }
    });
}

function timeoutMap() {
    if (mapChange == false) {
        alert("Map Not Loading. Please click another tab to continue.");
        $("#" + j + "nav").remove();
        mapChange = true;
        $(".links").css('cursor', 'pointer');
        $('#loadImg').hide();
    }
}

function syncMaps() {
    if (configOptions.syncMaps == true) {
        if (mapExtent != eval("map" + [j]).extent) {
            mapExtent = eval("map" + [j]).extent;
            for (i = 0; i < configOptions.webmaps.length; i++) {
                if (eval("map" + [i]) != null) {
                    if (i != j) {
                        eval("map" + [i]).setExtent(mapExtent);

                    }
                }
            }
        }
    }
}

function intro() {
    $("#modalBackground").fadeTo('fast', '0.9');
    $("#intro").css('left', (($(document).width() / 2) - 400));
    $("#intro").fadeIn();
}
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $("#modalBackground").fadeOut('normal');
        $("#intro").fadeOut('normal');
    }
});