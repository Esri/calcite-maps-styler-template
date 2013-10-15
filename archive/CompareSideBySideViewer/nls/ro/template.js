define(
({
  viewer:{
    title: "Vizualizator hărţi cu trei moduri",
    main:{
        loading:{
            loadingMessage: "Se încarcă hărţi Web…",
            title: "Comparare hărţi"
        },
        contextMenu:{
            title: "Pentru opţiuni suplimentare, faceţi clic dreapta pe hartă.",
            zoom: "Transfocaţi la extinderea iniţială",
            scale: "scară",
            location: "locaţie",
            scaleAndLocation: "scară şi locaţie",
            adjust: "Ajustare alte hărţi la aceasta"
        },
      iosTooltip: "* Faceţi clic pe titlul unei hărţi pentru a seta harta sursă",
      title: "Vizualizator hărţi cu trei moduri",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "Imposibil de creat harta",
      general:"Error",
      webmapDescription: "...nicio descriere disponibilă…",
      legend:"No legend"
    },
    footer:{
    	label:"A map from:"
    },
    sidePanel:{
        sync:{
            label: "SINCRONIZARE HĂRŢI:",
            scaleLabel: "Scară",
            locationLabel: "Locaţie"
            
        },
        map:{
            label:"MAP INFORMATION",
            descriptionLabel: "Descriere",
            contentLabel: "Conţinut",
            legendLabel: "Legendă"
        }
    }
  }
})
);
