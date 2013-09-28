define(
({
  viewer:{
    title: "Comparar Mapas da Web",
    main:{
        loading:{
            loadingMessage: "Carregando Mapas da Web…",
            title: "Comparar Mapas da Web"
        },
        contextMenu:{
            title: "Clique com o botão direito para mais opções.",
            zoom: "Zoom na Extensão Inicial",
            scale: "escala",
            location: "localização",
            scaleAndLocation: "escala e localização",
            adjust: "Ajustar com outros mapas"
        },
      title: "Comparar Mapas da Web",
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
            label: "Salvar Mapas da Web",
            alt: "Salvar",
            title: "Salvar Mapas da Web",
            message: "Os Mapas da Web estão atualmente salvos",
            changeMessage: "Os Mapas da Web foram alterados",
            clearMessage: "Os Mapas da Web foram limpos"
        },
        search:{
            alt: "Pesquisar",
            title: "Pesquisar",
            placeholder: "inserir texto de pesquisa",
            message: "Pesquisando …",
            results: "Mapas da Web localizados"
        },
        clear:{
            alt: "Limpar",
            title: "Limpar Mapas da Web (utilizar Mapas da Web padrões)"
        },
        find:{
            label: "Localizar Mapas da Web"
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