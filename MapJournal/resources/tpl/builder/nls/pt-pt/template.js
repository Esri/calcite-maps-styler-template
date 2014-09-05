define(
	 ({
		builder: {
			layouts: {
				mainStage: "Ecrã Principal",
				sideTitle: "Painel Lateral",
				sideDescr: "Um layout para uma história com texto intensivo que consegue combinar as suas fotos, vídeos e mapas numa mensagem clara e objetiva.",
				floatTitle: "Painel Flutuante",
				floatDescr: "Um layout que coloca a sua cartografia em destaque e apresenta um pequeno painel de texto transparente para ajudar a contar a história."
			},
			common: {
				lblStatus1: "Publicado",
				lblStatus2: "Rascunho",
				lblStatus3: "Escondido"
			},
			settingsLayoutOptions: {
				title: "Opções de layout",
				cfgLeft: "Esquerda",
				cfgRight: "Direita",
				cfgSmall: "Pequeno",
				cfgMedium: "Médio",
				cfgLarge: "Grande",
				socialLinksLabel: "Exibir ligações para partilha no fundo de cada secção.",
				socialLinksDescr: "ã_This enables readers to reference and promote specific sections of your %TPL_NAME%. For instance, if you use a sections share icon, readers will land at that specific %TPL_NAME% section rather than the beginning of your story. Your readers can use the social media link in the title section to promote your entire %TPL_NAME% (header tab) and have them land at the start of the %TPL_NAME%._Ç"
			},
			settingsLayoutFonts: {
				title: "ã_Fonts_Ç",
				defaultLbl: "ã_Default_Ç",
				sectionTitleLbl: "ã_Section title_Ç",
				sectionContentLbl: "ã_Section content_Ç"
			},
			initPopup: {
				title: "ã_Welcome to_Ç"
			},
			addEditPopup: {
				disabled: "Adicionar Secção encontra-se desativado porque o número máximo de secções permitidas foi atingido.",
				titleAdd: "Adicionar Secção",
				titleAddHome: "Adicionar Secção Inicial",
				titleEdit: "Editar Secção",
				step: "Passo",
				stepMainStageExplain: "Conteúdo do Ecrã Principal",
				stepPanelExplain: "Conteúdo",
				stepMainStageNextTooltip: "Introduza o título da secção e selecione o conteúdo do Ecrã Principal",
				stepMainStageNextTooltip2: "ã_Select the Main Stage content_Ç",
				step2NextTooltip: "Introduza o título da secção e conteúdo %LAYOUT-TYPE%",
				stepNextTooltipNext: "para ir para o próximo passo",
				stepNextTooltipAdd: "para adicionar a secção",
				firstAddExplain: "Esta primeira secção é a sua Secção Inicial. Pense nela como a 'capa' da sua história. O título que acabou de definir será exibido em letras grandes.",
				firstAddLeanMore: "Saber Mais",
				titlePlaceholder: "Título da secção..."
			},
			addEditViewText: {
				editorPlaceholder: "Adicione texto, ligações epequenos gráficos aqui.",
				editorActionsTitle: "Ações do Ecrã Principal",
				editorActionsHelpDescr: "Utilize estes controlos para criar ligações que irão alterar o ecrã principal. Por exemplo, quando o leitor clica numa ligação, poderá querer ampliar o mapa para uma localização específica, exibir outro mapa web ou exibir uma Imagem.",
				mainStageDisabled: "ã_Main Stage Actions are disabled when the editor is maximized_Ç"
			},
			organizePopup: {
				title: "ã_Organize_Ç",
				lblHeader: "Arraste e solte secções para organizar o seu conteúdo.",
				lblColTitle: "Título",
				lblColPubDate: "Data de publicação",
				lblColStatus: "Estado",
				checkDisplayReverse: "Exibir secções em ordem inversa.",
				btnApplyWarning: "Confirmar a supressão de %NB% secções",
				deleteTooltip: "Eliminar",
				firstSectionExplain: "(A secção inicial não pode ser movida)",
				exportMainStage: "ã_Main Stage content_Ç",
				exportPanel: "ã_Panel content_Ç",
				exportActions: "ã_Main Stage actions_Ç"
			},
			exportData: {
				btn: "Exportar Conteúdo",
				tooltip: "ã_Exporting your content allows you to view and create a back-up of your content should you accidentally delete it. Simply copy and paste the content from the page into any word processor._Ç"
			},
			help: {
				lblHelp: "Ajuda",
				lblAdd: "Adicionar Secção",
				lblSettings: "Configurações",
				lblOrga: "Organizar conteúdo",
				lblEdit: "Edições",
				lblPublish: "Partilhar",
				lblTips: "Dicas",
				lblMore: "Quer mais?",
				lblLink: "ã_Visit the Esri Story Maps website._Ç",
				content1Div1: "Pode integrar vários estilos ao construir a sua história. O <strong>%LAYOUT_TITLE%</strong> contém tipicamente o seu texto, imagens e vídeo, enquanto os seus mapas tendem a estar no <strong>Ecrã Principal</strong>. No entanto, o %TPL_NAME% permite-lhe também apresentar imagens, gráficos e vídeos no ecrã principal.",
				content1Div2: "Adicionar secções permite-lhe verdadeiramente personalizar a sua experiência de storytelling. À medida que os leitores fazem scroll para baixo no seu texto %LAYOUT_TITLE%, um mapa no Ecrã Principal permite mover ou ampliar para pontos importantes, ou novos mapas e imagens podem ser automaticamente carregados para enfatizar a sua mensagem.",
				content2Div1: "ã_Here is where you can adjust how your %TPL_NAME% looks. Color schemes, layouts, widths, and fonts are all refined here._Ç",
				content2Div2: "Pode ainda adicionar ligações de partilha no Facebook, Twitter e Bitly para que os leitores possam facilmente partilhar o seu %TPL_NAME% com outros.",
				content3Div1: "O seu conteúdo é organizado em secções. Pode ter quantas secções pretender (pense nelas como mini-capítulos). O fluxo desses capítulos é importante; em Organizar, pode reordenar ou eliminar secções à sua vontade.",
				content4Div1: "Encontrou um erro ou pretende alterar o seu material? Sem problema. Procure o ícone de edição em toda a sua aplicação para efetuar alterações ao seu conteúdo. Utilizará as funções de edição muitas vezes à medida que desenvolve o seu %TPL_NAME%!",
				content5Div1: "ã_Your %TPL_NAME% is saved to your %PORTAL% account and private by default. You can decide to share it with your organization, or open it to the world. We even provide you with a shortened URL so you can share it more easily._Ç",
				content6Div1: "ã_The title of your Home section is also the title of your journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._Ç",
				content6Div2: "O seu %LAYOUT_TITLE% não tem de ter apenas texto. Considere incluir fotografias e vídeos para ajudar a dar vida à história e para quebrar secções longas de texto!"
			},
			landing: {
				lblAdd: "Que nome pretende dar ao seu Jornal de Mapa?",
				phAdd: "Introduza o título...",
				lblOR: "Ou",
				lblHelp: "Fazer uma visita guiada"
			},
			firstAddSplash: {
				thisis: "Isto é o",
				lblMain: "ã_This is the %BR% Main Stage_Ç"
			}
        }
    })

);
