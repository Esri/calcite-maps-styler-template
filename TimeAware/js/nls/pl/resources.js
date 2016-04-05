/*global define */
/*
 | Copyright 2014 Esri
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
      error: "Nie można utworzyć"
    },
    legend:{
      title: "Legenda"
    },
    share: {
      title: "Udostępnianie"
    },
    about: {
      title: "Informacje",
      error: "Domyślnie użyty zostanie opis mapy internetowej lub ekstrakt. Skonfiguruj aplikację, aby dodać niestandardowy ekstrakt do panelu informacji o aplikacji."
    },
    time: {
        enableTimeMessage: "Wybrana mapa internetowa nie zawiera żadnych warstw czasowych. Kliknij temat pomocy ${link}, aby dowiedzieć się więcej. Aby używać szablonu bez wyświetlania czasu, należy wyłączyć opcję pokazywania czasu w panelu konfiguracyjnym.",
        enableTimeMessageLink: "http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727",
        datePattern: "dd-MMMM-yyyy",
        hourTimePattern: "hh",
        millisecondTimePattern: "hh:mm:ss",
        minuteTimePattern: "hh:mm",
        secondTimePattern: "hh:mm:ss",
        timeRange: "${startTime} do ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "W mapie internetowej nie są dostępne żadne warstwy czasowe obiektów w trybie migawki. Skonfiguruj aplikację tak, aby korzystała z innej mapy internetowej, lub wyłącz opcję histogramu."
    }
  })
);