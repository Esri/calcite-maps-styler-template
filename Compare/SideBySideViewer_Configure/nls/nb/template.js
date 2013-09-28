define(
({
  viewer:{
    title: "Treveis kartvisning",
    main:{
        loading:{
            loadingMessage: "Laster inn webkart …",
            title: "Sammenlign kart"
        },
        contextMenu:{
            title: "Høyreklikk på kartet for å få flere alternativer.",
            zoom: "Zoom til opprinnelig utstrekning",
            scale: "målestokk",
            location: "lokasjon",
            scaleAndLocation: "målestokk og lokasjon",
            adjust: "Juster andre kart til dette"
        },
      iosTooltip: "* Klikk på en karttittel for å angi kildekart",
      title: "Treveis kartvisning",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Kan ikke opprette kart",
      general:"Error",
      webmapDescription: "...ingen beskrivelse tilgjengelig…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SYNKRONISER KART:",
            scaleLabel: "Målestokk",
            locationLabel: "Plassering"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Beskrivelse",
            contentLabel: "Innhold",
            legendLabel: "Tegnforklaring"
        }
    }
  }
})
);
