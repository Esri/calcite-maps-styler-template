define({
  root: ({
  display: {
    elevationProfileTitle: "Profil wysokościowy",
    showMe: "pokaż mi",
    selectLine: "Wybierz obiekt na mapie.",
    popupRequirement: "UWAGA: obiekt musi znajdować się w warstwie obiektów lub być częścią usługi mapowej, w której włączone są okna podręczne.",
    digitizeDistanceMeasureTool: "Użyj przycisku <b>Pomiar</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/pl/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/pl/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Kursor nad ",
    touchIPad: "wskaż na urządzeniu iPad",
    locationOnMap: "diagram profilu wysokościowego, aby wyświetlić wysokości terenu i lokalizację na mapie."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Wysokość: {0} metrów",
  chart: {
    title: "Profil wysokościowy",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Wysokość w {0}",
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
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Błąd — brak obsługi geometrii wieloczęściowych',
      message: "UWAGA: linie wieloczęściowe obecnie NIE są obsługiwane."
    }
  }
}),
"ar": 1,
"de": 1,
"es": 1,
"fr": 1,
"it": 1,
"ja": 1,
"ko": 1,
"nl": 1,
"no": 1,
"pl": 1,
"pt-br": 1,
"ro": 1,
"ru": 1,
"sv": 1,
"zh-cn": 1
});
