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
      title: "Dreiteiliger Map Viewer",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Karte kann nicht erstellt werden",
      general:"Error",
      webmapDescription: "...keine Beschreibung verfügbar…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "KARTEN SYNCHRONISIEREN:",
            scaleLabel: "Maßstab",
            locationLabel: "Position"
            
        },
        map:{
            label: "KARTENINFORMATIONEN",
            descriptionLabel: "Beschreibung",
            contentLabel: "Inhalt",
            legendLabel: "Legende"
        }
    }
  }
})
);
