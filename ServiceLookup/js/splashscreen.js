
define([
    "dojo/Evented",
    "dojo",
    "dijit",
    "esri",
    "dojo/ready",
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/array",
    "dojo/on",
    "dojo/dom-construct"
  
], function (
    Evented,
    dojo,
    dijit,
    esri,
    ready,
    declare,
    lang,
    array,
    on,
    domConstruct

) {
    return declare([Evented], {
        config: {},
        map: null,
        isMobileDevice: false,
        isAndroidDevice: false,
        isBrowser: false,
        isTablet: false,
        lessthanios6: false,
        isiOS: false,
        constructor: function (map, config) {
            this.map = map;
            this.config = config;
            if (this.config.theme == null)
            {
                this.config.theme = "black";
            }
            var ss = document.createElement("link");
            ss.type = "text/css";
            ss.rel = "stylesheet";
            ss.href = "css/splash-" + this.config.theme + ".css";
            document.getElementsByTagName("head")[0].appendChild(ss);
        },
        startup: function () {
            var node = domConstruct.toDom("<div id='divSplashScreenContainer' class='divSplashScreenContainer' style='display: block;'><table style='width: 100%; height: 100%;'><tr align='center' valign='middle'><td><div id='divSplashScreenContent' class='divSplashScreenContent'><table style='width: 100%;'><tr><td><div id='divSplashContainer' class='divSplashContainer' style='margin-top: 10px;'><div id='divSplashContent' class='divSplashContent'>                                        </div></div></td></tr><tr><td align='center'><button id='splashButton' style='width: 125px; margin-top: 7px;' class='customButton'><div class='customButtonInner'><table style='width: 100%; height: 100%;'><tr><td align='center' valign='middle'><center id='buttonText'>OK</center></td></tr></table></div></button></td></tr></table></div></td></tr></table></div>");
            domConstruct.place(node, "splash");
            if (this.config.i18n != null) {
                if (this.config.i18n.splashscreen != null) {
                    if (this.config.i18n.splashscreen.buttonText != null) {
                        dojo.byId("buttonText").innerHTML = this.config.i18n.splashscreen.buttonText;
                    }
                }
            }
          
            this._checkDevice();

            on(dojo.byId("splashButton"), "click", lang.hitch(this, this._hideSplashScreenMessage));

            if (this.config.splashText === "")
            {
                this.config.splashText = "Please configure the splash screen";
            }
            dojo.byId("divSplashContent").innerHTML = this.config.splashText;

            dojo.byId("divSplashScreenContainer").style.display = "block";

            dojo.addClass(dojo.byId("divSplashScreenContent"), "divSplashScreenDialogContent");
            this._setSplashScreenHeight();

            this.emit("ready", { "Name": "Splash" });
        },

        _checkDevice: function () {

            var userAgent = window.navigator.userAgent;

            if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0) {
                this.isiOS = true;
                userAgent.replace(/OS ((\d+_?){2,3})\s/, function (match, key) {
                    var version = key.split("_");
                    if (version[0] < 6) {
                        this.lessthanios6 = true;

                    }
                });
            }
            if ((userAgent.indexOf("Android") >= 0 && userAgent.indexOf("Mobile") >= 0) || userAgent.indexOf("iPhone") >= 0) {
                this.isMobileDevice = true;
                if ((userAgent.indexOf("Android") >= 0)) {
                    this.isAndroidDevice = true;
                }
                //dojo.byId("divSplashContent").style.fontSize = "15px";

            } else if ((userAgent.indexOf("iPad") >= 0) || (userAgent.indexOf("Android") >= 0)) {
                this.isTablet = true;
                //dojo.byId("divSplashContent").style.fontSize = "14px";
            } else {
                this.isBrowser = true;
                //dojo.byId("divSplashContent").style.fontSize = "11px";

            }
            //if (this.lessthanios6) {
            //    if (userAgent.indexOf("iPhone") || userAgent.indexOf("iPad")) {
            //    }

            //}
            //if (dojo.isIE) {

            //}

            if (this.isMobileDevice) {
                dojo.byId("divSplashScreenContent").style.width = "95%";
                dojo.byId("divSplashScreenContent").style.height = "95%";
            } else {
                dojo.byId("divSplashScreenContent").style.width = "350px";
                dojo.byId("divSplashScreenContent").style.height = "290px";

            }
        },
        _hideSplashScreenMessage: function () {
            if (dojo.isIE < 9 || this.isAndroidDevice) {
                dojo.byId("divSplashScreenContent").style.display = "none";
                dojo.addClass("divSplashScreenContainer", "opacityHideAnimation");
            } else {
                dojo.addClass("divSplashScreenContainer", "opacityHideAnimation");
                dojo.replaceClass("divSplashScreenContent", "hideContainer", "showContainer");

            }

        },
        _setSplashScreenHeight: function () {
            var height = (this.isMobileDevice) ? (dojo.window.getBox().h - 110) : (dojo.coords(dojo.byId("divSplashScreenContent")).h - 80);
            dojo.byId("divSplashContent").style.height = (height + 14) + "px";
            //this._createScrollbar(dojo.byId("divSplashContainer"), dojo.byId("divSplashContent"));
        },
        //Create scroll-bar
        //_createScrollbar: function (container, content) {
        //    var yMax;
        //    var pxLeft, pxTop, xCoord, yCoord;
        //    var scrollbar_track;
        //    var isHandleClicked = false;
        //    this.container = container;
        //    this.content = content;
        //    content.scrollTop = 0;
        //    if (dojo.byId(container.id + "scrollbar_track")) {
        //        dojo.empty(dojo.byId(container.id + "scrollbar_track"));
        //        container.removeChild(dojo.byId(container.id + "scrollbar_track"));
        //    }
        //    if (!dojo.byId(container.id + "scrollbar_track")) {
        //        scrollbar_track = document.createElement("div");
        //        scrollbar_track.id = container.id + "scrollbar_track";
        //        scrollbar_track.className = "scrollbar_track";
        //    } else {
        //        scrollbar_track = dojo.byId(container.id + "scrollbar_track");
        //    }
        //    var containerHeight = dojo.coords(container);
        //    scrollbar_track.style.right = 5 + "px";
        //    var scrollbar_handle = document.createElement("div");
        //    scrollbar_handle.className = "scrollbar_handle";
        //    scrollbar_handle.id = container.id + "scrollbar_handle";
        //    scrollbar_track.appendChild(scrollbar_handle);
        //    container.appendChild(scrollbar_track);
        //    if ((content.scrollHeight - content.offsetHeight) <= 5) {
        //        scrollbar_handle.style.display = "none";
        //        scrollbar_track.style.display = "none";
        //        return;
        //    } else {

        //        scrollbar_handle.style.display = "block";
        //        scrollbar_track.style.display = "block";
        //        scrollbar_handle.style.height = Math.max(this.content.offsetHeight * (this.content.offsetHeight / this.content.scrollHeight), 25) + "px";
        //        yMax = this.content.offsetHeight - scrollbar_handle.offsetHeight;
        //        yMax = yMax - 5; //for getting rounded bottom of handle
        //        if (window.addEventListener) {
        //            content.addEventListener("DOMMouseScroll", scrollDiv, false);
        //        }
        //        content.onmousewheel = function (evt) {
        //            console.log(content.id);
        //            scrollDiv(evt);
        //        };
        //    }

        //    function scrollDiv(evt) {
        //        evt = window.event || evt; //equalize event object
        //        var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta; //delta returns +120 when wheel is scrolled up, -120 when scrolled down
        //        pxTop = scrollbar_handle.offsetTop;
        //        var y;
        //        if (delta <= -120) {
        //            y = pxTop + 10;
        //            if (y > yMax) {
        //                y = yMax;
        //            } // Limit vertical movement
        //            if (y < 0) {
        //                y = 0;
        //            } // Limit vertical movement
        //            scrollbar_handle.style.top = y + "px";
        //            content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));

        //        } else {
        //            y = pxTop - 10;
        //            if (y > yMax) {
        //                y = yMax;
        //            } // Limit vertical movement
        //            if (y < 0) {
        //                y = 2;
        //            } // Limit vertical movement
        //            scrollbar_handle.style.top = (y - 2) + "px";
        //            content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));
        //        }
        //    }

        //    //Attach events to scrollbar components
        //    scrollbar_track.onclick = function (evt) {
        //        if (!isHandleClicked) {
        //            evt = (evt) ? evt : event;
        //            pxTop = scrollbar_handle.offsetTop; // Sliders vertical position at start of slide.
        //            var offsetY;
        //            if (!evt.offsetY) {
        //                var coords = dojo.coords(evt.target);
        //                offsetY = evt.layerY - coords.t;
        //            } else { offsetY = evt.offsetY; }
        //            if (offsetY < scrollbar_handle.offsetTop) {
        //                scrollbar_handle.style.top = offsetY + "px";
        //                content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));
        //            } else if (offsetY > (scrollbar_handle.offsetTop + scrollbar_handle.clientHeight)) {
        //                var y = offsetY - scrollbar_handle.clientHeight;
        //                if (y > yMax) { y = yMax; } // Limit vertical movement
        //                if (y < 0) { y = 0; } // Limit vertical movement
        //                scrollbar_handle.style.top = y + "px";
        //                content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));
        //            } else {
        //                return;
        //            }
        //        }
        //        isHandleClicked = false;
        //    };

        //    //Attach events to scrollbar components
        //    scrollbar_handle.onmousedown = function (evt) {
        //        isHandleClicked = true;
        //        evt = (evt) ? evt : event;
        //        evt.cancelBubble = true;
        //        if (evt.stopPropagation) { evt.stopPropagation(); }
        //        pxTop = scrollbar_handle.offsetTop; // Sliders vertical position at start of slide.
        //        yCoord = evt.screenY; // Vertical mouse position at start of slide.
        //        document.body.style.MozUserSelect = "none";
        //        document.body.style.userSelect = "none";
        //        document.onselectstart = function () {
        //            return false;
        //        };
        //        document.onmousemove = function (evt) {
        //            evt = (evt) ? evt : event;
        //            evt.cancelBubble = true;
        //            if (evt.stopPropagation) { evt.stopPropagation(); }
        //            var y = pxTop + evt.screenY - yCoord;
        //            if (y > yMax) {
        //                y = yMax;
        //            } // Limit vertical movement
        //            if (y < 0) {
        //                y = 0;
        //            } // Limit vertical movement
        //            scrollbar_handle.style.top = y + "px";
        //            content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));
        //        };
        //    };

        //    document.onmouseup = function () {
        //        document.body.onselectstart = null;
        //        document.onmousemove = null;
        //    };

        //    scrollbar_handle.onmouseout = function (evt) {
        //        document.body.onselectstart = null;
        //    };

        //    var startPos;
        //    var scrollingTimer;

        //    dojo.connect(container, "touchstart", function (evt) {
        //        touchStartHandler(evt);
        //    });
        //    dojo.connect(container, "touchmove", function (evt) {
        //        touchMoveHandler(evt);
        //    });

        //    dojo.connect(container, "touchend", function (evt) {
        //        touchEndHandler(evt);
        //    });

        //    //Handlers for Touch Events
        //    function touchStartHandler(e) {
        //        startPos = e.touches[0].pageY;
        //    }

        //    function touchMoveHandler(e) {
        //        var touch = e.touches[0];
        //        e.cancelBubble = true;
        //        if (e.stopPropagation) { e.stopPropagation(); }
        //        e.preventDefault();

        //        pxTop = scrollbar_handle.offsetTop;
        //        var y;
        //        if (startPos > touch.pageY) {
        //            y = pxTop + 10;
        //        } else {
        //            y = pxTop - 10;
        //        }

        //        //set scrollbar handle
        //        if (y > yMax) { y = yMax; } // Limit vertical movement
        //        if (y < 0) { y = 0; } // Limit vertical movement
        //        scrollbar_handle.style.top = y + "px";

        //        //set content position
        //        content.scrollTop = Math.round(scrollbar_handle.offsetTop / yMax * (content.scrollHeight - content.offsetHeight));

        //        scrolling = true;
        //        startPos = touch.pageY;
        //    }

        //    function touchEndHandler(e) {
        //        scrollingTimer = setTimeout(function () {
        //            clearTimeout(scrollingTimer);
        //            scrolling = false;
        //        }, 100);
        //    }
        //    //touch scrollbar end
        //},

    });
});
