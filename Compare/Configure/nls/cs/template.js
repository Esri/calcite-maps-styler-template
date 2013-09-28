define(
({
  viewer:{
    title: "Porovnat webové mapy",
    main:{
        loading:{
            loadingMessage: "Načítám webové mapy…",
            title: "Porovnat webové mapy"
        },
        contextMenu:{
            title: "Pro více možností klikněte pravým tlačítkem na mapu.",
            zoom: "Zvětšit na výchozí rozsah",
            scale: "měřítko",
            location: "umístění",
            scaleAndLocation: "měřítko a umístění",
            adjust: "Upravit ostatní mapy podle vzoru"
        },
      title: "Three Way Map Viewer",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Nelze vytvořit mapu",
      general:"Error",
      webmapDescription: "…popis není k dispozici…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SYNCHRONIZOVAT MAPY:",
            scaleLabel: "Měřítko",
            locationLabel: "Umístění"
            
        },
        map:{
            label: "MAPOVÉ INFORMACE",
            descriptionLabel: "Popis",
            contentLabel: "Obsah",
            legendLabel: "Legenda"
        }
    }
  }
})
);
