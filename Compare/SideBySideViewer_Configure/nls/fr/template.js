define(
({
  viewer:{
    title: "Visionneuse de cartes en trois dimensions",
    main:{
        loading:{
            loadingMessage: "Chargement de cartes Web…",
            title: "Comparer les cartes"
        },
        contextMenu:{
            title: "Cliquez avec le bouton droit sur la carte pour afficher plus d\’options.",
            zoom: "Zoom sur l\’étendue initiale",
            scale: "échelle",
            location: "emplacement",
            scaleAndLocation: "échelle et emplacement",
            adjust: "Ajuster d\’autres cartes à cela"
        },
      iosTooltip: "* Cliquez sur le titre d\’une carte pour définir la carte source",
      title: "Visionneuse de cartes en trois dimensions",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Impossible de créer la carte",
      general:"Error",
      webmapDescription: "...aucune description disponible…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SYNCHRONISER LES CARTES :",
            scaleLabel: "Echelle",
            locationLabel: "Emplacement"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Description",
            contentLabel: "Contenu",
            legendLabel: "Légende"
        }
    }
  }
})
);
