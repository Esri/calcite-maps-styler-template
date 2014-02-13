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
            locate: "Local atual",  // Command button to zoom and pan to the current geographical position reported by the browser
            markup: "Enviar correção",  // Command button to submit a correction to the app's host
            collect: "Adicionar conteúdo no mapa",  // Command button to open a template picker to add features to the map
            filter: "Filtrar camadas do mapa",  // Explains purpose of type-in box affiliated with template picker
            basemap: "Trocar mapa base",  // Command button to open a dialog box for switching basemaps
            share: "Compartilhar",  // Command button to open a dropdown menu for picking a type of sharing
            shareViaEmail: "Compartilhar via E-mail",  // Command button to share the current map extents via email
            shareViaFacebook: "Compartilhar via Facebook",  // Command button to share the current map extents via a Facebook post: a URL is opened that permits the user to log into Facebook with a post that is ready to go
            shareViaTwitter: "Compartilhar via Twitter",  // Command button to share the current map extents via a Twitter tweet: a URL is opened that permits the user to log into Twitter with a tweet that is ready to go
            print: "Imprimir mapa",  // Command button to open a dialog box for specifying print orientation, title, and author before printing; also used inside print dialog box
            fetchPrint: "Visualizar mapa impresso",  // Command button to open a PDF containing a map that was just printed by the print map command
            landscape: "Orientação da página em Paisagem",  // Command button in the print map dialog box to select the landscape page orientation
            portrait: "Orientação da página em Retrato",  // Command button in the print map dialog box to select the portrait page orientation
            help: "Ajuda"  // Command button to open a dialog box with a short description of the app
        },
        labels: {
            email: "E-mail",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
            Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            Twitter: "Twitter",  // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            title: "título",  // Shown as title hint in print specification box if a title hint is not configured
            author: "autor"  // Shown as author hint in print specification box if an author hint is not configured
        },
        prompts: {
            search: "Pesquisar:",  // Appears before a search text field in dialog box for searching for a feature
            markup: "Desenhar",  // Appears before a set of tools for drawing on the map
            mapLayers: "Camadas do mapa:",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the searchLayerMissing message
            layerFields: "Pesquisar campos da camada:"  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the searchFieldMissing message
        },
        messages: {
            geolocationDenied: "Este site não tem permissão para obter o local atual",  // Shown when the browser does not permit the app to get the current geographical position
            geolocationUnavailable: "O navegador não conseguiu obter o local atual",  // Shown when the browser returns an error instead of the current geographical position
            geolocationTimeout: "O navegador não conseguiu obter o local atual em um tempo útil",  // Shown when the browser does not return within a configured time limit when asked for the current geographical position
            searchLayerMissing: "Esta camada de pesquisa não foi encontrada no mapa",  // Appears before a list of map layers; shown when the app is not configured with the layer to use for the search command; works with the mapLayers prompt
            searchFieldMissing: "Este campo não foi encontrado na camada de pesquisa do mapa.",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find one or more of the fields that were configured for the search command; works with the layerFields prompt
            allSearchFieldsMissing: "Nenhum destes campos foi encontrado na camada de pesquisa do mapa",  // Appears before a list of fields in the configured map search layer; shown when the app cannot find any of the fields that were configured for the search command; works with the layerFields prompt
            fieldNotFound: "ã_This field does not exist in any of the map layers_Ç",  // Appears when a field used in the configuration was not found in any map layer
            yourContentSubmitted: "Seu conteúdo foi enviado. Obrigado.",  // Appears after content has been added to the map and successfully submitted to the server
            noConfiguration: "Não foi possível acessar a configuração do aplicativo",  // Appears if the app, during startup, cannot get access to or find the configuration information; without the information, it cannot build the UI
            unableToLaunchApp: "Não foi possível iniciar o aplicativo"  // Appears for any failure to build the user interface
        }
    })
);
