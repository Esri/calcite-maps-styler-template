define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Meedia",
      "lblSelect2": "Sisu",
      "lblMap": "Kaart",
      "lblImage": "Pilt",
      "lblVideo": "Video",
      "lblExternal": "Veebileht",
      "disabled": "See funktsioon on administraatori poolt välja lülitatud",
      "url": "Pildi veebiaadressi käsitsi sisestamiseks",
      "userLookup": "Laadi albumid",
      "notImplemented": "Pole veel kasutusele võetud.",
      "noData": "Avalikku albumit ei leitud"
    },
    "imageSelector": {
      "lblStep1": "Valige teenus",
      "lblStep2": "Valige meedium",
      "lblStep3": "Seadista"
    },
    "imageSelectorHome": {
      "explain": "Pildid saate laadida sotsiaalmeediast <br /> või otse kindlalt URL-ilt"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Kasutajanimi",
      "signInMsg2": "Kasutajat ei leitud",
      "loadingFailed": "Laadimine nurjus"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Facebooki kasutajanimi",
      "rightHeader": "Facebooki leht",
      "pageExplain": "Facebooki leht on avalik kaubamärk/toode nagu <b>esrigis</b>. Saad lehe nime pärast esimest '/' lehekülje URL-il.",
      "pageInputLbl": "Lehe nimi",
      "lookupMsgError": "Lehte ei leitud",
      "warning": "Š_Facebook support has been discontinued, ${learn}________________ä.",
      "learn": "Š_learn more____ä"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "Š_Email or Picasa id______ä",
      "signInMsg2": "Kontot ei leitud",
      "howToFind": "Š_How to find a Picasa id________ä",
      "howToFind2": "Š_Copy digits between the first and second '/' of any Picasa page____________________ä"
    },
    "videoSelectorCommon": {
      "check": "Kontrolli",
      "notFound": "Videot ei leitud",
      "found": "Video leiti",
      "select": "Vali see video"
    },
    "videoSelectorHome": {
      "other": "Muu"
    },
    "videoSelectorYoutube": {
      "url": "Youtube video URL",
      "pageInputLbl": "Kasutajanimi",
      "lookupMsgError": "Kasutajat ei leitud",
      "howToFind": "Kuidas leida YouTube’i kasutajanime",
      "howToFind2": "Kasutajanime kuvatakse videote all",
      "found": "Leitud",
      "noData": "Avalikke videoid ei leitud",
      "videoNotChecked": "Seda videot pole YouTube’is kontrollitud, kuid aadress tundub sobivat.",
      "checkFailedAPI": "YouTube’i kontroll nurjus, kontrollige YouTube’i API võtit."
    },
    "videoSelectorVimeo": {
      "url": "Vimeo video URL"
    },
    "videoSelectorOther": {
      "explain1": "See lugu ei saa esitada töötlemata videoid (nt AVI-, MPEG-vormingus), kuid saab esitada majutatud videofaile sisseehitatud pleierites (nt YouTube või Vimeo).",
      "explain2": "Enamik veebis olevaid videomajutusteenuseid pakub seda funktsiooni. Peate leidma video lisamise võimaluse, kopeerima antud koodi ja kasutama veebilehte %WEBPAGE%.",
      "explain3": "Kui soovite aga videot ise majutada, saate luua HTML-lehe, mis kasutab näiteks videopleierit %EXAMPLE%, selle lehe majutada ning kasutada ka veebilehte %WEBPAGE%.",
      "webpage": "Veebilehe funktsioon"
    },
    "webpageSelectorHome": {
      "lblUrl": "Veebilehe URL",
      "lblEmbed": "Lisa kood",
      "lblOR": "VÕI",
      "lblError1": "Viga, tühjendage üks kahest sisendväljast.",
      "lblError2": "Lisatud kood võib sisaldada ainult ühte märksõna %IFRAMETAG%",
      "configure": "Seadista"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "Pildi URL-i alguses peaks olema http:// ja lõpus laiend .jpg või .png",
      "lblURLError": "See pilt paistab olevat vigane. Määrake pildifaili otselink (URL-i lõpus on üldiselt laiend .jpg või .png). Pilti sisaldava veebilehe lingid ei tööta.",
      "lblURLCheck": "Pildi kontrollimine...",
      "lblLabel": "Pildi alapealkiri",
      "lblLabel1": "Alapealkiri",
      "lblLabel2": "Hõljuktekst",
      "lblLabel3": "Pole",
      "lblLabelPH": "Sisestage teksti...",
      "lblMaximize": "Lisa pildi nurka maksimeerimise nupp",
      "lblMaximizeHelp": "Soovitatud ainult kvaliteetsete piltide puhul",
      "lblPosition": "Paigutus",
      "lblPosition1": "Keskel",
      "lblPosition2": "Täida",
      "lblPosition3": "Sobita",
      "lblPosition4": "Venita",
      "lblPosition5": "Kohandatud",
      "tooltipDimension": "Väärtuse ühikuks võib olla px või %",
      "tooltipDimension2": "Väärtuse ühikuks peab olema px",
      "lblPosition2Explain": "(võib kärpida)",
      "lblPosition3Explain": "(ei kärbita)",
      "lblPosition3Explain2": "(laius on alati paneelile vastav)",
      "lblPosition4Explain": "(võib moonutada)",
      "unloadLbl": "Laadi maha, kui lugeja liigub mujale",
      "unloadHelp": "Kui veebileht sisaldab audio- või videosisu, jätke see valik märgituks, et lõpetada selle sisu esitamine, kui lugeja liigub mujale. Tühjendage see valik näiteks siis, kui soovite, et heliriba esitataks samal ajal, kui lugeja läbi loo liigub.<br />Kui veebileht on rakendus, tühjendage see valik, et kasutaja naasmisel ei laaditaks lugu uuesti.",
      "embedProtocolLabel": "Š_Load page over a secure connection (HTTPS)______________ä",
      "embedProtocolWarning1": "Š_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________ä.",
      "embedProtocolWarning2": "Š_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________ä."
    },
    "editorActionGeocode": {
      "lblTitle": "Märgi aadress või asukoht",
      "mapMarkerExplain": "Kasutajad näevad lingi klõpsamisel kaardil tähist"
    },
    "editorActionMedia": {
      "lblTitle": "Põhietapi sisu muutmine"
    },
    "editorInlineMedia": {
      "lblTitle": "Pildi, video või veebilehe lisamine"
    }
  }
});