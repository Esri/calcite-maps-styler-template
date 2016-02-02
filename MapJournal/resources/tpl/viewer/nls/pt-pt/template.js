define(
	 ({
		viewer: {
			common: {
				close: "Fechar"
			},
			loading: {
				step1: "A carregar a história",
				step2: "A carregar dados",
				step3: "Inicializando",
				loadBuilder: "Alternando para builder",
				long: "O Jornal de Mapa está a inicializar",
				long2: "Obrigado por aguardar",
				failButton: "Recarregar a história"
			},
			signin: {
				title: "É necessária autenticação",
				explainViewer: "Por favor inicie sessão com uma conta em %PORTAL_LINK% para aceder à história.",
				explainBuilder: "Por favor inicie sessão com uma conta em %PORTAL_LINK% para configurar a história."
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				invalidConfig: "Configuração inválida",
				invalidConfigNoApp: "O identificador da Aplicação de Cartografia Web não se encontra especificado em index.html",
				invalidConfigNoAppDev: "ã_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________Ç.",
				unspecifiedConfigOwner: "O proprietário autorizado não foi configurado.",
				invalidConfigOwner: "O proprietário da história não está autorizado.",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "O %TPL_NAME% não existe ou encontra-se inacessível.",
				appLoadingFail: "Aolgo correu mal, o %TPL_NAME% não foi carregado corretamente.",
				notConfiguredDesktop: "A história ainda não se encontra configurada.",
				notConfiguredMobile: "ã_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________Ç.",
				notConfiguredMobile2: "ã_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________Ç.",
				notAuthorized: "Não tem autorização para aceder a esta história",
				notAuthorizedBuilder: "ã_You are not authorized to use %TPL_NAME% builder________________Ç.",
				noBuilderIE: "O construtor não é suportado em versões de Internet Explorer anteriores a %VERSION%. %UPGRADE%",
				noViewerIE: "Esta história não é suportada pelo Internet Explorer abaixo da versão %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Por favor atualize o seu browser</a>.",
				mapLoadingFail: "ã_Something went wrong, the map did not load correctly_________________Ç.",
				signOut: "Terminar sessão"
			},
			mobileView: {
				tapForDetails: "Toque para aceder a detalhes",
				clickForDetails: "Obtenha mais informações",
				swipeToExplore: "Deslize para explorar.",
				tapForMap: "Toque para regressar ao mapa",
				clickForMap: "VOLTAR AO MAPA"
			},
			floatLayout: {
				scroll: "Scroll"
			},
			sideLayout: {
				scroll: "Faça scroll para ver mais!"
			},
			mainStage: {
				back: "Retroceder"
			},
			headerFromCommon: {
				storymapsText: "Um mapa de história",
				builderButton: "Editar",
				facebookTooltip: "Partilhar no Facebook",
				twitterTooltip: "Partilhar no Twitter",
				bitlyTooltip: "Obter uma ligação curta",
				templateTitle: "Definir título do modelo",
				templateSubtitle: "Definir subtítulo do modelo",
				share: "Partilhar",
				checking: "A verificar o conteúdo da sua história",
				fix: "Corrija problemas na sua história",
				noerrors: "Não foram detetados problemas",
				tooltipAutoplayDisabled: "ã_This isn't available in autoplay mode____________Ç",
				notshared: "ã_Story not shared______Ç"
			},
			overviewFromCommon: {
				title: "Vista Geral do Mapa"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Copiar",
				copied: "Copiado",
				open: "Abrir",
				embed: "Incorporar em página web",
				embedExplain: "Utilize o seguinte código HTML para incorporar o jornal numa página web.",
				size: "Tamanho (largura/altura):",
				autoplayLabel: "ã_Autoplay mode_____Ç",
				autoplayExplain1: "ã_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Ç.",
				autoplayExplain2: "ã_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Ç.",
				linksupdated: "ã_Links updated_____Ç!"
			}
        }
    })
);