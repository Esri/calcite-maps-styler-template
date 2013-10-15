define(
({
  viewer:{
    title: "Jämför webbkartor",
    main:{
        loading:{
            loadingMessage: "Läser in webbkartor...",
            title: "Jämför webbkartor"
        },
        contextMenu:{
            title: "Högerklicka på kartan för fler alternativ.",
            zoom: "Zooma till ursprunglig omfattning",
            scale: "skala",
            location: "plats",
            scaleAndLocation: "skala och plats",
            adjust: "Justera andra kartor till denna"
        },
      title: "Jämför webbkartor",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Det går inte att skapa kartan",
      general:"Error",
      webmapDescription: "...ingen tillgänglig beskrivning...",
      legend:"No legend",
      bingMessage: "Bing-nyckel saknas"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Spara webbkartor",
            alt: "Spara",
            title: "Spara webbkartor",
            message: "Webbkartor har sparats för närvarande",
            changeMessage: "Webbkartor har ändrats",
            clearMessage: "Webbkartor har rensats"
        },
        search:{
            alt: "Sök",
            title: "Sök",
            placeholder: "ange söktext",
            message: "Söker...",
            results: "Webbkartor har hittats"
        },
        clear:{
            alt: "Rensa",
            title: "Rensa webbkartor (använd standardwebbkartor)"
        },
        find:{
            label: "Sök efter webbkartor"
        },
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