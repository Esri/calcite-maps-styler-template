define(
({
  display: {
    elevationProfileTitle: "Pacēluma profils",
    showMe: "parādiet man",
    selectLine: "<b>Izvēlēties</b> elementu kartē.",
    popupRequirement: "PIEZĪME: elementam jābūt slānī ar iespējotiem uznirstošajiem logiem.",
    digitizeDistanceMeasureTool: "Lietojiet <b>Mērīt</b> rīkus.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Novietojiet pāri vai pieskarties Pacēluma profila diagrammai, lai attēlotu pacēlumu un rādītu izvietojumu kartē."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Pacēlums: {0} metri",
  chart: {
    title: "Pacēluma profils",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Pacēlums {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distance {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Starts:{start}   Beigas:{end}  Mainīt:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Nederīgas konfigurācijas kļūda',
      message: 'Nederīga konfigurācija.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Kļūda, trūkst konstruktora parametru.',
      message: 'Trūkst konstruktora parametrs.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Kļūda, trūkst sākuma parametru.',
      message: 'Trūkst sākuma parametrs.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Kļūda, operāciju neatbalsta',
      message: 'Šī SOE versija NEATBALSTA šo darbību.'
    }
  }
})
);
