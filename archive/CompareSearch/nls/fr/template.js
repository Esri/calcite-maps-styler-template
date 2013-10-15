define(
({
  viewer:{
    title: "Comparer les cartes Web",
    main:{
        loading:{
            loadingMessage: "Chargement de cartes Web…",
            title: "Comparer les cartes Web"
        },
        contextMenu:{
            title: "Cliquez avec le bouton droit sur la carte pour afficher plus d\’options.",
            zoom: "Zoom sur l\’étendue initiale",
            scale: "échelle",
            location: "emplacement",
            scaleAndLocation: "échelle et emplacement",
            adjust: "Ajuster d\’autres cartes à cela"
        },
      title: "Comparer les cartes Web",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Impossible de créer la carte",
      general:"Error",
      webmapDescription: "...aucune description disponible…",
      legend:"No legend",
      bingMessage: "Clé Bing manquante"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Enregistrer les cartes Web",
            alt: "Enregistrer",
            title: "Enregistrer les cartes Web",
            message: "Les cartes Web sont actuellement enregistrées",
            changeMessage: "Les cartes Web ont changé",
            clearMessage: "Les cartes Web ont été effacées"
        },
        search:{
            alt: "Rechercher",
            title: "Rechercher",
            placeholder: "entrez un texte de recherche",
            message: "Recherche…",
            results: "Cartes Web trouvées"
        },
        clear:{
            alt: "Effacer",
            title: "Effacer les cartes Web (utiliser les cartes Web par défaut)"
        },
        find:{
            label: "Rechercher les cartes Web"
        },
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