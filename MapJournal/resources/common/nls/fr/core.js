define(
	 ({
		commonCore: {
			common: {
				add: "Ajouter",
				edit: "Modifier",
				save: "Enregistrer",
				next: "Suivant",
				cancel: "Annuler",
				back: "Retour",
				apply: "Appliquer",
				close: "Fermer",
				open: "Ouvrir",
				start: "Démarrer",
				loading: "Chargement en cours",
				disabledAdmin: "Cette entité a été désactivée par l\'administrateur",
				width: "Largeur",
				height: "Hauteur",
				create: "Créer",
				yes: "Oui",
				no: "Non",
				mystories: "æ_My Stories____Â"
			},
			inlineFieldEdit: {
				editMe: "Modifier"
			},
			builderPanel: {
				panelHeader: "Générateur %TPL_NAME%",
				buttonSaving: "Enregistrement",
				buttonSaved: "Enregistré",
				buttonShare: "Partager",
				buttonSettings: "Paramètres",
				buttonHelp: "Aide",
				buttonPreview: "æ_View story____Â",
				tooltipFirstSave: "Cette fonction n\'est pas disponible tant qu\'un enregistrement n\'est pas effectué.",
				tooltipNotShared: "Cette fonction n\'est pas disponible tant qu\'un partage n\'est pas effectué.",
				tooltipNotShared2: "æ_Your story isn't shared, only you can access it_______________Â.",
				noPendingChange: "Aucune modification en attente",
				unSavedChangePlural: "Modifications en attente",
				closeWithPendingChange: "Vouez-vous vraiment confirmer cette opération ? Vos modifications seront perdues.",
				saveError: "L\’enregistrement a échoué, réessayez",
				status1: "Le récit est partagé, mais comporte des problèmes",
				status2: "Le récit n\'est pas partagé, mais comporte des problèmes",
				status3: "Le récit est public",
				status4: "Le récit est partagé au sein de votre organisation",
				status5: "Le récit est privé",
				status6: "Le récit n\'est pas encore enregistré",
				checking: "Vérification",
				fix: "Localisation"
			},
			saveError: {
				title: "Erreur d\'enregistrement du récit",
				err1Div1: "Impossible d\'enregistrer le récit, car un autre élément porte déjà le même nom.",
				err1Div2: "Modifiez le titre de votre récit et enregistrez-le.",
				btnOk: "Modifier le titre du récit"
			},
			saveErrorSocial: {
				title: "æ_Social media sharing update_________Â",
				panel1: "æ_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________Â.",
				panel1tooltip: "æ_By defining a title, summary and thumbnail image, your story will look like this_________________________Â:",
				panel2:	"æ_Which title would you like to use on social media________________Â:",
				panel2q1: "æ_Story title (recommended)_________Â",
				panel2q1tooltip: "æ_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________Â.",
				panel2q2: "æ_Item title____Â",
				panel3: "æ_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________Â.",
				panel4: "æ_Do not warn me again for this story____________Â"
			},
			share: {
				shareTitle: "Partager votre récit",
				preview: "Aperçu",
				viewlive: "æ_View story____Â",
				btnPrivate: "Privé",
				btnPrivateTooltip: "Vous seul pouvez voir le récit",
				btnOrg: "Organisation",
				btnOrgTooltip: "Seuls les membres de votre organisation peuvent voir le récit",
				btnPublic: "Public",
				btnPublicTooltip: "Tout le monde peut voir le récit",
				loadingMessage: "Recherche d\'erreurs dans votre récit",
				viewToggle1: "Afficher le contenu du récit",
				viewToggle2: "Fermer le contenu du récit",
				socialize: "Communiquer",
				statusPrivate: "Votre récit est privé, vous seul pouvez le voir.",
				statusError: "Certains problèmes affectant le contenu de votre récit seront visibles pour les lecteurs. Vous pouvez les identifier et les résoudre ci-dessous.",
				statusNoErrPrivate: "Partagez votre récit dès que vous êtes prêt !",
				mystoriesinvite: "Gérer tous vos récits",
				notavailable1: "Le partage de votre récit depuis le générateur n\'est pas pris en charge, car cette application n\'est pas hébergée dans %PRODUCT%.",
				notavailable2: "Le partage de votre récit depuis le générateur n\'est pas pris en charge dans cette version de Portal for ArcGIS (requiert la version 10.4 ou ultérieure).",
				notavailable3: "Vous pouvez partager ce récit depuis %LINK%.",
				notavailable4: "Mes récits",
				notavailable5: "æ_its item page_____Â",
				notavailable6: "Cette fonctionnalité n\'est pas entièrement prise en charge en mode de développement. Selon votre type de déploiement, elle peut être prise en charge une fois déployée.",
				notavailable7: "Consultez %MYCONTENT% pour vérifier que les cartes et couches utilisées dans votre récit sont également partagées.",
				notavailable8: "Mon contenu",
				mystoriesinvite2: "æ_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________Â."
			},
			settings: {
				header: "Paramètres",
				tabError: "Recherchez des erreurs dans tous les onglets"
			},
			settingsLayout: {
				title: "æ_Layout___Â",
				explain: "Quelle mise en page voulez-vous utiliser ?",
				explainInit: "Vous pouvez modifier la mise en page à tout moment dans la boîte de dialogue des paramètres.",
				viewExample: "Voir un exemple en direct"
			},
			settingsTheme: {
				title: "æ_Theme___Â"
			},
			settingsHeader: {
				title: "æ_Header___Â",
				logoEsri: "Logo Esri",
				logoNone: "Aucun logo",
				logoCustom: "Logo personnalisé",
				logoCustomPlaceholder: "URL (250x50 pixels max.)",
				logoCustomTargetPlaceholder: "Lien",
				logoSocialExplain: "Personnalisez le lien d\'en-tête.",
				logoSocialText: "Texte",
				logoSocialLink: "Lien",
				lblSmallHeader: "Utiliser un en-tête compact (pas de sous-titre)"
			},
			header: {
				title: "æ_Edit the title of your %TPL_NAME%___________Â",
				subtitle: "Modifiez le sous-titre de votre %TPL_NAME%"
			}
		}
	})
);
