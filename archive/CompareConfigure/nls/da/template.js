define(
({
  viewer:{
    title: "Sammenlign webkort",
    main:{
        loading:{
            loadingMessage: "Indlæser webkort…",
            title: "Sammenlign webkort"
        },
        contextMenu:{
            title: "Højreklik på kortet for flere indstillinger.",
            zoom: "Zoom til oprindeligt område",
            scale: "målestok",
            location: "position",
            scaleAndLocation: "målestok og sted",
            adjust: "Justér andre kort til dette"
        },
      title: "Trevejs kortvisning",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Kan ikke oprette kort",
      general:"Error",
      webmapDescription: "...der foreligger ingen beskrivelse…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SYNKRONISÉR KORT:",
            scaleLabel: "Målestok",
            locationLabel: "Position"
            
        },
        map:{
            label: "KORTOPLYSNINGER",
            descriptionLabel: "Beskrivelse",
            contentLabel: "Indhold",
            legendLabel: "Signaturforklaring"
        }
    }
  }
})
);
