define(
	 ({
		common: {
			common: {
				edit: "ø_Edit_å"
			},
			inlineFieldEdit: {
				editMe: "ø_Edit me !_å"
			},
			builderPanel: {
				panelHeader: "ø_%TPL_NAME% Builder_å",
				buttonSave: "ø_SAVE_å",
				buttonShare: "ø_SHARE_å",
				buttonSettings: "ø_SETTINGS_å",
				buttonHelp: "ø_HELP_å",
				noPendingChange: "ø_No pending change_å",
				unSavedChangeSingular: "ø_1 unsaved change_å",
				unSavedChangePlural: "ø_unsaved changes_å",
				popoverSaveWhenDone: "ø_Don't forget to save when you are done_å",
				closeWithPendingChange: "ø_Are you sure to want to confirm the action ? Your changes will be lost._å",
				ok: "ø_Ok_å",
				savingApplication: "ø_Saving application_å",
				saveError: "ø_Save failed, please try again_å",
				saveError3: "ø_The title can't be empty_å",
				// TODO
				signIn: "ø_Please sign in with an account on_å",
				shareStatus1: "ø_Application is not saved_å",
				shareStatus2: "ø_Application is shared publicly_å",
				shareStatus3: "ø_Application is shared within the organization_å",
				shareStatus4: "ø_Application is not shared_å"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "ø_Title_å",
				addPopupTitle: "ø_Add_å",
				addPopupDescription: "ø_Add a new view to your series._å",
				addPopupButton: "ø_ADD_å",
				// Edit
				editPopupTitle: "ø_Edit_å",
				editPopupDescription: "ø_Edit the selected view_å",
				editPopupButton: "ø_APPLY_å",
				// Add/Edit
				addEditPopupCancelButton: "ø_CANCEL_å",
				addEditPopupMyContentBtn: "ø_Select from my content_å",
				addEditPopupConfigureWebMapBtn: " ø_Configure_å"
			},
			share: {
				firstSaveTitle: "ø_Application successfully saved_å",
				firstSaveHeader: "ø_Your application is now saved in ArcGIS Online. Please read the following answers to frequent questions._å",
				firstSaveA1: "ø_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_å",
				firstSaveA1bis: "ø_The application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._å",
				firstSaveQ2: "ø_Is my application shared?_å",
				firstSaveA2: "ø_Currently your application is not shared. To share it, use the SHARE button._å",
				shareTitle: "ø_Share your application_å",
				sharePrivateHeader: "ø_Your application is not shared, would you like to share it?_å",
				sharePrivateBtn1: "ø_Share publicly_å",
				sharePrivateBtn2: "ø_Share with my Organization_å",
				sharePrivateWarning: "ø_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._å",
				sharePrivateWarningWith1: "ø_publicly_å",
				sharePrivateWarningWith2: "ø_publicly and with the Organization_å",
				sharePrivateProgress: "ø_Sharing in progress..._å",
				sharePrivateErr: "ø_Sharing failed, try again or_å",
				sharePrivateOk: "ø_Sharing updated successfully, loading..._å",
				sharePreviewAsUser: "ø_Preview_å",
				shareHeader1: "ø_Your application is <strong>publicly accessible</strong>._å",
				shareHeader2: "ø_Your application is accessible by your organization members (login is required)._å",
				shareLinkHeader: "ø_Share the application with your audience_å",
				shareLinkOpen: "ø_OPEN_å",
				shareQ1Opt1: "ø_How do I keep the application private?_å",
				shareQ1Opt2: "ø_How do I keep the application private or share it publicly?_å",
				shareA1: "ø_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the webmap, use <a href='%LINK2%' target='_blank'>the webmap item page</a>._å",
				shareA1bis: "ø_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._å",
				shareQ2: "ø_How do I edit the application later?_å",
				shareQ2bis: "ø_How do I get back to the authoring interface?_å",
				shareA2div1: "ø_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._å",
				shareA2div2: "ø_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_å",				
				shareQ3: "ø_Where is the data stored?_å",
				shareA3: "ø_The application configuration is stored in <a href='%LINK1%' target='_blank'>this webmap item</a> and <a href='%LINK2%' target='_blank'>this web application item</a>. If you have used Flickr, Picasa, Facebook or YouTube import, your images and videos remains stored there and aren't duplicated in ArcGIS Online._å",
				learnMore: "ø_Learn more_å",
				close: "ø_Close_å"
			},
			settings: {
				header: "ø_Application settings_å",
				cancel: "ø_Cancel_å",
				apply: "ø_Apply_å",
				tabError: "ø_Please check for errors in all tabs_å"
			},
			settingsLayout: {
				title: "ø_Layout_å",
				explain: "ø_What layout do you want to use?_å",
				explainInit: "ø_Change will be possible through the settings dialog._å",
				selected: "ø_Selected layout_å",
				select: "ø_Select this layout_å"
			},
			settingsTheme: {
				title: "ø_Theme_å",
				explain: "ø_Choose an app theme or define your own colors._å",
				label: "ø_Header and side panel background colors_å"
			},
			settingsHeader: {
				title: "ø_Header_å",
				explain: "ø_Customize the header logo (maximum is 250 x 50px)._å",
				logoEsri: "ø_Esri logo_å",
				logoNone: "ø_No logo_å",
				logoCustom: "ø_Custom logo_å",
				logoCustomPlaceholder: "ø_Image URL_å",
				logoCustomTargetPlaceholder: "ø_Click-through link_å",
				logoSocialExplain: "ø_Customize the header top right link._å",
				logoSocialText: "ø_Text_å",
				logoSocialLink: "ø_Link_å",
				logoSocialDisabled: "ø_This feature has been disabled by the Administrator_å"
			},
			mediaSelector: {
				lblMap: "ø_Map_å",
				lblPicture: "ø_Picture_å",
				lblVideo: "ø_Video_å",
				lblExternal: "ø_External page_å"
			},
			webMapSelector: {
				radioCurrentWebMap: "ø_Current web map_å",
				radioWebmapApp: "ø_One of the other web map used in the application_å",
				radioAnotherWebmap: "ø_Another webmap_å",
				btnSelect: "ø_Select_å",
				lblOr: "ø_or_å",
				fieldEnterWebmapId: "ø_Enter a web map id_å",
				btnConfigure: "ø_Configure the Map_å"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "ø_My Organization_å",
					onlineLabel: "ø_ArcGIS Online_å",
					contentLabel: "ø_My Content_å",
					favoritesLabel: "ø_My Favorites_å"
				},
				title: "ø_Select Web Map_å",
				searchTitle: "ø_Search_å",
				ok: "ø_Ok_å",
				cancel: "ø_Cancel_å",
				placeholder: "ø_Enter search term_å"
			}
		}
	})
);
