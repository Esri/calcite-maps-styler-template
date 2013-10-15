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
      title: "Confronta mappe Web",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Impossibile creare la mappa",
      general:"Error",
      webmapDescription: "...descrizione non disponibile…",
      legend:"No legend",
      bingMessage: "Chiave Bing mancante"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Salva mappe Web",
            alt: "Salva",
            title: "Salva mappe Web",
            message: "Salvataggio mappe Web in corso",
            changeMessage: "Mappe Web modificate",
            clearMessage: "Mappe Web cancellate"
        },
        search:{
            alt: "Ricerca",
            title: "Ricerca",
            placeholder: "immettere il testo da cercare",
            message: "Ricerca in corso…",
            results: "Mappe Web trovate"
        },
        clear:{
            alt: "Cancella",
            title: "Cancella mappe Web (usa mappe Web predefinite)"
        },
        find:{
            label: "Trova mappe Web"
        },
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