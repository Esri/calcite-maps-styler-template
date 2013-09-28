define(
({
  display: {
    elevationProfileTitle: "Korkeusprofiili",
    showMe: "näytä minut",
    selectLine: "<b>Valitse</b> kartan kohde.",
    popupRequirement: "HUOM.: kohteen on oltava karttatasossa, jossa ponnahdusikkunat ovat käytössä.",
    digitizeDistanceMeasureTool: "Käytä <b>Mittaus</b>-työkaluja.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Kosketa hiiren osoittimella korkeusprofiilikaaviota tai liikuta hiirtä sen päällä, niin saat esiin korkeustason ja sijainnin kartalla."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Korkeustaso: {0} metriä",
  chart: {
    title: "Korkeusprofiili",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Korkeustaso yksiköissä {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Etäisyys yksiköissä {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min.:{min}   Maks.:{max}   Alku:{start}   Loppu:{end}   Muutos:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Virheellinen kokoonpano -virhe',
      message: 'Virheellinen kokoonpano'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Muodostusohjelman parametreja puuttuu -virhe',
      message: 'Muodostusohjelman parametri puuttuu.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Alustusparametri puuttuu -virhe.',
      message: 'Alustusparametri puuttuu.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Toimintoa ei tueta -virhe',
      message: 'Tämä SOE-versio EI tue tätä toimintoa.'
    }
  }
})
);
