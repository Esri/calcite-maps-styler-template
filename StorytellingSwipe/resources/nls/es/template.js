define(
	 ({
		viewer: {
			loading: {
				step1: "CARGANDO HISTORIA",
				step2: "CARGANDO DATOS",
				step3: "INICIALIZANDO",
				fail: "La carga de la comparativa de mapas ha fallado",
				loadBuilder: "CAMBIANDO A MODO DE BUILDER",
				redirectSignIn: "REDIRIGIENDO A LA PÁGINA DE INICIO DE SESIÓN",
				redirectSignIn2: "(se te redirigirá aquí después del inicio de sesión)",
				failButton: "Reintentar"
			},
			errors: {
				boxTitle: "Se ha producido un error",
				portalSelf: "Error muy grave: no se ha podido obtener la configuración del portal",
				invalidConfig: "Error muy grave: configuración no válida",
				invalidConfigNoWebmap: "á_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________Ó",
				invalidConfigNoAppDev: "á_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________Ó.",
				createMap: "No se puede crear el mapa",
				invalidApp: "Error grave: la historia no se puede cargar",
				initMobile: "Bienvenido a la aplicación web para la comparativa. La aplicación no está configurada. El builder interactivo no es compatible con dispositivos móviles.",
				initMobile2: "á_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________Ó.",
				initMobile3: "á_Please rotate your device to landscape orientation to use the Swipe builder________________________Ó.",
				noBuilderIE8: "El builder interactivo de comparativas no es compatible con las versiones anteriores a Internet Explorer 9.",
				noLayerView: "Bienvenido a la aplicación web para la comparativa.<br />La aplicación aún no está configurada.",
				appSave: "Error al guardar la historia web",
				mapSave: "Error al guardar el mapa web",
				notAuthorized: "No tienes autorización para acceder a esta historia",
				notAuthorizedBuilder: "á_You are not authorized to use Swipe and Spyglass builder__________________Ó.",
				conflictingProjectionsTitle: "Conflicto de proyecciones",
				conflictingProjections: "La comparativa de mapas no admite el uso de dos mapas web con distintas proyecciones. Abre los ajustes y utiliza un mapa web que use la misma proyección que el primer mapa web.",
				cpButton: "Cerrar",
				unspecifiedConfigOwner: "El propietario autorizado no se ha configurado.",
				invalidConfigOwner: "El propietario de la historia no está autorizado."
			},
			mobileView: {
				hideIntro: "OCULTAR INTRODUCCIÓN",
				navLeft: "Leyenda",
				navMap: "Mapa",
				navRight: "Datos"
			},
			desktopView: {
				storymapsText: "Un mapa de historias",
				builderButton: "Cambiar a modo de builder",
				facebookTooltip: "Compartir en Facebook",
				twitterTooltip: "Compartir en Twitter",
				bitlyTooltip: "Obtén un vínculo corto",
				tooltipAutoplayDisabled: "á_This isn't available in autoplay mode____________Ó",
				autoplayLabel: "á_Autoplay mode_____Ó",
				autoplayExplain1: "á_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Ó.",
				autoplayExplain2: "á_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Ó."
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURACIÓN DE LA HISTORIA",
				buttonSave: "GUARDAR",
				buttonHelp: "Ayuda",
				buttonShare: "Compartir",
				buttonDiscard: "CANCELAR",
				buttonSettings: "Configuración",
				buttonView: "Modo Vista",
				buttonItem: "Abre el elemento de la aplicación web",
				noPendingChange: "Sin cambios pendientes",
				unSavedChangeSingular: "1 cambio sin guardar",
				unSavedChangePlural: "cambios no guardados",
				popoverDiscard: "¿Estás seguro de que deseas descartar los cambios no guardados?",
				yes: "Sí",
				no: "No",
				popoverOpenViewExplain: "Al abrir el visor, perderás los cambios no guardados",
				popoverOpenViewOk: "Aceptar",
				popoverOpenViewCancel: "Cancelar",
				popoverSaveWhenDone: "No olvides guardar los cambios cuando hayas terminado",
				closeWithPendingChange: "¿Estás seguro de que deseas confirmar la acción? Tus cambios se perderán.",
				gotIt: "Aceptar",
				savingApplication: "Guardando la historia",
				saveSuccess: "á_Story saved____Ó",
				saveError: "Error al guardar. Inténtalo de nuevo",
				saveError2: "Error al guardar a causa de una etiqueta HTML no válida en un nombre o una descripción",
				saveError3: "El título no puede estar vacío",
				signIn: "Inicia sesión con una cuenta en",
				signInTwo: "para guardar la historia."
			},
			header:{
				editMe: "¡Modifícame!",
				templateTitle: "Establecer título de plantilla",
				templateSubtitle: "Establecer subtítulo de plantilla"
			},
			settings: {
				settingsHeader: "Configuración de la historia",
				modalCancel: "Cancelar",
				modalApply: "Aplicar"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Elige un tema para la aplicación o define tus propios colores.",
				settingsLabelColor: "Colores de fondo del encabezado y el panel lateral"
			},
			settingsHeader: {
				settingsTabLogo: "Encabezado",
				settingsLogoExplain: "Personaliza el logotipo del encabezado (el valor máximo es 250 x 50px).",
				settingsLogoEsri: "Logotipo de Esri",
				settingsLogoNone: "Sin logotipo",
				settingsLogoCustom: "Logotipo personalizado",
				settingsLogoCustomPlaceholder: "URL de imagen",
				settingsLogoCustomTargetPlaceholder: "Enlace click-through",
				settingsLogoSocialExplain: "Personaliza el enlace superior derecho del encabezado.",
				settingsLogoSocialText: "Texto",
				settingsLogoSocialLink: "Vínculo",
				settingsLogoSocialDisabled: "El administrador ha deshabilitado esta entidad"
			},
			settingsExtent: {
				settingsTabExtent: "Extensión",
				settingsExtentExplain: "Establecer la extensión inicial mediante el mapa interactivo siguiente.",
				settingsExtentExplainBottom: "La extensión que definas modificará la extensión inicial del mapa web. Ten en cuenta que si estás llevando a cabo una serie comparativa no se usará esa extensión.",
				settingsExtentDateLineError: "La extensión no puede atravesar el meridiano de longitud 180ï¿½",
				settingsExtentDateLineError2: "Error al calcular la extensión",
				settingsExtentDrawBtn: "Dibuja una nueva extensión",
				settingsExtentModifyBtn: "Edita la extensión actual",
				settingsExtentApplyBtn: "Aplica en el mapa principal",
				settingsExtentUseMainMap: "Usa la extensión del mapa principal"
			}
        },
		swipe: {
			mobileData: {
				noData: "No hay datos para mostrar",
				noDataExplain: "Puntea el mapa para seleccionar una entidad y volver aquí",
				noDataMap: "No hay datos para este mapa",
				noPopup: "No se han encontrado ventanas emergentes para esta entidad"
			},
			mobileLegend: {
				noLegend: "No hay leyenda para mostrar."
			},
			swipeSidePanel: {
				editTooltip: "Establecer la descripción del panel lateral",
				editMe: "¡Modifícame!",
				legendTitle: "Leyenda"
			},
			infoWindow: {
				noFeature: "No hay datos que mostrar",
				noFeatureExplain: "Puntea el mapa para seleccionar una entidad"
			},
			settingsLayout: {
				settingsTabLayout: "Cambiar estilo",
				settingsLayoutExplain: "Elige un estilo para la comparativa de mapas.",
				settingsLayoutSwipe: "Barra vertical",
				settingsLayoutSpyGlass: "Lupa",
				settingsLayoutSelected: "Diseño seleccionado",
				settingsLayoutSelect: "Selecciona este diseño",
				settingsSaveConfirm: "Algunos de tus cambios requieren que guardes y vuelvas a cargar la historia"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tipo de comparación",
				settingsDataModelExplainSwipe: "¿Qué quieres que comparen los usuarios?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Elige la capa o el mapa web que aparecerá en la lupa.",
				settingsDataModelOneMap: "Una capa en un mapa web",
				settingsDataModel1Explain: "Selecciona la capa que quieras comparar",
				settingsDataModel1Warning: "Si la capa está oculta por capas superiores, la comparativa de mapas no tendrá ningún efecto.",
				settingsDataModel1SpyGlassExplain: "Selecciona la capa que aparecerá en la lupa.",
				settingsDataModelTwoMaps: "Dos mapas Web",
				settingsDataModelLayerIds: "ID de capa de mapa web",
				settingsDataModelSelected: "Tipo seleccionado",
				settingsDataModelWebmapSwipeId1: "ID del mapa web derecho",
				settingsDataModelWebmapSwipeId2: "ID del mapa web izquierdo",
				settingsDataModelWebmapGlassId1: "ID del mapa web principal",
				settingsDataModelWebmapGlassId2: "ID del mapa web de la lupa",
				settingsDataModelSelect: "Selecciona este tipo",
				settingsDataModel2Explain: "Comparar con otro mapa web.",
				settingsDataModel2SpyGlassExplain: "Deja al descubierto otro mapa web.",
				settingsDataModel2HelpTitle: "¿Cómo puedo encontrar el ID de un mapa web?",
				settingsDataModel2HelpContent: "Copia y pega los dígitos que hay tras el signo \"=\" en la URL del mapa Web",
				switchMaps: "Intercambiar mapas",
				browseWebMaps: "Examinar mapas web"
			},
			settingsLegend: {
				settingsTabLegend: "Diseño de la aplicación",
				settingsLegendExplain: "Selecciona los ajustes de diseño.",
				settingsLegendEnable: "Activar leyenda",
				settingsDescriptionEnable: "Activar descripción",
				settingsBookmarksEnable: "Activar series de comparativas",
				settingsPopupDisable: "á_Enable pop-up_____Ó",
				settingsLocationSearchEnable: "Habilitar la búsqueda del localizador",
				settingsGeolocatorEnable: "Habilitar geolocalizador",
				settingsLegendHelpContent: "á_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________Ó",
				settingsSeriesHelpContent: "Las series comparativas es una opción de navegación por pestañas que guía al usuario a una extensión concreta y muestra un título y un texto descriptivo en el panel lateral. En el momento de la primera activación, los marcadores de mapas web se importarán y usarán para rellenar la barra de series. Si deshabilitas esta opción, la barra de series se desactivará, pero la configuración de las series se conservará para usarse de nuevo.",
				settingsSeriesHelpContent2: "Las series de comparativas te permiten crear y editar una selección de ubicaciones junto con títulos y texto. Si tu mapa web tiene marcadores de posición, se mostrarán. Puedes desactivar las series, pero la configuración se mantendrá para su uso futuro.",
				settingsSeriesHelpLink: "Mira un ejemplo de una aplicación con una serie de comparativas aquí",
				preview: "Vista previa de la interfaz de usuario",
				settingsLocateButtonExplain: "Esta funcionalidad es compatible con la mayoría de dispositivos móviles y navegadores de escritorio (incluido Internet Explorer 9+).",
				settingsLocateButton: "Habilitar un botón \'Localizar\' en los navegadores compatibles",
				settingsAddressSearch: "Habilitar una herramienta de búsqueda de direcciones"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Ventana emergente",
				settingsSwipePopupExplain: "Personaliza la apariencia de los encabezados emergentes para ayudar al usuario a asociar las ventanas emergentes con las capas de mapas.",
				settingsSwipePopupSwipe1: "Mapa izquierdo",
				settingsSwipePopupSwipe2: "Mapa derecho",
				settingsSwipePopupGlass1: "Mapa principal",
				settingsSwipePopupGlass2: "Mapa de la lupa",
				settingsSwipePopupTitle: "Título del encabezado",
				settingsSwipePopupColor: "Color del encabezado"
			},
			initPopup: {
				initHeader: "Bienvenido al builder de Comparativa/Lupa",
				modalNext: "Siguiente",
				modalPrev: "Anterior",
				modalApply: "Abrir la aplicación"
			},
			seriesPanel: {
				title: "Título",
				descr: "Descripción",
				discard: "Descartar marcadores",
				saveExtent: "Configurar extensión de marcadores",
				discardDisabled: "No puedes eliminar ese marcador. Las series comparativas pueden deshabilitarse en la Configuración."
			},
			helpPopup: {
				title: "Ayuda",
				close: "Cerrar",
				tab1: {
					div1: "La plantilla Comparativa/Lupa se ha diseñado para comparar dos mapas web o dos capas de un mismo mapa web en una aplicación web atractiva y fácil de usar que se puede utilizar en cualquier navegador web o dispositivo, incluidos los smartphones y las tablets.",
					div2: "Si quieres obtener información adicional sobre la plantilla Comparativa/Lupa, incluidos algunos ejemplos creados por los usuarios, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visita el sitio web de Story Maps</a>. También puedes seguirnos en Twitter en <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Nos gusta mucho tener noticias tuyas. Tanto si tienes alguna pregunta, si deseas solicitar un nueva característica o si crees que has encontrado un error, visita el <a href='http://links.esri.com/storymaps/forum' target='_blank'>foro de usuarios de Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "á_Story saved____Ó",
				manageStory: "á_Manage your story______Ó",
				manageStoryA1: "á_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________Ó.",
				manageStoryA1V1: "á_My Stories____Ó",
				manageStoryA1V2: "á_blog posts____Ó",
				shareTitle: "Compartir tu historia",
				sharePrivateHeader: "Tu historia no está compartida. ¿Quieres compartirla?",
				sharePrivateBtn1: "Compartir públicamente",
				sharePrivateBtn2: "Compartir con mi organización",
				sharePrivateProgress: "Uso compartido en curso...",
				sharePrivateErr: "Error del uso compartido. Inténtalo de nuevo o",
				sharePrivateOk: "á_Sharing updated, loading_________Ó...",
				shareStatus1: "No se ha guardado la historia",
				shareStatus2: "La historia se ha compartido públicamente",
				shareStatus3: "La historia se ha compartido en la organización",
				shareStatus4: "No se ha compartido la historia",
				sharePreviewAsUser: "Presentación preliminar",
				shareHeader1: "Tu historia está <strong>accesible públicamente</strong>.",
				shareHeader2: "Tu historia está accesible para los miembros de tu organización (se necesita iniciar sesión).",
				shareLinkHeader: "á_Share your story______Ó",
				shareLinkOpen: "ABRIR",
				learnMore: "Más información",
				shareA1: "Usa %SHAREIMG% en <a href='%LINK1%' target='_blank'>la página de elemento de la aplicación</a>. Si también quieres dejar de compartir el mapa web, usa <a href='%LINK2%' target='_blank'>la página de elemento del mapa web</a>.",
				shareWarning: "Se ha deshabilitado la opción de compartir %WITH% porque no eres el propietario del <a href='%LINK%' target='_blank'>mapa web</a>.",
				shareWarningWith1: "á_publicly___Ó",
				shareWarningWith2: "á_publicly and with the Organization___________Ó"
			},
			directCreation: {
				header: "Bienvenido al builder de Comparativa/Lupa",
				mapPickHeader: "Para empezar, escribe un Id. de mapa web válido o usa el botón de búsqueda para examinar mapas web.",
				launchBuilder: "Iniciar Builder",
				chooseWebmapLbl: "Elegir mapa web...",
				explain2: "á_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________Ó.",
				explain3: "Si deseas usar dos mapas web en tu mapa de historia, se te pedirá el segundo mapa web más adelante cuando elijas esa opción.",
				webmapPlaceholder: "Especificar un Id. de mapa web..."
			},
			saveErrorSocial: {
				title: "á_Social media sharing update_________Ó",
				panel1: "á_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________Ó.",
				panel1tooltip: "á_By defining a title, summary and thumbnail image, your story will look like this_________________________Ó:",
				panel2:	"á_Which title would you like to use on social media________________Ó:",
				panel2q1: "á_Story title (recommended)_________Ó",
				panel2q1tooltip: "á_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________Ó.",
				panel2q2: "á_Item title____Ó",
				panel3: "á_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________Ó.",
				panel4: "á_Do not warn me again for this story____________Ó",
				mystories: "á_My Stories____Ó",
				btnSave: "á_Save__Ó"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Mi organización",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Mi contenido",
					favoritesLabel: "Mis favoritos"
				},
				title: "á_Select Web Map_____Ó",
				searchTitle: "Buscar",
				ok: "Aceptar",
				cancel: "Cancelar",
				placeholder: "Introducir término de búsqueda"
			}
		}
    })
);
