define(
({
  viewer:{
    title: "Comparar mapas Web",
    main:{
        loading:{
            loadingMessage: "Cargando mapas Web…",
            title: "Comparar mapas Web"
        },
        contextMenu:{
            title: "Haz clic con el botón derecho en el mapa para ver más opciones.",
            zoom: "Acercar a la extensión inicial",
            scale: "escala",
            location: "ubicación",
            scaleAndLocation: "escala y ubicación",
            adjust: "Ajustar otros mapas a este/a"
        },
      title: "Visor de mapas trilateral",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "No se puede crear el mapa",
      general:"Error",
      webmapDescription: "...ninguna descripción disponible…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SINCRONIZAR MAPAS:",
            scaleLabel: "Escala",
            locationLabel: "Ubicación"
            
        },
        map:{
            label: "INFORMACIÓN DEL MAPA",
            descriptionLabel: "Descripción",
            contentLabel: "Contenido",
            legendLabel: "Leyenda"
        }
    }
  }
})
);
