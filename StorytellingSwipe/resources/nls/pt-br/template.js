define(
	({
		viewer: {
			loading: {
				step1: "CARREGANDO APLICATIVO",
				step2: "CARREGANDO DADOS",
				step3: "INICIALIZANDO",
				fail: "Desculpe, falha ao carregar a ferramenta Oscilar",
				loadBuilder: "TROCANDO PARA MODO DO CONSTRUTOR",
				redirectSignIn: "ã_REDIRECTING TO SIGN-IN PAGE_Ç",
				redirectSignIn2: "ã_(you will be redirected here after sign-in)_Ç",
				failButton: "Tentar Novamente"
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				portalSelf: "Erro fatal: Falha ao obter configuração do portal",
				invalidConfig: "Erro fatal: configuração inválida",
				invalidConfigNoWebmap: "Erro fatal: Configuração inválida (nenhum mapa da web especificado)",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "Erro fatal: O aplicativo não pode ser carregado",
				initMobile: "Bem-Vindo ao aplicativo da web Oscilar. O aplicativo não está configurado. O construtor interativo não tem suporte em dispositivos móveis.",
				noBuilderIE8: "O construtor interativo Oscilar não tem suporte no Internet Explorer anterior à versão 9.",
				noLayerView: "Bem-Vindo ao aplicativo da web Oscilar.<br />O aplicativo não está configurado",
				appSave: "Erro ao salvar o aplicativo da web",
				mapSave: "Erro ao salvar o mapa da web",
				notAuthorized: "Você não está autorizado para acessar este aplicativo.",
				conflictingProjectionsTitle: "Projeções em Conflito",
				conflictingProjections: "A ferramenta Oscilar não suporta dois mapas da web com projeções diferentes. Abra as configurações e utilize um mapa da web que utiliza a mesma projeção que o primeiro mapa da web.",
				cpButton: "Fechar"
			},
			mobileView: {
				hideIntro: "OCULTAR INTRO",
				navLeft: "Legenda",
				navMap: "Mapa",
				navRight: "Dados"
			},
			desktopView: {
				storymapsText: "Um mapa histórico",
				builderButton: "Trocar para modo do construtor",
				bitlyTooltip: "Obtenha um link curto para o aplicativo"
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAÇÃO DO MAPA",
				buttonSave: "SALVAR",
				buttonHelp: "ã_Help_Ç",
				buttonShare: "ã_Share_Ç",
				buttonDiscard: "CANCELAR",
				buttonSettings: "Configurações",
				buttonView: "Modo de visualização",
				buttonItem: "Abra o item do Aplicativo da Web",
				noPendingChange: "Nenhuma alteração pendente",
				unSavedChangeSingular: "1 alteração não salva",
				unSavedChangePlural: "alterações não salvas",
				popoverDiscard: "Tem certeza que deseja descartar quaisquer alterações não salvas?",
				yes: "Sim",
				no: "Não",
				popoverOpenViewExplain: "Ao abrir o visualizador, você perderá quaisquer alterações não slavas",
				popoverOpenViewOk: "Ok",
				popoverOpenViewCancel: "Cancelar",
				popoverSaveWhenDone: "Não esqueça de salvar ao finalizar",
				closeWithPendingChange: "Tem certeza que deseja confirmar a ação ? Suas alterações serão perdidas.",
				gotIt: "Ok",
				savingApplication: "Salvando aplicativo",
				saveSuccess: "Aplicativo salvo com sucesso",
				saveError: "Falha ao salvar, tente novamente",
				saveError2: "ã_Save failed due to an invalid html tag in a name or description_Ç",
				saveError3: "ã_The title can't be empty_Ç",
				signIn: "Registre-se com uma conta em",
				signInTwo: "para salvar o aplicativo."
			},
			header:{
				editMe: "Editar-me !",
				templateTitle: "Configurar título do modelo",
				templateSubtitle: "Configurar subtítulo do modelo"
			},
			settings: {
				settingsHeader: "Configurações do aplicativo",
				modalCancel: "Cancelar",
				modalApply: "Aplicar"
			},
			settingsColors: {
				settingsTabColor: "Tema",
				settingsColorExplain: "Escolha um tema do aplicativo ou defina suas próprias cores.",
				settingsLabelColor: "Cores do plano de fundo do painel lateral e cabeçalho"
			},
			settingsHeader: {
				settingsTabLogo: "Cabeçalho",
				settingsLogoExplain: "Personalize o logo do cabeçalho (máximo de 250 x 50px).",
				settingsLogoEsri: "Logo da Esri",
				settingsLogoNone: "Nenhum logo",
				settingsLogoCustom: "Logo personalizado",
				settingsLogoCustomPlaceholder: "URL da Imagem",
				settingsLogoCustomTargetPlaceholder: "Clicar pelo link",
				settingsLogoSocialExplain: "Personalizar o link no cabeçalho superior direito.",
				settingsLogoSocialText: "Texto",
				settingsLogoSocialLink: "Link",
				settingsLogoSocialDisabled: "Este recurso foi desabilitado pelo Administrador"
			},
			settingsExtent: {
				settingsTabExtent: "Extensão",
				settingsExtentExplain: "Configure a extensão inicial pelo mapa interativo abaixo.",
				settingsExtentExplainBottom: "A extensão que você define modificará sua extensão inicial do mapa da web. Observe que se você estiver realizando uma série de oscilações esta extensão não será utilizada.",
				settingsExtentDateLineError: "ã_The extent cannot be across the meridian of 180ï¿½ longitude_Ç",
				settingsExtentDateLineError2: "Erro ao calcular a extensão",
				settingsExtentDrawBtn: "Desenhar uma nova extensão",
				settingsExtentModifyBtn: "Editar a extensão atual",
				settingsExtentApplyBtn: "Aplicar no mapa principal",
				settingsExtentUseMainMap: "Utilizar extensão de mapa atual"
			}
        },
		swipe: {
			mobileData: {
				noData: "Nenhum dado para exibir!",
				noDataExplain: "Toque no mapa para selecionar uma feição e voltar aqui",
				noDataMap: "Nenhum dado para este mapa",
				noPopup: "Nenhum pop-up encontrado para esta feição"
			},
			mobileLegend: {
				noLegend: "Nenhuma legenda para exibir."
			},
			swipeSidePanel: {
				editTooltip: "Configure a descrição do painel lateral",
				editMe: "Editar-me !",
				legendTitle: "Legenda"
			},
			infoWindow: {
				noFeature: "Nenhum dado para exibir",
				noFeatureExplain: "Toque no mapa para selecionar uma feição"
			},
			settingsLayout: {
				settingsTabLayout: "Estilo de Oscilar",
				settingsLayoutExplain: "Escolha um estilo para a ferramenta Oscilar.",
				settingsLayoutSwipe: "Barra vertical",
				settingsLayoutSpyGlass: "Luneta",
				settingsLayoutSelected: "Layout selecionado",
				settingsLayoutSelect: "Selecionar este layout",
				settingsSaveConfirm: "Algumas de suas alterações exigem que você salve e recarregue o aplicativo"
			},
			settingsDataModel: {
				settingsTabDataModel: "Tipo de Oscilação",
				settingsDataModelExplainSwipe: "O que você deseja que seja oscilado pelos usuários?",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Escolha a camada ou mapa da web que aparecerá na luneta.",
				settingsDataModelOneMap: "Uma camada em um mapa da web",
				settingsDataModel1Explain: "Selecione uma camada que deseja que seja oscilada",
				settingsDataModel1Warning: "Se a camada estiver ocultada por camadas superiores, a oscilação não terá efeito.",
				settingsDataModel1SpyGlassExplain: "Selecione a camada para aparecer na luneta.",
				settingsDataModelTwoMaps: "Dois mapas da web",
				settingsDataModelLayerIds: "IDs da Camada do Mapa da Web",
				settingsDataModelSelected: "Tipo selecionado",
				settingsDataModelWebmapSwipeId1: "ID do mapa da web à direita",
				settingsDataModelWebmapSwipeId2: "ID do mapa da web à esquerda",
				settingsDataModelWebmapGlassId1: "ID do mapa da web principal",
				settingsDataModelWebmapGlassId2: "ID do mapa da web da luneta",
				settingsDataModelSelect: "Selecionar este tipo",
				settingsDataModel2Explain: "Oscilar com outro mapa da web.",
				settingsDataModel2SpyGlassExplain: "Revelar com outro mapa da web.",
				settingsDataModel2HelpTitle: "Como encontrar ID do mapa da web?",
				settingsDataModel2HelpContent: "Copie e cole os dígitos após o sinal \'=\' na URL do mapa da web",
				switchMaps: "ã_Switch maps_Ç",
				browseWebMaps: "ã_Browse web maps_Ç"
			},
			settingsLegend: {
				settingsTabLegend: "Layout do Aplicativo",
				settingsLegendExplain: "Seleciona as configurações de layout do aplicativo.",
				settingsLegendEnable: "Habilitar Legenda",
				settingsDescriptionEnable: "Habilitar Descrição",
				settingsBookmarksEnable: "Habilitar série do Oscilar",
				settingsPopupDisable: "Habilitar pop-up",
				settingsLocationSearchEnable: "Habilitar pesquisa do localizador",
				settingsGeolocatorEnable: "Habilitar geolocalizador",
				settingsLegendHelpContent: "Para refinar o conteúdo da legenda, utilize a área de controle do visualizador de mapa da web do ArcGIS.com (Oculto na Legenda)",
				settingsSeriesHelpContent: "A série Oscilar é uma opção de navegação por abas, que irá orientar o visualizador até uma extensão em particular e exibir um texto de descrição e título no painel lateral. Durante a ativação inicial, os marcadores de mapa da web serão importados e utilizados para preencher a barra de série. Desabilitar a opção em série desligará a barra de série, mas a configuração de série é preservada para utilização futura.", 
				settingsSeriesHelpContent2: "A série de oscilação permite a você criar e editar uma seleção de posições com acompanhamento de títulos e texto.  Se seu mapa da web tiver marcadores, eles serão exibidos.  Você pode desativar a série, mas a configuração será preservada para uso futuro.",
				settingsSeriesHelpLink: "Consulte um exemplo de um aplicativo com uma série de oscilação aqui",
				preview: "Visualizar ID",
				settingsLocateButtonExplain: "Esta funcionalidade é suportada na maioria dos dispositivos móveis e navegadores desktop (incluindo Internet Explorer 9 +).",
				settingsLocateButton: "ã_Enable a 'Locate' button on supported browsers_Ç",
				settingsAddressSearch: "Habilitar uma ferramenta de pesquisa de endereço"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Pop-up",
				settingsSwipePopupExplain: "Personalize a aparência de pop-ups do cabeçalho para ajudar o usuário à associar pop-ups com camadas de mapas.",
				settingsSwipePopupSwipe1: "Mapa à Esquerda",
				settingsSwipePopupSwipe2: "Mapa à Direita",
				settingsSwipePopupGlass1: "Mapa Principal",
				settingsSwipePopupGlass2: "Mapa da Luneta",
				settingsSwipePopupTitle: "Título do Cabeçalho",
				settingsSwipePopupColor: "Cor do Cabeçalho"
			},
			initPopup: {
				initHeader: "ã_Welcome to the Swipe/Spyglass Builder_Ç",
				modalNext: "Avançar",
				modalPrev: "Anterior",
				modalApply: "Abrir o aplicativo"
			},
			seriesPanel: {
				title: "Título",
				descr: "Descrição",
				discard: "Descartar Marcador",
				saveExtent: "Configurar Extensão do Marcador",
				discardDisabled: "Você não pode remover este marcador. A troca de série pode ser desabilitada nas Configurações."
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