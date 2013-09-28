define(
({
  viewer:{
    title: "Vertaa Web-karttoja",
    main:{
        loading:{
            loadingMessage: "Ladataan Web-karttoja...",
            title: "Vertaa Web-karttoja"
        },
        contextMenu:{
            title: "Napsauta karttaa hiiren kakkospainikkeella, niin saat lisää asetuksia.",
            zoom: "Tarkenna alkuperäiseen laajuuteen",
            scale: "mittakaava",
            location: "sijainti",
            scaleAndLocation: "mittakaava ja sijainti",
            adjust: "Säädä muut kartat tähän"
        },
      title: "Kolmesuuntainen kartan katseluohjelma",
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Karttaa ei voi luoda",
      general:"Error",
      webmapDescription: "...kuvausta ei ole saatavissa...",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SYNKRONOI KARTAT:",
            scaleLabel: "Mittakaava",
            locationLabel: "Sijainti"
            
        },
        map:{
            label: "KARTAN TIEDOT",
            descriptionLabel: "Kuvaus",
            contentLabel: "Sisältö",
            legendLabel: "Selite"
        }
    }
  }
})
);
