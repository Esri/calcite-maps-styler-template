define(
({
  viewer:{
    title: "Przeglądarka map 3w1",
    main:{
        loading:{
            loadingMessage: "Trwa ładowanie map internetowych...",
            title: "Porównaj mapy"
        },
        contextMenu:{
            title: "Kliknij na mapie prawym przyciskiem, aby wyświetlić więcej opcji.",
            zoom: "Powiększ do początkowego zasięgu",
            scale: "skalować",
            location: "lokalizacja",
            scaleAndLocation: "skala i lokalizacja",
            adjust: "Dostosuj podobnie inne mapy"
        },
      iosTooltip: "* Kliknij tytuł mapy, aby ustawić mapę źródłową",
      title: "Przeglądarka map 3w1",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Nie można utworzyć mapy",
      general:"Error",
      webmapDescription: "...brak dostępnych opisów…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
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
