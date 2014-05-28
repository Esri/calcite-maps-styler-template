/*This module defines feature tests for Basic Viewer features and 
organizes all the conditional checking we have to do for the template in one place.
https://dojotoolkit.org/documentation/tutorials/1.8/device_optimized_builds/ 
http://dante.dojotoolkit.org/hasjs/tests/runTests.html*/

define(["dojo/has"], function (has) {

    var getTool = function (name, config) {
        var tool = false;
        for (var i = 0; i < config.tools.length; i++) {
            if (config.tools[i].name === name) {
                tool = config.tools[i].enabled;
                break;
            }
        }
        return tool;
    };

    /*App capabilities*/
    has.add("search", function (g) {
        var search = false;
        if (g.config.search) {
            search = g.config.search;
        }
        return search;
    });

    /*Toolbar tools*/
    has.add("basemap", function (g) {
        return getTool("basemap", g.config);
    });
    has.add("bookmarks", function (g) {
        return getTool("bookmarks", g.config);
    });
    has.add("details", function (g) {
        return getTool("details", g.config);
    });
    has.add("edit", function (g) {
        return getTool("edit", g.config);
    });
    has.add("edit-toolbar", function (g) {
        var toolbar = false;

        for (var i = 0; i < g.config.tools.length; i++) {
            if (g.config.tools[i].name === "edit") {
                toolbar = g.config.tools[i].toolbar;
                break;
            }
        }
        return toolbar;
    });
    has.add("home", function (g) {
        var home = false;
        if (g.config.home) {
            home = true;
        }
        return home;
    });
    has.add("layers", function (g) {
        return getTool("layers", g.config);
    });
    has.add("legend", function (g) {
        return getTool("legend", g.config);
    });

    has.add("locate", function (g) {
        var location = false;
        if (g.config.locate && has("native-gelocation")) {
            location = true;
        }
        return location;
    });


    has.add("measure", function (g) {
        return getTool("measure", g.config);
    });
    has.add("overview", function (g) {
        return getTool("overview", g.config);
    });
    has.add("print", function (g) {
        var print = false;
        if (getTool("print", g.config)) {
            //is there also a print service defined? 
            if (g.config.helperServices && g.config.helperServices.printTask && g.config.helperServices.printTask.url !== null) {
                print = true;
            }
        }
        return print;
    });

    has.add("print-legend", function (g) {
        var printLegend = false;

        for (var i = 0; i < g.config.tools.length; i++) {
            if (g.config.tools[i].name === "print") {

                printLegend = g.config.tools[i].legend;

                break;
            }
        }
        return printLegend;
    });

    has.add("print-layouts", function (g) {
        var printLayouts = false;

        for (var i = 0; i < g.config.tools.length; i++) {
            if (g.config.tools[i].name === "print") {

                printLayouts = g.config.tools[i].layouts;

                break;
            }
        }
        return printLayouts;
    });
    has.add("share", function (g) {
        return getTool("share", g.config);
    });
    has.add("time", function (g) {
        return getTool("time", g.config);
    }); /*Geolocation Feature Detection*/
    has.add("native-gelocation", function (g) {
        return has("native-navigator") && ("geolocation" in g.navigator);
    });
    has.add("native-navigator", function (g) {
        return ("navigator" in g);
    });


    return has;
});