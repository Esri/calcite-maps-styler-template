define(
({
  display: {
    elevationProfileTitle: "Elevation Profile",
    showMe: "show me",
    selectLine: "<b>Select</b> a feature in the map.",
    popupRequirement: "NOTE: the feature must be in a layer with Popups enabled.",
    digitizeDistanceMeasureTool: "Use the <b>Measure</b> tools.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Hover over or touch the Elevation Profile chart to display elevations and show location on map."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevation: {0} meters",
  chart: {
    title: "Elevation Profile",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevation in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distance in {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min:{min}   Max:{max}   Start:{start}   End:{end}   Change:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Invalid Configuration Error',
      message: 'Invalid configuration.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Missing Constructor Parameters Error',
      message: 'Missing constructor parameter.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Missing Init Parameter Error',
      message: 'Missing init parameter.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Operation Not Supported Error',
      message: 'This version of the SOE does NOT support this operation.'
    }
  }
})
);
