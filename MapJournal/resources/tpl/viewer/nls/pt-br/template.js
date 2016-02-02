define(
	 ({
		viewer: {
			common: {
				close: "Fechar"
			},
			loading: {
				step1: "Carregando história",
				step2: "Carregando dados",
				step3: "Inicializando",
				loadBuilder: "Trocando para construtor",
				long: "O diário do mapa está inicializando",
				long2: "Obrigado por aguardar",
				failButton: "Recarregar a história"
			},
			signin: {
				title: "uma autenticação é exigida",
				explainViewer: "Entre com uma conta no %PORTAL_LINK% para acessar a história.",
				explainBuilder: "Entre com uma conta no %PORTAL_LINK% para configurar a história."
			},
			errors: {
				boxTitle: "Ocorreu um erro",
				invalidConfig: "Configuração inválida",
				invalidConfigNoApp: "Identificador do Aplicativo de Mapeamento da Web não especificado no index.html.",
				invalidConfigNoAppDev: "ã_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________Ç.",
				unspecifiedConfigOwner: "O proprietário autorizado não foi configurado.",
				invalidConfigOwner: "O proprietário da história não está autorizado.",
				createMap: "Não foi possível criar o mapa",
				invalidApp: "O %TPL_NAME% não existe ou está inacessível.",
				appLoadingFail: "Ocorreu algo errado, o %TPL_NAME% não carregou corretamente.",
				notConfiguredDesktop: "A história ainda não está configurada.",
				notConfiguredMobile: "ã_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________Ç.",
				notConfiguredMobile2: "ã_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________Ç.",
				notAuthorized: "Você não tem autorização para acessar esta história",
				notAuthorizedBuilder: "ã_You are not authorized to use %TPL_NAME% builder________________Ç.",
				noBuilderIE: "O construtor não é suportado no Internet Explorer antes da versão %VERSION%. %UPGRADE%",
				noViewerIE: "Esta história não é suportada no Internet Explorer antes da versão %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Atualize seu navegador</a>.",
				mapLoadingFail: "ã_Something went wrong, the map did not load correctly_________________Ç.",
				signOut: "Sair"
			},
			mobileView: {
				tapForDetails: "Toque poara detalhes",
				clickForDetails: "Mais informações",
				swipeToExplore: "Oscile para explorar",
				tapForMap: "Toque para voltar ao Mapa",
				clickForMap: "VOLTAR AO MAPA"
			},
			floatLayout: {
				scroll: "Rolar"
			},
			sideLayout: {
				scroll: "Role para baixo para mais!"
			},
			mainStage: {
				back: "Voltar"
			},
			headerFromCommon: {
				storymapsText: "Um mapa histórico",
				builderButton: "Editar",
				facebookTooltip: "Compartilhar no Facebook",
				twitterTooltip: "Compartilhar no Twitter",
				bitlyTooltip: "Obter um link curto",
				templateTitle: "Configurar título do modelo",
				templateSubtitle: "Configurar subtítulo do modelo",
				share: "Compartilhar",
				checking: "Verificando conteúdo da sua história",
				fix: "Corrigir problemas em sua história",
				noerrors: "Nenhum problema detectado",
				tooltipAutoplayDisabled: "ã_This isn't available in autoplay mode____________Ç",
				notshared: "ã_Story not shared______Ç"
			},
			overviewFromCommon: {
				title: "Mapa de Visão Geral"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Copiar",
				copied: "Copiado",
				open: "Abrir",
				embed: "Anexar na página da web",
				embedExplain: "Utilize o seguinte código HTML para anexar o diário em uma página da web.",
				size: "Tamanho (largura/altura):",
				autoplayLabel: "ã_Autoplay mode_____Ç",
				autoplayExplain1: "ã_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Ç.",
				autoplayExplain2: "ã_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Ç.",
				linksupdated: "ã_Links updated_____Ç!"
			}
        }
    })
);