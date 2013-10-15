define(
({
  viewer:{
    title: "Confronta mappe Web",
    main:{
        loading:{
            loadingMessage: "Caricamento mappe Web in corso…",
            title: "Confronta mappe Web"
        },
        contextMenu:{
            title: "Per ulteriori opzioni fare clic con il pulsante destro del mouse sulla mappa.",
            zoom: "Zoom su estensione iniziale",
            scale: "scala",
            location: "posizione",
            scaleAndLocation: "scala e posizione",
            adjust: "Regola altre mappe in base a questa"
        },
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
            label: "INFORMAZIONI MAPPA",
            descriptionLabel: "Descrizione",
            contentLabel: "Contenuto",
            legendLabel: "Legenda"
        }
    }
  }
})
);
