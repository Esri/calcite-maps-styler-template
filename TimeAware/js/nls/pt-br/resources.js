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
      error: "Não foi possível criar o mapa"
    },
    legend: {
      title: "Legenda"
    },
    share: {
      title: "Compartilhar o"
    },
    about: {
      title: "Sobre o",
      error: "Por padrão a descrição de mapa da web ou snippet será utilizada. Configure o aplicativo para adicionar um snippet personalizado para o painel Sobre."
    },
    time: {
      enableTimeMessage: "ã_The specified web map does not contain any time enabled layers. View the ${link} help topic for details. To use the template without displaying time use the configuration panel to disable the time option______________________________________________________________Ç.",
      enableTimeMessageLink: "ã_http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727____________________________________Ç"
    },
    histogram: {
      error: "Nenhuma camada de feição habilitada ao tempo, em modo de captura instantânea, está disponível no mapa da web. Configure o aplicativo para utilizar outro mapa da web ou desabilite a opção de histograma."
    }
  })
);
