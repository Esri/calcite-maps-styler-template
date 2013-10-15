define(
({
  viewer:{
    title: "Võrdle veebikaarte",
    main:{
        loading:{
            loadingMessage: "Laen veebikaarte...",
            title: "Võrdle veebikaarte"
        },
        contextMenu:{
            title: "Paremkliki kaardil rohkemate valikute saamiseks.",
            zoom: "Suumi algsesse kuvaulatusse",
            scale: "mõõtkava",
            location: "asukoht",
            scaleAndLocation: "mõõtkava ja asukoht",
            adjust: "Kohanda teised kaardid selle alusel"
        },
      title: "Võrdle veebikaarte",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Kaarti ei saa luua",
      general:"Error",
      webmapDescription: "...puudub kirjeldus...",
      legend:"No legend",
      bingMessage: "Bing võti puudub"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Salvesta veebikaardid",
            alt: "Salvesta",
            title: "Salvesta veebikaardid",
            message: "Veebikaardid on hetkel salvestatud",
            changeMessage: "Veebikaarte on muudetud",
            clearMessage: "Veebikaardid on tühistatud"
        },
        search:{
            alt: "Otsi",
            title: "Otsi",
            placeholder: "sisesta otsingutekst",
            message: "Otsin...",
            results: "Leiti veebikaardid"
        },
        clear:{
            alt: "Tühista",
            title: "Tühista veebikaardid (kasuta vaikimisi veebikaarte)"
        },
        find:{
            label: "Leia veebikaarte"
        },
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