define(
	 ({
		builder: {
			layouts: {
				mainStage: "Escenario principal",
				sideTitle: "Panel lateral",
				sideDescr: "Diseño de una historia con una gran cantidad de texto que permite combinar fotos, vídeos y mapas en un mensaje claro y definido.",
				floatTitle: "Panel flotante",
				floatDescr: "Diseño que centra la atención en la cartografía y permite usar un panel de texto corto y transparente para ayudar a contar la historia."
			},
			common: {
				lblStatus1: "Publicado",
				lblStatus2: "Borrador",
				lblStatus3: "Oculto"
			},
			settingsLayoutOptions: {
				title: "Opciones de diseño",
				cfgLeft: "Izquierda",
				cfgRight: "Derecha",
				cfgSmall: "Pequeño",
				cfgMedium: "Mediano",
				cfgLarge: "Grande",
				socialLinksLabel: "Mostrar vínculos de uso compartido en la parte inferior de cada sección",
				socialLinksDescr: "Esto permite a los lectores hacer referencia a secciones concretas de tu %TPL_NAME% y promocionarlas. Por ejemplo, si usas un icono para compartir secciones, los lectores llegarán a esa sección de %TPL_NAME% y no al comienzo de tu historia. Los lectores pueden usar el vínculo de las redes sociales de la sección de título para promocionar todo tu %TPL_NAME% (pestaña de encabezado) y hacer que los usuarios lleguen al inicio de %TPL_NAME%."
			},
			initPopup: {
				title: "Bienvenido a"
			},
			addEditPopup: {
				disabled: "á_Add Section is disabled because the maximum number of allowed sections has been reached._Ó",
				titleAdd: "Agregar sección",
				titleAddHome: "á_Add Home Section_Ó",
				titleEdit: "Editar sección",
				step: "Paso",
				stepMainStageExplain: "á_Main Stage Content_Ó",
				stepPanelExplain: "á_Content_Ó",
				stepMainStageNextTooltip: "Introducir el título de la sección y seleccionar el contenido del escenario principal",
				step2NextTooltip: "Introducir el título de la sección y el contenido de %LAYOUT-TYPE%",
				stepNextTooltipNext: "para ir al siguiente paso",
				stepNextTooltipAdd: "para agregar la sección",
				firstAddExplain: "á_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._Ó",
				firstAddLeanMore: "á_Learn More_Ó",
				titlePlaceholder: "Título de la sección..."
			},
			addEditViewText: {
				editorPlaceholder: "Agrega aquí texto, vínculos y gráficos pequeños.",
				editorActionsTitle: "Acciones del escenario principal",
				editorActionsHelpDescr: "á_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._Ó"
			},
			organizePopup: {
				title: "Organizar",
				lblHeader: "Arrastra y suelta secciones para organizar el contenido.",
				lblColTitle: "Título",
				lblColPubDate: "Fecha de publicación",
				lblColStatus: "Estado",
				checkDisplayReverse: "Mostrar secciones en orden inverso",
				btnApplyWarning: "á_Confirm deletion of %NB% section(s)_Ó",
				deleteTooltip: "Eliminar",
				firstSectionExplain: "(La sección de inicio no se puede mover)."
			},
			exportData: {
				btn: "á_Export content_Ó",
				tooltip: "á_Use this button to export your content locally. This will open a new page that you can easily copy or save as a PDF.<br />Copying that page content in a word processor is the most effective way to recreate your Journal in case of an accidental deletion._Ó"
			},
			help: {
				lblHelp: "Ayuda",
				lblAdd: "Agregar sección",
				lblSettings: "Configuración",
				lblOrga: "Organizar contenido",
				lblEdit: "Ediciones",
				lblPublish: "Compartir",
				lblTips: "á_Tips_Ó",
				lblMore: "¿Necesitas más información?",
				lblLink: "Visita el sitio web de Story Maps.",
				content1Div1: "Puedes integrar diversos estilos al crear tu historia. El <strong>%LAYOUT_TITLE%</strong> alberga normalmente el texto, las imágenes y los vídeos, mientras que los mapas suelen estar en el <strong>escenario principal</strong>. Sin embargo, el %TPL_NAME% también permite mostrar imágenes, gráficos y vídeos en el escenario principal.",
				content1Div2: "Agregar secciones te permite personalizar tu experiencia narrativa. A medida que los lectores se desplazan por el texto de tu %LAYOUT_TITLE%, en el escenario principal un mapa puede desplazarse o aplicar el zoom a los puntos clave, o pueden activarse automáticamente nuevos mapas e imágenes para reforzar tu mensaje.",
				content2Div1: "Aquí puedes ajustar el aspecto de tu %TPL_NAME%. Los esquemas de color, los diseños y las anchuras se definen aquí.",
				content2Div2: "También puedes agregar vínculos para compartir en Facebook, Twitter y Bitly con el fin de que los lectores puedan divulgar fácilmente tu %TPL_NAME% entre otros usuarios.",
				content3Div1: "á_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._Ó",
				content4Div1: "¿Has descubierto un error o deseas cambiar el material? No hay problema: busca el icono de edición en la aplicación para realizar cambios en el contenido. Usarás las funciones de edición muchas veces durante el desarrollo de tu %TPL_NAME%.",
				content5Div1: "Tu %TPL_NAME% está guardada en la cuenta de %PORTAL% y, de manera predeterminada, es privada. Puedes optar por compartirla solo con tu organización o por abrirla al mundo. Te proporcionamos incluso una URL abreviada para que puedas compartirla con más facilidad.",
				content6Div1: "á_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._Ó",
				content6Div2: "á_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_Ó"
			},
			landing: {
				lblAdd: "á_What do you want to call your Map Journal?_Ó",
				phAdd: "á_Enter your title..._Ó",
				lblOR: "O",
				lblHelp: "Visita introductoria"
			},
			firstAddSplash: {
				thisis: "Este es el"
			}
        }
    })

);
