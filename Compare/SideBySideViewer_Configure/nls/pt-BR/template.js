define(
({
  viewer:{
    title: "Visualizador de Mapa de Três Modos",
    main:{
        loading:{
            loadingMessage: "Carregando Mapas da Web…",
            title: "Comparar Mapas"
        },
        contextMenu:{
            title: "Clique com o botão direito para mais opções.",
            zoom: "Zoom na Extensão Inicial",
            scale: "escala",
            location: "localização",
            scaleAndLocation: "escala e localização",
            adjust: "Ajustar com outros mapas"
        },
      iosTooltip: "* Clique no título do mapa para definir o mapa de origem",
      title: "Visualizador de Mapa de Três Modos",
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
