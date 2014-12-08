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
            error: "Karttaa ei voi luoda"
        },
        tooltips: {
            search: "Etsi",  // Command button to open a dialog box for finding a feature or an address (depending on app)
            locate: "Nykyinen sijainti",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Lähetä korjaus",  // Command button to submit a correction to the app's host
            collect: "Suodata/Muokkaa",  // Command button to open a filter and template picker to add features to the map and to edit them afterwards
            dijitLegend: "Näytä selite",  //Display the legend
            filter: "Suodata karttatasot",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Vaihda taustakartta",  // Command button to open a dialog box for switching basemaps
            share: "Jaa",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Jaa sähköpostitse",  // Command button to share the current map extents via email
            shareViaFacebook: "Jaa Facebookin kautta",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Jaa Twitterin kautta",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Tulosta kartta",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Näytä tulostettu kartta",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Vaakasuuntainen sivu",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Pystysuuntainen sivu",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Ohje"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "sähköposti",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "otsikko",  // Shown as title hint in print specification box if a title hint is not configured
            author: "tekijä"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Etsi:",  // Appears before a find text field in dialog box for searching for a feature
            markup: "Piirrä",  // Appears before a set of tools for drawing on the map
            mapLayers: "Karttatasot:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the searchLayerMissing message
            layerFields: "Etsi karttatason kentistä:"  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Tällä sivustolla ei ole oikeutta nykyisen sijainnin hakemiseen",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "Selain ei pystynyt hakemaan nykyistä sijaintia",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "Selain ei pystynyt hakemaan nykyistä sijaintia ajoissa",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            noSearchLayerConfigured: "Hakukarttatasoa ei ole määritetty",  // Appears before a list of map layers; shown when the app is not configured with any layers to use for the find command; works with the mapLayers prompt
            searchLayerMissing: "Tätä hakukarttatasoa ei löytynyt kartasta",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the find command; works with the mapLayers prompt
            searchLayerNotSearchable: "Kenttiä ei löytynyt karttatasolle.<br><br>Varmista, että tämä karttataso on olemassa karttasisällön juuressa. Sisäkkäiset palvelut, kuten ArcGIS for Server -dynaamiset karttapalvelut, on lisättävä karttaan karttataso kerrallaan (mukaan lukien karttatason indeksinumero), jotta niitä voidaan käyttää hakukarttatasoina. Tiilitettyjä palveluita ei voi käyttää hakukarttatasoina.",
            searchFieldMissing: "Tätä kenttää ei löydy kartan hakukarttatasosta",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find one or more of the fields that were configured for the find command; works with the layerFields prompt
            allSearchFieldsMissing: "Näitä kenttiä ei löydy kartan hakukarttatasosta",  // Appears before a list of fields in the configured map find layer; shown when the app cannot find any of the fields that were configured for the find command; works with the layerFields prompt
            fieldNotFound: "Tätä kenttää ei ole yhdessäkään karttatasossa",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Sisältö on lähetetty. Kiitos.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Sovelluksen määrityksiä ei voi käyttää",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Sovellusta ei voi käynnistää"  // Appears for any failure to build the user interface
        }
    })
);
