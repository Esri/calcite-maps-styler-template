define(
({
  viewer:{
    title: "Comparar Mapas Web",
    main:{
        loading:{
            loadingMessage: "A carregar Mapas Web…",
            title: "Comparar Mapas Web"
        },
        contextMenu:{
            title: "Clique com o botão direito sobre o mapa para mais opções.",
            zoom: "Efetuar Zoom para a Extensão Inicial",
            scale: "escala",
            location: "localização",
            scaleAndLocation: "escala e localização",
            adjust: "Ajustar os outros mapas a este"
        },
      title: "Comparar Mapas Web",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Não foi possível criar o mapa",
      general:"Error",
      webmapDescription: "...nenhuma descrição disponível…",
      legend:"No legend",
      bingMessage: "Chave Bing Ausente"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Guardar Mapas Web",
            alt: "Guardar",
            title: "Guardar Mapas Web",
            message: "Os Mapas Web estão atualmente guardados",
            changeMessage: "Os Mapas Web foram alterados",
            clearMessage: "Os Mapas Web foram limpos"
        },
        search:{
            alt: "Pesquisar",
            title: "Pesquisar",
            placeholder: "inserir texto de pesquisa",
            message: "Pesquisando …",
            results: "Mapas Web encontrados"
        },
        clear:{
            alt: "Limpar",
            title: "Limpar Mapas Web (utilizar Mapas Web padrão)"
        },
        find:{
            label: "Localizar Mapas Web"
        },
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