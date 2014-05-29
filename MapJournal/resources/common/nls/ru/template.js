define(
	 ({
		common: {
			common: {
				edit: "Ж_Edit_Я"
			},
			inlineFieldEdit: {
				editMe: "Ж_Edit me !_Я"
			},
			builderPanel: {
				panelHeader: "Ж_%TPL_NAME% Builder_Я",
				buttonSave: "Ж_SAVE_Я",
				buttonShare: "Ж_SHARE_Я",
				buttonSettings: "Ж_SETTINGS_Я",
				buttonHelp: "Ж_HELP_Я",
				noPendingChange: "Ж_No pending change_Я",
				unSavedChangeSingular: "Ж_1 unsaved change_Я",
				unSavedChangePlural: "Ж_unsaved changes_Я",
				popoverSaveWhenDone: "Ж_Don't forget to save when you are done_Я",
				closeWithPendingChange: "Ж_Are you sure to want to confirm the action ? Your changes will be lost._Я",
				ok: "Ж_Ok_Я",
				savingApplication: "Ж_Saving application_Я",
				saveError: "Ж_Save failed, please try again_Я",
				saveError3: "Ж_The title can't be empty_Я",
				// TODO
				signIn: "Ж_Please sign in with an account on_Я",
				shareStatus1: "Ж_Application is not saved_Я",
				shareStatus2: "Ж_Application is shared publicly_Я",
				shareStatus3: "Ж_Application is shared within the organization_Я",
				shareStatus4: "Ж_Application is not shared_Я"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Ж_Title_Я",
				addPopupTitle: "Ж_Add_Я",
				addPopupDescription: "Ж_Add a new view to your series._Я",
				addPopupButton: "Ж_ADD_Я",
				// Edit
				editPopupTitle: "Ж_Edit_Я",
				editPopupDescription: "Ж_Edit the selected view_Я",
				editPopupButton: "Ж_APPLY_Я",
				// Add/Edit
				addEditPopupCancelButton: "Ж_CANCEL_Я",
				addEditPopupMyContentBtn: "Ж_Select from my content_Я",
				addEditPopupConfigureWebMapBtn: " Ж_Configure_Я"
			},
			share: {
				firstSaveTitle: "Ж_Application successfully saved_Я",
				firstSaveHeader: "Ж_Your application is now saved in ArcGIS Online. Please read the following answers to frequent questions._Я",
				firstSaveA1: "Ж_If you are not familiar with ArcGIS Online or want a shortcut to access the authoring interface, you can save the following link: %LINK1%_Я",
				firstSaveA1bis: "Ж_The application can also be found in your <a href='%LINK2%' target='_blank'>ArcGIS Online content folder</a>._Я",
				firstSaveQ2: "Ж_Is my application shared?_Я",
				firstSaveA2: "Ж_Currently your application is not shared. To share it, use the SHARE button._Я",
				shareTitle: "Ж_Share your application_Я",
				sharePrivateHeader: "Ж_Your application is not shared, would you like to share it?_Я",
				sharePrivateBtn1: "Ж_Share publicly_Я",
				sharePrivateBtn2: "Ж_Share with my Organization_Я",
				sharePrivateWarning: "Ж_Sharing %WITH% has been disabled because you are not the owner of the <a href='%LINK%' target='_blank'>webmap</a>._Я",
				sharePrivateWarningWith1: "Ж_publicly_Я",
				sharePrivateWarningWith2: "Ж_publicly and with the Organization_Я",
				sharePrivateProgress: "Ж_Sharing in progress..._Я",
				sharePrivateErr: "Ж_Sharing failed, try again or_Я",
				sharePrivateOk: "Ж_Sharing updated successfully, loading..._Я",
				sharePreviewAsUser: "Ж_Preview_Я",
				shareHeader1: "Ж_Your application is <strong>publicly accessible</strong>._Я",
				shareHeader2: "Ж_Your application is accessible by your organization members (login is required)._Я",
				shareLinkHeader: "Ж_Share the application with your audience_Я",
				shareLinkOpen: "Ж_OPEN_Я",
				shareQ1Opt1: "Ж_How do I keep the application private?_Я",
				shareQ1Opt2: "Ж_How do I keep the application private or share it publicly?_Я",
				shareA1: "Ж_Use %SHAREIMG% on <a href='%LINK1%' target='_blank'>the application item page</a>. If you also want to unshare the webmap, use <a href='%LINK2%' target='_blank'>the webmap item page</a>._Я",
				shareA1bis: "Ж_If you also want to unshare the Feature Service, use <a href='%LINK1%' target='_blank'>the Feature Service item page</a>._Я",
				shareQ2: "Ж_How do I edit the application later?_Я",
				shareQ2bis: "Ж_How do I get back to the authoring interface?_Я",
				shareA2div1: "Ж_Save and reuse the following link %LINK1% or use <a href='%LINK2%' target='_blank'>the application item page</a>._Я",
				shareA2div2: "Ж_As the owner of the application, when you are signed in on ArcGIS.com, the application includes a button to open the interactive builder:_Я",				
				shareQ3: "Ж_Where is the data stored?_Я",
				shareA3: "Ж_The application configuration is stored in <a href='%LINK1%' target='_blank'>this webmap item</a> and <a href='%LINK2%' target='_blank'>this web application item</a>. If you have used Flickr, Picasa, Facebook or YouTube import, your images and videos remains stored there and aren't duplicated in ArcGIS Online._Я",
				learnMore: "Ж_Learn more_Я",
				close: "Ж_Close_Я"
			},
			settings: {
				header: "Ж_Application settings_Я",
				cancel: "Ж_Cancel_Я",
				apply: "Ж_Apply_Я",
				tabError: "Ж_Please check for errors in all tabs_Я"
			},
			settingsLayout: {
				title: "Ж_Layout_Я",
				explain: "Ж_What layout do you want to use?_Я",
				explainInit: "Ж_Change will be possible through the settings dialog._Я",
				selected: "Ж_Selected layout_Я",
				select: "Ж_Select this layout_Я"
			},
			settingsTheme: {
				title: "Ж_Theme_Я",
				explain: "Ж_Choose an app theme or define your own colors._Я",
				label: "Ж_Header and side panel background colors_Я"
			},
			settingsHeader: {
				title: "Ж_Header_Я",
				explain: "Ж_Customize the header logo (maximum is 250 x 50px)._Я",
				logoEsri: "Ж_Esri logo_Я",
				logoNone: "Ж_No logo_Я",
				logoCustom: "Ж_Custom logo_Я",
				logoCustomPlaceholder: "Ж_Image URL_Я",
				logoCustomTargetPlaceholder: "Ж_Click-through link_Я",
				logoSocialExplain: "Ж_Customize the header top right link._Я",
				logoSocialText: "Ж_Text_Я",
				logoSocialLink: "Ж_Link_Я",
				logoSocialDisabled: "Ж_This feature has been disabled by the Administrator_Я"
			},
			mediaSelector: {
				lblMap: "Ж_Map_Я",
				lblPicture: "Ж_Picture_Я",
				lblVideo: "Ж_Video_Я",
				lblExternal: "Ж_External page_Я"
			},
			webMapSelector: {
				radioCurrentWebMap: "Ж_Current web map_Я",
				radioWebmapApp: "Ж_One of the other web map used in the application_Я",
				radioAnotherWebmap: "Ж_Another webmap_Я",
				btnSelect: "Ж_Select_Я",
				lblOr: "Ж_or_Я",
				fieldEnterWebmapId: "Ж_Enter a web map id_Я",
				btnConfigure: "Ж_Configure the Map_Я"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Ж_My Organization_Я",
					onlineLabel: "Ж_ArcGIS Online_Я",
					contentLabel: "Ж_My Content_Я",
					favoritesLabel: "Ж_My Favorites_Я"
				},
				title: "Ж_Select Web Map_Я",
				searchTitle: "Ж_Search_Я",
				ok: "Ж_Ok_Я",
				cancel: "Ж_Cancel_Я",
				placeholder: "Ж_Enter search term_Я"
			}
		}
	})
);
