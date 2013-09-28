define(
({
  viewer:{
    title: "Kartvisare - tre riktningar",
    main:{
        loading:{
            loadingMessage: "Läser in webbkartor...",
            title: "Jämför kartor"
        },
        contextMenu:{
            title: "Högerklicka på kartan för fler alternativ.",
            zoom: "Zooma till ursprunglig omfattning",
            scale: "skala",
            location: "plats",
            scaleAndLocation: "skala och plats",
            adjust: "Justera andra kartor till denna"
        },
      iosTooltip: "* Klicka på en karttitel för att ange källkartan",
      title: "Kartvisare - tre riktningar",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Det går inte att skapa kartan",
      general:"Error",
      webmapDescription: "...ingen tillgänglig beskrivning...",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SYNKRONISERA KARTOR:",
            scaleLabel: "Skala",
            locationLabel: "Plats"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Beskrivning",
            contentLabel: "Innehåll",
            legendLabel: "Teckenförklaring"
        }
    }
  }
})
);
