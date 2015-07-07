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
      error: "Não foi possível criar mapa"
    },
    legend:{
      title: "Legenda"
    },
    share: {
      title: "Partilhar"
    },
    about: {
      title: "Sobre",
      error: "Por omissão a descrição do mapa web ou trecho será usado. Configurar a aplicação a adicionar a um trecho personalizado acerca do painel."
    },
    time: {
        enableTimeMessage: "O mapa web especificado não contem qualquer das camadas de tempo activadas. Ver o tópico de ajuda <a target=\'_blank\' href=\'http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727\'>Configurar definições de tempo</a> para mais detalhes. Para usar o modelo sem exibir tempo use o painel de configuração para desactivar a opção tempo.",
        datePattern: "d\' de \'MMMM\' de \'yyyy",
        hourTimePattern: "H",
        millisecondTimePattern: "H:mm:ss",
        minuteTimePattern: "H:mm",
        secondTimePattern: "H:mm:ss",
        timeRange: "${startTime} até ${endTime}",
        yearPattern: "yyyy"
    },
    histogram:{
      error: "Não há camadas de elemento com tempo ativado, no modo instantâneo, estão disponíveis no mapa da web. Configurar a aplicação para usar noutro mapa web ou desactiva a opção historiograma."
    }
  })
);