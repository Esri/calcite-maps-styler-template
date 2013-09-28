define(
({
  viewer:{
    title: "Webkarten vergleichen",
    main:{
        loading:{
            loadingMessage: "Webkarten werden geladen…",
            title: "Webkarten vergleichen"
        },
        contextMenu:{
            title: "Klicken Sie mit der rechten Maustaste auf die Karte, um weitere Optionen anzuzeigen.",
            zoom: "Auf Anfangsausdehnung zoomen",
            scale: "Maßstab",
            location: "Position",
            scaleAndLocation: "Maßstab und Position",
            adjust: "Andere Karten daran anpassen"
        },
      title: "Webkarten vergleichen",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Karte kann nicht erstellt werden",
      general:"Error",
      webmapDescription: "...keine Beschreibung verfügbar…",
      legend:"No legend",
      bingMessage: "Fehlender Bing-Schlüssel"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Webkarten speichern",
            alt: "Speichern",
            title: "Webkarten speichern",
            message: "Webkarten werden derzeit gespeichert",
            changeMessage: "Webkarten wurden geändert",
            clearMessage: "Webkarten wurden gelöscht"
        },
        search:{
            alt: "Suchen",
            title: "Suchen",
            placeholder: "Suchtext eingeben",
            message: "Suchvorgang läuft …",
            results: "Webkarten gefunden"
        },
        clear:{
            alt: "Löschen",
            title: "Webkarten löschen (Standardwebkarten verwenden)"
        },
        find:{
            label: "Webkarten suchen"
        },
        sync:{
            label: "KARTEN SYNCHRONISIEREN:",
            scaleLabel: "Maßstab",
            locationLabel: "Position"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Beschreibung",
            contentLabel: "Inhalt",
            legendLabel: "Legende"
        }
    }
  }
})

);