define([
  "dojo/Evented",
  "dojo",
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/dom-construct"
],
function (
   Evented,
    dojo,
    declare,
    lang,
    domConstruct
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
      if (this.deviceInfo.isMobileDevice) {
        deviceClass = "splashTextContainerMobile";
      }
      var splashTextContainer = domConstruct.create("div", {
        id : "splashTextContainer",
        "class" : "splashTextContainer " + deviceClass
      }, this.splashContainer, "first");
      var splashTextContent = domConstruct.create("div", {
        id : "splashTextContent",
        "class" : "splashTextContent " + deviceClass
      }, splashTextContainer, "first");
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
