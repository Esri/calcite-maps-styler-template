define(
   ({
  display: {
    elevationProfileTitle: "Υψομετρικό προφίλ",
    showMe: "βοήθεια",
    selectLine: "Επιλέξτε ένα χαρακτηριστικό στο χάρτη.",
    popupRequirement: "ΣΗΜΕΙΩΣΗ: Το χαρακτηριστικό πρέπει να βρίσκεται σε ένα επίπεδο χαρακτηριστικών ή να είναι μέρος μιας υπηρεσίας χάρτη με ενεργοποιημένα αναδυόμενα παράθυρα.",
    digitizeDistanceMeasureTool: "Χρησιμοποιήστε το κουμπί <b>Μέτρηση</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/el/arcgisonline/help/index.html#//010q0000004s000000#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/el/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Τοποθετήστε το δείκτη πάνω ",
    touchIPad: "αγγίξτε στο iPad",
    locationOnMap: "στο γράφημα Υψομετρικό προφίλ για να εμφανιστούν τα υψόμετρα και η τοποθεσία στο χάρτη."
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
      name: 'Σφάλμα μη έγκυρης διαμόρφωσης',
      message: 'Μη έγκυρη διαμόρφωση.'
    },
    MissingConstructorParameters: {
      name: 'Σφάλμα απουσίας παραμέτρων κατασκευής',
      message: 'Απουσία παραμέτρου κατασκευής.'
    },
    MissingInitParameter: {
      name: 'Σφάλμα απουσίας παραμέτρου προετοιμασίας',
      message: 'Απουσία παραμέτρου προετοιμασίας.'
    },
    SOEOperationNotSupported: {
      name: 'Σφάλμα μη υποστηριζόμενης λειτουργίας',
      message: 'Αυτή η έκδοση του SOE ΔΕΝ υποστηρίζει αυτή τη λειτουργία.'
    },
    SOEMultiPartGeometriesNotSupported: {
      name: 'Σφάλμα μη υποστηριζόμενων γεωμετριών πολλαπλών τμημάτων',
      message: "ΠΡΟΣΟΧΗ: Προς το παρόν ΔΕΝ υποστηρίζονται γραμμές πολλαπλών τμημάτων."
    }
  }
})
);
