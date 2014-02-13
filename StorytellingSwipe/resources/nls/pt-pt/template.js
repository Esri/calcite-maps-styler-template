define(
	({
		viewer: {
			loading: {
				step1: "CARREGAR A APLICAÇÃO",
				step2: "CARREGAR DADOS",
				step3: "INICIALIZAR",
				fail: "Não foi possível carregar o Varrimento",
				loadBuilder: "A MUDAR PARA O MODO DE BUILDER",
				redirectSignIn: "ã_REDIRECTING TO SIGN-IN PAGE_Ç",
				redirectSignIn2: "ã_(you will be redirected here after sign-in)_Ç",
				failButton: "Tentar Novamente"
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				portalSelf: "Erro fatal: falha na obtenção da configuração do portal",
				invalidConfig: "Erro fatal: configuração não válida",
				invalidConfigNoWebmap: "Erro fatal: configuração não válida (não foi definido um mapa web)",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "Erro fatal: não é possível carregar a aplicação",
				initMobile: "Bem-vindo à aplicação web de Varrimento. A aplicação não está configurada. O builder interativo não é suportado em dispositivos móveis.",
				noBuilderIE8: "O builder interativo de Varrimento não é suportado em versões do Internet Explorer anteriores à versão 9.",
				noLayerView: "Bem-vindo à aplicação web de Varrimento.<br />A aplicação ainda não está configurada.",
				appSave: "Erro ao guardar a aplicação web",
				mapSave: "Erro ao guardar o mapa web",
				notAuthorized: "Não tem autorização para configurar esta aplicação",
				conflictingProjectionsTitle: "Projeções em Conflito",
				conflictingProjections: "A ferramenta de varrimento não suporta a utilização de dois mapas web com projeções diferentes. Abra as definições e utilize um mapa web que utilize uma projeção igual à do primeiro mapa.",
				cpButton: "Fechar"
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
				bitlyTooltip: "Obter uma pequena ligação para a aplicação"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAÇÃO DA APLICAÇÃO",
				buttonSave: "GUARDAR",
				buttonHelp: "ã_Help_Ç",
				buttonShare: "ã_Share_Ç",
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
				savingApplication: "A guardar a aplicação",
				saveSuccess: "Aplicação guardada com sucesso",
				saveError: "Falha ao guardar, tente novamente",
				saveError2: "ã_Save failed due to an invalid html tag in a name or description_Ç",
				saveError3: "ã_The title can't be empty_Ç",
				signIn: "Inicie sessão com uma conta em",
				signInTwo: "para guardar a aplicação."
			},
			header:{
				editMe: "Editar-me!",
				templateTitle: "Definir título do modelo",
				templateSubtitle: "Definir subtítulo do modelo"
			},
			settings: {
				settingsHeader: "Definições da aplicação",
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
				settingsExtentDateLineError: "ã_The extent cannot be across the meridian of 180ï¿½ longitude_Ç",
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
				editMe: "Editar-me!",
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
				settingsSaveConfirm: "É necessário guardar e reiniciar a aplicação para aplicar algumas das alterações efetuadas"
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
				switchMaps: "ã_Switch maps_Ç",
				browseWebMaps: "ã_Browse web maps_Ç"
			},
			settingsLegend: {
				settingsTabLegend: "Layout da Aplicação",
				settingsLegendExplain: "Selecione as definições de layout da aplicação.",
				settingsLegendEnable: "Ativar Legenda",
				settingsDescriptionEnable: "Ativar Descrição",
				settingsBookmarksEnable: "Ativar série de Varrimento",
				settingsPopupDisable: "Ativar janelas popup",
				settingsLocationSearchEnable: "Ativar pesquisa de localizadores",
				settingsGeolocatorEnable: "Ativar geolocalizador",
				settingsLegendHelpContent: "Utilize o índice do visualizador de mapas do ArcGIS.com (Ocultar em Legenda)",
				settingsSeriesHelpContent: "As Séries de Varrimento são uma opção de navegação por separadores que permite guiar o visualizador para uma extensão em particular, e exibir um título e descrição no painel lateral. Durante a primeira ativação, os seus eventuais marcadores de mapas web serão utilizados para pré-preencher a barra de séries. Se desativar esta opção mais tarde, as configurações das suas séries não serão perdidas, reativar esta opção irá carregar o estado antes da desativação.", 
				settingsSeriesHelpContent2: "A aplicação de varrimento permite-lhe criar e editar uma selecção de localizações que acompanham os títulos e texto. Se o seu mapa web possui marcadores, eles serão exibidos. Pode desativar esta opção, mas a configuração será preservada para futuras utilizações.",
				settingsSeriesHelpLink: "Consulte aqui um exemplo de uma aplicação de varrimento",
				preview: "Pré-visualizar IU",
				settingsLocateButtonExplain: "Esta funcionalidade é suportada na maioria dos dispositivos móveis e navegadores de internet (incluindo o Internet Explorer 9+).",
				settingsLocateButton: "ã_Enable a 'Locate' button on supported browsers_Ç",
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
				initHeader: "ã_Welcome to the Swipe/Spyglass Builder_Ç",
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
				title: "ã_Help_Ç",
				close: "ã_Close_Ç",
				tab1: {
					div1: "ã_The Swipe/Spyglass template is designed to compare two seperate web maps or two layers of a single web map in an attractive, easy-to-use web application that can be used in any web browser on any device, including smartphones and tablets._Ç",
					div2: "ã_For additional information on the Swipe/Spyglass template, including examples created by users, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visit the Story Maps website</a>. You can also follow us on Twitter at <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>._Ç",
					div3: "ã_We would love to hear from you! Whether you have a question, want to request a new feature, or think you've found a bug, please visit the <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>._Ç"
				}
			},
			share: {
				firstSaveTitle: "ã_Application successfully saved_Ç",
				firstSaveHeader: "ã_Your Application is now saved in ArcGIS Online. Please read the following answers to frequent questions._Ç",
				firstSaveA1: "ã_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_Ç",
				firstSaveA1bis: "ã_The Application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._Ç",
				firstSaveQ2: "ã_Is my Application shared?_Ç",
				firstSaveA2: "ã_Currently your Application is not shared. To share it, use the SHARE button._Ç",
				shareTitle: "ã_Share your Application_Ç",
				sharePrivateHeader: "ã_Your Application is not shared, would you like to share it?_Ç",
				sharePrivateBtn1: "ã_Share publicly_Ç",
				sharePrivateBtn2: "ã_Share with my Organization_Ç",
				sharePrivateProgress: "ã_Sharing in progress..._Ç",
				sharePrivateErr: "ã_Sharing failed, try again or_Ç",
				sharePrivateOk: "ã_Sharing updated successfully, loading..._Ç",
				shareStatus1: "ã_Application is not saved_Ç",
				shareStatus2: "ã_Application is shared publicly_Ç",
				shareStatus3: "ã_Application is shared within the organization_Ç",
				shareStatus4: "ã_Application is not shared_Ç",
				sharePreviewAsUser: "ã_Preview_Ç",
				shareHeader1: "ã_Your Application is <strong>publicly accessible</strong>._Ç",
				shareHeader2: "ã_Your Application is accessible by your organization members (login is required)._Ç",
				shareLinkHeader: "ã_Share the Application with your audience_Ç",
				shareLinkOpen: "ã_OPEN_Ç",
				learnMore: "ã_Learn more_Ç",
				shareQ1Opt1: "ã_How do I keep the Application private?_Ç",
				shareQ1Opt2: "ã_How do I keep the Application private or share it publicly?_Ç",
				shareA1: "ã_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the web map, use <a href='%LINK2%' target='_blank'>the web map item page</a>._Ç",
				shareA1bis: "ã_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._Ç",
				shareQ2: "ã_How do I edit the Application later?_Ç",
				shareQ2bis: "ã_How do I get back to the authoring interface?_Ç",
				shareA2div1: "ã_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._Ç",
				shareA2div2: "ã_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_Ç",				
				shareQ3: "ã_Where is the data stored?_Ç",
				shareA3: "ã_The Application configuration is stored in this web application item</a>._Ç",
				shareWarning: "ã_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._Ç",
 				shareWarningWith1: "ã_publicly_Ç",
 				shareWarningWith2: "ã_publicly and with the Organization_Ç"
			},
			directCreation: {
				header: "ã_Welcome to the Swipe/Spyglass Builder_Ç",
				mapPickHeader: "ã_To get started, please input a valid web map id, or use the search button to browse web maps._Ç",
				launchBuilder: "ã_Launch Builder_Ç"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "ã_My Organization_Ç",
					onlineLabel: "ã_ArcGIS Online_Ç",
					contentLabel: "ã_My Content_Ç",
					favoritesLabel: "ã_My Favorites_Ç"
				},
				title: "ã_Select Web Map_Ç",
				searchTitle: "ã_Search_Ç",
				ok: "ã_Ok_Ç",
				cancel: "ã_Cancel_Ç",
				placeholder: "ã_Enter search term_Ç"
			}
		}
    })
);