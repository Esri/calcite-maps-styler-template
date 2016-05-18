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
define({
  "map": {
    "error": "Impossible de créer la carte"
  },
  "tooltips": {
    "search": "Rechercher",
    "locate": "Emplacement actuel",
    "markup": "Envoyer une correction",
    "collect": "Filtrer/Modifier",
    "dijitLegend": "Afficher la légende",
    "filter": "Filtrer les couches de carte",
    "basemap": "Changer de fond de carte",
    "share": "Partager",
    "shareViaEmail": "Partager par courrier électronique",
    "shareViaFacebook": "Partager via Facebook",
    "shareViaTwitter": "Partager via Twitter",
    "print": "Imprimer la carte",
    "fetchPrint": "Afficher la carte imprimée",
    "landscape": "Orientation de page Paysage",
    "portrait": "Orientation de page Portrait",
    "help": "Aide"
  },
  "labels": {
    "email": "Email",
    "Facebook": "Facebook",
    "Twitter": "Twitter",
    "title": "titre",
    "author": "auteur"
  },
  "prompts": {
    "search": "Rechercher :",
    "markup": "Dessiner",
    "mapLayers": "Couches de carte :",
    "layerFields": "Rechercher les champs de la couche :"
  },
  "messages": {
    "geolocationDenied": "Ce site ne détient pas d'autorisation pour obtenir l'emplacement actuel",
    "geolocationUnavailable": "Le navigateur n'a pas pu obtenir l'emplacement actuel",
    "geolocationTimeout": "Le navigateur n'a pas pu obtenir l'emplacement actuel à temps",
    "noSearchLayerConfigured": "Aucune couche permettant d'effectuer des recherches n'a été configurée",
    "searchLayerMissing": "Cette couche de recherche est introuvable sur la carte",
    "searchLayerNotSearchable": "Les champs sont introuvables pour la couche.<br><br>Vérifiez que cette couche est présente à la racine du contenu de la carte. Les services imbriqués, tels que les services de carte dynamiques ArcGIS for Server, doivent être ajoutés à la carte couche par couche (y compris le numéro d'index de couche) pour être utilisés comme couches de recherche. Les services tuilés ne peuvent pas être utilisés comme couches de recherche.",
    "searchFieldMissing": "Ce champ est introuvable dans la couche de recherche de la carte",
    "allSearchFieldsMissing": "Aucun de ces champs n'a été trouvé dans la couche de recherche de la carte",
    "fieldNotFound": "Ce champ n'existe dans aucune couche de la carte",
    "yourContentSubmitted": "Votre contenu a été envoyé. Merci.",
    "noConfiguration": "Impossible d'accéder à la configuration de l'application",
    "unableToLaunchApp": "Impossible de lancer l'application"
  }
});