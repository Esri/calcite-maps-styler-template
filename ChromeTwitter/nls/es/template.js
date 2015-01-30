define(
   ({
  viewer: {
    main: {
      ownerText: "á_A map from_Ó: ",
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
   sidePanel: {
   	label: "Descripción"
    },
    errors: {
      createMap: "No se puede crear el mapa",
      general: "Error"
    }
  },
  tools: {
    tweets: {
    "screenName": "Nombre de pantalla",
    "signIn": "Iniciar sesión",
    "switchAccount": "Cambiar la cuenta",
    // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
    // yyyy: full year, e.g. 2011
    // MMMM: full month name, e.g. December
    // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
    // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
    // a: am/pm
    // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
    // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
    // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
    datePattern: "d MMM aa",
    timePattern: "h:mma",
    reply: "Responder",
    retweet:"Retuitear",
    favorite:"Favorito",
    label: "Publicaciones en Twitter",
    title: "Publicaciones en Twitter",
    error: "Ningún resultado encontrado, intenta buscar con otro término o ubicación",
		search: {
			label: "Buscar",
			title: "Buscar en Twitter",
			placeholder: 'Palabras clave para buscar'
		},
		clear: {
			label: "Borrar",
			title: "Borrar mapa"
		},
		share: {
			label: "Compartir mapa:",
			email:{
				title: "Correo electrónico",
				label: "Correo electrónico"
			},
			twitter: {
				title: "Twitter",
				label: "Twitter"
			},
			facebook: {
				title: "Facebook",
				label: "Facebook"
			}
		}
	 }
   }
})
);
