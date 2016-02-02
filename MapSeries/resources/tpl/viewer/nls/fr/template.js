define(
	 ({
		viewer: {
			common: {
				close: "Fermer"
			},
			loading: {
				long: "Le récit est en cours d\'initialisation",
				long2: "Merci de patienter",
				failButton: "Recharger le récit"
			},
			signin: {
				title: "L\'authentification est nécessaire",
				explainViewer: "Connectez-vous avec un compte sur %PORTAL_LINK% pour accéder au récit.",
				explainBuilder: "Connectez-vous avec un compte sur %PORTAL_LINK% pour configurer le récit."
			},
			errors: {
				boxTitle: "Une erreur s’est produite",
				invalidConfig: "Configuration non valide",
				invalidConfigNoApp: "Identifiant de l\'application cartographique Web non spécifié dans index.html.",
				invalidConfigNoAppDev: "æ_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________Â.",
				unspecifiedConfigOwner: "Le propriétaire autorisé n\'est pas configuré.",
				invalidConfigOwner: "Le propriétaire du récit n\'est pas autorisé.",
				createMap: "Impossible de créer la carte",
				invalidApp: "Le %TPL_NAME% n\'existe pas ou est inaccessible.",
				appLoadingFail: "Une erreur s\'est produite et le chargement de %TPL_NAME% ne s\'est pas correctement déroulé.",
				notConfiguredDesktop: "Le récit n\'est pas encore configuré.",
				notConfiguredMobile: "æ_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________Â.",
				notConfiguredMobile2: "æ_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________Â.",
				notAuthorized: "Vous n\'êtes pas autorisé à accéder à ce récit.",
				notAuthorizedBuilder: "æ_You are not authorized to use %TPL_NAME% builder________________Â.",
				noBuilderIE: "Le générateur n\'est pas pris en charge dans Internet Explorer avant la version %VERSION%. %UPGRADE%",
				noViewerIE: "Ce récit n\'est pas pris en charge dans Internet Explorer avant la version %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Mettez votre navigateur à jour</a>.",
				mapLoadingFail: "Une erreur s\'est produite et la carte n\'a pas été correctement chargée.",
				signOut: "Déconnexion"
			},
			mobileInfo: {
				legend: "Légende",
				description: "Description",
				lblLegendMobileError: "La légende n\'est pas disponible. Rechargez le récit.",
				lblLegendMobileErrorExplain: "La légende n\'est pas disponible lorsque le périphérique est pivoté en mode portrait après le chargement du récit."
			},
			mobileFooter: {
				swipeInvite: "Effectuez un balayage pour parcourir le récit",
				lblNext: "Suivant",
				lblEnd: "Vous êtes parvenu au terme du récit"
			},
			headerFromCommon: {
				storymapsText: "Story Map",
				builderButton: "Mettre à jour",
				facebookTooltip: "Partager sur Facebook",
				twitterTooltip: "Partager sur Twitter",
				bitlyTooltip: "Obtenir un lien court",
				templateTitle: "Définir le titre du modèle",
				templateSubtitle: "Définir le sous-titre du modèle",
				share: "Partager",
				checking: "Vérification du contenu de votre récit",
				fix: "Résoudre les problèmes du récit",
				noerrors: "Aucun problème détecté",
				tooltipAutoplayDisabled: "æ_This isn't available in autoplay mode____________Â",
				notshared: "æ_Story not shared______Â"
			},
			overviewFromCommon: {
				title: "Vue générale"
			},
			legendFromCommon: {
				title: "Légende"
			},
			shareFromCommon: {
				copy: "Copier",
				copied: "Copié",
				open: "Ouvrir",
				embed: "Incorporer dans une page Web",
				embedExplain: "Utilisez le code HTML suivant pour incorporer le récit dans une page Web.",
				size: "Taille (largeur/hauteur) :",
				autoplayLabel: "æ_Autoplay mode_____Â",
				autoplayExplain1: "æ_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________Â.",
				autoplayExplain2: "æ_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________Â.",
				linksupdated: "æ_Links updated_____Â!"
			},
			locatorFromCommon: {
				error: "Emplacement non disponible"
			}
        }
    })
);