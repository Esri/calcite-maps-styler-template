define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Media",
      "lblSelect2": "Sisältö",
      "lblMap": "Kartta",
      "lblImage": "Kuva",
      "lblVideo": "Video",
      "lblExternal": "Web-sivu",
      "disabled": "Pääkäyttäjä on poistanut tämän toiminnon käytöstä.",
      "url": "Kuvan verkko-osoitteen manuaalinen syöttäminen",
      "userLookup": "Lataa albumit",
      "notImplemented": "Ei ole vielä toteutettu.",
      "noData": "Julkista albumia ei löytynyt"
    },
    "imageSelector": {
      "lblStep1": "Valitse palvelu",
      "lblStep2": "Valitse media",
      "lblStep3": "Muokkaa"
    },
    "imageSelectorHome": {
      "explain": "Lataa kuvat sosiaalisesta mediasta <br />tai suoraan URL-osoitteesta"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Käyttäjätunnus",
      "signInMsg2": "Käyttäjää ei löydy",
      "loadingFailed": "Lataus epäonnistui"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Facebook-käyttäjä",
      "rightHeader": "Facebook-sivu",
      "pageExplain": "Facebook-sivu on julkinen tuotemerkki tai tunnettu tuote, kuten <b>esrigis</b>. Saat sivun nimen sivun URL-osoitteessa olevan ensimmäisen vinoviivan (/) jälkeen.",
      "pageInputLbl": "Sivun nimi",
      "lookupMsgError": "Sivua ei löydy",
      "warning": "Å_Facebook support has been discontinued, ${learn}________________ö.",
      "learn": "Å_learn more____ö"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "Å_Email or Picasa id______ö",
      "signInMsg2": "Tiliä ei löydy",
      "howToFind": "Å_How to find a Picasa id________ö",
      "howToFind2": "Å_Copy digits between the first and second '/' of any Picasa page____________________ö"
    },
    "videoSelectorCommon": {
      "check": "Valitse",
      "notFound": "Videota ei löydy",
      "found": "Video löytyi",
      "select": "Valitse tämä video"
    },
    "videoSelectorHome": {
      "other": "Muu"
    },
    "videoSelectorYoutube": {
      "url": "Youtube-videon URL-osoite",
      "pageInputLbl": "Käyttäjätunnus",
      "lookupMsgError": "Käyttäjää ei löydy",
      "howToFind": "YouTube-käyttäjätunnuksen etsiminen",
      "howToFind2": "Käyttäjätunnus näkyy videoissa",
      "found": "Löytyi",
      "noData": "Yhtään julkista videota ei löytynyt",
      "videoNotChecked": "Videota ei ole tarkistettu YouTubessa, mutta videon osoite näyttää oikealta.",
      "checkFailedAPI": "YouTube-tarkistus epäonnistui. Tarkista API -avain."
    },
    "videoSelectorVimeo": {
      "url": "Vimeo-videon URL-osoite"
    },
    "videoSelectorOther": {
      "explain1": "Tarina ei voi toistaa raakavideoita (esim. avi- ja mpeg-muotoisia), mutta sillä voi toistaa isännöityjä videotiedostoja, joissa on sisäänrakennettuja soittimia (esim. YouTube tai Vimeo).",
      "explain2": "Useimmissa online-videoisännöintipalveluissa voi käyttää kyseistä ominaisuutta, ja sinun on etsittävä videon upotusvalinta, kopioitava annettu koodi ja käytettävä sivustoa %WEBPAGE%.",
      "explain3": "Jos taas haluat isännöidä itse videota, voit luoda HTML-sivun, joka käyttää videosoitinta (esim. %EXAMPLE%), isännöidä tätä sivua ja käyttää myös sivustoa %WEBPAGE%.",
      "webpage": "Web-sivukohde"
    },
    "webpageSelectorHome": {
      "lblUrl": "Web-sivun URL-osoite",
      "lblEmbed": "Upotuskoodi",
      "lblOR": "TAI",
      "lblError1": "Virhe, tyhjennä toinen kahdesta lähtöaineistokentästä.",
      "lblError2": "Upotuskoodi voi sisältää vain yhden merkkijonon %IFRAMETAG%",
      "configure": "Määritä"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "Kuvan URL-osoitteen on alettava merkkijonolla http:// ja loputtava tarkenteeseen .jpg tai .png",
      "lblURLError": "Kuva ei ole kelvollinen. Määritä suora linkki kuvatiedostoon (URL päättyy yleensä jpg- tai png-tunnisteeseen ). Linkki kuvan sisältävään verkkosivuun ei toimi.",
      "lblURLCheck": "Tarkistetaan kuvaa...",
      "lblLabel": "Kuvan seloste",
      "lblLabel1": "Seloste",
      "lblLabel2": "Kohoteksti",
      "lblLabel3": "Ei mitään",
      "lblLabelPH": "Kirjoita vähän tekstiä...",
      "lblMaximize": "Sisällytä suurennuspainike kuvan kulmaan",
      "lblMaximizeHelp": "Suositellaan vain korkealaatuisille valokuville",
      "lblPosition": "Sijainti",
      "lblPosition1": "Keskikohta",
      "lblPosition2": "Täytä",
      "lblPosition3": "Sovita",
      "lblPosition4": "Venytä",
      "lblPosition5": "Mukautettu",
      "tooltipDimension": "Arvo voidaan määrittää px (pikseli)- tai %-yksiköissä",
      "tooltipDimension2": "Arvo on määritettävä pikseleinä",
      "lblPosition2Explain": "(voi rajautua)",
      "lblPosition3Explain": "(ei rajaudu)",
      "lblPosition3Explain2": "(leveys sopii aina paneeliin)",
      "lblPosition4Explain": "(voi vääristyä)",
      "unloadLbl": "Poista lataus, kun lukija siirtyy",
      "unloadHelp": "Jos Web-sivulla on ääni- tai videomediaa, pidä tämä asetus valittuna, jotta sisällön toisto pysähtyy, kun lukija siirtyy pois. Poista valinta, jos haluat toistaa ääniraitaa lukijan edetessä tarinassa.<br />Jos Web-sivu on sovellus, poista valinta, jotta tarina ei lataudu uudelleen, kun lukija palaa tarinaan.",
      "embedProtocolLabel": "Å_Load page over a secure connection (HTTPS)______________ö",
      "embedProtocolWarning1": "Å_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________ö.",
      "embedProtocolWarning2": "Å_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________ö."
    },
    "editorActionGeocode": {
      "lblTitle": "Paikanna osoite tai paikka",
      "mapMarkerExplain": "Käyttäjä näkee karttamerkit napsauttaessaan linkkiä"
    },
    "editorActionMedia": {
      "lblTitle": "Muuta päävaiheen sisältöä"
    },
    "editorInlineMedia": {
      "lblTitle": "Lisää kuva, video tai verkkosivu"
    }
  }
});