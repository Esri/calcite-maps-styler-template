define(
	({
		viewer: {
			loading: {
				step1: "CARGANDO APLICACIÓN",
				step2: "CARGANDO DATOS",
				step3: "INICIALIZANDO",
				fail: "La carga de la comparativa de mapas ha fallado",
				loadBuilder: "CAMBIANDO A MODO DE BUILDER",
				redirectSignIn: "á_REDIRECTING TO SIGN-IN PAGE_Ó",
				redirectSignIn2: "á_(you will be redirected here after sign-in)_Ó",
				failButton: "Reintentar"
			},
			errors: {
				boxTitle: "Se ha producido un error",
				portalSelf: "Error muy grave: no se ha podido obtener la configuración del portal",
				invalidConfig: "Error muy grave: configuración no válida",
				invalidConfigNoWebmap: "Error muy grave: configuración no válida (no se ha especificado mapa Web)",
				createMap: "No se puede crear el mapa",
				invalidApp: "Error muy grave: la aplicación no se puede cargar",
				initMobile: "Bienvenido a la aplicación Web para la comparativa. La aplicación no está configurada. El builder interactivo no es compatible con dispositivos móviles.",
				noBuilderIE8: "El builder interactivo de comparativas no es compatible con las versiones anteriores a Internet Explorer 9.",
				noLayerView: "Bienvenido a la aplicación Web para la comparativa.<br />La aplicación aún no está configurada.",
				appSave: "Error al guardar la aplicación web",
				mapSave: "Error al guardar el mapa web",
				notAuthorized: "No tienes autorización para acceder a esta aplicación",
				conflictingProjectionsTitle: "Conflicto de proyecciones",
				conflictingProjections: "La comparativa de mapas no admite el uso de dos mapas web con distintas proyecciones. Abre los ajustes y utiliza un mapa web que use la misma proyección que el primer mapa.",
				cpButton: "Cerrar"
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
				bitlyTooltip: "Consigue un enlace corto a la aplicación"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURACIÓN DE LA APLICACIÓN",
				buttonSave: "GUARDAR",
				buttonHelp: "á_Help_Ó",
				buttonShare: "á_Share_Ó",
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
				savingApplication: "Guardando la aplicación",
				saveSuccess: "La aplicación se ha guardado con éxito",
				saveError: "Error al guardar. Inténtalo de nuevo",
				saveError2: "á_Save failed due to an invalid html tag in a name or description_Ó",
				saveError3: "á_The title can't be empty_Ó",
				signIn: "Inicia sesión con una cuenta en",
				signInTwo: "para guardar la aplicación."
			},
			header:{
				editMe: "¡Modifícame!",
				templateTitle: "Establecer título de plantilla",
				templateSubtitle: "Establecer subtítulo de plantilla"
			},
			settings: {
				settingsHeader: "Ajustes de la aplicación",
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
				settingsExtentDateLineError: "á_The extent cannot be across the meridian of 180ï¿½ longitude_Ó",
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
				settingsLayoutSpyGlass: "Catalejo",
				settingsLayoutSelected: "Diseño seleccionado",
				settingsLayoutSelect: "Selecciona este diseño",
				settingsSaveConfirm: "Algunos de tus cambios requieren que guardes y vuelvas a cargar la aplicación"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tipo de comparación",
				settingsDataModelExplainSwipe: "¿Qué quieres que comparen los usuarios?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Elige la capa o el mapa Web que aparecerá en el catalejo.",
				settingsDataModelOneMap: "Una capa en un mapa web",
				settingsDataModel1Explain: "Selecciona la capa que quieras comparar",
				settingsDataModel1Warning: "Si la capa está oculta por capas superiores, la comparativa de mapas no tendrá ningún efecto.",
				settingsDataModel1SpyGlassExplain: "Selecciona la capa que aparecerá en el catalejo.",
				settingsDataModelTwoMaps: "Dos mapas Web",
				settingsDataModelLayerIds: "ID de capa de mapa Web",
				settingsDataModelSelected: "Tipo seleccionado",
				settingsDataModelWebmapSwipeId1: "ID del mapa Web derecho",
				settingsDataModelWebmapSwipeId2: "ID del mapa Web izquierdo",
				settingsDataModelWebmapGlassId1: "ID del mapa Web principal",
				settingsDataModelWebmapGlassId2: "ID del mapa Web de catalejo",
				settingsDataModelSelect: "Selecciona este tipo",
				settingsDataModel2Explain: "Comparar con otro mapa Web.",
				settingsDataModel2SpyGlassExplain: "Deja al descubierto otro mapa Web.",
				settingsDataModel2HelpTitle: "¿Cómo puedo encontrar el ID de un mapa Web?",
				settingsDataModel2HelpContent: "Copia y pega los dígitos que hay tras el signo \"=\" en la URL del mapa Web",
				switchMaps: "á_Switch maps_Ó",
				browseWebMaps: "á_Browse web maps_Ó"
			},
			settingsLegend: {
				settingsTabLegend: "Diseño de la aplicación",
				settingsLegendExplain: "Selecciona los ajustes de diseño de la aplicación.",
				settingsLegendEnable: "Activar leyenda",
				settingsDescriptionEnable: "Activar descripción",
				settingsBookmarksEnable: "Activar series de comparativas",
				settingsPopupDisable: "Habilitar ventana emergente",
				settingsLocationSearchEnable: "Habilitar la búsqueda del localizador",
				settingsGeolocatorEnable: "Habilitar geolocalizador",
				settingsLegendHelpContent: "Utiliza la tabla de contenido del visor de mapas web de ArcGIS.com (ocultar en leyenda) para delimitar el contenido de la leyenda.",
				settingsSeriesHelpContent: "Las series comparativas es una opción de navegación por pestañas que guía al usuario a una extensión concreta y muestra un título y un texto descriptivo en el panel lateral. En el momento de la primera activación, los marcadores de mapas web se importarán y usarán para rellenar la barra de series. Si deshabilitas esta opción, la barra de series se desactivará, pero la configuración de las series se conservará para usarse de nuevo.", 
				settingsSeriesHelpContent2: "Las series de comparativas te permiten crear y editar una selección de ubicaciones junto con títulos y texto. Si tu mapa Web tiene marcadores de posición, se mostrarán. Puedes desactivar las series, pero la configuración se mantendrá para su uso futuro.",
				settingsSeriesHelpLink: "Mira un ejemplo de una aplicación con una serie de comparativas aquí",
				preview: "Vista previa de la interfaz de usuario",
				settingsLocateButtonExplain: "Esta funcionalidad es compatible con la mayoría de dispositivos móviles y navegadores de escritorio (incluido Internet Explorer 9+).",
				settingsLocateButton: "á_Enable a 'Locate' button on supported browsers_Ó",
				settingsAddressSearch: "Habilitar una herramienta de búsqueda de direcciones"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Ventana emergente",
				settingsSwipePopupExplain: "Personaliza la apariencia de los encabezados emergentes para ayudar al usuario a asociar las ventanas emergentes con las capas de mapas.",
				settingsSwipePopupSwipe1: "Mapa izquierdo",
				settingsSwipePopupSwipe2: "Mapa derecho",
				settingsSwipePopupGlass1: "Mapa principal",
				settingsSwipePopupGlass2: "Mapa de catalejo",
				settingsSwipePopupTitle: "Título del encabezado",
				settingsSwipePopupColor: "Color del encabezado"
			},
			initPopup: {
				initHeader: "á_Welcome to the Swipe/Spyglass Builder_Ó",
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
				title: "á_Help_Ó",
				close: "á_Close_Ó",
				tab1: {
					div1: "á_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._Ó",
					div2: "á_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._Ó",
					div3: "á_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._Ó"
				}
			},
			share: {
				firstSaveTitle: "á_Application successfully saved_Ó",
				firstSaveHeader: "á_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._Ó",
				firstSaveA1: "á_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_Ó",
				firstSaveA1bis: "á_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._Ó",
				firstSaveQ2: "á_Is my Application shared?_Ó",
				firstSaveA2: "á_Currently your Application is not shared. To share it, use the SHARE button._Ó",
				shareTitle: "á_Share your Application_Ó",
				sharePrivateHeader: "á_Your Application is not shared, would you like to share it?_Ó",
				sharePrivateBtn1: "á_Share publicly_Ó",
				sharePrivateBtn2: "á_Share with my Organization_Ó",
				sharePrivateProgress: "á_Sharing in progress..._Ó",
				sharePrivateErr: "á_Sharing failed, try again or_Ó",
				sharePrivateOk: "á_Sharing updated successfully, loading..._Ó",
				shareStatus1: "á_Application is not saved_Ó",
				shareStatus2: "á_Application is shared publicly_Ó",
				shareStatus3: "á_Application is shared within the organization_Ó",
				shareStatus4: "á_Application is not shared_Ó",
				sharePreviewAsUser: "á_Preview_Ó",
				shareHeader1: "á_Your Application is <strong>publicly accessible</strong>._Ó",
				shareHeader2: "á_Your Application is accessible by your organization members (login is required)._Ó",
				shareLinkHeader: "á_Share the Application with your audience_Ó",
				shareLinkOpen: "á_OPEN_Ó",
				learnMore: "á_Learn more_Ó",
				shareQ1Opt1: "á_How do I keep the Application private?_Ó",
				shareQ1Opt2: "á_How do I keep the Application private or share it publicly?_Ó",
				shareA1: "á_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._Ó",
				shareA1bis: "á_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._Ó",
				shareQ2: "á_How do I edit the Application later?_Ó",
				shareQ2bis: "á_How do I get back to the authoring interface?_Ó",
				shareA2div1: "á_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._Ó",
				shareA2div2: "á_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_Ó",				
				shareQ3: "á_Where is the data stored?_Ó",
				shareA3: "á_The Application configuration is stored in this web application item</a>._Ó",
				shareWarning: "á_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._Ó",
 				shareWarningWith1: "á_publicly_Ó",
 				shareWarningWith2: "á_publicly and with the Organization_Ó"
			},
			directCreation: {
				header: "á_Welcome to the Swipe/Spyglass Builder_Ó",
				mapPickHeader: "á_To get started, please input a valid web map id, or use the search button to browse web maps._Ó",
				launchBuilder: "á_Launch Builder_Ó"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "á_My Organization_Ó",
					onlineLabel: "á_ArcGIS Online_Ó",
					contentLabel: "á_My Content_Ó",
					favoritesLabel: "á_My Favorites_Ó"
				},
				title: "á_Select Web Map_Ó",
				searchTitle: "á_Search_Ó",
				ok: "á_Ok_Ó",
				cancel: "á_Cancel_Ó",
				placeholder: "á_Enter search term_Ó"
			}
		}
    })
);