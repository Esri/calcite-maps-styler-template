define(
({
  viewer:{
    title: "Three-way Map Viewer",
    main:{
        loading:{
            loadingMessage: "Načítám webové mapy…",
            title: "Porovnat mapy"
        },
        contextMenu:{
            title: "Pro více možností klikněte pravým tlačítkem na mapu.",
            zoom: "Zvětšit na výchozí rozsah",
            scale: "měřítko",
            location: "umístění",
            scaleAndLocation: "měřítko a umístění",
            adjust: "Upravit ostatní mapy podle vzoru"
        },
      iosTooltip: "* Kliknutím na název mapy ji určíte jako výchozí.",
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
            label:"MAP INFORMATION",
            descriptionLabel: "Popis",
            contentLabel: "Obsah",
            legendLabel: "Legenda"
        }
    }
  }
})
);
