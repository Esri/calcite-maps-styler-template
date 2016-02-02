define(
	 ({
		viewer: {
			loading: {
				step1: "A CARREGAR A HISTÓRIA",
				step2: "CARREGAR DADOS",
				step3: "INICIALIZAR",
				fail: "Não foi possível carregar o Varrimento",
				loadBuilder: "A MUDAR PARA O MODO DE BUILDER",
				redirectSignIn: "A REDIRECIONAR PARA A PÁGINA DE INÍCIO DE SESSÃO",
				redirectSignIn2: "(será redirecionado para aqui depois de iniciar sessão)",
				failButton: "Tentar Novamente"
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				portalSelf: "Erro fatal: falha na obtenção da configuração do portal",
				invalidConfig: "Erro fatal: configuração não válida",
				invalidConfigNoWebmap: "ã_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________Ç",
				invalidConfigNoAppDev: "ã_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________Ç.",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "Erro fatal: A história não pode ser carregada",
				initMobile: "Bem-vindo à aplicação web de Varrimento. A aplicação não está configurada. O builder interativo não é suportado em dispositivos móveis.",
				initMobile2: "ã_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________Ç.",
				initMobile3: "ã_Please rotate your device to landscape orientation to use the Swipe builder________________________Ç.",
				noBuilderIE8: "O builder interativo de Varrimento não é suportado em versões do Internet Explorer anteriores à versão 9.",
				noLayerView: "Bem-vindo à aplicação web de Varrimento.<br />A aplicação ainda não está configurada.",
				appSave: "Erro ao guardar a web story",
				mapSave: "Erro ao guardar o mapa web",
				notAuthorized: "Não tem autorização para aceder a esta história",
				notAuthorizedBuilder: "ã_You are not authorized to use Swipe and Spyglass builder__________________Ç.",
				conflictingProjectionsTitle: "Projeções em Conflito",
				conflictingProjections: "A ferramenta de varrimento não suporta a utilização de dois mapas web com projeções diferentes. Abra as definições e utilize um mapa web que utilize uma projeção igual à do primeiro mapa web.",
				cpButton: "Fechar",
				unspecifiedConfigOwner: "O proprietário autorizado não foi configurado.",
				invalidConfigOwner: "O proprietário da história não está autorizado."
			},
			mobileView: {
				hideIntro: "OCULTAR INTRODUÇÃO",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Dados"
			},
			desktopView: {
				storymapsText: "Um mapa de história",
				builderButton: "Mudar para modo de construtor",
				facebookTooltip: "Partilhar no Facebook",
				twitterTooltip: "Partilhar no Twitter",
				bitlyTooltip: "Obter uma ligação curta",
				tooltipAutoplayDisabled: "ã_This isn't available in autoplay mode____________Ç",
				autoplayLabel: "ã_Autoplay mode_____Ç",
				autoplayExplain1: "ã_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Ç.",
				autoplayExplain2: "ã_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Ç."
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAÇÃO DA HISTÓRIA",
				buttonSave: "GUARDAR",
				buttonHelp: "Ajuda",
				buttonShare: "Partilhar",
				buttonDiscard: "CANCELAR",
				buttonSettings: "Configurações",
				buttonView: "Ver modo",
				buttonItem: "Abrir o item de Aplicação Web",
				noPendingChange: "Nenhuma alteração pendente",
				unSavedChangeSingular: "1 alteração não guardada",
				unSavedChangePlural: "alterações não guardadas",
				popoverDiscard: "Tem a certeza de que pretende eliminar alterações não guardadas?",
				yes: "Sim",
				no: "Não",
				popoverOpenViewExplain: "Ao abrir o visualizador, irá perder todas as alterações não guardadas",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Cancelar",
				popoverSaveWhenDone: "Não se esqueça de guardar quando terminar",
				closeWithPendingChange: "Tem a certeza de que pretende confirmar a ação? Perderá as alterações feitas.",
				gotIt: "Ok",
				savingApplication: "A guardar história",
				saveSuccess: "ã_Story saved____Ç",
				saveError: "Falha ao guardar, tente novamente",
				saveError2: "Não foi guardado, falhou devido a uma palavra chave HTML inválida no nome ou a descrição",
				saveError3: "O título não pode ser vazio",
				signIn: "Inicie sessão com uma conta em",
				signInTwo: "para guardar a história."
			},
			header:{
				editMe: "Edite-me!",
				templateTitle: "Definir título do modelo",
				templateSubtitle: "Definir subtítulo do modelo"
			},
			settings: {
				settingsHeader: "Definições da história",
				modalCancel: "Cancelar",
				modalApply: "Aplicar"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Selecione um tema para a aplicação ou defina cores à sua escolha.",
				settingsLabelColor: "Cores de fundo do cabeçalho e do painel lateral"
			},
			settingsHeader: {
				settingsTabLogo: "Cabeçalho",
				settingsLogoExplain: "Personalize o logótipo do cabeçalho (o máximo é 250 x 50 px).",
				settingsLogoEsri: "Logótipo Esri",
				settingsLogoNone: "Sem logótipo",
				settingsLogoCustom: "Logótipo personalizado",
				settingsLogoCustomPlaceholder: "URL de Imagem",
				settingsLogoCustomTargetPlaceholder: "Ligação para clicar",
				settingsLogoSocialExplain: "Personalize a ligação superior direita do cabeçalho.",
				settingsLogoSocialText: "Texto",
				settingsLogoSocialLink: "Ligação",
				settingsLogoSocialDisabled: "Esta funcionalidade foi desativada pelo Admnistrador"
			},
			settingsExtent: {
				settingsTabExtent: "Extensão",
				settingsExtentExplain: "Defina a extensão inicial através do mapa interativo abaixo.",
				settingsExtentExplainBottom: "A extensão definida irá modificar a extensão inicial do seu mapa web.",
				settingsExtentDateLineError: "A extensão não pode ser ao longo do meridiano de180° de longitude",
				settingsExtentDateLineError2: "Erro ao calcular extensão",
				settingsExtentDrawBtn: "Desenhar uma nova extensão",
				settingsExtentModifyBtn: "Editar a extensão atual",
				settingsExtentApplyBtn: "Aplicar ao mapa principal",
				settingsExtentUseMainMap: "Utilizar a extensão do mapa principal"
			}
        },
		swipe: {
			mobileData: {
				noData: "Não existem dados para apresentar!",
				noDataExplain: "Toque no mapa para selecionar um elemento e volte aqui",
				noDataMap: "Não existem dados para este mapa",
				noPopup: "Não foi encontrada uma janela pop-up para este elemento"
			},
			mobileLegend: {
				noLegend: "Não existe uma legenda para apresentar."
			},
			swipeSidePanel: {
				editTooltip: "Definir a descrição do painel lateral",
				editMe: "Edite-me!",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Não existem dados para apresentar",
				noFeatureExplain: "Toque no mapa e selecione um elemento"
			},
			settingsLayout: {
				settingsTabLayout: "Estilo de Varrimento",
				settingsLayoutExplain: "Selecione um estilo para a ferramenta de varrimento.",
				settingsLayoutSwipe: "Barra vertical",
				settingsLayoutSpyGlass: "Luneta",
				settingsLayoutSelected: "Layout selecionado",
				settingsLayoutSelect: "Selecionar este layout",
				settingsSaveConfirm: "É necessário guardar e reiniciar a história para aplicar algumas das alterações efetuadas"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tipo de Varrimento",
				settingsDataModelExplainSwipe: "Selecione a camada ou o mapa web que irá aparecer e desaparecer com o varrimento.",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Selecione a camada ou o mapa web que irá aparecer na luneta.",
				settingsDataModelOneMap: "Uma camada num mapa web",
				settingsDataModel1Explain: "Selecione uma camada para ser controlada pela ferramenta de varrimento.",
				settingsDataModel1Warning: "Só é possível utilizar serviços Dinâmicos, de Mosaicos e de Imagens. Se a camada estiver tapada por camadas superiores, o varrimento não terá qualquer efeito.",
				settingsDataModel1SpyGlassExplain: "Selecione a camada que irá aparecer dentro da luneta.",
				settingsDataModelTwoMaps: "Dois mapas web",
				settingsDataModelLayerIds: "IDs das Camadas do Mapa Web",
				settingsDataModelSelected: "Tipo selecionado",
				settingsDataModelWebmapSwipeId1: "ID do Mapa Web Direito",
				settingsDataModelWebmapSwipeId2: "ID do Mapa Web Esquerdo",
				settingsDataModelWebmapGlassId1: "ID do Mapa Web Principal",
				settingsDataModelWebmapGlassId2: "ID do Mapa Web de Luneta",
				settingsDataModelSelect: "Selecionar este tipo",
				settingsDataModel2Explain: "Varrer com outro mapa web.",
				settingsDataModel2SpyGlassExplain: "Revelar outro mapa web.",
				settingsDataModel2HelpTitle: "Como descobrir o ID do mapa web",
				settingsDataModel2HelpContent: "Copie e cole os dígitos que aparecem depois do sinal \'=\' no URL do mapa web",
				switchMaps: "Alternar mapas",
				browseWebMaps: "Navegar em mapas web"
			},
			settingsLegend: {
				settingsTabLegend: "Layout da Aplicação",
				settingsLegendExplain: "Selecione as definições de layout.",
				settingsLegendEnable: "Ativar Legenda",
				settingsDescriptionEnable: "Ativar Descrição",
				settingsBookmarksEnable: "Ativar série de Varrimento",
				settingsPopupDisable: "ã_Enable pop-up_____Ç",
				settingsLocationSearchEnable: "Ativar pesquisa de localizadores",
				settingsGeolocatorEnable: "Ativar geolocalizador",
				settingsLegendHelpContent: "ã_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________Ç",
				settingsSeriesHelpContent: "As Séries de Varrimento são uma opção de navegação por separadores que permite guiar o visualizador para uma extensão em particular, e exibir um título e descrição no painel lateral. Durante a primeira ativação, os seus eventuais marcadores de mapas web serão utilizados para pré-preencher a barra de séries. Se desativar esta opção mais tarde, as configurações das suas séries não serão perdidas, reativar esta opção irá carregar o estado antes da desativação.",
				settingsSeriesHelpContent2: "A aplicação de varrimento permite-lhe criar e editar uma selecção de localizações que acompanham os títulos e texto. Se o seu mapa web possui marcadores, eles serão exibidos. Pode desativar esta opção, mas a configuração será preservada para futuras utilizações.",
				settingsSeriesHelpLink: "Consulte aqui um exemplo de uma aplicação de varrimento",
				preview: "Pré-visualizar IU",
				settingsLocateButtonExplain: "Esta funcionalidade é suportada na maioria dos dispositivos móveis e navegadores de internet (incluindo o Internet Explorer 9+).",
				settingsLocateButton: "Ativar um botão \'Localizar\' em navegadores suportados",
				settingsAddressSearch: "Ativar uma ferramenta de pesquisa de moradas"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Janela Pop-up",
				settingsSwipePopupExplain: "Personalize o aspeto do cabeçalho das janelas pop-up para ajudar o utilizador a associar janelas pop-up a camadas do mapa.",
				settingsSwipePopupSwipe1: "Mapa Esquerdo",
				settingsSwipePopupSwipe2: "Mapa Direito",
				settingsSwipePopupGlass1: "Mapa Principal",
				settingsSwipePopupGlass2: "Mapa de Luneta",
				settingsSwipePopupTitle: "Título do Cabeçalho",
				settingsSwipePopupColor: "Cor do Cabeçalho"
			},
			initPopup: {
				initHeader: "Bem-vindo(a) ao Swipe/Spyglass Builder",
				modalNext: "Seguinte",
				modalPrev: "Anterior",
				modalApply: "Abrir a aplicação"
			},
			seriesPanel: {
				title: "Título",
				descr: "Descrição",
				discard: "Rejeitar Marcador",
				saveExtent: "Definir a extensão do Marcador",
				discardDisabled: "Não pode remover aquele marcador. As séries Swipe podem ser desativadas nas Definições."
			},
			helpPopup: {
				title: "Ajuda",
				close: "Fechar",
				tab1: {
					div1: "O modelo Swipe/Spyglassfoi concebido para comparar dois mapas web ou camadas, ou duas camadas de um único mapa numa aplicação web atrativa, fácil de utilizar, que pode ser utilizada em qualquer navegador web ou em qualquer dispositivo, incluindo smartphones e tablets.",
					div2: "Para mais informações sobre o modelo de Varrimento/Lupa, incluindo exemplos criados por utilizadores, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visite o site web dos Story Maps</a>. Pode ainda seguir-nos no Twitter em <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Gostaríamos de ter notícias suas! Não hesite em partilhar a sua Apresentação de Mapa connosco:"
				}
			},
			share: {
				firstSaveTitle: "ã_Story saved____Ç",
				manageStory: "ã_Manage your story______Ç",
				manageStoryA1: "ã_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________Ç.",
				manageStoryA1V1: "ã_My Stories____Ç",
				manageStoryA1V2: "ã_blog posts____Ç",
				shareTitle: "Partilhar a sua história",
				sharePrivateHeader: "A sua história não está a ser partilhada, pretende partilhá-la?",
				sharePrivateBtn1: "Partilhar publicamente",
				sharePrivateBtn2: "Partilhar com a organização",
				sharePrivateProgress: "Partilha em progresso...",
				sharePrivateErr: "A partilha falhou, tente novamente ou",
				sharePrivateOk: "ã_Sharing updated, loading_________Ç...",
				shareStatus1: "A história não se encontra guardada",
				shareStatus2: "A história está a ser partilhada publicamente",
				shareStatus3: "A história encontra-se partilhada na organização",
				shareStatus4: "A história não está a ser partilhada",
				sharePreviewAsUser: "Pré-Visualizar",
				shareHeader1: "A sua história é <strong>acessível publicamente</strong>.",
				shareHeader2: "A sua história encontra-se acessível aos membros da sua organização (início de sessão necessário).",
				shareLinkHeader: "ã_Share your story______Ç",
				shareLinkOpen: "ABRIR",
				learnMore: "Obtenha mais informações",
				shareA1: "Utilize %SHAREIMG% na <a href='%LINK1%' target='_blank'>página da aplicação do item</a>. Se também quiser deixar de partilhar o mapa web, recorra à <a href='%LINK2%' target='_blank'>página do item de mapa web</a>.",
				shareWarning: "A partilha de %WITH% foi desativado porque não é o proprietário do <a href='%LINK%' target='_blank'>mapa web</a>.",
				shareWarningWith1: "ã_publicly___Ç",
				shareWarningWith2: "ã_publicly and with the Organization___________Ç"
			},
			directCreation: {
				header: "Bem-vindo(a) ao Swipe/Spyglass Builder",
				mapPickHeader: "Para começar, por favor introduza um id de mapa válido ou utilize o botão procurar para procurar mapas web.",
				launchBuilder: "Iniciar o Builder",
				chooseWebmapLbl: "Escolha o mapa web...",
				explain2: "ã_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________Ç.",
				explain3: "Caso queira utiliza dois mapas web no seu story map, será dirigido para a segunda camada de mapa ao selecionar essa opção.",
				webmapPlaceholder: "Insira uma id de mapa web..."
			},
			saveErrorSocial: {
				title: "ã_Social media sharing update_________Ç",
				panel1: "ã_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________Ç.",
				panel1tooltip: "ã_By defining a title, summary and thumbnail image, your story will look like this_________________________Ç:",
				panel2:	"ã_Which title would you like to use on social media________________Ç:",
				panel2q1: "ã_Story title (recommended)_________Ç",
				panel2q1tooltip: "ã_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________Ç.",
				panel2q2: "ã_Item title____Ç",
				panel3: "ã_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________Ç.",
				panel4: "ã_Do not warn me again for this story____________Ç",
				mystories: "ã_My Stories____Ç",
				btnSave: "ã_Save__Ç"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "A Organização",
					onlineLabel: "ArcGIS Online",
					contentLabel: "O Meu Conteúdo",
					favoritesLabel: "Os Meus Favoritos"
				},
				title: "ã_Select Web Map_____Ç",
				searchTitle: "Pesquisar",
				ok: "Ok",
				cancel: "Cancelar",
				placeholder: "Introduzir termo de pesquisa"
			}
		}
    })
);
