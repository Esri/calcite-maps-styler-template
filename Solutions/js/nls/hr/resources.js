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
    "error": "Nije moguće stvoriti kartu"
  },
  "tooltips": {
    "search": "Pronađi",
    "locate": "Trenutačna lokacija",
    "markup": "Pošalji ispravak",
    "collect": "Filtriraj/uredi",
    "dijitLegend": "Prikaži legendu",
    "filter": "Filtriraj slojeve karte",
    "basemap": "Promijeni kartografsku podlogu",
    "share": "Podijeli",
    "shareViaEmail": "Podijeli e-poštom",
    "shareViaFacebook": "Podijeli preko Facebooka",
    "shareViaTwitter": "Podijeli preko Twittera",
    "print": "Ispiši kartu",
    "fetchPrint": "Prikaz ispisane karte",
    "landscape": "Vodoravna orijentacija stranice",
    "portrait": "Okomita orijentacija stranice",
    "help": "Pomoć"
  },
  "labels": {
    "email": "e-pošta",
    "Facebook": "Facebook",
    "Twitter": "Twitter",
    "title": "naziv",
    "author": "autor"
  },
  "prompts": {
    "search": "Pronađi:",
    "markup": "Crtanje",
    "mapLayers": "Slojevi karte:",
    "layerFields": "Pronađi polja sloja:"
  },
  "messages": {
    "geolocationDenied": "Ovo web-mjesto nema dopuštenje za dohvaćanje trenutačne lokacije",
    "geolocationUnavailable": "Preglednik nije mogao dohvatiti trenutačnu lokaciju",
    "geolocationTimeout": "Preglednik nije mogao pravovremeno dohvatiti trenutačnu lokaciju",
    "noSearchLayerConfigured": "Sloj za pretraživanje nije konfiguriran",
    "searchLayerMissing": "Sloj za pretraživanje nije pronađen na karti",
    "searchLayerNotSearchable": "Nije moguće pronaći polja za sloj karte.<br><br>Provjerite postoji li ovaj sloj u korijenu sadržaja karte. Ugniježđene usluge, poput ArcGIS for Server dinamičnih usluga karte, treba dodati na kartu sloj po sloj (uključujući indeksni broj sloja) za uporabu pri pretrazi slojeva. Popločene usluge ne mogu se upotrebljavati kao slojevi za pretragu.",
    "searchFieldMissing": "Ovo polje nije pronađeno u sloju za pretragu karte",
    "allSearchFieldsMissing": "Ova polja nisu pronađena u sloju za pretragu karte",
    "fieldNotFound": "Ovo polje ne postoji ni u jednom sloju karte",
    "yourContentSubmitted": "Vaš je sadržaj poslan. Hvala vam.",
    "noConfiguration": "Nije moguće pristupiti konfiguraciji aplikacije",
    "unableToLaunchApp": "Nije moguće pokrenuti aplikaciju"
  }
});