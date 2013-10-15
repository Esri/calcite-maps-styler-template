define(
({
  viewer:{
    title: "Visualizador de Três Mapas",
    main:{
        loading:{
            loadingMessage: "A carregar Mapas Web…",
            title: "Comparar Mapas"
        },
        contextMenu:{
            title: "Clique com o botão direito sobre o mapa para mais opções.",
            zoom: "Efetuar Zoom para a Extensão Inicial",
            scale: "escala",
            location: "localização",
            scaleAndLocation: "escala e localização",
            adjust: "Ajustar os outros mapas a este"
        },
      iosTooltip: "* Clique no título do mapa para definir o mapa de origem",
      title: "Visualizador de Três Mapas",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Não foi possível criar o mapa",
      general:"Error",
      webmapDescription: "...nenhuma descrição disponível…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SINCRONIZAR MAPAS:",
            scaleLabel: "Escala",
            locationLabel: "Local"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Descrição",
            contentLabel: "Conteúdo",
            legendLabel: "Legenda"
        }
    }
  }
})
);
