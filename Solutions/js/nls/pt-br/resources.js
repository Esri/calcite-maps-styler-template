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
    "error": "Não foi possível criar o mapa"
  },
  "tooltips": {
    "search": "Localizar",
    "locate": "Local atual",
    "markup": "Enviar correção",
    "collect": "Filtrar/Editar",
    "dijitLegend": "Mostrar a legenda",
    "filter": "Filtrar camadas do mapa",
    "basemap": "Trocar mapa base",
    "share": "Compartilhar",
    "shareViaEmail": "Compartilhar via E-mail",
    "shareViaFacebook": "Compartilhar via Facebook",
    "shareViaTwitter": "Compartilhar via Twitter",
    "print": "Imprimir mapa",
    "fetchPrint": "Visualizar mapa impresso",
    "landscape": "Orientação da página em Paisagem",
    "portrait": "Orientação da página em Retrato",
    "help": "Ajuda"
  },
  "labels": {
    "email": "E-mail",
    "Facebook": "Facebook",
    "Twitter": "Twitter",
    "title": "título",
    "author": "autor"
  },
  "prompts": {
    "search": "Localizar:",
    "markup": "Desenhar",
    "mapLayers": "Camadas do mapa:",
    "layerFields": "Localizar campos da camada:"
  },
  "messages": {
    "geolocationDenied": "Este site não tem permissão para obter o local atual",
    "geolocationUnavailable": "O navegador não conseguiu obter o local atual",
    "geolocationTimeout": "O navegador não conseguiu obter o local atual em um tempo útil",
    "noSearchLayerConfigured": "Nenhuma camada de localização foi configurada",
    "searchLayerMissing": "Esta camada de localização não foi encontrada no mapa",
    "searchLayerNotSearchable": "Não foi possível localizar campos para a camada de mapa. <br><br> Verifique se esta camada existe na raiz de Conteúdo do mapa. Serviços aninhados, como serviços de mapa dinâmicos do ArcGIS for Server, devem ser adicionados no mapa, uma camada de cada vez (incluindo o número de índice da camada) para serem utilizados como Localizar Camadas. Serviços do mosaico não podem ser utilizados como Localizar Camadas.",
    "searchFieldMissing": "Este campo não foi encontrado na camada de localização do mapa.",
    "allSearchFieldsMissing": "Nenhum destes campos foi encontrado na camada de localização do mapa",
    "fieldNotFound": "O campo não existe em quaisquer das camadas de mapa",
    "yourContentSubmitted": "Seu conteúdo foi enviado. Obrigado.",
    "noConfiguration": "Não foi possível acessar a configuração do aplicativo",
    "unableToLaunchApp": "Não foi possível iniciar o aplicativo"
  }
});