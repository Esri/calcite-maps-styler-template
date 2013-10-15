define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Pesquisa do Twitter"
    },
    errors:{
      createMap: "Não foi possível criar o mapa",
      general: "Erro"
    }
  },
  tools:{
     time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      datePattern: "d' de 'MMMM, h:mm a",
      timeRange: "<b>Tweets de:</b> ${start_time} para ${end_time}"
    },
    tweets: {
        "screenName": "Nome da tela",
        "signIn": "Registrar",
        "switchAccount": "Trocar conta",
        label: "Tweets",
        title: "Tweets",
        status: "buscando tweets e gerando linha do tempo ...",
        error: "Nenhum resultado localizado",
        datePattern: "d\' de \'MMMM\' de \'yy",
        timePattern: "h:mma",
		search:{
			label: "Pesquisar",
			title: "Pesquisar no Twitter",
			placeholder: "Pesquisar no Twitter por Palavras-Chaves"
		},
		clear:{
			label: "Limpar",
			title: "Limpar Mapa"
		}
			
	 }
    }
})
);