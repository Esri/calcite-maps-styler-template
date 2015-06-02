define(["dojo/has"], function (has) { /*App capabilities*/
/*Right now we are just checking config so has is just duplicating behavior
    but might want to add more checks later for example only enable locate if geolocation is supported etc. */
    has.add("search", function (g) {
        var search = g.config.search;
        return search;
    });

    has.add("share", function (g) {
        var share = g.config.share;
        return share;
    });
    has.add("measure", function(g){
        var measure = g.config.measure;
        return measure;
    });
    has.add("scale", function (g) {
        var scale = g.config.scale;
        return scale;
    });
    has.add("bookmarks", function (g) {
        var bookmarks = g.config.bookmarks;
        if (!g.config.response.itemInfo.itemData.bookmarks) {
            //if there aren't any bookmarks set to false. 
            bookmarks = false;
        }
        return bookmarks;
    });
    has.add("basemaps", function (g) {
        var basemaps = g.config.basemaps;
        return basemaps;
    });
    has.add("legend", function (g) {
        var legend = g.config.legend;
        return legend;
    });
    has.add("measure", function (g) {
        var measure = g.config.measure;
        return measure;
    });
    has.add("table", function (g) {
        var table = g.config.table;
        return table;
    });
    has.add("home", function (g) {
        var home = g.config.home;
        return home;
    });
    has.add("layerlist", function (g) {
        var layerlist = g.config.layerlist;
        return layerlist;
    });
    has.add("editor", function (g) {
        var editor = g.config.editor;
        return editor;
    });
    has.add("locate", function (g) {
        var locate = g.config.locate;
        return locate;
    });
    has.add("zoom", function (g) {
        var zoom = g.config.zoom;
        return zoom;
    });
    has.add("print", function (g) {
        var print = g.config.print;
        return print;
    });
    return has;
});