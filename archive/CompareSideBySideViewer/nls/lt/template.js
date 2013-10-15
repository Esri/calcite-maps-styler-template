define(
({
  viewer:{
    title: "Trijų padėčių žemėlapio peržiūros programa",
    main:{
        loading:{
            loadingMessage: "Įkeliami internetiniai žemėlapiai…",
            title: "Palyginti žemėlapius"
        },
        contextMenu:{
            title: "Daugiau parinkčių rasite paspaudę dešiniuoju pelės klavišu.",
            zoom: "Grįžti į pradinę aprėptį",
            scale: "mastelis",
            location: "vieta",
            scaleAndLocation: "vieta ir mastelis",
            adjust: "Priderinti kitus žemėlapius prie šio"
        },
      iosTooltip: "* Paspauskite ant žemėlapio antraštės žemėlapio šaltiniui nustatyti",
      title: "Trijų padėčių žemėlapio peržiūros programa",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Žemėlapio sukurti nepavyko",
      general:"Error",
      webmapDescription: "...aprašo nėra…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SINCHRONIZUOTI ŽEMĖLAPIUS:",
            scaleLabel: "Mastelis",
            locationLabel: "Vieta"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Aprašas",
            contentLabel: "Turinys",
            legendLabel: "Legenda"
        }
    }
  }
})
);
