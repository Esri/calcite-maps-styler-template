define(
	 ({
		viewer: {
			common: {
				close: "Fechar"
			},
			loading: {
				long: "A história está a inicializar",
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
				invalidConfigNoApp: "Identificador de Aplicação de Cartografia Web não especificada em index.html.",
				invalidConfigNoAppDev: "ã_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________Ç.",
				unspecifiedConfigOwner: "O proprietário autorizado não foi configurado.",
				invalidConfigOwner: "O proprietário da história não está autorizado.",
				createMap: "Não foi possível criar mapa",
				invalidApp: "O %TPL_NAME% não existe ou encontra-se inacessível.",
				appLoadingFail: "Algo correu mal, o %TPL_NAME% não foi carregado corretamente.",
				notConfiguredDesktop: "A história ainda não se encontra configurada.",
				notConfiguredMobile: "ã_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________Ç.",
				notConfiguredMobile2: "ã_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________Ç.",
				notAuthorized: "Não tem autorização para aceder a esta história",
				notAuthorizedBuilder: "ã_You are not authorized to use %TPL_NAME% builder________________Ç.",
				noBuilderIE: "O builder não é suportado no Internet Explorer anterior à versão %VERSION%. %UPGRADE%",
				noViewerIE: "Esta história não é suportada pelo Internet Explorer abaixo da versão %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Please update your browser</a>.",
				mapLoadingFail: "Algo correu mal, o mapa não foi carregado corretamente.",
				signOut: "Terminar Sessão"
			},
			mobileInfo: {
				legend: "Legenda",
				description: "Descrição",
				lblLegendMobileError: "Lamentamos, a legenda está indisponível. Por favor, volte a carregar a história.",
				lblLegendMobileErrorExplain: "A legenda não se encontra disponível quando o dispositivo é rodado para modo de paisagem após a história ter sido carregada."
			},
			mobileFooter: {
				swipeInvite: "passe com o dedo para navegar pela história",
				lblNext: "Seguinte",
				lblEnd: "Chegou ao fim da história"
			},
			headerFromCommon: {
				storymapsText: "Um story map",
				builderButton: "Editar",
				facebookTooltip: "Partilhar no Facebook",
				twitterTooltip: "Partilhar no Twitter",
				bitlyTooltip: "Obter uma ligação curta",
				templateTitle: "Definir o título do modelo",
				templateSubtitle: "Definir o subtítulo do modelo",
				share: "Partilhar",
				checking: "A verificar o conteúdo da sua história",
				fix: "Corrija problemas na sua história",
				noerrors: "Não foram detetados problemas",
				tooltipAutoplayDisabled: "ã_This isn't available in autoplay mode____________Ç",
				notshared: "ã_Story not shared______Ç"
			},
			overviewFromCommon: {
				title: "Mapa de Vista Geral"
			},
			legendFromCommon: {
				title: "Legenda"
			},
			shareFromCommon: {
				copy: "Copiar",
				copied: "Copiado",
				open: "Abrir",
				embed: "Incorporar em página web",
				embedExplain: "Utilize o seguinte código HTML para incorporar a história numa página web.",
				size: "Tamanho (largura/altura):",
				autoplayLabel: "ã_Autoplay mode_____Ç",
				autoplayExplain1: "ã_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Ç.",
				autoplayExplain2: "ã_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Ç.",
				linksupdated: "ã_Links updated_____Ç!"
			},
			locatorFromCommon: {
				error: "Localização indisponível"
			}
        }
    })
);