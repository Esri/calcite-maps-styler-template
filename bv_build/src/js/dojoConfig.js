var path_location = location.pathname.replace(/\/[^/]+$/, "");
var dojoConfig = {
    parseOnLoad: true,
    packages:[
      {
        name:         "dojo",
        location:     "../dojo"
      },
      {
        name:         "dijit",
        location:     "../dijit"
      },
      {
        name:         "dojox",
        location:     "../dojox"
      },
      {
        name:     "put-selector",
        location: "../../put-selector"
      },
      {
        name:     "xstyle",
        location: "../../xstyle"
      },
      {
        name:     "dgrid",
        location: "../../dgrid"
      },
      {
        name:     "esri",
        location: "../../esri"
      },
      {
        name: "utilities",
        location: "../../utilities"
      },
      {
        name: "apl",
        location: "../../apl"
      }
    ]
};