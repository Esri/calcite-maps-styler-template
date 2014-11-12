define(
	 ({
		commonCore: {
			common: {
				add: "Agregar",
				edit: "Editar",
				save: "Guardar",
				next: "Siguiente",
				cancel: "Cancelar",
				back: "Atrás",
				apply: "Aplicar",
				close: "Cerrar",
				open: "Abrir",
				start: "Inicio",
				loading: "Cargando",
				disabledAdmin: "El administrador ha deshabilitado esta entidad",
				width: "Ancho",
				height: "Altura"
			},
			inlineFieldEdit: {
				editMe: "¡Edítame!"
			},
			builderPanel: {
				panelHeader: "Builder de %TPL_NAME%",
				buttonSaving: "Guardando",
				buttonSaved: "Guardado",
				buttonShare: "Compartir",
				buttonSettings: "Configuración",
				buttonHelp: "Ayuda",
				buttonPreview: "Ver en directo",
				tooltipFirstSave: "á_This isn't available until you save_Ó.",
				tooltipNotShared: "á_This isn't available until you share_Ó.",
				noPendingChange: "Sin cambios pendientes",
				unSavedChangePlural: "Cambios pendientes",
				closeWithPendingChange: "¿Estás seguro de que deseas confirmar esta acción? Los cambios se perderán.",
				saveError: "Error al guardar. Inténtalo de nuevo",
				shareStatus1: "La aplicación no se ha guardado aún",
				shareStatus2: "La aplicación se comparte públicamente",
				shareStatus3: "La aplicación se comparte dentro de la organización",
				shareStatus4: "La aplicación no se comparte"
			},
			saveError: {
				title: "Error al guardar la aplicación",
				err1Div1: "La aplicación no se puede guardar porque ya tienes otro elemento con el mismo nombre (comprueba la <a class='linkagolroot' target='_blank'>carpeta de contenido</a>).",
				err1Div2: "á_Please modify the title of your application and then save it_Ó.",
				btnOk: "á_Edit the application title_Ó"
			},
			share: {
				firstSaveTitle: "La aplicación se ha guardado correctamente",
				firstSaveHeader: "La aplicación se ha guardado en %PORTAL%, pero aún no se ha compartido.",
				firstSavePreview: "Presentación preliminar",
				firstSaveShare: "Compartir",
				firstSaveA1: "Si no estás familiarizado con %PORTAL% o necesitas un acceso directo para acceder a la interfaz del Builder, puedes guardar el vínculo siguiente: %LINK1%",
				firstSaveA1bis: "Esta aplicación también se puede encontrar en tu <a href='%LINK2%' target='_blank'>carpeta de contenido de %PORTAL%</a>.",
				shareTitle: "Compartir tu aplicación",
				sharePrivateHeader: "Tu aplicación no se ha compartido. ¿Te gustaría compartirla?",
				sharePrivateBtn1: "Compartir públicamente",
				sharePrivateBtn2: "Compartir con mi organización",
				sharePrivateWarning: "Se ha deshabilitado la opción de compartir %WITH% porque no eres el propietario del <a href='%LINK%' target='_blank'>mapa web</a>.",
				sharePrivateWarningWith1: "públicamente",
				sharePrivateWarningWith2: "públicamente y con la organización",
				sharePrivateProgress: "Uso compartido en curso...",
				sharePrivateErr: "Error del uso compartido. Inténtalo de nuevo o",
				sharePrivateOk: "Uso compartido actualizado correctamente, cargando...",
				shareHeader1: "Tu aplicación está <strong>disponible públicamente</strong>.",
				shareHeader2: "Tu aplicación está disponible para los miembros de tu organización (se requiere inicio de sesión).",
				shareLinkCopy: "Copiar",
				shareLinkCopied: "Copiado",
				shareQ0: "á_How do I embed the application in a web page_Ó?",
				shareQ1Opt1: "¿Cómo puedo hacer que la aplicación siga siendo privada?",
				shareQ1Opt2: "¿Cómo puedo hacer que la aplicación siga siendo privada o que se comparta públicamente?",
				shareA1: "Usa %SHAREIMG% en <a href='%LINK1%' target='_blank'>la página del elemento de la aplicación</a>.",
				shareQ2bis: "¿Cómo puedo volver a la interfaz del Builder?",
				shareA2div1: "Guarda y vuelve a usar el siguiente vínculo %LINK1% o utiliza la <a href='%LINK2%' target='_blank'>página de elementos de la aplicación</a>.",
				shareA2div2: "Como propietario de la aplicación, cuando inicias sesión en %PORTAL%, la aplicación incluye un botón para abrir el Builder:",				
				shareQ3: "¿Dónde se almacenan los datos?",
				shareA3: "Los datos y la configuración de %TPL_NAME% están almacenados en <a href='%LINK2%' target='_blank'>este elemento de aplicación web</a>. Si has importado desde Flickr, Picasa, Facebook o YouTube, tus imágenes y tus vídeos no se habrán duplicado en %PORTAL%."
			},
			settings: {
				header: "Configuración",
				tabError: "Comprueba todas las pestañas para ver si hay errores"
			},
			settingsLayout: {
				title: "Diseño",
				explain: "¿Qué diseño deseas usar?",
				explainInit: "Puedes cambiar el diseño en cualquier momento desde el cuadro de diálogo de configuración.",
				viewExample: "Ver un ejemplo en directo"
			},
			settingsTheme: {
				title: "Tema"
			},
			settingsHeader: {
				title: "Encabezado",
				logoEsri: "Logotipo de Esri",
				logoNone: "Sin logotipo",
				logoCustom: "Logotipo personalizado",
				logoCustomPlaceholder: "URL (máx. 250 x 50 píxeles)",
				logoCustomTargetPlaceholder: "Enlace click-through",
				logoSocialExplain: "Personaliza el vínculo del encabezado.",
				logoSocialText: "Texto",
				logoSocialLink: "Vínculo",
				lblSmallHeader: "á_Use compact header (no subtitle)_Ó"
			},
			header: {
				title: "á_Edit the title of your %TPL_NAME%_Ó",
				subtitle: "á_Edit the subtitle of your %TPL_NAME%_Ó"
			}
		}
	})
);
