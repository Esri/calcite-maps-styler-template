define(
	 ({
		viewer: {
			common: {
				close: "Κλείσιμο"
			},
			loading: {
				long: "Αρχικοποίηση της αφήγησης",
				long2: "Ευχαριστούμε που περιμένατε",
				failButton: "Επαναφόρτωση της αφήγησης"
			},
			signin: {
				title: "Απαιτείται έλεγχος ταυτότητας",
				explainViewer: "Εισέλθετε με έναν λογαριασμό στο %PORTAL_LINK% για να προσπελάσετε την αφήγηση.",
				explainBuilder: "Εισέλθετε με έναν λογαριασμό στο %PORTAL_LINK% για να διαμορφώσετε την αφήγηση."
			},
			errors: {
				boxTitle: "Παρουσιάστηκε σφάλμα",
				invalidConfig: "Μη έγκυρη διαμόρφωση",
				invalidConfigNoApp: "Το αναγνωριστικό της διαδικτυακής χαρτογραφικής εφαρμογής δεν καθορίζεται στο index.html.",
				invalidConfigNoAppDev: "Đ_No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored______________________________________________ớ.",
				unspecifiedConfigOwner: "Δεν έχει διαμορφωθεί εξουσιοδοτημένος κάτοχος.",
				invalidConfigOwner: "Ο κάτοχος της αφήγησης δεν είναι εξουσιοδοτημένος.",
				createMap: "Δεν είναι δυνατή η δημιουργία χάρτη",
				invalidApp: "Το %TPL_NAME% δεν υπάρχει ή δεν είναι προσβάσιμο.",
				appLoadingFail: "Υπήρξε κάποιο πρόβλημα, το %TPL_NAME% δεν φορτώθηκε σωστά.",
				notConfiguredDesktop: "Η αφήγηση δεν έχει διαμορφωθεί ακόμη.",
				notConfiguredMobile: "Đ_The %TPL_NAME% builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen______________________________________________________ớ.",
				notConfiguredMobile2: "Đ_Please rotate your device to landscape orientation to use the %TPL_NAME% builder_________________________ớ.",
				notAuthorized: "Δεν έχετε εξουσιοδότηση για πρόσβαση σε αυτήν την αφήγηση.",
				notAuthorizedBuilder: "Đ_You are not authorized to use %TPL_NAME% builder________________ớ.",
				noBuilderIE: "Το Εργαλείο δημιουργίας δεν υποστηρίζεται στον Internet Explorer πριν από την έκδοση %VERSION%. %UPGRADE%",
				noViewerIE: "Αυτή η αφήγηση δεν υποστηρίζεται στον Internet Explorer πριν από την έκδοση %VERSION%. %UPGRADE%",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>Ενημερώστε το πρόγραμμα περιήγησης</a>.",
				mapLoadingFail: "Υπήρξε κάποιο πρόβλημα, ο χάρτης δεν φορτώθηκε σωστά.",
				signOut: "Έξοδος"
			},
			mobileInfo: {
				legend: "Υπόμνημα",
				description: "Περιγραφή",
				lblLegendMobileError: "Το υπόμνημα δεν είναι διαθέσιμο. Επαναλάβετε τη φόρτωση της αφήγησης.",
				lblLegendMobileErrorExplain: "Το υπόμνημα δεν είναι διαθέσιμο όταν η συσκευή περιστρέφεται κατακόρυφα μετά τη φόρτωση της αφήγησης."
			},
			mobileFooter: {
				swipeInvite: "Μετακινηθείτε στην ιστορία με σάρωση",
				lblNext: "Επόμενο",
				lblEnd: "Έχετε φθάσει στο τέλος της ιστορίας"
			},
			headerFromCommon: {
				storymapsText: "Ένα story map",
				builderButton: "Επεξεργασία",
				facebookTooltip: "Κοινοποίηση στο Facebook",
				twitterTooltip: "Κοινοποίηση στο Twitter",
				bitlyTooltip: "Λήψη σύντομου συνδέσμου",
				templateTitle: "Ορισμός τίτλου προτύπου",
				templateSubtitle: "Ορισμός υπότιτλου προτύπου",
				share: "Κοινοποίηση",
				checking: "Έλεγχος του περιεχόμενου της αφήγησής σας",
				fix: "Διόρθωση προβλημάτων στην αφήγησή σας",
				noerrors: "Δεν βρέθηκαν προβλήματα",
				tooltipAutoplayDisabled: "Đ_This isn't available in autoplay mode____________ớ",
				notshared: "Đ_Story not shared______ớ"
			},
			overviewFromCommon: {
				title: "Χάρτης αναφοράς"
			},
			legendFromCommon: {
				title: "Υπόμνημα"
			},
			shareFromCommon: {
				copy: "Αντιγραφή",
				copied: "Αντιγράφηκε",
				open: "Άνοιγμα",
				embed: "Ενσωμάτωση σε ιστοσελίδα",
				embedExplain: "Χρησιμοποιήστε τον παρακάτω HTML κώδικα για να ενσωματώσετε την αφήγηση σε μια ιστοσελίδα.",
				size: "Μέγεθος (πλάτος/ύψος):",
				autoplayLabel: "Đ_Autoplay mode_____ớ",
				autoplayExplain1: "Đ_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ớ.",
				autoplayExplain2: "Đ_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ớ.",
				linksupdated: "Đ_Links updated_____ớ!"
			},
			locatorFromCommon: {
				error: "Η τοποθεσία δεν είναι διαθέσιμη"
			}
        }
    })
);