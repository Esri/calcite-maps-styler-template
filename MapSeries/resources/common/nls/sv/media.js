define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Media",
      "lblSelect2": "Innehåll",
      "lblMap": "Karta",
      "lblImage": "Bild",
      "lblVideo": "Video",
      "lblExternal": "Webbsida",
      "disabled": "Den här funktionen har inaktiverats av administratören",
      "url": "Ange webbadressen för en bild manuellt",
      "userLookup": "Läs in album",
      "notImplemented": "Inte infört ännu.",
      "noData": "Inget offentligt album hittades"
    },
    "imageSelector": {
      "lblStep1": "Välj tjänst",
      "lblStep2": "Välj media",
      "lblStep3": "Konfigurera"
    },
    "imageSelectorHome": {
      "explain": "Läs in bilder från sociala media <br /> eller direkt från en URL"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Användarnamn",
      "signInMsg2": "Det gick inte att hitta användaren",
      "loadingFailed": "Det gick inte att läsa in"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Facebook-användare",
      "rightHeader": "Facebook-sida",
      "pageExplain": "En Facebook-sida är ett offentligt varumärke/produkt eller en kändis, till exempel <b>esrigis</b>. Du kan hitta sidnamnet efter det första '/'-tecknet i sidans webbadress.",
      "pageInputLbl": "Sidnamn",
      "lookupMsgError": "Det gick inte att hitta sidan",
      "warning": "Å_Facebook support has been discontinued, ${learn}________________ö.",
      "learn": "Å_learn more____ö"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "Å_Email or Picasa id______ö",
      "signInMsg2": "Det gick inte att hitta kontot",
      "howToFind": "Å_How to find a Picasa id________ö",
      "howToFind2": "Å_Copy digits between the first and second '/' of any Picasa page____________________ö"
    },
    "videoSelectorCommon": {
      "check": "Kontroll",
      "notFound": "Det gick inte att hitta videon",
      "found": "Video hittad",
      "select": "Välj den här videon"
    },
    "videoSelectorHome": {
      "other": "Annat"
    },
    "videoSelectorYoutube": {
      "url": "URL till en Youtube-video",
      "pageInputLbl": "Användarnamn",
      "lookupMsgError": "Det gick inte att hitta användaren",
      "howToFind": "Så här hittar du ett YouTube-användarnamn",
      "howToFind2": "Användarnamnet visas under videoklippen",
      "found": "Hittade",
      "noData": "Inga offentliga videoklipp hittades",
      "videoNotChecked": "Videon har inte kontrollerats på YouTube, men adressen ser bra ut.",
      "checkFailedAPI": "YouTube-kontrollen har misslyckats, kontrollera din YouTube API-nyckel."
    },
    "videoSelectorVimeo": {
      "url": "URL till en Vimeo-video"
    },
    "videoSelectorOther": {
      "explain1": "Berättelsen kan inte spela upp obearbetade videoklipp (till exempel avi och mpeg), men kan spela driftade videofiler som har inbyggda spelare (till exempel YouTube eller Vimeo).",
      "explain2": "De flesta tjänster som driftar videoklipp online erbjuder den här funktionen. Du måste hitta alternativet för att bädda in videon, kopiera den angivna koden och använda %WEBPAGE%.",
      "explain3": "Om du själv vill drifta videon kan du skapa en HTML-sida som använder en videospelare som %EXAMPLE%, drifta sidan och använda %WEBPAGE%.",
      "webpage": "Webbsidefunktion"
    },
    "webpageSelectorHome": {
      "lblUrl": "Webbsidans URL",
      "lblEmbed": "Bädda in kod",
      "lblOR": "ELLER",
      "lblError1": "Fel, rensa ett av de båda inmatningsfälten.",
      "lblError2": "Inbäddad kod kan endast innehålla en %IFRAMETAG%",
      "configure": "Konfigurera"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "En bild-URL bör börja med http:// och slutar med .jpg eller .png",
      "lblURLError": "Den här bilden verkar inte vara giltig. Ange en direktlänk till en bildfil (din URL slutar vanligtvis med en .jpg eller .png). Länkar till en webbsida som innehåller en bild fungerar inte.",
      "lblURLCheck": "Kontrollerar bild ...",
      "lblLabel": "Bildtext",
      "lblLabel1": "Bildtext",
      "lblLabel2": "Hovringstext",
      "lblLabel3": "Ingen",
      "lblLabelPH": "Ange text ...",
      "lblMaximize": "Ta med knappen Maximera i hörnet av bilden",
      "lblMaximizeHelp": "Rekommenderas endast för bilder av hög kvalitet",
      "lblPosition": "Position",
      "lblPosition1": "Centrera",
      "lblPosition2": "Fyllning",
      "lblPosition3": "Anpassa",
      "lblPosition4": "Sträck",
      "lblPosition5": "Anpassad",
      "tooltipDimension": "Värdet kan anges i \"px\" eller \"%\"",
      "tooltipDimension2": "Värdet måste anges i \"px\"",
      "lblPosition2Explain": "(kan beskäras)",
      "lblPosition3Explain": "(kan inte beskäras)",
      "lblPosition3Explain2": "(bredden kommer alltid att fylla rutan)",
      "lblPosition4Explain": "(kan förvrängas)",
      "unloadLbl": "Ta bort när användaren navigerar vidare",
      "unloadHelp": "Om webbsidan innehåller ljud- eller videomedia behåller du det här alternativet markerat så att innehållet inte spelas när användaren navigerar vidare. Avmarkera det till exempel om du vill att ett ljudspår ska spelas när användaren bläddrar vidare genom berättelsen.<br />Om webbplatsen är en applikation avmarkerar du alternativet så att berättelsen inte läses in på nytt om användaren återvänder till den.",
      "embedProtocolLabel": "Å_Load page over a secure connection (HTTPS)______________ö",
      "embedProtocolWarning1": "Å_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________ö.",
      "embedProtocolWarning2": "Å_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________ö."
    },
    "editorActionGeocode": {
      "lblTitle": "Hitta en adress eller plats",
      "mapMarkerExplain": "Användare ser en kartmarkör när de klickar på länken"
    },
    "editorActionMedia": {
      "lblTitle": "Ändra innehåll för huvudscenen"
    },
    "editorInlineMedia": {
      "lblTitle": "Infoga en bild, ett videoklipp eller en webbsida"
    }
  }
});