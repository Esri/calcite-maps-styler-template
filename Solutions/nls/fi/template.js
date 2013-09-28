/*
 | ArcGIS for Local Government
 | Version 10.2
 | Copyright 2013 Esri
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
            search: "Etsi",
            locate: "Nykyinen sijainti",
            markup: "Lähetä korjaus",
            basemap: "Vaihda taustakartta",
            share: "Jaa",
            shareViaEmail: "Jaa sähköpostitse",
            shareViaFacebook: "Jaa Facebookin kautta",
            shareViaTwitter: "Jaa Twitterin kautta",
            print: "Tulosta kartta",
            fetchPrint: "Näytä tulostettu kartta",
            landscape: "Vaakasuuntainen sivu",
            portrait: "Pystysuuntainen sivu",
            help: "Ohje"
        },
        labels: {
            email: "sähköposti",
            Facebook: "Facebook",
            Twitter: "Twitter"
        },
        prompts: {
            search: "Etsi:",
            markup: "Piirrä",
            mapLayers: "Karttatasot:",
            layerFields: "Etsi karttatason kentistä:"
        },
        messages: {
            geolocationDenied: "Tällä sivustolla ei ole oikeutta nykyisen sijainnin hakemiseen",
            geolocationUnavailable: "Selain ei pystynyt hakemaan nykyistä sijaintia",
            geolocationTimeout: "Selain ei pystynyt hakemaan nykyistä sijaintia ajoissa",
            searchLayerMissing: "Tätä hakutasoa ei löytynyt kartasta",
            searchFieldMissing: "Tätä kenttää ei löydy kartan hakutasosta"
        }
    })
);
