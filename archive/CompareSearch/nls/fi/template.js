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
      title: "Vertaa Web-karttoja",
      scaleBarUnits: "english" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Karttaa ei voi luoda",
      general:"Error",
      webmapDescription: "...kuvausta ei ole saatavissa",
      legend:"No legend",
      bingMessage: "Bing-avain puuttuu"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        save:{
            label: "Tallenna Web-kartat",
            alt: "Tallenna",
            title: "Tallenna Web-kartat",
            message: "Web-kartat on tällä hetkellä tallennettu",
            changeMessage: "Web-kartat ovat muuttuneet",
            clearMessage: "Web-kartat on tyhjennetty"
        },
        search:{
            alt: "Etsi",
            title: "Etsi",
            placeholder: "anna hakuteksti",
            message: "Etsitään…",
            results: "Web-karttoja löytyi"
        },
        clear:{
            alt: "Tyhjennä",
            title: "Tyhjennä Web-kartat (käytä oletus-Web-karttoja)"
        },
        find:{
            label: "Etsi Web-karttoja"
        },
        sync:{
            label: "SYNKRONOI KARTAT:",
            scaleLabel: "Mittakaava",
            locationLabel: "Sijainti"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Kuvaus",
            contentLabel: "Sisältö",
            legendLabel: "Selite"
        }
    }
  }
})

);