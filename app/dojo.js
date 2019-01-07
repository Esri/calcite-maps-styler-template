(function () {
    var _a = window.location,
        pathname = _a.pathname,
        search = _a.search;
    var packagePath = pathname.substring(0, pathname.lastIndexOf("/"));
    var localeUrlParamRegex = /locale=([\w-]+)/;
    var dojoLocale = search.match(localeUrlParamRegex) ?
        RegExp.$1 :
        undefined;
    var config = {
        async: true,
        locale: dojoLocale,
        has: {
            "esri-promise-compatibility-deprecation-warnings": 0 // TODO
        },
        packages: [
            {
                name: "application",
                location: packagePath + "/app",
                main: "Main"
            },
            {
                name: "ApplicationBase",
                location: packagePath + "/app/application-base-js",
                main: "ApplicationBase"
            },
            {
                name: "config",
                location: packagePath + "/config"
            },
            {
              name: "bootstrap",
              location: packagePath + "/app/calcite-maps/vendor/dojo-bootstrap"
            },
            {
              name: "calcite-maps",
              location: packagePath + "/app/calcite-maps/js/dojo"
            }
        ]
    };
    window["dojoConfig"] = config;
})();
