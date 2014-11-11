/*global define */
/*
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
    ({
        map: {
            error: "Ř_Unable to create the map_ů"
        },
        tooltips: {
            search: "Hledat",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Aktuální umístění",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Odeslat korekci",  // Command button to submit a correction to the app's host
            collect: "Filtr/editace",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Zobrazit legendu",  //Display the legend
            filter: "Filtrovat mapové vrstvy",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Přepnout podkladovou mapu",  // Command button to open a dialog box for switching basemaps
            share: "Sdílet",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Sdílet e-mailem",  // Command button to share the current map extents via email
            shareViaFacebook: "Sdílet na Facebooku",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Sdílet na Twitteru",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Vytisknout mapu",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Zobrazit vytištěnou mapu",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Orientace stránky na šířku",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Orientace stránky na výšku",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Nápověda"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "e-mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "nadpis",  // Shown as title hint in print specification box if a title hint is not configured
            author: "autor"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Najít:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Vykreslit",  // Appears before a set of tools for drawing on the map
            mapLayers: "Mapové vrstvy:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Hledání polí vrstvy:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Tato stránka nemá povolení k získání aktuálního umístění.",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Prohlížeči se nepovedlo získat aktuální umístění.",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Prohlížeči se nepovedlo včas získat aktuální umístění.",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "Nebyla nakonfigurována žádná vrstva vyhledávání.",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Tato vrstva hledání nebyla v mapě nalezena",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Pole pro mapovou vrstvu nebyla nalezena.<br><br>Ujistěte se, že se tato vrstva nachází v kořenovém umístění obsahu mapy. Vnořené služby, jako jsou například služby dynamické mapy ArcGIS for Server, je nutné do mapy přidat po vrstvách (včetně čísla indexu vrstvy), aby bylo možné je používat s funkcí vyhledávání vrstev. Dlaždicové služby nelze používat s funkcí vyhledávání vrstev.",
            searchFieldMissing: "Toto pole nebylo ve vrstvě hledání nalezeno",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Žádné z těchto polí nebylo ve vrstvě hledání mapy nalezeno",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Toto pole neexistuje v žádné mapové vrstvě",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Váš obsah byl odeslán. Děkujeme.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Nelze získat přístup ke konfiguraci aplikace",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Aplikaci nelze spustit"  // Appears for any failure to build the user interface
        }
    })
);
