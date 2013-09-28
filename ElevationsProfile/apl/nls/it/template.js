define(
({
  display: {
    elevationProfileTitle: "Profilo di elevazione",
    showMe: "mostra",
    selectLine: "<b>Selezionare</b> una feature nella mappa.",
    popupRequirement: "NOTA: la feature deve trovarsi in un layer in cui i popup sono abilitati.",
    digitizeDistanceMeasureTool: "Utilizzare gli strumenti <b>Misura</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Passare il mouse o toccare sul grafico Profilo di elevazione per visualizzare le elevazioni e mostrare la posizione nella mappa."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevazione: {0} metri",
  chart: {
    title: "Profilo di elevazione",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevazione in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distanza in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min: {min}   Max: {max}   Inizio: {start}   Fine: {end}   Variazione: {gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Errore di configurazione non valida',
      message: 'Configurazione non valida.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Errore di parametro constructor mancante',
      message: 'Parametro constructor mancante.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Errore di parametro init mancante',
      message: 'Parametro init mancante.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Errore di operazione non supportata',
      message: 'Questa versione di SOE NON supporta questa operazione.'
    }
  }
})
);