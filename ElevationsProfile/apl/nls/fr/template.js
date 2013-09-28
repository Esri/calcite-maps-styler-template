define(
({
  display: {
    elevationProfileTitle: "Profil d\'élévation",
    showMe: "me montrer",
    selectLine: "<b>Sélectionner</b> une entité sur la carte.",
    popupRequirement: "REMARQUE : l\'entité doit être dans une couche dans laquelle les fenêtres contextuelles sont activées.",
    digitizeDistanceMeasureTool: "Utiliser les outils <b>Mesure</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Passez le pointeur sur le diagramme Profil d\'élévation ou touchez-le pour afficher les élévations et indiquer l\'emplacement sur la carte."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elévation : {0} mètres",
  chart: {
    title: "Profil d\'élévation",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elévation en {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distance en {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min :{min}   Max :{max}   Début :{start}   Fin :{end}   Changement :{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Erreur Configuration incorrecte',
      message: 'Configuration incorrecte.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Erreur Paramètres de construction manquants',
      message: 'Paramètre de construction manquant.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Erreur Paramètre d\’initialisation manquant',
      message: 'Paramètre d\’initialisation manquant.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Erreur Opération non prise en charge',
      message: 'Cette version du SOE ne prend PAS en charge cette opération.'
    }
  }
})
);
