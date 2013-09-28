define(
 ({
  display: {
    elevationProfileTitle: "Højdeprofil",
    showMe: "vis mig",
    selectLine: "<b>Udvælg</b> et objekt på kortet.",
    popupRequirement: "BEMÆRK: Objektet skal være i et lag, hvor popup-vinduer er aktiveret.",
    digitizeDistanceMeasureTool: "Brug værktøjet <b>Opmål</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Kør musen hen over eller berør diagrammet med højdeprofiler for at få vist niveauer og deres placering på kortet."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Højde: {0} meter",
  chart: {
    title: "Højdeprofil",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Højde i {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Afstand i {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min.:{min}   Maks.:{max}   Start:{start}   Slut:{end}   Ændring:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Fejl: Ugyldig konfiguration',
      message: 'Ugyldig konfiguration.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Parameterfejl: Konstruktør mangler',
      message: 'Parameter: Konstruktør mangler.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Fejl: Oprind. parameter mangler',
      message: 'Oprind. parameter mangler.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Fejl: Handling ikke understøttet',
      message: 'Denne version af SOE understøtter IKKE denne handling.'
    }
  }
})
);