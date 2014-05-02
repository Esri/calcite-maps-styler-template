var path_location = location.pathname.replace(/\/[^/]+$/, "");
var dojoConfig = {
    parseOnLoad: true,
    paths: {
        esri: "../../esri"
    },
    packages: [
    {
        name: "utilities",
        location: path_location + "/js"
    },
    {
        name: "apl",
        location: path_location + "/apl"
    }]
};