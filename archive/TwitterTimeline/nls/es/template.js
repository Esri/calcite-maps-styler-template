define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel:{
   	label: "Búsqueda en Twitter"
    },
    errors:{
      createMap: "No se puede crear el mapa",
      general: "Error"
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
      datePattern: "d MMMM, h:mm a",
      timeRange: "<b>Publicaciones en Twitter desde:</b> ${start_time} hasta ${end_time}"
    },
    tweets: {
        "screenName": "Nombre de pantalla",
        "signIn": "Iniciar sesión",
        "switchAccount": "Cambiar la cuenta",
        label: "Publicaciones en Twitter",
        title: "Publicaciones en Twitter",
        status: "recuperando publicaciones en Twitter y generando cronología...",
        error: "Ningún resultado encontrado",
        datePattern: "d MMM aa",
        timePattern: "h:mma",
		search:{
			label: "Buscar",
			title: "Buscar en Twitter",
			placeholder: "Buscar en Twitter por palabra clave"
		},
		clear:{
			label: "Borrar",
			title: "Borrar mapa"
		}
			
	 }
    }
})
);