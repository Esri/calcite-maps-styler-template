define(
	 ({
		viewer: {
			loading: {
				step1: "ΦΟΡΤΩΣΗ ΕΦΑΡΜΟΓΗΣ",
				step2: "ΦΟΡΤΩΣΗ ΔΕΔΟΜΕΝΩΝ",
				step3: "ΠΡΟΕΤΟΙΜΑΣΙΑ",
				fail: "Λυπούμαστε, η φόρτωση της σάρωσης απέτυχε",
				loadBuilder: "ΜΕΤΑΒΑΣΗ ΣΤΗ ΛΕΙΤΟΥΡΓΙΑ ΕΡΓΑΛΕΙΟΥ ΔΗΜΙΟΥΡΓΙΑΣ",				
				redirectSignIn: "ΑΝΑΚΑΤΕΥΘΥΝΣΗ ΣΤΗ ΣΕΛΙΔΑ ΕΙΣΟΔΟΥ",
				redirectSignIn2: "(θα ανακατευθυνθείτε εδώ μετά την είσοδο)",
				failButton: "Επανάληψη"
			},
			errors: {
				boxTitle: "Παρουσιάστηκε σφάλμα",
				portalSelf: "Ανεπανόρθωτο σφάλμα: η λήψη της διαμόρφωσης της πύλης απέτυχε",
				invalidConfig: "Ανεπανόρθωτο σφάλμα: μη έγκυρη διαμόρφωση",
				invalidConfigNoWebmap: "Ανεπανόρθωτο σφάλμα: μη έγκυρη διαμόρφωση (δεν έχει καθοριστεί χάρτης web)",
				createMap: "Δεν είναι δυνατή η δημιουργία χάρτη",
				invalidApp: "Ανεπανόρθωτο σφάλμα: δεν είναι δυνατή η φόρτωση της εφαρμογής",
				initMobile: "Καλώς ορίσατε στην εφαρμογή web σάρωσης. Η εφαρμογή δεν έχει διαμορφωθεί. Το διαδραστικό εργαλείο δημιουργίας δεν υποστηρίζεται σε φορητές συσκευές.",
				noBuilderIE8: "Το διαδραστικό εργαλείο δημιουργίας σάρωσης δεν υποστηρίζεται στον Internet Explorer πριν από την έκδοση 9.",
				noLayerView: "Καλώς ορίσατε στην εφαρμογή web σάρωσης.<br />Η εφαρμογή δεν έχει διαμορφωθεί ακόμη.",
				appSave: "Σφάλμα κατά την αποθήκευση της εφαρμογής web",
				mapSave: "Σφάλμα κατά την αποθήκευση του χάρτη web",
				notAuthorized: "Δεν έχετε εξουσιοδότηση για πρόσβαση σε αυτή την εφαρμογή",
				conflictingProjectionsTitle: "Αλληλοσυγκρουόμενες προβολές",
				conflictingProjections: "Η σάρωση δεν υποστηρίζει τη χρήση δύο χαρτών web με διαφορετικές προβολές. Ανοίξτε τις ρυθμίσεις και χρησιμοποιήστε έναν χάρτη web που χρησιμοποιεί την ίδια προβολή με τον πρώτο χάρτη web.",
				cpButton: "Κλείσιμο"
			},
			mobileView: {
				hideIntro: "ΑΠΟΚΡΥΨΗ ΕΙΣΑΓΩΓΗΣ",
				navLeft: "Υπόμνημα",
				navMap: "Χάρτης",
				navRight: "Δεδομένα"
			},
			desktopView: {
				storymapsText: "Ένας αφηγηματικός χάρτης",
				builderButton: "Μετάβαση στη λειτουργία εργαλείου δημιουργίας",
				bitlyTooltip: "Λήψη μιας σύντομης σύνδεσης στην εφαρμογή"
			}
		},
		builder: {
			builder: {
				panelHeader: "ΔΙΑΜΟΡΦΩΣΗ ΕΦΑΡΜΟΓΗΣ",
				buttonSave: "ΑΠΟΘΗΚΕΥΣΗ",
				buttonHelp: "Βοήθεια",
				buttonShare: "Κοινοποίηση",
				buttonDiscard: "ΑΚΥΡΟ",
				buttonSettings: "Ρυθμίσεις",
				buttonView: "Λειτουργία προβολής",
				buttonItem: "Άνοιγμα του στοιχείου εφαρμογής web",
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
				savingApplication: "Αποθήκευση εφαρμογής",
				saveSuccess: "Η εφαρμογή αποθηκεύτηκε με επιτυχία",
				saveError: "Η αποθήκευση απέτυχε, δοκιμάστε ξανά",
				saveError2: "Η αποθήκευση απέτυχε λόγω μη έγκυρης ετικέτας HTML σε ένα όνομα ή μια περιγραφή",
				saveError3: "Ο τίτλος δεν μπορεί να είναι κενός",
				signIn: "Εισέλθετε με έναν λογαριασμό στο",
				signInTwo: "για να αποθηκεύσετε την εφαρμογή."
			},
			header:{
				editMe: "Επεξεργαστείτε!",
				templateTitle: "Ορισμός τίτλου προτύπου",
				templateSubtitle: "Ορισμός υπότιτλου προτύπου"
			},
			settings: {
				settingsHeader: "Ρυθμίσεις εφαρμογής",
				modalCancel: "Άκυρο",
				modalApply: "Εφαρμογή"
			},
			settingsColors: {
				settingsTabColor: "Θέμα",
				settingsColorExplain: "Επιλέξτε ένα θέμα εφαρμογής ή ορίστε τα δικά σας χρώματα.",
				settingsLabelColor: "Χρώματα φόντου κεφαλίδας και πλαϊνού πλαισίου"
			},
			settingsHeader: {
				settingsTabLogo: "Κεφαλίδα",
				settingsLogoExplain: "Προσαρμόστε το λογότυπο της κεφαλίδας (το μέγιστο μέγεθος είναι 250 x 50 px).",
				settingsLogoEsri: "Λογότυπο Esri",
				settingsLogoNone: "Χωρίς λογότυπο",
				settingsLogoCustom: "Προσαρμοσμένο λογότυπο",
				settingsLogoCustomPlaceholder: "URL εικόνας",
				settingsLogoCustomTargetPlaceholder: "Ενσωματωμένη σύνδεση",
				settingsLogoSocialExplain: "Προσαρμόστε την πάνω δεξιά σύνδεση της κεφαλίδας.",
				settingsLogoSocialText: "Κείμενο",
				settingsLogoSocialLink: "Σύνδεση",
				settingsLogoSocialDisabled: "Αυτή η λειτουργία έχει απενεργοποιηθεί από το Διαχειριστή"
			},
			settingsExtent: {
				settingsTabExtent: "Έκταση",
				settingsExtentExplain: "Ορίστε την αρχική έκταση στον διαδραστικού χάρτη παρακάτω.",
				settingsExtentExplainBottom: "Η έκταση που καθορίζετε θα τροποποιήσει την αρχική έκταση του χάρτη web σας. Σημειώστε ότι εάν δημιουργείτε μια σειρά σάρωσης, η έκταση αυτή δεν θα χρησιμοποιηθεί.",
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
				noDataExplain: "Πατήστε στο χάρτη για να επιλέξετε ένα χαρακτηριστικό και επιστρέψτε εδώ",
				noDataMap: "Δεν υπάρχουν δεδομένα για αυτόν το χάρτη",
				noPopup: "Δεν βρέθηκε αναδυόμενο παράθυρο για αυτό το χαρακτηριστικό"
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
				noFeatureExplain: "Πατήστε στο χάρτη για να επιλέξετε ένα χαρακτηριστικό"
			},
			settingsLayout: {
				settingsTabLayout: "Στυλ σάρωσης",
				settingsLayoutExplain: "Επιλέξτε ένα στυλ για το εργαλείο σάρωσης.",
				settingsLayoutSwipe: "Κατακόρυφη γραμμή",
				settingsLayoutSpyGlass: "Κιάλι",
				settingsLayoutSelected: "Επιλεγμένη διάταξη",
				settingsLayoutSelect: "Επιλογή αυτής της διάταξης",
				settingsSaveConfirm: "Για ορισμένες από τις αλλαγές σας απαιτείται να αποθηκεύσετε και να φορτώσετε ξανά την εφαρμογή"
			},
			settingsDataModel: {
				settingsTabDataModel: "Τύπος σάρωσης",
				settingsDataModelExplainSwipe: "Τι θέλετε να σαρώνουν οι χρήστες;",
				settingsDataModelExplainSwipe2: "",
				settingsDataModelExplainSpyGlass: "Επιλέξτε το επίπεδο ή το χάρτη web που θα εμφανίζεται στο κιάλι.",
				settingsDataModelOneMap: "Ένα επίπεδο σε έναν χάρτη web",
				settingsDataModel1Explain: "Επιλέξτε το επίπεδο που θέλετε να σαρώνετε",
				settingsDataModel1Warning: "Εάν το επίπεδο κρύβεται από ανώτερα επίπεδα, τότε η σάρωση δεν θα έχει κανένα αποτέλεσμα.",
				settingsDataModel1SpyGlassExplain: "Επιλέξτε το επίπεδο που θα εμφανίζεται μέσα στο κιάλι.",
				settingsDataModelTwoMaps: "Δύο χάρτες web",
				settingsDataModelLayerIds: "ID επιπέδων χάρτη web",
				settingsDataModelSelected: "Επιλεγμένος τύπος",
				settingsDataModelWebmapSwipeId1: "ID δεξιού χάρτη web",
				settingsDataModelWebmapSwipeId2: "ID αριστερού χάρτη web",
				settingsDataModelWebmapGlassId1: "ID κύριου χάρτη web",
				settingsDataModelWebmapGlassId2: "ID χάρτη web κιαλιού",
				settingsDataModelSelect: "Επιλογή αυτού του τύπου",
				settingsDataModel2Explain: "Σάρωση με άλλον χάρτη web.",
				settingsDataModel2SpyGlassExplain: "Αποκάλυψη άλλου χάρτη web.",
				settingsDataModel2HelpTitle: "Πώς μπορώ να βρω το ID ενός χάρτη web;",
				settingsDataModel2HelpContent: "Αντιγράψτε και επικολλήστε τα ψηφία μετά το σύμβολο \'=\' στο URL του χάρτη web",
				switchMaps: "Αλλαγή χαρτών",
				browseWebMaps: "Αναζήτηση χαρτών web"
			},
			settingsLegend: {
				settingsTabLegend: "Διάταξη εφαρμογής",
				settingsLegendExplain: "Επιλέξτε τις ρυθμίσεις διάταξης εφαρμογής.",
				settingsLegendEnable: "Ενεργοποίηση υπομνήματος",
				settingsDescriptionEnable: "Ενεργοποίηση περιγραφής",
				settingsBookmarksEnable: "Ενεργοποίηση σειράς σάρωσης",
				settingsPopupDisable: "Ενεργοποίηση αναδυόμενου παραθύρου",
				settingsLocationSearchEnable: "Ενεργοποίηση αναζήτησης τοποθεσίας",
				settingsGeolocatorEnable: "Ενεργοποίηση γεωτοποθεσίας",
				settingsLegendHelpContent: "Για να τελειοποιήσετε το περιεχόμενο του υπομνήματος, χρησιμοποιήστε τον πίνακα περιεχομένων του εργαλείου προβολής χαρτών web του ArcGIS.com (Απόκρυψη στο υπόμνημα)",
				settingsSeriesHelpContent: "Η σειρά σάρωσης είναι μια επιλογή πλοήγησης με καρτέλες η οποία κατευθύνει το χρήστη σε μια συγκεκριμένη έκταση και εμφανίζει έναν τίτλο και μια περιγραφή στο πλευρικό πλαίσιο. Κατά την αρχική ενεργοποίηση, οι σελιδοδείκτες από τον ή τους χάρτες web θα εισαχθούν και θα χρησιμοποιηθούν για τη συμπλήρωση της λωρίδας της σειράς. Με την απενεργοποίηση της επιλογής σειράς απενεργοποιείται η λωρίδα της σειράς, αλλά η διαμόρφωση της σειράς διατηρείται για μελλοντική χρήση.", 
				settingsSeriesHelpContent2: "Η σειρά σάρωσης σας επιτρέπει να δημιουργήσετε και να επεξεργαστείτε μια επιλογή τοποθεσιών με συνοδευτικούς τίτλους και κείμενο. Εάν ο χάρτης web σας έχει σελιδοδείκτες, θα εμφανίζονται. Μπορείτε να απενεργοποιήσετε τη σειρά, αλλά η διαμόρφωση θα διατηρηθεί για μελλοντική χρήση.",
				settingsSeriesHelpLink: "Δείτε ένα παράδειγμα εφαρμογής με μια σειρά σάρωσης εδώ",
				preview: "Προεπισκόπηση περιβάλλοντος εργασίας",
				settingsLocateButtonExplain: "Αυτή η λειτουργία υποστηρίζεται στα περισσότερα προγράμματα περιήγησης για φορητές συσκευές και επιτραπέζιους υπολογιστές (συμπεριλαμβανομένου του Internet Explorer 9+).",
				settingsLocateButton: "Ενεργοποίηση ενός κουμπιού \'Εντοπισμός\' σε υποστηριζόμενα προγράμματα περιήγησης",
				settingsAddressSearch: "Ενεργοποίηση εργαλείου αναζήτησης διεύθυνσης"
			},
			settingsSwipePopup: {
				settingsSwipePopup: "Αναδυόμενο παράθυρο",
				settingsSwipePopupExplain: "Προσαρμόστε την εμφάνιση της κεφαλίδας του αναδυόμενου παραθύρου για να βοηθήσετε το χρήστη να συσχετίσει τα αναδυόμενα παράθυρα με τα επίπεδα του χάρτη.",
				settingsSwipePopupSwipe1: "Αριστερός χάρτης",
				settingsSwipePopupSwipe2: "Δεξιός χάρτης",
				settingsSwipePopupGlass1: "Κύριος χάρτης",
				settingsSwipePopupGlass2: "Χάρτης κιαλιού",
				settingsSwipePopupTitle: "Τίτλος κεφαλίδας",
				settingsSwipePopupColor: "Χρώμα κεφαλίδας"
			},
			initPopup: {
				initHeader: "Καλώς ορίσατε στο εργαλείο δημιουργίας σάρωσης/κιαλιού",
				modalNext: "Επόμενο",
				modalPrev: "Προηγούμενο",
				modalApply: "Άνοιγμα της εφαρμογής"
			},
			seriesPanel: {
				title: "Τίτλος",
				descr: "Περιγραφή",
				discard: "Απόρριψη σελιδοδείκτη",
				saveExtent: "Ορισμός έκτασης σελιδοδείκτη",
				discardDisabled: "Δεν μπορείτε να καταργήσετε αυτόν το σελιδοδείκτη. Η σειρά σάρωσης μπορεί να απενεργοποιηθεί στις ρυθμίσεις."
			},
			helpPopup: {
				title: "Βοήθεια",
				close: "Κλείσιμο",
				tab1: {
					div1: "Το πρότυπο Σάρωση/Κιάλι είναι σχεδιασμένο για τη σύγκριση δύο ξεχωριστών χαρτών web ή δύο επιπέδων ενός χάρτη web σε μια ελκυστική και εύχρηστη εφαρμογή web που μπορεί να χρησιμοποιηθεί σε οποιοδήποτε πρόγραμμα περιήγησης σε οποιαδήποτε συσκευή, συμπεριλαμβανομένων των smartphone και των tablet.",
					div2: "Για πρόσθετες πληροφορίες σχετικά με το πρότυπο Σάρωση/Κιάλι, καθώς και παραδείγματα που έχουν δημιουργηθεί από χρήστες, <a href='http://storymaps.arcgis.com/el/app-list/swipe/' target='_blank'>επισκεφθείτε τον ιστότοπο Story Maps</a>. Μπορείτε επίσης να μας ακολουθήσετε στο Twitter στο <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div3: "Θέλουμε πολύ να ακούσουμε τα σχόλιά σας! Εάν έχετε μια ερώτηση, θέλετε να ζητήσετε μια νέα δυνατότητα ή πιστεύετε ότι βρήκατε κάποιο σφάλμα, επισκεφθείτε το <a href='http://links.esri.com/storymaps/forum' target='_blank'>Φόρουμ χρηστών του Story Maps</a>."
				}
			},
			share: {
				firstSaveTitle: "Η εφαρμογή αποθηκεύτηκε με επιτυχία",
				firstSaveHeader: "Η εφαρμογή σας είναι τώρα αποθηκευμένη στο ArcGIS Online. Διαβάστε τις παρακάτω απαντήσεις σε συχνές ερωτήσεις.",
				firstSaveA1: "Εάν δεν είστε εξοικειωμένοι με το ArcGIS Online ή θέλετε μια συντόμευση για πρόσβαση στο περιβάλλον εργασίας σύνταξης, μπορείτε να αποθηκεύσετε τη σύνδεση %LINK1%",
				firstSaveA1bis: "Μπορείτε επίσης να βρείτε την εφαρμογή στο <a href='%LINK2%' target='_blank'>φάκελο περιεχομένου του ArcGIS Online</a>.",
				firstSaveQ2: "Η εφαρμογή μου κοινοποιείται;",
				firstSaveA2: "Προς το παρόν η εφαρμογή σας δεν κοινοποιείται. Για να την κοινοποιήσετε, χρησιμοποιήστε το κουμπί ΚΟΙΝΟΠΟΙΗΣΗ.",
				shareTitle: "Κοινοποίηση της εφαρμογής σας",
				sharePrivateHeader: "Η εφαρμογή σας δεν κοινοποιείται, θέλετε να την κοινοποιήσετε;",
				sharePrivateBtn1: "Κοινοποίηση δημοσίως",
				sharePrivateBtn2: "Κοινοποίηση στον οργανισμό μου",
				sharePrivateProgress: "Κοινοποίηση σε εξέλιξη...",
				sharePrivateErr: "Η κοινοποίηση απέτυχε, δοκιμάστε ξανά ή",
				sharePrivateOk: "Η κοινοποίηση ενημερώθηκε με επιτυχία, φόρτωση...",
				shareStatus1: "Η εφαρμογή δεν έχει αποθηκευτεί",
				shareStatus2: "Η εφαρμογή κοινοποιείται δημοσίως",
				shareStatus3: "Η εφαρμογή κοινοποιείται εντός του οργανισμού",
				shareStatus4: "Η εφαρμογή δεν κοινοποιείται",
				sharePreviewAsUser: "Προεπισκόπηση",
				shareHeader1: "Η εφαρμογή σας είναι <strong>προσβάσιμη δημοσίως</strong>.",
				shareHeader2: "Η εφαρμογή σας είναι προσβάσιμη από τα μέλη του οργανισμού σας (απαιτείται σύνδεση).",
				shareLinkHeader: "Κοινοποιήστε την εφαρμογή στο κοινό σας",
				shareLinkOpen: "ΑΝΟΙΓΜΑ",
				learnMore: "Μάθετε περισσότερα",
				shareQ1Opt1: "Πώς μπορώ να διατηρήσω ιδιωτική την εφαρμογή;",
				shareQ1Opt2: "Πώς μπορώ να διατηρήσω ιδιωτική την εφαρμογή ή να την κοινοποιήσω δημοσίως;",
				shareA1: "Χρησιμοποιήστε την επιλογή %SHAREIMG% στη <a href='%LINK1%' target='_blank'>σελίδα στοιχείου της εφαρμογής</a>. Εάν θέλετε να καταργήσετε επίσης την κοινοποίηση του χάρτη web, χρησιμοποιήστε τη <a href='%LINK2%' target='_blank'>σελίδα στοιχείου του χάρτη web</a>.",
				shareA1bis: "Εάν θέλετε να καταργήσετε επίσης την κοινοποίηση της υπηρεσίας χαρακτηριστικών, χρησιμοποιήστε τη <a href='%LINK1%' target='_blank'>σελίδα στοιχείου της υπηρεσίας χαρακτηριστικών</a>.",
				shareQ2: "Πώς μπορώ να επεξεργαστώ την εφαρμογή αργότερα;",
				shareQ2bis: "Πώς μπορώ να επιστρέψω στο περιβάλλον εργασίας σύνταξης;",
				shareA2div1: "Αποθηκεύστε και χρησιμοποιήστε ξανά τη σύνδεση %LINK1% ή χρησιμοποιήστε τη <a href='%LINK2%' target='_blank'>σελίδα στοιχείου της εφαρμογής</a>.",
				shareA2div2: "Ως κάτοχος της εφαρμογής, όταν είστε συνδεδεμένοι στο ArcGIS.com, η εφαρμογή περιλαμβάνει ένα κουμπί για άνοιγμα του διαδραστικού εργαλείου δημιουργίας:",				
				shareQ3: "Πού αποθηκεύονται τα δεδομένα;",
				shareA3: "Η διαμόρφωση της εφαρμογής αποθηκεύεται σε αυτό το στοιχείο εφαρμογής web</a>.",
				shareWarning: "Η κοινοποίηση %WITH% έχει απενεργοποιηθεί επειδή δεν είστε ο κάτοχος του <a href='%LINK%' target='_blank'>χάρτη web</a>.",
 				shareWarningWith1: "δημοσίως",
 				shareWarningWith2: "δημοσίως και στον οργανισμό"
			},
			directCreation: {
				header: "Καλώς ορίσατε στο εργαλείο δημιουργίας σάρωσης/κιαλιού",
				mapPickHeader: "Για να ξεκινήσετε, εισαγάγετε ένα έγκυρο ID χάρτη web ή χρησιμοποιήστε το κουμπί αναζήτησης για να αναζητήσετε χάρτες web.",
				launchBuilder: "Εκκίνηση του εργαλείου δημιουργίας",
				chooseWebmapLbl: "Επιλέξτε χάρτη web...",
				explain2: "Για να δημιουργήσετε έναν αφηγηματικό χάρτη σάρωσης ή κιαλιού, χρησιμοποιήστε το παρακάτω κουμπί για να επιλέξετε τον υπάρχοντα χάρτη web του ArcGIS Online που θέλετε να χρησιμοποιήσετε. Εναλλακτικά, μπορείτε να επικολλήσετε το ID του χάρτη web στο παρακάτω πεδίο.",
				explain3: "Εάν θέλετε να χρησιμοποιήσετε δύο χάρτες web στον αφηγηματικό χάρτη σας, θα σας ζητηθεί ο δεύτερος χάρτης web αργότερα όταν ορίσετε αυτή την επιλογή.",
				webmapPlaceholder: "Εισαγάγετε ένα ID χάρτη web..."
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
				title: "Επιλογή χάρτη web",
				searchTitle: "Αναζήτηση",
				ok: "OK",
				cancel: "Άκυρο",
				placeholder: "Εισαγάγετε όρο αναζήτησης"
			}
		}
    })
);

