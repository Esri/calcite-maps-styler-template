define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "Đ_Map__ớ",
				lblLocation: "Τοποθεσία",
				lblContent: "Περιεχόμενο",
				lblPopup: "Αναδυόμενο παράθυρο",
				lblControls: "Πρόσθετα",
				lblOverview: "Χάρτης αναφοράς",
				lblLegend: "Υπόμνημα",
				loadingTitle: "Φόρτωση τίτλου",
				entry: "Καταχώριση",
				entries: "Καταχωρίσεις",
				section: "Ενότητα",
				sections: "Ενότητες",
				and: "και",
				action: "Ενέργεια στην ενότητα",
				actions: "Ενέργεια στις ενότητες",
				originalWebmap: "Đ_Map used to publish the %TPL_NAME%___________ớ",
				browseMaps: "Đ_Select a map_____ớ",
				createMap: "Đ_Create a map_____ớ",
				current: "Đ_Current map____ớ",
				select: "Đ_Select or create a map________ớ",
				newMap: "Đ_Newly selected map______ớ",
				newCreatedMap: "Đ_Newly created map______ớ",
				webmapDefault: "Đ_Map default____ớ",
				customCfg: "Προσαρμοσμένη διαμόρφωση",
				tooltipLocation: "Ορίστε την τοποθεσία που θα εμφανίζει αυτός ο χάρτης.",
				tooltipContent: "Ορίστε τα ορατά θεματικά επίπεδα.",
				tooltipPopup: "Επιλέξτε ένα αναδυόμενο παράθυρο που θα ανοίγει όταν εμφανίζεται αυτός ο χάρτης.",
				tooltipOverview: "Εμφανίστε έναν μικρό χάρτη αναφοράς μαζί με τον κύριο χάρτη.",
				tooltipLegend: "Εμφανίστε το υπόμνημα χάρτη πάνω στο χάρτη (χρήσιμο όταν ο χάρτης έχει πολλά θεματικά επίπεδα και σύμβολα).",
				mapCfgInvite: "Χρησιμοποιήστε αυτά τα στοιχεία ελέγχου για να διαμορφώσετε το χάρτη σας",
				lblLocationAlt: "Μεταβιβάζεται από τον πρώτο χάρτη",
				tooltipLocationAlt: "Η τοποθεσία αυτού του χάρτη συγχρονίζεται με τον πρώτο χάρτη της σειράς. Για να αλλάξετε αυτή τη συμπεριφορά για τη σειρά σας, επιλέξτε Ρυθμίσεις > Επιλογές χάρτη."
			},
			configure: {
				btnReset: "Επαναφορά",
				btnCancel: "Άκυρο",
				tocTitle: "Περιεχόμενο χάρτη",
				tocExplain: "Επιλέξτε ποια θεματικά επίπεδα θα εμφανίζονται.",
				tocNoData: "Δεν μπορεί να διαμορφωθεί θεματικό επίπεδο.",
				tocSave: "Αποθήκευση περιεχομένου χάρτη",
				extentTitle: "Τοποθεσία χάρτη",
				extentExplain: "Μετατοπίστε το χάρτη και εστιάστε για να ορίσετε πώς θα φαίνεται για τους αναγνώστες σας.",
				extentSave: "Αποθήκευση τοποθεσίας χάρτη",
				popupTitle: "Αναδυόμενο παράθυρο χάρτη",
				popupExplain: "Κάντε κλικ σε ένα στοιχείο για να ανοίξετε το αναδυόμενο παράθυρο που θέλετε να εμφανίζεται.",
				popupSave: "Αποθήκευση της διαμόρφωσης του αναδυόμενου παραθύρου",
				hintNavigation: "Η πλοήγηση χάρτη είναι απενεργοποιημένη."
			},
			editor: {
				loading: "Đ_Please wait while the map editor is loading______________ớ",
				newTitle: "Đ_Create new map_____ớ",
				editTitle: "Đ_Edit map___ớ",
				titleLbl: "Đ_Title___ớ",
				titlePh: "Đ_Map title_____ớ...",
				folderLbl: "Đ_The map will be created in the same folder as the story__________________ớ.",
				creating: "Đ_Creating the map______ớ",
				saving: "Đ_Saving the map_____ớ",
				success: "Đ_Map saved____ớ",
				successCreate: "Đ_Map created____ớ",
				cancelTitle: "Đ_Discard any unsaved changes_________ớ?",
				errorDuplicate: "Đ_You already have a map with that title____________ớ",
				errorCreate: "Đ_Unable to create map. Please try again_____________ớ.",
				errorSave: "Đ_Unable to save map. Please try again____________ớ.",
				notavailable1: "Đ_Sorry, creating or editing a map is not supported in Firefox due to a technical limitation. You may want to build your story using a different web browser or use the following workaround_________________________________________________________ớ.",
				notavailable2: "Đ_Sorry, creating or editing a map is not supported since the story map application is not hosted in %PRODUCT%. Please contact your ArcGIS administrator for more information_____________________________________________________ớ.",
				notavailable3: "Đ_Sorry, creating or editing a map is not supported on this version of Portal for ArcGIS (requires 10.4 or later). Please contact your ArcGIS administrator for more information______________________________________________________ớ.",
				notavailable4: "Đ_You can create a map using %MV%, then come back here to add it to your story________________________ớ.",
				notavailable5: "Đ_You can edit the map using %MV%, then come back here and %apply% to see your changes___________________________ớ.",
				notavailable6: "Đ_map viewer____ớ",
				notavailable7: "Đ_reload the map_____ớ"
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
				title: "Đ_Select a map_____ớ",
				searchTitle: "Αναζήτηση",
				ok: "OK",
				cancel: "Άκυρο",
				placeholder: "Đ_Enter search term or web map ID___________ớ..."
			}
		}
	})
);
