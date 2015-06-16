define({
  root: ({
  display: {
    elevationProfileTitle: "Υψομετρικό προφίλ",
    showMe: "βοήθεια",
    selectLine: "Επιλέξτε ένα στοιχείο στο χάρτη.",
    popupRequirement: "ΣΗΜΕΙΩΣΗ: Το στοιχείο πρέπει να βρίσκεται σε ένα Feature layer ή να είναι μέρος ενός Map service με ενεργοποιημένα τα αναδυόμενα παράθυρα.",
    digitizeDistanceMeasureTool: "Χρησιμοποιήστε το κουμπί <b>Μέτρηση</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/el/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/el/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Τοποθετήστε το δείκτη πάνω ",
    touchIPad: "αγγίξτε στο iPad",
    locationOnMap: "στο γράφημα του Υψομετρικού προφίλ για να εμφανιστούν τα υψόμετρα και η τοποθεσία στο χάρτη."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Υψόμετρο: {0} μέτρα",
  chart: {
    title: "Υψομετρικό προφίλ",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Υψόμετρο σε {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Απόσταση σε {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Ελάχιστο:{min}   Μέγιστο:{max}   Αρχή:{start}   Τέλος:{end}   Αλλαγή:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Σφάλμα μη έγκυρης διαμόρφωσης',
      message: 'Μη έγκυρη διαμόρφωση.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Σφάλμα απουσίας παραμέτρων κατασκευαστή',
      message: 'Απουσία παραμέτρου κατασκευαστή.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Σφάλμα απουσίας παραμέτρου αρχικοποίησης',
      message: 'Απουσία παραμέτρου αρχικοποίησης.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Σφάλμα μη υποστηριζόμενης λειτουργίας',
      message: 'Αυτή η έκδοση του SOE ΔΕΝ υποστηρίζει αυτή τη λειτουργία.'
    },
    SOEMultiPartGeometriesNotSupported: {
      code: 17056605,
      name: 'Σφάλμα μη υποστηριζόμενων γεωμετριών πολλαπλών τμημάτων (multi-part)',
      message: "ΠΡΟΣΟΧΗ: Προς το παρόν ΔΕΝ υποστηρίζονται γραμμές πολλαπλών τμημάτων (multi-part)."
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
