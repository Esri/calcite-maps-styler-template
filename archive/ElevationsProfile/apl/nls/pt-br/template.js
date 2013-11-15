define(
({
  display: {
    elevationProfileTitle: "Perfil de Elevação",
    showMe: "mostre-me",
    selectLine: "<b>Selecione</b>uma feição no mapa.",
    popupRequirement: "OBSERVAÇÃO: a feição deve estar em uma camada com Pop-ups habilitados.",
    digitizeDistanceMeasureTool: "Utilize a ferramenta <b>Medir</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Paire ou toque o gráfico do Perfil de Elevação para exibir elevações e mostrar um local no mapa."
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
    gainLossTemplate: "Mín:{min}   Máx:{max}   Inicial:{start}   Final:{end}   Alterar:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Erro de Configuração Inválida',
      message: 'Configuração inválida.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Erro dos Parâmetros do Construtor Ausentes',
      message: 'Parâmetro do construtor ausente.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Erro do Parâmetro Ini Ausente',
      message: 'Parâmetro ini ausente.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Erro de Operação Sem Suporte',
      message: 'Esta versão de SOE, NÃO tem suporte para esta operação.'
    }
  }
})
);
