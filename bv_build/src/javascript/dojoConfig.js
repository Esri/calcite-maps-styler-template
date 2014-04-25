var path_location = location.pathname.replace(/\/[^/]+$/, "");
var dojoConfig = {
    parseOnLoad: true,
    paths: {
        esri: "../../esri"
    },
    packages: [{
        name: "esriTemplate",
        location: path_location
    },
    {
        name: "utilities",
        location: path_location + "/javascript"
    },
    {
        name: "apl",
        location: path_location + "/apl"
    }]
};