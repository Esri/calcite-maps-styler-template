define(
	 ({
		builder: {
			layouts: {
				mainStage: "Päävaihe",
				sideTitle: "Sivupaneeli",
				sideDescr: "Paljon tekstiä sisältävän tarinan asettelu, joka erottuu muista siten, että se yhdistää valokuvat, videot ja kartat yhdeksi selkeäksi kohdennetuksi viestiksi.",
				floatTitle: "Irrallinen ruutu",
				floatDescr: "Asettelu, joka korostaa kartografiaa, kun lyhytmuotoinen tarina näkyy läpinäkyvässä tekstiruudussa."
			},
			common: {
				lblStatus1: "Julkaistut",
				lblStatus2: "Luonnos",
				lblStatus3: "Piilotettu"
			},
			settingsLayoutOptions: {
				title: "Taiton asetukset",
				cfgLeft: "Vasen",
				cfgRight: "Oikea",
				cfgSmall: "Pieni",
				cfgMedium: "Keskisuuri",
				cfgLarge: "Suuri",
				socialLinksLabel: "Näytä jakamislinkit kunkin osan alareunassa",
				socialLinksDescr: "Tämän toiminnon avulla lukijat voivat viitata tai manostaa tiettyjä tarinan %TPL_NAME% osia. Jos käytät esimerkiksi osien jakamiskuvaketta, lukijat osuvat tuohon tiettyyn tarinan %TPL_NAME% osaan eivätkä tarinan alkuun. Lukijat voivat käyttää otsikko-osan sosiaalisen median linkkiä koko tarinan %TPL_NAME% (Otsikko-välilehti) mainostamiseen, jolloin he osuvat tarinan %TPL_NAME% alkuun."
			},
			initPopup: {
				title: "Tervetuloa"
			},
			addEditPopup: {
				disabled: "Å_Add Section is disabled because the maximum number of allowed sections has been reached._ö",
				titleAdd: "Lisää osa",
				titleAddHome: "Å_Add Home Section_ö",
				titleEdit: "Muokkaa osaa",
				step: "Vaihe",
				stepMainStageExplain: "Å_Main Stage Content_ö",
				stepPanelExplain: "Å_Content_ö",
				stepMainStageNextTooltip: "Kirjoita osan otsikko ja valitse päävaiheen sisältö",
				step2NextTooltip: "Kirjoita osan otsikko ja taiton %LAYOUT-TYPE% sisältö",
				stepNextTooltipNext: "siirry seuraavaan vaiheeseen",
				stepNextTooltipAdd: "osan lisäystä varten",
				firstAddExplain: "Å_This first section is your Home Section, think of it as the 'cover page' to your story. The title you just defined will be displayed with large fonts._ö",
				firstAddLeanMore: "Å_Learn More_ö",
				titlePlaceholder: "Osan otsikko..."
			},
			addEditViewText: {
				editorPlaceholder: "Lisää tähän tekstiä, linkkejä ja pieniä kuvia.",
				editorActionsTitle: "Päävaiheen toiminnot",
				editorActionsHelpDescr: "Å_Use these controls to create links that will change the main stage. For example, when the reader clicks a link, you may want to zoom the map to a specific location, display another web map or display an image._ö"
			},
			organizePopup: {
				title: "Järjestä",
				lblHeader: "Järjestä sisältösi vetämällä ja pudottamalla osioita.",
				lblColTitle: "Otsikko",
				lblColPubDate: "Julkaisupäivämäärä",
				lblColStatus: "Tila",
				checkDisplayReverse: "Näytä osat käänteisessä järjestyksessä",
				btnApplyWarning: "Å_Confirm deletion of %NB% section(s)_ö",
				deleteTooltip: "Poista",
				firstSectionExplain: "(Kotisivuosaa ei voi siirtää)"
			},
			exportData: {
				btn: "Å_Export content_ö",
				tooltip: "Å_Exporting your content allows you to view and create a back-up of your Journal should you accidentally delete it. Simply copy, paste, the content the page content into any word processor._ö"
			},
			help: {
				lblHelp: "Ohje",
				lblAdd: "Lisää osa",
				lblSettings: "Asetukset",
				lblOrga: "Järjestä sisältö",
				lblEdit: "Muokkaukset",
				lblPublish: "Jaa",
				lblTips: "Å_Tips_ö",
				lblMore: "Haluatko lisää?",
				lblLink: "Siirry Tarinakartat-sivustoon.",
				content1Div1: "Voit integroida useita tyylejä, kun muodostat tarinaasi. <strong>%LAYOUT_TITLE%</strong> sisältää tavallisesti tekstin, kuvat ja videot, kun kartat ovat yleensä <strong>päävaiheessa</strong>. Tarinassa %TPL_NAME% voit kuitenkin esitellä kuvia, kaavioita ja videoita myös päävaiheessa.",
				content1Div2: "Lisäämällä osioita voit mukauttaa kattavasti tarinankerrontakokemustasi. Kun lukijat vierittävät tyylin %LAYOUT_TITLE% mukaista tekstiäsi, voit tehostaa viestiäsi vierittämällä päävaiheen karttaa tai tarkentamalla tärkeisiin pisteisiin tai kytkemällä uudet kartat ja kuvat näkymään automaattisesti.",
				content2Div1: "Tässä voit säätää sitä, miltä %TPL_NAME% näyttää. Värimalleja, asetteluja ja leveyksiä säädetään tässä.",
				content2Div2: "Voit myös lisätä jaettavia linkkejä Facebookiin, Twitteriin ja Bitlyyn, jotta lukijat voivat helposti levittää %TPL_NAME% -tarinasi muille.",
				content3Div1: "Å_Your content is organized into sections. You can have as many sections as you like (think of them like mini chapters). The flow of those chapters is important; within Organize you can reorder or delete sections as you wish._ö",
				content4Div1: "Löysitkö virheen vai haluatko muuttaa aineistoasi? Ei huolta. Etsi muokkauskuvaketta sovelluksesta tehdäksesi muutoksia sisältöösi. Käytät muokkaustoimintoja useita kertoja, kun kehität tarinaa %TPL_NAME%.",
				content5Div1: "Tarinasi %TPL_NAME% on tallennettu portaalin %PORTAL% tiliin, ja se on oletusarvoisesti yksityinen. Voit jakaa sen organisaatiosi kanssa tai määrittää sen kaikille avoimeksi. Järjestelmä määrittää tarinallesi myös lyhennetyn URL-osoitteen, jotta voit jakaa sen helposti.",
				content6Div1: "Å_The title of your Home section is also the title of your Journal; think of your the Home section as  the 'cover page' to your story. The Home Section title will remain visible when your readers will navigate the Journal._ö",
				content6Div2: "Å_Your %LAYOUT_TITLE% doesn't have to be just text, consider including photos and videos to help bring the story alive, and to break-up long sections of text!_ö"
			},
			landing: {
				lblAdd: "Å_What do you want to call your Map Journal?_ö",
				phAdd: "Å_Enter your title..._ö",
				lblOR: "Tai",
				lblHelp: "Käy kierroksella"
			},
			firstAddSplash: {
				thisis: "Tämä on"
			}
        }
    })

);
