define(
	 ({
		builder: {
			layouts: {
				mainStage: "Nível Principal",
				sideTitle: "Painel Lateral",
				sideDescr: "Um layout para uma história de texto intensivo que se destaca na combinação de suas fotos, vídeos e mapas em uma mensagem clara focada.",
				floatTitle: "Painel Flutuante",
				floatDescr: "Um layout que coloca a sua cartografia em foco, permitindo que um painel de texto com pequeno formulário transparente ajude a contar uma história."
			},
			common: {
				lblStatus1: "Publicado",
				lblStatus2: "Rascunho",
				lblStatus3: "Oculto"
			},
			settingsLayoutOptions: {
				title: "Opções de Layout",
				cfgLeft: "Esquerda",
				cfgRight: "Direita",
				cfgSmall: "Pequeno",
				cfgMedium: "Médio",
				cfgLarge: "Grande",
				socialLinksLabel: "Exibir links de compartilhamento na parte inferior de cada seção",
				socialLinksDescr: "Isto permite que os leitores façam referência e promovam seções específicas do seu %TPL_NAME%. Por exemplo, se você utilizar um ícone para compartilhar seções, os leitores verificarão a seção %TPL_NAME% específica, ao invés do começo da sua história. Seus leitores podem utilizar o link de mídia social na seção de título para promover o seu %TPL_NAME% inteiro (Guia Cabeçalho) e tê-lo no início do %TPL_NAME%."
			},
			initPopup: {
				title: "Bem-Vindo ao"
			},
			addEditPopup: {
				disabled: "ã_Add Section is disabled because the maximum number of allowed sections has been reached._Ç",
				titleAdd: "Adicionar Seção",
				titleAddHome: "ã_Add Home Section_Ç",
				titleEdit: "Editar Seção",
				step: "Intervalo",
				stepMainStageExplain: "ã_Main Stage Content_Ç",
				stepPanelExplain: "ã_Content_Ç",
				stepMainStageNextTooltip: "Insira o título da seção e selecione o conteúdo do Nível Principal",
				step2NextTooltip: "Insira o título da seção e conteúdo do %LAYOUT-TYPE%",
				stepNextTooltipNext: "para ir para a próxima etapa",
				stepNextTooltipAdd: "para adicionar a seção",
				firstAddExplain: "ã_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._Ç",
				firstAddLeanMore: "ã_Learn More_Ç",
				titlePlaceholder: "Título da seção..."
			},
			addEditViewText: {
				editorPlaceholder: "Adicione texto, links e pequenos gráficos aqui.",
				editorActionsTitle: "Ações do Nível Principal",
				editorActionsHelpDescr: "ã_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._Ç"
			},
			organizePopup: {
				title: "Organizar",
				lblHeader: "Arraste e solte seções para organizar seu conteúdo.",
				lblColTitle: "Título",
				lblColPubDate: "Data da publicação",
				lblColStatus: "Status",
				checkDisplayReverse: "Exibir seções em ordem inversa",
				btnApplyWarning: "ã_Confirm deletion of %NB% section(s)_Ç",
				deleteTooltip: "Excluir",
				firstSectionExplain: "(A seção local não pode ser movida)"
			},
			exportData: {
				btn: "ã_Export content_Ç",
				tooltip: "ã_Use this button to export your content locally. This will open a new page that you can easily copy or save as a PDF.<br />Copying that page content in a word processor is the most effective way to recreate your Journal in case of an accidental deletion._Ç"
			},
			help: {
				lblHelp: "Ajuda",
				lblAdd: "Adicionar Seção",
				lblSettings: "Configurações",
				lblOrga: "Organizar conteúdo",
				lblEdit: "Edições",
				lblPublish: "Compartilhar",
				lblTips: "ã_Tips_Ç",
				lblMore: "Deseja mais?",
				lblLink: "Visite o site da web de Mapas Históricos.",
				content1Div1: "Você pode integrar uma variedade de estilos na construção da sua história. O <strong>% LAYOUT_TITLE% </ strong> normalmente tem o seu texto, imagens e vídeo enquanto seus mapas tendem a ir para o<strong> Nível Principal</ strong>. No entanto, o% TPL_NAME% também permite a você apresentar imagens, gráficos e vídeos dentro do nível principal.",
				content1Div2: "Adicionar seções permite a você personalizar verdadeiramente a sua experiência de contar histórias. Conforme os leitores rolam pelo seu texto %LAYOUT_TITLE%, um mapa no Nível Principal pode mover ou ampliar nos pontos-chaves ou novos mapas e imagens podem alternar automaticamente para suporte da sua mensagem.",
				content2Div1: "Aqui é onde você pode ajustar o visual do seu%TPL_NAME%. Os esquemas de cores, layouts e larguras são todos refinados aqui.",
				content2Div2: "Você também pode adicionar links de compartilhamento para Facebook, Twitter e Bitly, assim os leitores podem facilmente espalhar seu%TPL_NAME% para todos.",
				content3Div1: "ã_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._Ç",
				content4Div1: "Encontrou um erro ou deseja alterar o seu material? Não se preocupe. Procure o ícone de edição em todo o aplicativo para fazer alterações no seu conteúdo. Você utilizará as funções de edição várias vezes conforme desenvolver o seu %TPL_NAME%!",
				content5Div1: "Seu%TPL_NAME% é salvo na sua conta %PORTAL%, e privado por padrão. Você pode decidir compartilhá-lo com sua organização, ou abrí-lo para o mundo. Até lhe oferecemos uma URL mais curta, estável para que você possa compartilhá-la facilmente.",
				content6Div1: "ã_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._Ç",
				content6Div2: "ã_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_Ç"
			},
			landing: {
				lblAdd: "ã_What do you want to call your Map Journal?_Ç",
				phAdd: "ã_Enter your title..._Ç",
				lblOR: "Ou",
				lblHelp: "Obter uma Apresentação"
			},
			firstAddSplash: {
				thisis: "Esta é o"
			}
        }
    })

);
