define([
  "dojo/Evented",
  "dojo",
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/dom-construct",
  "dojo/dom-style",
   "dojo/window"
],
function (
   Evented,
    dojo,
    declare,
    lang,
    domConstruct,
    domStyle,
    win
) {
  return declare([Evented], {
    options : {
      domNode : null,
      config : null
    },
    deviceInfo : {
      isMobileDevice : false,
      isiOS : false,
      lessthanios6 : false,
      isAndroidDevice : false,
      isTablet : false,
      isBrowser : true

    },
    // lifecycle: 1
    constructor : function (options) {
      // mix in settings and defaults
      this.options = lang.mixin({}, this.options, options);


    },
    // start widget. called by user
    startup : function () {
      this._checkDevice();

      this.splashContainer = domConstruct.create("div", {
        id : "divSplashScreenContainer",
        "class" : "divSplashScreenContainer"
      }, dojo.byId(this.options.domNode));

      var deviceClass = "splashTextContainerWeb";
      var textClass = "splashTextContentWeb";
      if (this.deviceInfo.isMobileDevice) {
        //deviceClass = "splashTextContainerMobile";
        textClass = "splashTextContentMobile"
      }
      var splashTextContainer = domConstruct.create("div", {
        id : "splashTextContainer",
        "class" : "splashTextContainer " + deviceClass
      }, this.splashContainer, "first");
      var splashTextContent = domConstruct.create("div", {
        id : "splashTextContent",
        "class": "splashTextContent " + textClass
      }, splashTextContainer, "first");

      contSize = {};
      textContSize = {};

      if (this.options.config.splashWidth !== null && this.options.config.splashWidth !== undefined) {
        textContSize['width'] = (parseInt(this.options.config.splashWidth) - 20);
        contSize['width'] = this.options.config.splashWidth;
      }
      else{
        textContSize['width'] = 330;
        contSize['width'] = 350;
      
      }
      if (this.options.config.splashHeight !== null && this.options.config.splashHeight !== undefined)
      {
        textContSize['height'] = (parseInt(this.options.config.splashHeight) - 10);
        contSize['height'] = this.options.config.splashHeight;
          
      } else {
        textContSize['height'] = 280;
        contSize['height'] = 290;
      }


      var vs = win.getBox();
      if (vs.w < parseInt(contSize['width'])) {
        textContSize['width'] = (parseInt(vs.w) - 40) + "px";
        contSize['width'] = (parseInt(vs.w) - 20) + "px";
      }
      else {
        textContSize['width'] = textContSize['width'] + "px";
        contSize['width'] = contSize['width'] + "px";
      }
      if (vs.h < parseInt(contSize['height'])) {
        textContSize['height'] = (parseInt(vs.h) - 30) + "px";
        contSize['height'] = (parseInt(vs.h) - 20) + "px";
      } else {
        textContSize['height'] = textContSize['height'] + "px";
        contSize['height'] = contSize['height'] + "px";
      
      }
      domStyle.set(splashTextContainer, contSize);
      domStyle.set(splashTextContent, textContSize);
      //if (!this.deviceInfo.isMobileDevice) {
      //  if (this.options.config.splashWidth !== null && this.options.config.splashWidth !== undefined) {
      //    textContSize['width'] = (parseInt(this.options.config.splashWidth) - 20) + "px";
      //    contSize['width'] = this.options.config.splashWidth + "px";

      //  } else { 
      //    textContSize['width'] = "330px";
      //    contSize['width'] = "350px";
      //  }
      //  if (this.options.config.splashHeight !== null && this.options.config.splashHeight !== undefined)
      //  {
      //    textContSize['height'] = (parseInt(this.options.config.splashHeight) - 10) + "px";
      //    contSize['height'] = this.options.config.splashHeight + "px";
          
      //  } else {
      //    textContSize['height'] = "280px";
      //    contSize['height'] = "290px";
      //  }
      //  domStyle.set(splashTextContainer, contSize);
      //  domStyle.set(splashTextContent, textContSize);
      //}
      dojo.connect(this.splashContainer, "onclick", lang.hitch(this, this._closeSplash));

      splashTextContent.innerHTML = this.options.config.splashText;

    },
    _closeSplash : function () {
      this.splashContainer.style.display = "none";

    },
    // connections/subscriptions will be cleaned up during the destroy() lifecycle phase
    destroy : function () {
      this.inherited(arguments);
    },
    _checkDevice : function () {

      var userAgent = window.navigator.userAgent;

      if (userAgent.indexOf("iPhone") >= 0 || userAgent.indexOf("iPad") >= 0) {
        this.deviceInfo.isiOS = true;
        userAgent.replace(/OS ((\d+_?){2,3})\s/, function (match, key) {
          var version = key.split("_");
          if (version[0] < 6) {
            this.deviceInfo.lessthanios6 = true;

          }
        });
      }
      if ((userAgent.indexOf("Android") >= 0 && userAgent.indexOf("Mobile") >= 0) ||
        userAgent.indexOf("iPhone") >= 0) {
        this.deviceInfo.isMobileDevice = true;
        if ((userAgent.indexOf("Android") >= 0)) {
          this.deviceInfo.isAndroidDevice = true;
        }
      }else if ((userAgent.indexOf("iPad") >= 0) || (userAgent.indexOf("Android") >= 0)) {
        this.deviceInfo.isTablet = true;
      }else {
        this.deviceInfo.isBrowser = true;
      }
    }
  });

});
