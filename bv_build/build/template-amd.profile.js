dependencies = {
  selectorEngine: "acme", // See: http://dojotoolkit.org/reference-guide/releasenotes/1.7.html#selectorengine
  
  defaultConfig: {
    hasCache: {
      "extend-esri":    1,
        
      // Dojo loader has built-in "has" api. Since dojoConfig is used 
      // by Dojo loader, we can set the default here.
      'dojo-has-api': 1,

      "dojo-undef-api": 0
    }
  },
  
  staticHasFeatures: {
    // Dojo loader will have "has" api, but other loaders such as 
    // RequireJS do not. So, let's not mark it static.
    // This will allow RequireJS loader to fetch our modules.
    'dojo-has-api': -1,

    "dojo-undef-api": -1 // -1 indicates feature is not known at build time
  },
  
  // false - prevents dojo build system from creating source map files for 
  // all JS files.
  useSourceMaps: false,
  
  // This flag is required only if the template is NOT written in AMD style.
  noref: true,
  
  stripConsole: "none",
  
  localeList: "ar,az,ca,cs,da,de-de,el,en-gb,en-us,es-es,fi-fi,fr-fr,he-il,hu,it-it,ja-jp,ko-kr,nl-nl,nb,pl,pt-br,pt-pt,ro,ru,sk,sl,sv,th,tr,zh-tw,zh-cn",

  layers: [

    {
      name: "dojo.js",
      dependencies: [
        "dojo.loadInit",
        "dojo.require",
        "dojo.text",
        "dojo.i18n",

        // These modules are to be included only if the template is 
        // NOT written in AMD style
        "dojo/fx/Toggler",
        "dijit/_base",
        "dijit/_base/manager",
        "dijit/TooltipDialog",
        "dijit/form/DropDownButton",
        "dijit/form/ComboButton",
        "dijit/form/ToggleButton",

        // List modules referenced only in the template's index.html
        "utilities/layout",
        "utilities/App",
        "esri/layout"
      ]
    }
  ],

  // Format: [ "<package-name>", "<folder-path>" ]
  prefixes: [
    [ "dijit",        "../dijit" ],
    [ "dojox",        "../dojox" ],
    [ "put-selector", "../../put-selector" ],
    [ "xstyle",       "../../xstyle" ],
    [ "dgrid",        "../../dgrid" ],
    [ "esri" ,        "../../esri", "../../../esri/copyright-ref.txt" ],
    
    // List custom packages used by a specific template here.
    [ "utilities",    "../../utilities" ],
    [ "apl",          "../../apl" ]
  ]
};

// http://dojo-toolkit.33424.n3.nabble.com/Build-tool-Closure-Compiler-arguments-td3713399.html
Packages.com.google.javascript.jscomp.Compiler.setLoggingLevel(Packages.java.util.logging.Level.WARNING);
