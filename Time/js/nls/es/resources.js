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
      error: "No se puede crear el mapa"
    },
    legend:{
      title: "Leyenda"
    },
    share: {
      title: "Compartir"
    },
    about: {
      title: "Acerca de",
      error: "De forma predeterminada, se utilizará la descripción o fragmento del mapa web. Configura la aplicación para agregar un fragmento personalizado para el panel Acerca de."
    },
    time: {
        enableTimeMessage: "El mapa web especificado no contiene ninguna capa con la función de tiempo habilitada. Consulta la ayuda de <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>Configurar los ajustes de tiempo</a> para obtener más información. Para utilizar la plantilla sin mostrar el tiempo, utiliza el panel de configuración para deshabilitar la opción de tiempo.",
        datePattern: "d\' de \'MMMM\' de \'yyyy",
        hourTimePattern: "H",
        millisecondTimePattern: "H:mm:ss",
        minuteTimePattern: "H:mm",
        secondTimePattern: "H:mm:ss",
        timeRange: "De ${startTime} a ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "En el mapa web no hay disponibles capas de entidades con la función de tiempo habilitada, en el modo de instantánea. Configura la aplicación para utilizar otro mapa web o deshabilita la opción de histograma."
    }
  })
);