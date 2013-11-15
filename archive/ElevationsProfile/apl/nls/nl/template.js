define(
({
  display: {
    elevationProfileTitle: "Hoogteprofiel",
    showMe: "mij tonen",
    selectLine: "<b>Selecteer</b> een object op de kaart.",
    popupRequirement: "OPMERKING: het object moet in een laag liggen waarvoor pop-ups zijn ingeschakeld.",
    digitizeDistanceMeasureTool: "Gebruik de <b>Meettools</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Beweeg over het Hoogteprofiel of raak het aan om de hoogtes weer te geven en de locatie op de kaart te tonen."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Hoogte: {0} meter",
  chart: {
    title: "Hoogteprofiel",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Hoogte in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Afstand in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Start:{start}   Einde :{end}   Wijzigen:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Fout ongeldige configuratie',
      message: 'Ongeldige configuratie.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Fout ontbrekende opbouwparameters',
      message: 'Ontbrekende opbouwparameter.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Fout ontbrekende init-parameter',
      message: 'Ontbrekende init-parameter.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Fout bewerking niet ondersteund',
      message: 'Deze versie van SOE biedt GEEN ondersteuning voor deze bewerking.'
    }
  }
})
);
