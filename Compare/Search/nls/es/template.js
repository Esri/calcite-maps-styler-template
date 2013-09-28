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
      title: "Comparar mapas Web",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "No se puede crear el mapa",
      general:"Error",
      webmapDescription: "...ninguna descripción disponible…",
      legend:"No legend",
      bingMessage: "Falta la llave bing"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Guardar mapas Web",
            alt: "Guardar",
            title: "Guardar mapas Web",
            message: "Los mapas Web ya están guardados",
            changeMessage: "Los mapas Web han cambiado",
            clearMessage: "Los mapas Web se han borrado"
        },
        search:{
            alt: "Buscar",
            title: "Buscar",
            placeholder: "introducir texto de búsqueda",
            message: "Buscando...",
            results: "Mapas Web encontrados"
        },
        clear:{
            alt: "Borrar",
            title: "Borrar mapas Web (usar los mapas Web predeterminados)"
        },
        find:{
            label: "Encontrar mapas Web"
        },
        sync:{
            label: "SINCRONIZAR MAPAS:",
            scaleLabel: "Escala",
            locationLabel: "Ubicación"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Descripción",
            contentLabel: "Contenido",
            legendLabel: "Leyenda"
        }
    }
  }
})

);