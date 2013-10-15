define(
({
  viewer:{
    title: "Kolme paneeliga kaardiaken",
    main:{
        loading:{
            loadingMessage: "Laen veebikaarte...",
            title: "Võrdle kaarte"
        },
        contextMenu:{
            title: "Paremkliki kaardil rohkemate valikute saamiseks.",
            zoom: "Suumi algsesse kuvaulatusse",
            scale: "mõõtkava",
            location: "asukoht",
            scaleAndLocation: "mõõtkava ja asukoht",
            adjust: "Kohanda teised kaardid selle alusel"
        },
      iosTooltip: "* Lähtekaardi määramiseks kliki kaardi pealkirjal",
      title: "Kolme paneeliga kaardiaken",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Kaarti ei saa luua",
      general:"Error",
      webmapDescription: "...puudub kirjeldus...",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SÜNKRONISEERI KAARDID:",
            scaleLabel: "Mõõtkava",
            locationLabel: "Asukoht"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Kirjeldus",
            contentLabel: "Sisu",
            legendLabel: "Legend"
        }
    }
  }
})
);
