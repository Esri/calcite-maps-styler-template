define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Å_Media_ö",
				lblSelect2: "Å_Content_ö",
				lblMap: "Kartta",
				lblImage: "Kuva",
				lblVideo: "Video",
				lblExternal: "Web-sivu",
				disabled: "Pääkäyttäjä on poistanut tämän toiminnon käytöstä.",
				url: "Kuvan verkko-osoitteen manuaalinen syöttäminen",
				userLookup: "Lataa albumit",
				notImplemented: "Ei ole vielä toteutettu."
			},
			imageSelector: {
				lblStep1: "Valitse palvelu",
				lblStep2: "Valitse media",
				lblStep3: "Muokkaa"
			},
			imageSelectorHome: {
				explain: "Lataa kuvat sosiaalisesta mediasta <br />tai suoraan URL-osoitteesta"
			},
			imageSelectorFlickr: {
				userInputLbl: "Käyttäjätunnus",
				signInMsg2: "Käyttäjää ei löydy",
				loadingFailed: "Lataus epäonnistui"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook-käyttäjä",
				rightHeader: "Facebook-sivu",
				pageExplain: "Facebook-sivu on julkinen tuotemerkki tai tunnettu tuote, kuten <b>esrigis</b>. Saat sivun nimen sivun URL-osoitteessa olevan ensimmäisen vinoviivan (/) jälkeen.",
				pageInputLbl: "Sivun nimi",
				lookupMsgError: "Sivua ei löydy"
			},
			imageSelectorPicasa: {
				userInputLbl: "Sähköpostiosoite tai Picasa-/Google+-tunnus",
				signInMsg2: "Tiliä ei löydy",
				signInMsg3: "Ei julkista albumia",
				howToFind: "Picasa- tai Google+-tilitunnuksen etsiminen",
				howToFind2: "Kopioi minkä tahansa Picasa- tai Google+-sivun ensimmäisen ja toisen vinoviivan (/) välissä olevat luvut"
			},
			videoSelectorCommon: {
				check: "Å_Check_ö",
				notFound: "Å_Video not found_ö",
				found: "Å_Video found_ö",
				select: "Å_Select this video_ö"
			},
			videoSelectorHome: {
				other: "Å_Other_ö"
			},
			videoSelectorYoutube: {
				url: "Å_URL of a Youtube video_ö",
				pageInputLbl: "Käyttäjätunnus",
				lookupMsgError: "Käyttäjää ei löydy",
				howToFind: "YouTube-käyttäjätunnuksen etsiminen",
				howToFind2: "Käyttäjätunnus näkyy videoissa",
				found: "Å_Found_ö",
				noData: "Yhtään julkista videota ei löytynyt"
			},
			videoSelectorVimeo: {
				url: "Å_URL of a Vimeo video_ö"
			},
			videoSelectorOther: {
				explain1: "Å_Map Journal cannot play raw videos (e.g., avi, mpeg) but it can play hosted video files that have built-in players (e.g., YouTube or Vimeo)._ö",
				explain2: "Å_Most online video hosting services offer that feature, you have to find the option to embed the video, copy the given code and use the %WEBPAGE%._ö",
				explain3: "Å_Alternatively, if you want host the video yourself, you can create an HTML page that use a video player like %EXAMPLE%, host that page and also use the %WEBPAGE%._ö",
				webpage: "Å_Web page feature_ö"
			},
			webpageSelectorHome: {
				lblUrl: "Å_Webpage URL_ö",
				lblEmbed: "Å_Embed code_ö",
				lblOR: "Å_OR_ö",
				lblError1: "Å_Error, clear one of the two input fields._ö",
				lblError2: "Å_Embed code can only contain one <iframe>_ö"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Å_An image URL should start with http:// and end with .jpg or .png_ö",
				lblLabel: "Å_Image Caption_ö",
				lblLabel1: "Seloste",
				lblLabel2: "Kohoteksti",
				lblLabel3: "Ei mitään",
				lblLabelPH: "Kirjoita vähän tekstiä...",
				lblMaximize: "Å_Include a maximize button in the corner of the image_ö",
				lblMaximizeHelp: "Å_Recommended only for high quality photos_ö",
				lblPosition: "Sijainti",
				lblPosition1: "Keskikohta",
				lblPosition2: "Täytä",
				lblPosition3: "Sovita",
				lblPosition4: "Venytä",
				lblPosition5: "Å_Custom_ö",
				tooltipDimension: "Å_The value can be specified in 'px' or '%'_ö",
				lblPosition2Explain: "(voi rajautua)",
				lblPosition3Explain: "(ei rajaudu)",
				lblPosition3Explain2: "Å_(width will always fit the panel)_ö",
				lblPosition4Explain: "(voi vääristyä)"
			},
			editorActionGeocode: {
				lblTitle: "Paikanna osoite tai paikka",
				mapMarkerExplain: "Käyttäjä näkee karttamerkit napsauttaessaan linkkiä"
			},
			editorActionMedia: {
				lblTitle: "Muuta päävaiheen sisältöä"
			},
			editorInlineMedia: {
				lblTitle: "Lisää kuva tai video"
			}
		}
	})

);
