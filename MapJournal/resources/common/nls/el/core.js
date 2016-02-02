define(
	 ({
		commonCore: {
			common: {
				add: "Προσθήκη",
				edit: "Επεξεργασία",
				save: "Αποθήκευση",
				next: "Επόμενο",
				cancel: "Άκυρο",
				back: "Πίσω",
				apply: "Εφαρμογή",
				close: "Κλείσιμο",
				open: "Άνοιγμα",
				start: "Έναρξη",
				loading: "Φόρτωση",
				disabledAdmin: "Αυτή η λειτουργία έχει απενεργοποιηθεί από το Διαχειριστή",
				width: "Πλάτος",
				height: "Ύψος",
				create: "Δημιουργία",
				yes: "Ναι",
				no: "Όχι",
				mystories: "Đ_My Stories____ớ"
			},
			inlineFieldEdit: {
				editMe: "Επεξεργαστείτε!"
			},
			builderPanel: {
				panelHeader: "Εργαλείο δημιουργίας %TPL_NAME%",
				buttonSaving: "Αποθήκευση",
				buttonSaved: "Αποθηκεύτηκε",
				buttonShare: "Κοινοποίηση",
				buttonSettings: "Ρυθμίσεις",
				buttonHelp: "Βοήθεια",
				buttonPreview: "Đ_View story____ớ",
				tooltipFirstSave: "Αυτή η ενέργεια δεν είναι διαθέσιμη πριν αποθηκεύσετε.",
				tooltipNotShared: "Αυτή η ενέργεια δεν είναι διαθέσιμη πριν κοινοποιήσετε.",
				tooltipNotShared2: "Đ_Your story isn't shared, only you can access it_______________ớ.",
				noPendingChange: "Δεν υπάρχει εκκρεμής αλλαγή",
				unSavedChangePlural: "Εκκρεμείς αλλαγές",
				closeWithPendingChange: "Είστε βέβαιοι ότι θέλετε να επιβεβαιώσετε αυτή την ενέργεια; Οι αλλαγές σας θα χαθούν.",
				saveError: "Η αποθήκευση απέτυχε, δοκιμάστε ξανά",
				status1: "Η αφήγηση κοινοποιήθηκε αλλά έχει προβλήματα",
				status2: "Η αφήγηση δεν κοινοποιήθηκε αλλά έχει προβλήματα",
				status3: "Η αφήγηση είναι δημόσια",
				status4: "Η αφήγηση κοινοποιείται εντός του οργανισμού σας",
				status5: "Η αφήγηση είναι ιδιωτική",
				status6: "Η αφήγηση δεν έχει αποθηκευτεί ακόμη",
				checking: "Γίνεται έλεγχος",
				fix: "Διόρθωση"
			},
			saveError: {
				title: "Σφάλμα κατά την αποθήκευση της αφήγησης",
				err1Div1: "Δεν είναι δυνατή η αποθήκευση της αφήγησης, επειδή έχετε ήδη ένα άλλο αντικείμενο με το ίδιο όνομα.",
				err1Div2: "Τροποποιήστε τον τίτλο της αφήγησής σας και στη συνέχεια αποθηκεύστε την.",
				btnOk: "Επεξεργασία του τίτλου αφήγησης"
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
				panel4: "Đ_Do not warn me again for this story____________ớ"
			},
			share: {
				shareTitle: "Κοινοποιήστε την αφήγησή σας",
				preview: "Προεπισκόπηση",
				viewlive: "Đ_View story____ớ",
				btnPrivate: "Ιδιωτική",
				btnPrivateTooltip: "Μόνο εσείς μπορείτε να δείτε την αφήγηση",
				btnOrg: "Στον Οργανισμό",
				btnOrgTooltip: "Μόνο τα μέλη του οργανισμού σας μπορούν να δουν την αφήγηση",
				btnPublic: "Με δημόσιο περιεχόμενο",
				btnPublicTooltip: "Όλοι μπορούν να δουν την αφήγηση",
				loadingMessage: "Έλεγχος της αφήγησής σας για προβλήματα",
				viewToggle1: "Εμφάνιση περιεχομένου αφήγησης",
				viewToggle2: "Κλείσιμο περιεχομένου αφήγησης",
				socialize: "Κοινωνική δικτύωση",
				statusPrivate: "Η αφήγησή σας είναι ιδιωτική, μόνο εσείς μπορείτε να την δείτε.",
				statusError: "Υπάρχουν προβλήματα στο περιεχόμενο της αφήγησής σας τα οποία θα είναι ορατά στους αναγνώστες σας. Μπορείτε να εντοπίσετε και να διορθώσετε αυτά τα προβλήματα παρακάτω.",
				statusNoErrPrivate: "Κοινοποιήστε την αφήγησή σας μόλις είστε έτοιμοι!",
				mystoriesinvite: "Διαχειριστείτε όλες τις αφηγήσεις σας",
				notavailable1: "Δυστυχώς, η κοινοποίηση της αφήγησής σας από το Εργαλείο δημιουργίας δεν υποστηρίζεται, επειδή αυτή η εφαρμογή δεν φιλοξενείται στο %PRODUCT%.",
				notavailable2: "Δυστυχώς, η κοινοποίηση της αφήγησής σας από το Εργαλείο δημιουργίας δεν υποστηρίζεται σε αυτή την έκδοση του Portal for ArcGIS (απαιτείται έκδοση 10.4 ή νεότερη).",
				notavailable3: "Μόνο εσείς μπορείτε να κοινοποιήσετε την αφήγηση από το %LINK%.",
				notavailable4: "Οι αφηγήσεις μου",
				notavailable5: "Đ_its item page_____ớ",
				notavailable6: "Δυστυχώς, αυτό το στοιχείο δεν υποστηρίζεται πλήρως σε λειτουργία προγραμματισμού. Ανάλογα με το σενάριο ανάπτυξης, αυτό το στοιχείο μπορεί να υποστηρίζεται μετά την ανάπτυξή του.",
				notavailable7: "Μην ξεχάσετε να επισκεφθείτε το %MYCONTENT% για να βεβαιωθείτε ότι οι χάρτες και τα επίπεδα που χρησιμοποιούνται στην αφήγησή σας έχουν επίσης κοινοποιηθεί.",
				notavailable8: "Περιεχόμενo",
				mystoriesinvite2: "Đ_To improve how your story looks on social networks use ${MYSTORIES} to add a summary and a thumbnail image_________________________________ớ."
			},
			settings: {
				header: "Ρυθμίσεις",
				tabError: "Ελέγξτε όλες τις καρτέλες για σφάλματα"
			},
			settingsLayout: {
				title: "Đ_Layout___ớ",
				explain: "Ποια διάταξη θέλετε να χρησιμοποιήσετε;",
				explainInit: "Μπορείτε να αλλάξετε τη διάταξη οποιαδήποτε στιγμή από το παράθυρο διαλόγου Ρυθμίσεις.",
				viewExample: "Δείτε ένα παράδειγμα σε πραγματικό χρόνο"
			},
			settingsTheme: {
				title: "Đ_Theme___ớ"
			},
			settingsHeader: {
				title: "Đ_Header___ớ",
				logoEsri: "Λογότυπο Esri",
				logoNone: "Χωρίς λογότυπο",
				logoCustom: "Προσαρμοσμένο λογότυπο",
				logoCustomPlaceholder: "URL (μέγιστο μέγεθος 250x50 pixel)",
				logoCustomTargetPlaceholder: "Ενσωματωμένος σύνδεσμος",
				logoSocialExplain: "Προσαρμόστε το σύνδεσμο της κεφαλίδας.",
				logoSocialText: "Κείμενο",
				logoSocialLink: "Σύνδεσμος",
				lblSmallHeader: "Χρήση μικρής κεφαλίδας (χωρίς υπότιτλο)"
			},
			header: {
				title: "Đ_Edit the title of your %TPL_NAME%___________ớ",
				subtitle: "Επεξεργαστείτε τον υπότιτλο του %TPL_NAME%"
			}
		}
	})
);
