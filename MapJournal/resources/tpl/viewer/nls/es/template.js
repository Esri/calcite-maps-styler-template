define(
	 ({
		viewer: {
			common: {
				close: "Cerrar"
			},
			loading: {
				step1: "Cargando historia",
				step2: "Cargando datos",
				step3: "Inicializando",
				loadBuilder: "Cambiando a Builder",
				long: "Map Journal se está inicializando",
				long2: "Gracias por esperar",
				failButton: "Volver a cargar la historia"
			},
			signin: {
				title: "Se requiere autenticación",
				explainViewer: "Inicia sesión con una cuenta en %PORTAL_LINK% para acceder a la historia.",
				explainBuilder: "Inicia sesión con una cuenta en %PORTAL_LINK% para configurar la historia."
			},
			errors: {
				boxTitle: "Se ha producido un error",
				invalidConfig: "Configuración no válida",
				invalidConfigNoApp: "No se ha especificado el identificador de la aplicación en index.html.",
				invalidConfigNoAppDev: "á_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________Ó.",
				unspecifiedConfigOwner: "El propietario autorizado no se ha configurado.",
				invalidConfigOwner: "El propietario de la historia no está autorizado.",
				createMap: "No se puede crear el mapa",
				invalidApp: "No se puede acceder a %TPL_NAME% o no existe.",
				appLoadingFail: "Se ha producido un error, %TPL_NAME% no se cargó correctamente.",
				notConfiguredDesktop: "La historia no se ha configurado todavía.",
				notConfiguredMobile: "á_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________Ó.",
				notConfiguredMobile2: "á_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________Ó.",
				notAuthorized: "No tienes autorización para acceder a esta historia",
				notAuthorizedBuilder: "á_You are not authorized to use %TPL_NAME% builder________________Ó.",
				noBuilderIE: "El builder no es compatible con versiones de Internet Explorer anteriores a la %VERSION%. %UPGRADE%",
				noViewerIE: "Esta historia no es compatible con versiones de Internet Explorer anteriores a la %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Actualiza tu navegador</a>.",
				mapLoadingFail: "á_Something went wrong, the map did not load correctly_________________Ó.",
				signOut: "Cerrar sesión"
			},
			mobileView: {
				tapForDetails: "Tocar para ver detalles",
				clickForDetails: "Más información",
				swipeToExplore: "Barrer para explorar",
				tapForMap: "Tocar para volver al mapa",
				clickForMap: "VOLVER AL MAPA"
			},
			floatLayout: {
				scroll: "Desplazar"
			},
			sideLayout: {
				scroll: "Desplázate hacia abajo para obtener más información"
			},
			mainStage: {
				back: "Atrás"
			},
			headerFromCommon: {
				storymapsText: "Un mapa de historias",
				builderButton: "Editar",
				facebookTooltip: "Compartir en Facebook",
				twitterTooltip: "Compartir en Twitter",
				bitlyTooltip: "Obtén un vínculo corto",
				templateTitle: "Establecer título de plantilla",
				templateSubtitle: "Establecer subtítulo de plantilla",
				share: "Compartir",
				checking: "Comprobando el contenido de tu historia",
				fix: "Soluciona los problemas de tu historia",
				noerrors: "No se ha detectado ningún problema",
				tooltipAutoplayDisabled: "á_This isn't available in autoplay mode____________Ó",
				notshared: "á_Story not shared______Ó"
			},
			overviewFromCommon: {
				title: "Mapa de vista general"
			},
			legendFromCommon: {
				title: "Leyenda"
			},
			shareFromCommon: {
				copy: "Copiar",
				copied: "Copiado",
				open: "Abrir",
				embed: "Integrar en página web",
				embedExplain: "Usa el siguiente código HTML para integrar el diario en una página web.",
				size: "Tamaño (ancho/alto):",
				autoplayLabel: "á_Autoplay mode_____Ó",
				autoplayExplain1: "á_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Ó.",
				autoplayExplain2: "á_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Ó.",
				linksupdated: "á_Links updated_____Ó!"
			}
        }
    })
);