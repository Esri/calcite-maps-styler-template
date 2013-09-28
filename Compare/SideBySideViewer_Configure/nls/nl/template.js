define(
({
  viewer:{
    title: "Drieweg map viewer",
    main:{
        loading:{
            loadingMessage: "Bezig met het laden van webmaps...",
            title: "Kaarten vergelijken"
        },
        contextMenu:{
            title: "Klik met de rechtermuisknop op de kaart voor meer opties.",
            zoom: "Inzoomen tot oorspronkelijke extent",
            scale: "schaal",
            location: "locatie",
            scaleAndLocation: "schaal en locatie",
            adjust: "Andere kaarten aanpassen tot"
        },
      iosTooltip: "* Klik op een kaarttitel om de bronkaart in te stellen",
      title: "Drieweg map viewer",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Kan kaart niet maken",
      general:"Error",
      webmapDescription: "...geen beschrijving beschikbaar…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "KAARTEN SYNCHRONISEREN:",
            scaleLabel: "Schaal",
            locationLabel: "Locatie"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Beschrijving",
            contentLabel: "Inhoud",
            legendLabel: "Legenda"
        }
    }
  }
})
);
