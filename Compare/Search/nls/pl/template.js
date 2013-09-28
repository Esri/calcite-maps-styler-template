define(
({
  viewer:{
    title: "Porównaj mapy internetowe",
    main:{
        loading:{
            loadingMessage: "Trwa ładowanie map internetowych...",
            title: "Porównaj mapy internetowe"
        },
        contextMenu:{
            title: "Kliknij mapę prawym przyciskiem, aby wyświetlić więcej opcji.",
            zoom: "Powiększ do początkowego zasięgu",
            scale: "skalować",
            location: "lokalizacja",
            scaleAndLocation: "skala i lokalizacja",
            adjust: "Dostosuj podobnie inne mapy"
        },
      title: "Porównaj mapy internetowe",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Nie można utworzyć mapy",
      general:"Error",
      webmapDescription: "...brak dostępnych opisów…",
      legend:"No legend",
      bingMessage: "Brak klucza Bing"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Zapisz mapy internetowe",
            alt: "Zapisz",
            title: "Zapisz mapy internetowe",
            message: "Mapy internetowe zostały zapisane",
            changeMessage: "Mapy internetowe zostały zmienione",
            clearMessage: "Mapy internetowe zostały wyczyszczone"
        },
        search:{
            alt: "Wyszukaj",
            title: "Wyszukaj",
            placeholder: "wprowadź szukany tekst",
            message: "Trwa wyszukiwanie...",
            results: "Znalezione mapy internetowe"
        },
        clear:{
            alt: "Wyczyść",
            title: "Wyczyść mapy internetowe (użyj domyślnych map internetowych )"
        },
        find:{
            label: "Znajdź mapy internetowe"
        },
        sync:{
            label: "SYNCHRONIZUJ MAPY:",
            scaleLabel: "Skala",
            locationLabel: "Lokalizacja"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Opis",
            contentLabel: "Zawartość",
            legendLabel: "Legenda"
        }
    }
  }
})

);