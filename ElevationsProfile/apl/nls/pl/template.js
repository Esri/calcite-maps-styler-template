define(
 ({
  display: {
    elevationProfileTitle: "Profil wzniesień",
    showMe: "pokaż mi",
    selectLine: "<b>Wybierz</b> obiekt na mapie.",
    popupRequirement: "UWAGA: obiekt musi znajdować się w warstwie z włączonymi oknami podręcznymi.",
    digitizeDistanceMeasureTool: "Użyj narzędzi <b>pomiarowych</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Naprowadź kursor na diagram profilu wzniesienia lub dotknij go, aby wyświetlić wzniesienia i lokalizację na mapie."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Wzniesienie: {0} metrów",
  chart: {
    title: "Profil wzniesień",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Wzniesienie w {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Odległość w {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min.:{min}   Maks.:{max}   Początek:{start}   Koniec:{end}   Zmiana:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Błąd — nieprawidłowa konfiguracja',
      message: 'Nieprawidłowa konfiguracja.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Błąd — brak parametrów konstrukcyjnych',
      message: 'Brak parametru konstrukcyjnego.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Błąd — brak parametru początkowego',
      message: 'Brak parametru początkowego.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Błąd — nieobsługiwana operacja',
      message: 'Ta wersja SOE NIE obsługuje żądanej operacji.'
    }
  }
})
);