/*global define,require,$ */
/*jslint browser:true */
/*property
    $locale, aop, before, bingKey, defaultUnicodeIdentifier, helperServices,
    i18n, length, locale, location, messages, method, noConfiguration,
    printTask, proxyurl, search, separateTestUrlParams, sharinghost,
    showStatus, target, unweave, url
*/
define(['tests/tools', 'application/main'], function (tools, main) {
    'use strict';

    //===== Probes common to all tests =====
    var testURLSplit = tools.separateTestUrlParams(document.location.search);

    // Test point 1: entrypoint into main (startup)
    var unweaver;
    unweaver = $.aop.before({
        target: main,
        method: "startup"
    }, function beforeStartupCommon(args) {
        // args is an array containing function's args [config]
        tools.showStatus(0, args && args.length === 1, "startup args count");

        var config = args[0];

        tools.showStatus(0, config.proxyurl === "", "startup proxyurl");
        tools.showStatus(0, config.bingKey === "", "startup bingKey");
        tools.showStatus(0, config.defaultUnicodeIdentifier === "N", "startup Unicode");
        tools.showStatus(0, config.sharinghost === "http://www.arcgis.com", "startup sharing host");
        tools.showStatus(0, config.helperServices.printTask.url === "http://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task", "startup print task");

        tools.showStatus(0, config.i18n && config.i18n.$locale === testURLSplit.locale, "startup locale");
        switch (testURLSplit.locale) {
        case "de":
            tools.showStatus(0, config.i18n && config.i18n.messages.noConfiguration === "Auf die Konfiguration der Anwendung kann nicht zugegriffen werden", "startup i18n no config msg (de)");
            break;
        case "fr":
            tools.showStatus(0, config.i18n && config.i18n.messages.noConfiguration === "Impossible d\'accéder à la configuration de l\'application", "startup i18n no config msg (fr)");
            break;
        default:
            tools.showStatus(0, config.i18n && config.i18n.messages.noConfiguration === "Unable to access application's configuration", "startup i18n no config msg");
            break;
        }

        // Clear this probe
        setTimeout(function () {
            unweaver[0].unweave();
        });
    });

});
