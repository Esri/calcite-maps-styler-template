define(
({
  display: {
    elevationProfileTitle: "Kõrgusprofiil",
    showMe: "näita",
    selectLine: "<b>Vali</b> objekt kaardilt.",
    popupRequirement: "MÄRKUS: objekt peab olema kihil, millel on hüpikaknad aktiveeritud.",
    digitizeDistanceMeasureTool: "Kasuta <b>mõõtmise</b> töövahendeid.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Liigu üle või puuduta kõrgusprofiili graafikut, et kuvada kõrguseid ja näidata asukohta kaardil."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Kõrgus: {0} meetrit",
  chart: {
    title: "Kõrgusprofiil",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Kõrgus {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Vahemaa {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Maks:{max}   Algus:{start}   Lõpp:{end}   Muutus:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Vale konfiguratsiooni viga',
      message: 'Vale konfiguratsioon.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Puuduvate konstruktori parameetrite viga',
      message: 'Puuduv konstruktori parameeter.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Puuduva algparameetri viga',
      message: 'Puuduv algparameeter.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Mittetoetatud tegevuse viga',
      message: 'See SOE versioon EI toeta seda tegevust.'
    }
  }
})
);
