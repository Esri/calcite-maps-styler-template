define(
({
  display: {
    elevationProfileTitle: "Profil elevaţie",
    showMe: "arată",
    selectLine: "<b>Selectaţi</b> un obiect spaţial în hartă.",
    popupRequirement: "NOTĂ: obiectul spaţial trebuie să facă parte dintr-un strat tematic pentru care sunt activate pop-upurile.",
    digitizeDistanceMeasureTool: "Utilizaţi instrumentele <b>Măsurare</b>.",
    selectFeatureHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/010q/010q0000004s000000.htm#ESRI_SECTION1_DAA22E89DF67448E8F3682309F39BE5D",
    measureToolHelpUrl: "http://help.arcgis.com/en/arcgisonline/help/index.html#//010q00000096000000",
    hoverOver: "Suprapuneţi indicatorul mouse-ului peste diagrama Profil elevaţie sau atingeţi această diagramă pentru a afişa elevaţiile şi locaţia pe hartă."
  },
  // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
  locationResultTemplate: "Elevaţie: {0} metri",
  chart: {
    title: "Profil elevaţie",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    elevationTitleTemplate: "Elevaţie în {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    distanceTitleTemplate: "Distanţă în {0}",
    // DO **NOT** CHANGE TEXT WITHIN CURLY BARCKETS //
    gainLossTemplate: "Min.:{min}   Max.:{max}   Pornire:{start}   Sfârşit:{end}   Modificare:{gainloss}"
  },
  errors: {
    InvalidConfiguration: {
      code: 17056601,
      name: 'Eroare Configuraţie nevalidă',
      message: 'Configuraţie nevalidă.'
    },
    MissingConstructorParameters: {
      code: 17056602,
      name: 'Eroare Absenţă parametri constructor',
      message: 'Lipsesc parametrii constructorului.'
    },
    MissingInitParameter: {
      code: 17056603,
      name: 'Eroare Absenţă parametru iniţial',
      message: 'Lipseşte parametrul iniţial.'
    },
    SOEOperationNotSupported: {
      code: 17056604,
      name: 'Eroare Operaţie neacceptată',
      message: 'Această versiune SOE NU acceptă această operaţie.'
    }
  }
})
);
