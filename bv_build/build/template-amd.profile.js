var profile = {

    // relative to this file
    basePath: "../../..",

    action:        'release',
    version:       '1.0.0',
    releaseName:   'js',
    optimize:      'closure', // requires Java 6 or later: http://code.google.com/p/closure-compiler/wiki/FAQ
    useSourceMaps: false,
    layerOptimize: 'closure',
    cssOptimize:   'comments',
    copyTests:     false,
    internStrings: true,
    mini:          true,

    localeList: "ar,az,ca,cs,da,de-de,el,en-gb,en-us,es-es,fi-fi,fr-fr,he-il,hu,it-it,ja-jp,ko-kr,nl-nl,nb,pl,pt-br,pt-pt,ro,ru,sk,sl,sv,th,tr,zh-tw,zh-cn",

    selectorEngine: "acme",
    stripConsole:   "all",
    
    packages:[
      {
        name:         "dojo",
        location:     "./dojo",
        destLocation: "./dojo/dojo"
      },
      {
        name:         "dijit",
        location:     "./dijit",
        destLocation: "./dojo/dijit"
      },
      {
        name:         "dojox",
        location:     "./dojox",
        destLocation: "./dojo/dojox"
      },
      {
        name:     "put-selector",
        location: "../put-selector"
      },
      {
        name:     "xstyle",
        location: "../xstyle"
      },
      {
        name:     "esri",
        location: "../esri"
      },
      {
        name: "utilities",
        location: "../js"
      },{
		name: "apl",
		location: "../apl"
	  }
    ],

    dojoBootText: "require.boot && require.apply(null, require.boot);",

    // since this build it intended to be utilized with properly-expressed AMD modules;
    // don't insert absolute module ids into the modules
   // insertAbsMids: 0,

    // these are all the has feature that affect the loader and/or the bootstrap
    // the settings below are optimized for the smallest AMD loader that is configurable
    // and include dom-ready support
    staticHasFeatures:{
      'config-dojo-loader-catches': 0,
      'config-tlmSiblingOfDojo': 0,
      'dojo-amd-factory-scan': 0,
      'dojo-combo-api': 0,
      'dojo-config-api': 1,
      'dojo-config-require': 0,
      'dojo-debug-messages': 0,
      'dojo-dom-ready-api': 1,
      'dojo-firebug': 0,
      'dojo-guarantee-console': 1,
      'dojo-has-api': 1,
      'dojo-inject-api': 1,
      'dojo-loader': 1,
      'dojo-log-api': 0,
      'dojo-modulePaths': 0,
      'dojo-moduleUrl': 0,
      'dojo-publish-privates': 0,
      'dojo-requirejs-api': 0,
      'dojo-sniff': 0,
      'dojo-sync-loader': 0,
      'dojo-test-sniff': 0,
      'dojo-timeout-api': 0,
      'dojo-trace-api': 0,
      //'dojo-undef-api': 0,
      'dojo-v1x-i18n-Api': 1, // we still need i18n.getLocalization
      'dojo-xhr-factory': 0,
      'dom': 1,
      'host-browser': 1,
      'extend-dojo': 1,
      'extend-esri': 0
    },

    // http://dojotoolkit.org/documentation/tutorials/1.8/build/

    layers: {

      "dojo/dojo":{
        include:    [ "dojo/dojo", "utilities/layout" ],
        customBase: true,
        boot:       true
      }
    }
    
};

// http://dojo-toolkit.33424.n3.nabble.com/Build-tool-Closure-Compiler-arguments-td3713399.html
Packages.com.google.javascript.jscomp.Compiler.setLoggingLevel(Packages.java.util.logging.Level.WARNING);