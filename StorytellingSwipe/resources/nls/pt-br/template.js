define(
	 ({
		viewer: {
			loading: {
				step1: "CARREGANDO HISTÓRIA",
				step2: "CARREGANDO DADOS",
				step3: "INICIALIZANDO",
				fail: "Desculpe, falha ao carregar a ferramenta Oscilar",
				loadBuilder: "TROCANDO PARA MODO DO CONSTRUTOR",
				redirectSignIn: "REDIRECIONANDO PARA PÁGINA DE REGISTRO",
				redirectSignIn2: "(você será redirecionado aqui após registrar)",
				failButton: "Tentar Novamente"
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				portalSelf: "Erro fatal: Falha ao obter configuração do portal",
				invalidConfig: "Erro fatal: configuração inválida",
				invalidConfigNoWebmap: "ã_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________Ç",
				invalidConfigNoAppDev: "ã_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________Ç.",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "Erro fatal:  A história não pode ser carregada",
				initMobile: "Bem-Vindo ao aplicativo da web Oscilar. O aplicativo não está configurado. O construtor interativo não tem suporte em dispositivos móveis.",
				initMobile2: "ã_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________Ç.",
				initMobile3: "ã_Please rotate your device to landscape orientation to use the Swipe builder________________________Ç.",
				noBuilderIE8: "O construtor interativo Oscilar não tem suporte no Internet Explorer anterior à versão 9.",
				noLayerView: "Bem-Vindo ao aplicativo da web Oscilar.<br />O aplicativo não está configurado",
				appSave: "Erro ao salvar a história da web",
				mapSave: "Erro ao salvar o mapa da web",
				notAuthorized: "Você não tem autorização para acessar esta história",
				notAuthorizedBuilder: "ã_You are not authorized to use Swipe and Spyglass builder__________________Ç.",
				conflictingProjectionsTitle: "Projeções em Conflito",
				conflictingProjections: "A ferramenta Oscilar não suporta dois mapas da web com projeções diferentes. Abra as configurações e utilize um mapa da web que utiliza a mesma projeção que o primeiro mapa da web.",
				cpButton: "Fechar",
				unspecifiedConfigOwner: "O proprietário autorizado não foi configurado.",
				invalidConfigOwner: "O proprietário da história não está autorizado."
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
				facebookTooltip: "Compartilhar no Facebook",
				twitterTooltip: "Compartilhar no Twitter",
				bitlyTooltip: "Obter um link curto",
				tooltipAutoplayDisabled: "ã_This isn't available in autoplay mode____________Ç",
				autoplayLabel: "ã_Autoplay mode_____Ç",
				autoplayExplain1: "ã_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Ç.",
				autoplayExplain2: "ã_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Ç."
			}
		},
		builder: {
			builder: {
				panelHeader: "CONFIGURAÇÃO DA HISTÓRIA",
				buttonSave: "SALVAR",
				buttonHelp: "Ajuda",
				buttonShare: "Compartilhar",
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
				savingApplication: "Salvando história",
				saveSuccess: "ã_Story saved____Ç",
				saveError: "Falha ao salvar, tente novamente",
				saveError2: "Falha ao salvar devido a uma tag de html inválida em um nome ou descrição",
				saveError3: "O título não pode estar vazio",
				signIn: "Registre-se com uma conta em",
				signInTwo: "para salvar a história."
			},
			header:{
				editMe: "Editar-me!",
				templateTitle: "Configurar título do modelo",
				templateSubtitle: "Configurar subtítulo do modelo"
			},
			settings: {
				settingsHeader: "Configurações da história",
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
				settingsExtentDateLineError: "A extensão não pode cruzar o meridiano de longitude de 180ï¿½",
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
				editMe: "Editar-me!",
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
				settingsSaveConfirm: "Algumas de suas alterações exigem que você salve e recarregue a história"
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
				switchMaps: "Trocar mapas",
				browseWebMaps: "Procurar mapas da web"
			},
			settingsLegend: {
				settingsTabLegend: "Layout do Aplicativo",
				settingsLegendExplain: "Seleciona as configurações do layout.",
				settingsLegendEnable: "Habilitar Legenda",
				settingsDescriptionEnable: "Habilitar Descrição",
				settingsBookmarksEnable: "Habilitar série do Oscilar",
				settingsPopupDisable: "ã_Enable pop-up_____Ç",
				settingsLocationSearchEnable: "Habilitar pesquisa do localizador",
				settingsGeolocatorEnable: "Habilitar geolocalizador",
				settingsLegendHelpContent: "ã_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________Ç",
				settingsSeriesHelpContent: "A série Oscilar é uma opção de navegação por abas, que irá orientar o visualizador até uma extensão em particular e exibir um texto de descrição e título no painel lateral. Durante a ativação inicial, os marcadores de mapa da web serão importados e utilizados para preencher a barra de série. Desabilitar a opção em série desligará a barra de série, mas a configuração de série é preservada para utilização futura.",
				settingsSeriesHelpContent2: "A série de oscilação permite a você criar e editar uma seleção de posições com acompanhamento de títulos e texto.  Se seu mapa da web tiver marcadores, eles serão exibidos.  Você pode desativar a série, mas a configuração será preservada para uso futuro.",
				settingsSeriesHelpLink: "Consulte um exemplo de um aplicativo com uma série de oscilação aqui",
				preview: "Visualizar ID",
				settingsLocateButtonExplain: "Esta funcionalidade é suportada na maioria dos dispositivos móveis e navegadores desktop (incluindo Internet Explorer 9 +).",
				settingsLocateButton: "Habilitar botão \'Localizar\' em navegadores suportados",
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
				initHeader: "Bem-Vindo ao Builder de Oscilar/Luneta",
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
				title: "Ajuda",
				close: "Fechar",
				tab1: {
					div1: "O modelo Oscilar/Luneta é projetado para comparar dois mapas da web separados ou duas camadas de um único mapa da web em um aplicativo da web atrativo, de fácil uso que pode ser utilizado em qualquer navegador da web em qualquer dispositivo, incluindo smartphones e tablets.",
					div2: "Para informações adicionais sobre o modelo Oscilar/Luneta, incluindo exemplos criados por usuários, <a href='http://storymaps.arcgis.com/en/app-list/swipe/' target='_blank'> visite o site da web Mapas Históricos</a>. Você também pode nos seguir pelo Twitter em <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Nós adoraríamos ouvir sua opinião! Se você tem uma pergunta, deseja solicitar uma nova feição ou se você localizou um erro, visite <a href='http://links.esri.com/storymaps/forum' target='_blank'>Story Maps User Forum</a>."
				}
			},
			share: {
				firstSaveTitle: "ã_Story saved____Ç",
				manageStory: "ã_Manage your story______Ç",
				manageStoryA1: "ã_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________Ç.",
				manageStoryA1V1: "ã_My Stories____Ç",
				manageStoryA1V2: "ã_blog posts____Ç",
				shareTitle: "Compartilhar sua história",
				sharePrivateHeader: "Sua história não foi compartilhada, deseja compartilhá-la?",
				sharePrivateBtn1: "Compartilhar publicamente",
				sharePrivateBtn2: "Compartilhar com minha Organização",
				sharePrivateProgress: "Compartilhamento em progresso...",
				sharePrivateErr: "Falha ao compartilhar, tente novamente ou",
				sharePrivateOk: "ã_Sharing updated, loading_________Ç...",
				shareStatus1: "A história não foi salva",
				shareStatus2: "A história está compartilhada publicamente",
				shareStatus3: "A história está compartilhada dentro da organização",
				shareStatus4: "A história não foi compartilhada",
				sharePreviewAsUser: "Visualizar",
				shareHeader1: "Sua história é <strong>acessível publicamente</strong>.",
				shareHeader2: "Sua história é acessível por seus membros da organização (login é exigido).",
				shareLinkHeader: "ã_Share your story______Ç",
				shareLinkOpen: "ABRIR",
				learnMore: "Mais informações",
				shareA1: "Utilize %SHAREIMG% na <a href='%LINK1%' target='_blank'>página de item do aplicativo</a>. Se você também desejar descompartilhar o mapa web, utilize <a href='%LINK2%' target='_blank'>página de item do mapa da web</a>.",
				shareWarning: "O compartilhamento %WITH% foi desabilitada, pois você não é o proprietário do <a href='%LINK%' target='_blank'>mapa da web</a>.",
				shareWarningWith1: "ã_publicly___Ç",
				shareWarningWith2: "ã_publicly and with the Organization___________Ç"
			},
			directCreation: {
				header: "Bem-Vindo ao Builder de Oscilar/Luneta",
				mapPickHeader: "Para iniciar, insira um ID de mapa da web válido ou utilize o botão de pesquisa para consultar mapas da web.",
				launchBuilder: "Inciar Builder",
				chooseWebmapLbl: "Escolher mapa da web...",
				explain2: "ã_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________Ç.",
				explain3: "Se desejar utilizar dois mapas da web em seu mapa histórico, você será solicitado para o segundo mapa da web posteriormente, ao escolher esta opção.",
				webmapPlaceholder: "Inserir um ID de mapa da web..."
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
					organizationLabel: "Minha Organização",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Meu Conteúdo",
					favoritesLabel: "Meus Favoritos"
				},
				title: "ã_Select Web Map_____Ç",
				searchTitle: "Pesquisar",
				ok: "Ok",
				cancel: "Cancelar",
				placeholder: "Inserir termo de pesquisa"
			}
		}
    })
);
