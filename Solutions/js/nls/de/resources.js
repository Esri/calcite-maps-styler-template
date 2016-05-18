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
    "error": "Karte kann nicht erstellt werden"
  },
  "tooltips": {
    "search": "Suchen",
    "locate": "Aktuelle Position",
    "markup": "Korrektur senden",
    "collect": "Filtern/Bearbeiten",
    "dijitLegend": "Legende anzeigen",
    "filter": "Karten-Layer filtern",
    "basemap": "Grundkarte wechseln",
    "share": "Freigeben",
    "shareViaEmail": "Per E-Mail freigeben",
    "shareViaFacebook": "Über Facebook freigeben",
    "shareViaTwitter": "Über Twitter freigeben",
    "print": "Karte drucken",
    "fetchPrint": "Gedruckte Karte anzeigen",
    "landscape": "Seitenausrichtung im Querformat",
    "portrait": "Seitenausrichtung im Hochformat",
    "help": "Hilfe"
  },
  "labels": {
    "email": "E-Mail",
    "Facebook": "Facebook",
    "Twitter": "Twitter",
    "title": "Titel",
    "author": "Autor"
  },
  "prompts": {
    "search": "Suchen:",
    "markup": "Zeichnen",
    "mapLayers": "Karten-Layer:",
    "layerFields": "Layer-Felder suchen:"
  },
  "messages": {
    "geolocationDenied": "Diese Site verfügt nicht über die Berechtigung, die aktuelle Position zu ermitteln",
    "geolocationUnavailable": "Der Browser konnte die aktuelle Position nicht ermitteln",
    "geolocationTimeout": "Der Browser konnte die aktuelle Position nicht rechtzeitig ermitteln",
    "noSearchLayerConfigured": "Es wurde kein Such-Layer konfiguriert",
    "searchLayerMissing": "Der Such-Layer wurde nicht auf der Karte gefunden",
    "searchLayerNotSearchable": "Für den Karten-Layer wurden keine Felder gefunden.<br><br>Überprüfen Sie, ob dieser Layer im Stammverzeichnis des Karteninhalts vorhanden ist. Geschachtelte Services, wie dynamische Kartenservices von ArcGIS for Server, müssen den Layern der Karte jeweils einzeln hinzugefügt werden (einschließlich der Layer-Indexnummer), um als Such-Layer verwendet zu werden. Gekachelte Services können nicht als Such-Layer verwendet werden.",
    "searchFieldMissing": "Dieses Feld wurde nicht im Such-Layer für die Karte gefunden",
    "allSearchFieldsMissing": "Keines dieser Felder wurde im Such-Layer der Karte gefunden",
    "fieldNotFound": "Dieses Feld ist in keinem der Karten-Layer vorhanden",
    "yourContentSubmitted": "Ihr Inhalt wurde gesendet. Vielen Dank.",
    "noConfiguration": "Auf die Konfiguration der Anwendung kann nicht zugegriffen werden",
    "unableToLaunchApp": "Die Anwendung kann nicht gestartet werden"
  }
});