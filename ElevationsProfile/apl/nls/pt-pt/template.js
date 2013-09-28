define(
({
  display: {
    elevationProfileTitle: "Perfil de Elevação",
    showMe: "mostre-me",
    selectLine: "<b>Selecione</b> um elemento no mapa.",
    popupRequirement: "NOTA: o elemento tem de estar numa camada com Janelas pop-up ativadas.",
    digitizeDistanceMeasureTool: "Utilize as ferramentas de <b>Medir</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Passe por cima ou toque no gráfico de Perfil de Elevação para exibir elevações e mostrar a localização no mapa."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevação: {0} metros",
  chart: {
    title: "Perfil de Elevação",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevação em {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distância em {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Mín:{min}   Máx:{max}   Inicial:{start}   Final:{end}   Diferença:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Erro de Configuração não válida',
      message: 'Configuração não válida.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Erro de Parâmetros de Construção Ausentes',
      message: 'Parâmetro de construção ausente.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Erro de Parâmetro Inicial Ausente',
      message: 'Parâmetro inicial ausente.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Erro de Operação Não Suportada',
      message: 'Esta versão de SOE, NÃO suporta este tipo de operação.'
    }
  }
})
);
