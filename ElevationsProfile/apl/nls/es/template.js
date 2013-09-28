define(
({
  display: {
    elevationProfileTitle: "Perfil de elevación",
    showMe: "mostrarme",
    selectLine: "<b>Selecciona</b> una entidad en el mapa.",
    popupRequirement: "NOTA: la entidad debe estar en una capa con las ventanas emergentes activadas.",
    digitizeDistanceMeasureTool: "Usa las herramientas de <b>medición</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Desplázate por el diagrama del perfil de elevación o tócalo para visualizar las elevaciones y mostrar la ubicación en el mapa."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevación: {0} metros",
  chart: {
    title: "Perfil de elevación",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevación en {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distancia en {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Mín:{min}   Máx:{max}   Inicio:{start}   Fin:{end}   Cambio:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Error de configuración no válida',
      message: 'Configuración no válida.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Error de parámetros de constructor faltantes',
      message: 'Parámetro de constructor faltante.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Error de parámetro inic. faltante',
      message: 'Parámetro inic. faltante.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Error de operación no compatible',
      message: 'Esta versión de SOE NO es compatible con esta operación.'
    }
  }
})
);
