define(
({
  display: {
    elevationProfileTitle: "á»‡_Elevation Profile_á»",
    showMe: "á»‡_show me_á»",
    selectLine: "á»‡_Select a feature in the map_á».",
    popupRequirement: "á»‡_NOTE: the feature needs to be in a Feature Layer or be part of a map service that has Popups enabled_á».",
    digitizeDistanceMeasureTool: "á»‡_Use the <b>Measure</b> button_á».",
    selectFeatureHelpUrl: "á»‡_http://help.arcgis.com/en/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D_á»",
    measureToolHelpUrl: "á»‡_http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000_á»",
    hoverOver: "á»‡_Hover over_á» ",
    touchIPad: "á»‡_touch on iPad_á»",
    locationOnMap: "á»‡_the Elevation Profile chart to display elevations and show location on map_á»."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "á»‡_Elevation: {0} meters_á»",
  chart: {
    title: "á»‡_Elevation Profile_á»",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "á»‡_Elevation in {0}_á»",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "á»‡_Distance in {0}_á»",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "á»‡_Min:{min}   Max:{max}   Start:{start}   End:{end}   Change:{gainloss}_á»"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'á»‡_Invalid Configuration Error_á»',
      message: 'á»‡_Invalid configuration_á».'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'á»‡_Missing Constructor Parameters Error_á»',
      message: 'á»‡_Missing constructor parameter_á».'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'á»‡_Missing Init Parameter Error_á»',
      message: 'á»‡_Missing init parameter_á».'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'á»‡_Operation Not Supported Error_á»',
      message: 'á»‡_This version of the SOE does NOT support this operation_á».'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'á»‡_Multi-part Geometries Not Supported Error_á»',
      message: "á»‡_CAUTION: multi-part lines are currently NOT supported_á»."
    }
  }
})
);
