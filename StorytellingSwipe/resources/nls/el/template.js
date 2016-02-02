define(
	 ({
		viewer: {
			loading: {
				step1: "ΦΟΡΤΩΣΗ ΑΦΗΓΗΣΗΣ",
				step2: "ΦΟΡΤΩΣΗ ΔΕΔΟΜΕΝΩΝ",
				step3: "ΑΡΧΙΚΟΠΟΙΗΣΗ",
				fail: "Λυπούμαστε, η φόρτωση του Swipe προτύπου απέτυχε",
				loadBuilder: "ΜΕΤΑΒΑΣΗ ΣΤΗ ΛΕΙΤΟΥΡΓΙΑ ΕΡΓΑΛΕΙΟΥ ΔΗΜΙΟΥΡΓΙΑΣ",
				redirectSignIn: "ΑΝΑΚΑΤΕΥΘΥΝΣΗ ΣΤΗ ΣΕΛΙΔΑ ΕΙΣΟΔΟΥ",
				redirectSignIn2: "(θα ανακατευθυνθείτε εδώ μετά την είσοδο)",
				failButton: "Επανάληψη"
			},
			errors: {
				boxTitle: "Παρουσιάστηκε σφάλμα",
				portalSelf: "Ανεπανόρθωτο σφάλμα: η λήψη της διαμόρφωσης της πύλης απέτυχε",
				invalidConfig: "Ανεπανόρθωτο σφάλμα: μη έγκυρη διαμόρφωση",
				invalidConfigNoWebmap: "Đ_Fatal error: Invalid configuration (web map or application identifier not specified in index.html)______________________________ớ",
				invalidConfigNoAppDev: "Đ_No Web Mapping Application identifier or webmap are specified in URL parameters (?appid= or ?webmap=). In development mode, the appid and webmap configuration in index.html are ignored_________________________________________________________ớ.",
				createMap: "Δεν είναι δυνατή η δημιουργία χάρτη",
				invalidApp: "Ανεπανόρθωτο σφάλμα: δεν είναι δυνατή η φόρτωση της αφήγησης",
				initMobile: "Καλώς ορίσατε στην web εφαρμογή Swipe. Η εφαρμογή δεν έχει διαμορφωθεί. Το διαδραστικό εργαλείο δημιουργίας δεν υποστηρίζεται σε φορητές συσκευές.",
				initMobile2: "Đ_The Swipe builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen_____________________________________________________ớ.",
				initMobile3: "Đ_Please rotate your device to landscape orientation to use the Swipe builder________________________ớ.",
				noBuilderIE8: "Το διαδραστικό εργαλείο δημιουργίας Swipe δεν υποστηρίζεται στον Internet Explorer πριν από την έκδοση 9.",
				noLayerView: "Καλώς ορίσατε στην web  εφαρμογή Swipe.<br />Η εφαρμογή δεν έχει διαμορφωθεί ακόμη.",
				appSave: "Σφάλμα κατά την αποθήκευση της αφήγησης web",
				mapSave: "Σφάλμα κατά την αποθήκευση του web χάρτη",
				notAuthorized: "Δεν έχετε εξουσιοδότηση για πρόσβαση σε αυτήν την αφήγηση.",
				notAuthorizedBuilder: "Đ_You are not authorized to use Swipe and Spyglass builder__________________ớ.",
				conflictingProjectionsTitle: "Αλληλοσυγκρουόμενες προβολές",
				conflictingProjections: "To Swipe δεν υποστηρίζει τη χρήση δύο web χαρτών με διαφορετικές προβολές. Ανοίξτε τις ρυθμίσεις και χρησιμοποιήστε έναν web χάρτη που χρησιμοποιεί την ίδια προβολή με τον πρώτο web χάρτη.",
				cpButton: "Κλείσιμο",
				unspecifiedConfigOwner: "Δεν έχει διαμορφωθεί εξουσιοδοτημένος κάτοχος.",
				invalidConfigOwner: "Ο κάτοχος της αφήγησης δεν είναι εξουσιοδοτημένος."
			},
			mobileView: {
				hideIntro: "ΑΠΟΚΡΥΨΗ ΕΙΣΑΓΩΓΗΣ",
				navLeft: "Υπόμνημα",
				navMap: "Χάρτης",
				navRight: "Δεδομένα"
			},
			desktopView: {
				storymapsText: "Ένα story map",
				builderButton: "Μετάβαση στη λειτουργία εργαλείου δημιουργίας",
				facebookTooltip: "Κοινοποίηση στο Facebook",
				twitterTooltip: "Κοινοποίηση στο Twitter",
				bitlyTooltip: "Λήψη σύντομου συνδέσμου",
				tooltipAutoplayDisabled: "Đ_This isn't available in autoplay mode____________ớ",
				autoplayLabel: "Đ_Autoplay mode_____ớ",
				autoplayExplain1: "Đ_Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays__________________________________________________________________________ớ.",
				autoplayExplain2: "Đ_When this mode is active there are controls to play/pause the story and adjust the navigation speed_______________________________ớ."
			}
		},
		builder: {
			builder: {
				panelHeader: "ΔΙΑΜΟΡΦΩΣΗ ΑΦΗΓΗΣΗΣ",
				buttonSave: "ΑΠΟΘΗΚΕΥΣΗ",
				buttonHelp: "Βοήθεια",
				buttonShare: "Κοινοποίηση",
				buttonDiscard: "ΑΚΥΡΟ",
				buttonSettings: "Ρυθμίσεις",
				buttonView: "Λειτουργία προβολής",
				buttonItem: "Άνοιγμα της web εφαρμογής",
				noPendingChange: "Δεν υπάρχει εκκρεμής αλλαγή",
				unSavedChangeSingular: "1 μη αποθηκευμένη αλλαγή",
				unSavedChangePlural: "μη αποθηκευμένες αλλαγές",
				popoverDiscard: "Είστε βέβαιοι ότι θέλετε να απορρίψετε τυχόν μη αποθηκευμένες αλλαγές;",
				yes: "Ναι",
				no: "Όχι",
				popoverOpenViewExplain: "Ανοίγοντας το εργαλείο προβολής, θα χάσετε τυχόν μη αποθηκευμένες αλλαγές",
				popoverOpenViewOk: "OK",
				popoverOpenViewCancel: "Άκυρο",
				popoverSaveWhenDone: "Μην ξεχάσετε να αποθηκεύσετε όταν τελειώσετε",
				closeWithPendingChange: "Είστε βέβαιοι ότι θέλετε να επιβεβαιώσετε την ενέργεια; Οι αλλαγές σας θα χαθούν.",
				gotIt: "OK",
				savingApplication: "Αποθήκευση αφήγησης",
				saveSuccess: "Đ_Story saved____ớ",
				saveError: "Η αποθήκευση απέτυχε, δοκιμάστε ξανά",
				saveError2: "Η αποθήκευση απέτυχε λόγω μη έγκυρης HTML ετικέτας σε ένα όνομα ή μια περιγραφή",
				saveError3: "Ο τίτλος δεν μπορεί να είναι κενός",
				signIn: "Εισέλθετε με έναν λογαριασμό στο",
				signInTwo: "για να αποθηκεύσετε την αφήγηση."
			},
			header:{
				editMe: "Επεξεργαστείτε!",
				templateTitle: "Ορισμός τίτλου προτύπου",
				templateSubtitle: "Ορισμός υπότιτλου προτύπου"
			},
			settings: {
				settingsHeader: "Ρυθμίσεις αφήγησης",
				modalCancel: "Άκυρο",
				modalApply: "Εφαρμογή"
			},
			settingsColors: {
				settingsTabColor: "Θέμα",
				settingsColorExplain: "Επιλέξτε ένα θέμα για την εφαρμογή ή ορίστε τα δικά σας χρώματα.",
				settingsLabelColor: "Χρώματα φόντου κεφαλίδας και πλαϊνού πλαισίου"
			},
			settingsHeader: {
				settingsTabLogo: "Κεφαλίδα",
				settingsLogoExplain: "Προσαρμόστε το λογότυπο της κεφαλίδας (το μέγιστο μέγεθος είναι 250 x 50 px).",
				settingsLogoEsri: "Λογότυπο Esri",
				settingsLogoNone: "Χωρίς λογότυπο",
				settingsLogoCustom: "Προσαρμοσμένο λογότυπο",
				settingsLogoCustomPlaceholder: "URL εικόνας",
				settingsLogoCustomTargetPlaceholder: "Ενσωματωμένος σύνδεσμος",
				settingsLogoSocialExplain: "Προσαρμόστε τον πάνω δεξιό σύνδεσμο της κεφαλίδας.",
				settingsLogoSocialText: "Κείμενο",
				settingsLogoSocialLink: "Σύνδεσμος",
				settingsLogoSocialDisabled: "Αυτή η λειτουργία έχει απενεργοποιηθεί από το Διαχειριστή"
			},
			settingsExtent: {
				settingsTabExtent: "Έκταση",
				settingsExtentExplain: "Ορίστε την αρχική έκταση στον διαδραστικού χάρτη παρακάτω.",
				settingsExtentExplainBottom: "Η έκταση που καθορίζετε θα τροποποιήσει την αρχική έκταση του web χάρτη σας. Σημειώστε ότι εάν δημιουργείτε μια σειρά σαρώσεων, η έκταση αυτή δεν θα χρησιμοποιηθεί.",
				settingsExtentDateLineError: "Η έκταση δεν μπορεί να τέμνει τον μεσημβρινό γεωγραφικού μήκους 180ï¿½",
				settingsExtentDateLineError2: "Σφάλμα κατά τον υπολογισμό της έκτασης",
				settingsExtentDrawBtn: "Σχεδίαση νέας έκτασης",
				settingsExtentModifyBtn: "Επεξεργασία της τρέχουσας έκτασης",
				settingsExtentApplyBtn: "Εφαρμογή στον κύριο χάρτη",
				settingsExtentUseMainMap: "Χρήση έκτασης κύριου χάρτη"
			}
        },
		swipe: {
			mobileData: {
				noData: "Δεν υπάρχουν δεδομένα για εμφάνιση!",
				noDataExplain: "Πατήστε στο χάρτη για να επιλέξετε ένα στοιχείο και επιστρέψτε εδώ",
				noDataMap: "Δεν υπάρχουν δεδομένα για αυτόν το χάρτη",
				noPopup: "Δεν βρέθηκε αναδυόμενο παράθυρο για αυτό το στοιχείο"
			},
			mobileLegend: {
				noLegend: "Δεν υπάρχει υπόμνημα για εμφάνιση."
			},
			swipeSidePanel: {
				editTooltip: "Ορισμός της περιγραφής του πλαϊνού πλαισίου",
				editMe: "Επεξεργαστείτε!",
				legendTitle: "Υπόμνημα"
			},
			infoWindow: {
				noFeature: "Δεν υπάρχουν δεδομένα για εμφάνιση",
				noFeatureExplain: "Πατήστε στο χάρτη για να επιλέξετε ένα στοχείο"
			},
			settingsLayout: {
				settingsTabLayout: "Στυλ σάρωσης",
				settingsLayoutExplain: "Επιλέξτε ένα στυλ για το εργαλείο Swipe.",
				settingsLayoutSwipe: "Κατακόρυφη μπάρα",
				settingsLayoutSpyGlass: "Κιάλι",
				settingsLayoutSelected: "Επιλεγμένη διάταξη",
				settingsLayoutSelect: "Επιλογή αυτής της διάταξης",
				settingsSaveConfirm: "Για ορισμένες από τις αλλαγές σας απαιτείται να αποθηκεύσετε και να φορτώσετε ξανά την αφήγηση"
			},
			settingsDataModel: {
				settingsTabDataModel: "Τύπος σάρωσης",
				settingsDataModelExplainSwipe: "Τι θέλετε να σαρώνουν οι χρήστες;",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Επιλέξτε το θεματικό επίπεδο ή το web χάρτη που θα εμφανίζεται στο spyglass.",
				settingsDataModelOneMap: "Ένα θεματικό επίπεδο σε έναν web χάρτη",
				settingsDataModel1Explain: "Επιλέξτε το θεματικό επίπεδο που θέλετε να σαρώνετε",
				settingsDataModel1Warning: "Εάν το θεματικό επίπεδο κρύβεται από ανώτερα επίπεδα, τότε η σάρωση δεν θα έχει κανένα αποτέλεσμα.",
				settingsDataModel1SpyGlassExplain: "Επιλέξτε το θεματικό επίπεδο που θα εμφανίζεται μέσα στο spyglass.",
				settingsDataModelTwoMaps: "Δύο web χάρτες",
				settingsDataModelLayerIds: "ID θεματικών επιπέδων web χάρτη",
				settingsDataModelSelected: "Επιλεγμένος τύπος",
				settingsDataModelWebmapSwipeId1: "ID δεξιού web χάρτη",
				settingsDataModelWebmapSwipeId2: "ID αριστερού web χάρτη",
				settingsDataModelWebmapGlassId1: "ID κύριου web χάρτη",
				settingsDataModelWebmapGlassId2: "ID web χάρτη Spyglass",
				settingsDataModelSelect: "Επιλογή αυτού του τύπου",
				settingsDataModel2Explain: "Σάρωση με άλλον web χάρτη.",
				settingsDataModel2SpyGlassExplain: "Αποκάλυψη άλλου web χάρτη.",
				settingsDataModel2HelpTitle: "Πώς μπορώ να βρω το ID ενός web χάρτη;",
				settingsDataModel2HelpContent: "Αντιγράψτε και επικολλήστε τα ψηφία μετά το σύμβολο '=' στο URL του web χάρτη",
				switchMaps: "Αλλαγή χαρτών",
				browseWebMaps: "Αναζήτηση web χαρτών"
			},
			settingsLegend: {
				settingsTabLegend: "Διάταξη εφαρμογής",
				settingsLegendExplain: "Επιλέξτε τις ρυθμίσεις διάταξης.",
				settingsLegendEnable: "Ενεργοποίηση υπομνήματος",
				settingsDescriptionEnable: "Ενεργοποίηση περιγραφής",
				settingsBookmarksEnable: "Ενεργοποίηση σειράς σαρώσεων",
				settingsPopupDisable: "Đ_Enable pop-up_____ớ",
				settingsLocationSearchEnable: "Ενεργοποίηση αναζήτησης τοποθεσίας",
				settingsGeolocatorEnable: "Ενεργοποίηση γωγραφικής τοποθέτησης",
				settingsLegendHelpContent: "Đ_To refine the legend content, use the ArcGIS web map viewer table of contents (Hide in Legend)_____________________________ớ",
				settingsSeriesHelpContent: "Η σειρά σαρώσεων είναι μια επιλογή πλοήγησης με καρτέλες η οποία κατευθύνει το χρήστη σε μια συγκεκριμένη έκταση και εμφανίζει έναν τίτλο και μια περιγραφή στο πλευρικό πλαίσιο. Κατά την αρχική ενεργοποίηση, οι σελιδοδείκτες από τον ή τους web χάρτες θα εισαχθούν και θα χρησιμοποιηθούν για τη συμπλήρωση της μπάρας της σειράς. Με την απενεργοποίηση της επιλογής σειράς απενεργοποιείται η μπάρα της σειράς, αλλά η διαμόρφωση της σειράς διατηρείται για μελλοντική χρήση.",
				settingsSeriesHelpContent2: "Η σειρά σαρώσεων σας επιτρέπει να δημιουργήσετε και να επεξεργαστείτε μια επιλογή τοποθεσιών με συνοδευτικούς τίτλους και κείμενο. Εάν ο web χάρτης σας έχει σελιδοδείκτες, θα εμφανίζονται. Μπορείτε να απενεργοποιήσετε τη σειρά, αλλά η διαμόρφωση θα διατηρηθεί για μελλοντική χρήση.",
				settingsSeriesHelpLink: "Δείτε ένα παράδειγμα εφαρμογής με μια σειρά σαρώσεων εδώ",
				preview: "Προεπισκόπηση περιβάλλοντος εργασίας (UI)",
				settingsLocateButtonExplain: "Αυτή η λειτουργία υποστηρίζεται στα περισσότερα προγράμματα περιήγησης για φορητές συσκευές και επιτραπέζιους υπολογιστές (συμπεριλαμβανομένου του Internet Explorer 9+).",
				settingsLocateButton: "Ενεργοποίηση ενός κουμπιού 'Εντοπισμός' σε υποστηριζόμενα προγράμματα περιήγησης",
				settingsAddressSearch: "Ενεργοποίηση εργαλείου αναζήτησης διεύθυνσης"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Αναδυόμενο παράθυρο",
				settingsSwipePopupExplain: "Προσαρμόστε την εμφάνιση της κεφαλίδας του αναδυόμενου παραθύρου για να βοηθήσετε το χρήστη να συσχετίσει τα αναδυόμενα παράθυρα με τα θεματικά επίπεδα του χάρτη.",
				settingsSwipePopupSwipe1: "Αριστερός χάρτης",
				settingsSwipePopupSwipe2: "Δεξιός χάρτης",
				settingsSwipePopupGlass1: "Κύριος χάρτης",
				settingsSwipePopupGlass2: "Spyglass χάρτης",
				settingsSwipePopupTitle: "Τίτλος κεφαλίδας",
				settingsSwipePopupColor: "Χρώμα κεφαλίδας"
			},
			initPopup: {
				initHeader: "Καλώς ορίσατε στο εργαλείο δημιουργίας  Swipe/Spyglass",
				modalNext: "Επόμενο",
				modalPrev: "Προηγούμενο",
				modalApply: "Άνοιγμα της εφαρμογής"
			},
			seriesPanel: {
				title: "Τίτλος",
				descr: "Περιγραφή",
				discard: "Απόρριψη σελιδοδείκτη",
				saveExtent: "Ορισμός έκτασης σελιδοδείκτη",
				discardDisabled: "Δεν μπορείτε να καταργήσετε αυτόν το σελιδοδείκτη. Η σειρά σαρώσεων μπορεί να απενεργοποιηθεί στις ρυθμίσεις."
			},
			helpPopup: {
				title: "Βοήθεια",
				close: "Κλείσιμο",
				tab1: {
					div1: "Το Swipe/Spyglass πρότυπο είναι σχεδιασμένο για τη σύγκριση δύο ξεχωριστών web χαρτών ή δύο θεματικών επιπέδων ενός web χάρτη σε μια ελκυστική και εύχρηστη web εφαρμογή που μπορεί να χρησιμοποιηθεί σε οποιοδήποτε πρόγραμμα περιήγησης σε οποιαδήποτε συσκευή, συμπεριλαμβανομένων των smartphone και των tablet.",
					div2: "Για πρόσθετες πληροφορίες σχετικά με το Swipe/Spyglass πρότυπο, καθώς και παραδείγματα που έχουν δημιουργηθεί από χρήστες, <a href='http://storymaps.arcgis.com/el/app-list/swipe/' target='_blank'>επισκεφθείτε τον ιστότοπο Story Maps</a>. Μπορείτε επίσης να μας ακολουθήσετε στο Twitter στο <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Θέλουμε πολύ να ακούσουμε τα σχόλιά σας! Εάν έχετε μια ερώτηση, θέλετε να ζητήσετε μια νέα δυνατότητα ή πιστεύετε ότι βρήκατε κάποιο σφάλμα, επισκεφθείτε το <a href='http://links.esri.com/storymaps/forum' target='_blank'>Φόρουμ χρηστών του Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "Đ_Story saved____ớ",
				manageStory: "Đ_Manage your story______ớ",
				manageStoryA1: "Đ_Tip: You can use %LINK1% to check your story for errors and change how its components are shared. My Stories also helps you make your story look good when it is shared on social networks. You can learn about other useful features of My Stories in these %LINK2%_______________________________________________________________________________ớ.",
				manageStoryA1V1: "Đ_My Stories____ớ",
				manageStoryA1V2: "Đ_blog posts____ớ",
				shareTitle: "Κοινοποιήστε την αφήγησή σας",
				sharePrivateHeader: "Η αφήγησή σας δεν κοινοποιείται, θέλετε να την κοινοποιήσετε;",
				sharePrivateBtn1: "Κοινοποίηση δημοσίως",
				sharePrivateBtn2: "Κοινοποίηση στον οργανισμό μου",
				sharePrivateProgress: "Κοινοποίηση σε εξέλιξη...",
				sharePrivateErr: "Η κοινοποίηση απέτυχε, δοκιμάστε ξανά ή",
				sharePrivateOk: "Đ_Sharing updated, loading_________ớ...",
				shareStatus1: "Η αφήγηση δεν έχει αποθηκευτεί",
				shareStatus2: "Η αφήγηση κοινοποιείται δημοσίως",
				shareStatus3: "Η αφήγηση κοινοποιείται εντός του οργανισμού",
				shareStatus4: "Η αφήγηση δεν κοινοποιείται",
				sharePreviewAsUser: "Προεπισκόπηση",
				shareHeader1: "Η αφήγησή σας είναι <strong>προσβάσιμη δημοσίως</strong>.",
				shareHeader2: "Η αφήγησή σας είναι προσβάσιμη από τα μέλη του οργανισμού σας (απαιτείται σύνδεση).",
				shareLinkHeader: "Đ_Share your story______ớ",
				shareLinkOpen: "ΑΝΟΙΓΜΑ",
				learnMore: "Μάθετε περισσότερα",
				shareA1: "Χρησιμοποιήστε την επιλογή %SHAREIMG% στη <a href='%LINK1%' target='_blank'>σελίδα στοιχείων της εφαρμογής</a>. Εάν θέλετε επίσης να καταργήσετε την κοινοποίηση του web χάρτη, χρησιμοποιήστε τη <a href='%LINK2%' target='_blank'>σελίδα στοιχείων του web χάρτη</a>.",
				shareWarning: "Η κοινοποίηση %WITH% έχει απενεργοποιηθεί επειδή δεν είστε ο κάτοχος του <a href='%LINK%' target='_blank'>web χάρτη</a>.",
				shareWarningWith1: "Đ_publicly___ớ",
				shareWarningWith2: "Đ_publicly and with the Organization___________ớ"
			},
			directCreation: {
				header: "Καλώς ορίσατε στο εργαλείο δημιουργίας  Swipe/Spyglass",
				mapPickHeader: "Για να ξεκινήσετε, εισαγάγετε ένα έγκυρο ID web χάρτη ή χρησιμοποιήστε το κουμπί αναζήτησης για να αναζητήσετε web χάρτες.",
				launchBuilder: "Εκκίνηση του εργαλείου δημιουργίας",
				chooseWebmapLbl: "Επιλέξτε web χάρτη...",
				explain2: "Đ_To create a Swipe or Spyglass story map, use the button below to choose the existing web map you want to use. Alternatively, you can paste the ID of the web map into the field below________________________________________________________ớ.",
				explain3: "Εάν θέλετε να χρησιμοποιήσετε δύο web χάρτες στο story map σας, θα σας ζητηθεί ο δεύτερος web χάρτης αργότερα όταν ορίσετε αυτή την επιλογή.",
				webmapPlaceholder: "Εισαγάγετε ένα ID web χάρτη..."
			},
			saveErrorSocial: {
				title: "Đ_Social media sharing update_________ớ",
				panel1: "Đ_Your storyâ€™s appearance on social media has been improved, but your ArcGIS web application item title is not the same as your story title___________________________________________ớ.",
				panel1tooltip: "Đ_By defining a title, summary and thumbnail image, your story will look like this_________________________ớ:",
				panel2:	"Đ_Which title would you like to use on social media________________ớ:",
				panel2q1: "Đ_Story title (recommended)_________ớ",
				panel2q1tooltip: "Đ_By choosing this option, your item title will be modified to match your story title and further changes in the builder will be synchronized___________________________________________ớ.",
				panel2q2: "Đ_Item title____ớ",
				panel3: "Đ_To further improve how your story looks on social media use ${MYSTORIES} to add a summary and a thumbnail image___________________________________ớ.",
				panel4: "Đ_Do not warn me again for this story____________ớ",
				mystories: "Đ_My Stories____ớ",
				btnSave: "Đ_Save__ớ"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Ο Οργανισμός μου",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Το Περιεχόμενό μου",
					favoritesLabel: "Τα Αγαπημένα μου"
				},
				title: "Đ_Select Web Map_____ớ",
				searchTitle: "Αναζήτηση",
				ok: "OK",
				cancel: "Άκυρο",
				placeholder: "Εισαγάγετε όρο αναζήτησης"
			}
		}
    })
);
