define(
({
  display: {
    elevationProfileTitle: "Výškový profil",
    showMe: "ukaž mi",
    selectLine: "<b>Vyberte</b> prvek v mapě.",
    popupRequirement: "POZNÁMKA: prvek se musí nacházet ve vrstvě s povolenými vyskakovacími okny.",
    digitizeDistanceMeasureTool: "Použijte nástroje <b>Měření</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Přesuňte ukazatel myši nad graf výškového profilu nebo se jej dotkněte pro zobrazení nadmořských výšek a umístění v mapě."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Nadmořská výška: {0} metrů",
  chart: {
    title: "Výškový profil",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Nadmořská výška v {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Vzdálenost v {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Začátek:{start}   Konec:{end}   Změna:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Chyba: neplatná konfigurace',
      message: 'Neplatná konfigurace'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Chyba: chybí parametry konstruktéru.',
      message: 'Chybí parametry konstruktéru.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Chyba: chybí inicializační parametr',
      message: 'Chybí inicializační parametr.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Chyba: operace není podporována.',
      message: 'Tato verze SOE tuto operaci nepodporuje.'
    }
  }
})
);
