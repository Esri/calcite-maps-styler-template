/*global define */
/*
 | ArcGIS Solutions
 | Version 10.2
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
        tooltips: {
            search: "Pesquisar",  // Command button to open a dialog box for searching for a feature or an address (depending on app)
            locate: "Localização atual",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Enviar correção",  // Command button to submit a correction to the app's host
            collect: "Adicionar conteúdo ao mapa",  // Command button to open a template picker to add features to the map
            filter: "Filtrar camadas do mapa",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Mudar mapa base",  // Command button to open a dialog box for switching basemaps
            share: "Partilhar",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Partilhar através de correio eletrónico",  // Command button to share the current map extents via email
            shareViaFacebook: "Partilhar através de Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Partilhar através de Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Imprimir mapa",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Ver mapa impresso",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Orientação horizontal de página",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Orientação vertical de página",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Ajuda"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "correio eletrónico",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter"  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
        },
        prompts: {
            search: "Pesquisar:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Desenhar",  // Appears before a set of tools for drawing on the map
            mapLayers: "Camadas do mapa:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Pesquisar campos de camada:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Este site não tem permissão para obter a localização atual",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "O navegador não conseguiu obter a localização atual",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "O navegador não conseguiu obter a localização atual atempadamente",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Esta camada de pesquisa não foi encontrada no mapa",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Este campo não foi encontrado na camada de pesquisa do mapa"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
        }
    })
);
