define(["dojo/Evented", "dojo/_base/declare", "dojo/_base/fx", "dojo/_base/html", "dojo/_base/lang", "dojo/dom", "dojo/dom-class", "dojo/dom-construct", "dojo/dom-geometry", "dojo/on", "dojo/query", "dojo/Deferred"], function (
Evented, declare, fx, html, lang, dom, domClass, domConstruct, domGeometry, on, query, Deferred) {
    return declare([Evented], {

        map: null,
        tools: [],
        curTool: 0,
        scrollTimer: null,
        config: {},
        pTools: null,
        pMenu: null,
        pPages: null,

        constructor: function (config) {
            this.config = config;
        },

        startup: function () {
            var deferred = this._init();
            deferred.then(lang.hitch(this, function (config) {
                // optional ready event to listen to
                this.emit("ready", config);
            }), lang.hitch(this, function (error) {
                // optional error event to listen to
                this.emit("error", error);
            }));
            return deferred;
        },

        _init: function () {
            //Don't need deferred now setting it up just in case
            var deferred;

            deferred = new Deferred();

            pTools = dom.byId("panelTools");
            pMenu = dom.byId("panelMenu");
            on(pMenu, "click", lang.hitch(this, this._menuClick));
            pPages = dom.byId("panelPages");
            domConstruct.empty(pPages);
            // add blank page
            domConstruct.create("div", {
                className: "pageblank",
                id: "page_blank"
            }, pPages);

            on(window, "scroll", lang.hitch(this, this._windowScrolled));
            on(window, "resize", lang.hitch(this, this._windowScrolled));


            deferred.resolve();

            return deferred.promise;
        },

        //Create a tool and return the div where you can place content
        createTool: function (tool, panelClass) {


            var name = tool.name;

            // add tool
            var pTool = domConstruct.create("div", {
                className: "panelTool",
                "data-title": this.config.i18n.tooltips[name] || name,
                // use tooltip text defined in nls file if available. 
                id: "panelTool_" + name
            }, pTools);

            domConstruct.create("img", {
                className: "tool",
                src: "images/icons_" + this.config.icons + "/" + name + ".png"
            }, pTool);
            on(pTool, "click", lang.hitch(this, this._toolClick, name));
            this.tools.push(name);


            // add page
            var page = domConstruct.create("div", {
                className: "page",
                id: "page_" + name
            }, pPages);

            var pageContent = domConstruct.create("div", {
                className: "pageContent rounded shadow",
                id: "pageContent_" + name
            }, page);

            domClass.add(pageContent, panelClass);

            var pageHeader = domConstruct.create("div", {
                id: "pageHeader_" + name,
                className: "pageHeader bg roundedTop"
            }, pageContent);


            domConstruct.create("div", {
                className: "pageTitle",
                innerHTML: this.config.i18n.tooltips[name] || name
            }, pageHeader);

            domConstruct.create("div", {
                className: "pageHeaderImg",
                innerHTML: "<img class='pageIcon' src ='images/icons_white/" + name + ".png'/>"
            }, pageHeader);



            var pageBody = domConstruct.create("div", {
                className: "pageBody",
                id: "pageBody_" + name
            }, pageContent);
            return pageBody;

        },
        updatePageNavigation: function () {
            //Adds the up/down and close tools to the page header. 
            for (var i = 0; i < this.tools.length; i++) {
                var name = this.tools[i];
                var pageClose = domConstruct.create("div", {
                    className: "pageClose"
                }, "pageHeader_" + name);
                on(pageClose, "click", lang.hitch(this, this._closePage));

                var pageUp = domConstruct.create("div", {
                    className: "pageUp"
                }, "pageHeader_" + name);
                on(pageUp, "click", lang.hitch(this, this._showPreviousPage, name));

                if (name != this.tools[this.tools.length - 1]) {
                    var pageDown = domConstruct.create("div", {
                        className: "pageDown"
                    }, "pageHeader_" + name);
                    on(pageDown, "click", lang.hitch(this, this._showNextPage, name));
                }

            }


        },
        setContent: function (name, content) {
            domConstruct.place(content, "pageBody_" + name, "last");
        },

        // activate tool
        activateTool: function (name) {

            this.curTool = this._getPageNum(name);
            this._showPage(name);

        },

        // tool click
        _toolClick: function (name) {
            this._showPage(name);

        },

        // get page num
        _getPageNum: function (name) {
            for (var i = 0; i < this.tools.length; i++) {
                if (this.tools[i] == name) {
                    return i;
                }
            }
            return 0;
        },
        // show page
        _showPage: function (name) {

            var num = this._getPageNum(name) + 1;
            if (num != this.curTool) {
                this._scrollToPage(num);
            } else {
                this._scrollToPage(0);
            }
        },

        // show previous page
        _showPreviousPage: function (name) {
            var num = this._getPageNum(name);
            this._scrollToPage(num);
        },

        // show next page
        _showNextPage: function (name) {
            var num = this._getPageNum(name) + 2;
            this._scrollToPage(num);
        },

        // close page
        _closePage: function () {
            this._scrollToPage(0);
        },

        //scroll to page
        _scrollToPage: function (num) {
            var box = html.getContentBox(dom.byId("panelContent"));
            var startPos = this.curTool * box.h;

            var endPos = num * box.h;
            var diff = Math.abs(num - this.curTool);
            if (diff == 1) {
                this._animateScroll(startPos, endPos);
            } else {
                document.body.scrollTop = endPos;
                document.documentElement.scrollTop = endPos;
            }
            this.curTool = num;

            var name = null;
            if (num > 0) {
                name = this.tools[num - 1];
            }
            this._updateTool(num);
        },

        // window scrolled
        _windowScrolled: function (evt) {
            if (this.scrollTimer) {

                clearTimeout(this.scrollTimer);
            }

            this.scrollTimer = setTimeout(lang.hitch(this, this._snapScroll), 400);
        },

        // snap scroll
        _snapScroll: function () {

            if (this.map) {
                this.map.reposition();
            }
            var startPos = domGeometry.docScroll().y;
            var box = html.getContentBox(dom.byId("panelContent"));
            var num = Math.round(startPos / box.h);
            var endPos = num * box.h;
            this.curTool = num;
            var name = null;
            if (num > 0) {
                name = this.tools[num - 1];
            }
            //this._updateTool(num);
            this._animateScroll(startPos, endPos);
        },

        // animateScroll
        _animateScroll: function (start, end) {

            var anim = new fx.Animation({
                duration: 500,
                curve: [start, end]
            });
            on(anim, "Animate", function (v) {
                document.body.scrollTop = v;
                document.documentElement.scrollTop = v;

            });
            anim.play();
        },

        // highlight the active tool on the toolbar
        _updateTool: function (num) {
            query(".panelTool").removeClass("panelToolActive");

            var name = this.tools[num - 1];

            if (name) {
                domClass.add("panelTool_" + name, "panelToolActive");
            }

            this.emit("updateTool", name);

        },


        // menu click
        _menuClick: function () {
            if (query("#panelTools").style("display") == "block") {
                query("#panelTools").style("display", "none");
            } else {
                query("#panelTools").style("display", "block");
            }
        }
    });
});