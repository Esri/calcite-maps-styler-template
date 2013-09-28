define(
({
  viewer:{
    title: "Trīs veidu kartes skatītājs",
    main:{
        loading:{
            loadingMessage: "Ielādē web kartes…",
            title: "Salīdzina kartes"
        },
        contextMenu:{
            title: "Vairāk opcijām labais klikšķis uz kartes.",
            zoom: "Pietuvināt sākotnējam pārklājumam",
            scale: "mērogs",
            location: "izvietojums",
            scaleAndLocation: "mērogs un izvietojums",
            adjust: "Pielāgot šai citas kartes"
        },
      iosTooltip: "* Noklikšķiniet uz kartes virsraksta, lai iestatītu avota karti",
      title: "Trīs veidu kartes skatītājs",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Nevar izveidot karti",
      general:"Error",
      webmapDescription: "...apraksts nav pieejams...",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SINHRONIZĒT KARTES:",
            scaleLabel: "Mērogs",
            locationLabel: "Izvietojums"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Apraksts",
            contentLabel: "Saturs",
            legendLabel: "Leģenda"
        }
    }
  }
})
);
