define(
({
  viewer:{
    title: "Map viewer a tre livelli",
    main:{
        loading:{
            loadingMessage: "Caricamento mappe Web in corso…",
            title: "Confronta mappe"
        },
        contextMenu:{
            title: "Per ulteriori opzioni fare clic con il pulsante destro del mouse sulla mappa.",
            zoom: "Zoom su estensione iniziale",
            scale: "scala",
            location: "posizione",
            scaleAndLocation: "scala e posizione",
            adjust: "Regola altre mappe in base a questa"
        },
      iosTooltip: "* Fare clic sul titolo di una mappa per impostare la mappa di origine",
      title: "Map viewer a tre livelli",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Impossibile creare la mappa",
      general:"Error",
      webmapDescription: "...descrizione non disponibile…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SINCRONIZZA MAPPE:",
            scaleLabel: "Scala",
            locationLabel: "Posizione"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Descrizione",
            contentLabel: "Contenuto",
            legendLabel: "Legenda"
        }
    }
  }
})
);
