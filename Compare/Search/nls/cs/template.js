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
      title: "Porovnat webové mapy",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Nelze vytvořit mapu",
      general:"Error",
      webmapDescription: "…popis není k dispozici…",
      legend:"No legend",
      bingMessage: "Chybí klíč Bing Map"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Uložit webové mapy",
            alt: "Uložit",
            title: "Uložit webové mapy",
            message: "Webové mapy jsou uloženy.",
            changeMessage: "Webové mapy byly změněny.",
            clearMessage: "Webové mapy byly vyprázdněny."
        },
        search:{
            alt: "Hledat",
            title: "Hledat",
            placeholder: "zadejte hledaný výraz",
            message: "Probíhá vyhledávání…",
            results: "Webové mapy nalezeny"
        },
        clear:{
            alt: "Vyprázdnit",
            title: "Vyprázdnit webové mapy (použít výchozí)"
        },
        find:{
            label: "Hledat webové mapy"
        },
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