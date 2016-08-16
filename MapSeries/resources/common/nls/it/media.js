define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Supporto",
      "lblSelect2": "Contenuti",
      "lblMap": "Mappa",
      "lblImage": "Immagine",
      "lblVideo": "Video",
      "lblExternal": "Pagina Web",
      "disabled": "Questa feature è stata disabilitata dall'amministratore",
      "url": "Per immettere manualmente l'indirizzo Web di un'immagine",
      "userLookup": "Carica album",
      "notImplemented": "Non ancora implementato.",
      "noData": "Nessun album pubblico trovato"
    },
    "imageSelector": {
      "lblStep1": "Scegli il servizio",
      "lblStep2": "Seleziona il file multimediale",
      "lblStep3": "Configura"
    },
    "imageSelectorHome": {
      "explain": "Caricare le immagini da social media, <br /> o direttamente da un URL"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Nome utente",
      "signInMsg2": "Utente non trovato",
      "loadingFailed": "Caricamento non riuscito"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Utente Facebook",
      "rightHeader": "Pagina Facebook",
      "pageExplain": "Una pagina Facebook è un marchio/prodotto pubblico o un personaggio pubblico come <b>esrigis</b>. È possibile ottenere il nome della pagina dopo il primo '/' nell'URL della pagina.",
      "pageInputLbl": "Nome pagina",
      "lookupMsgError": "Pagina non trovata",
      "warning": "é_Facebook support has been discontinued, ${learn}________________È.",
      "learn": "é_learn more____È"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "é_Email or Picasa id______È",
      "signInMsg2": "Account non trovato",
      "howToFind": "é_How to find a Picasa id________È",
      "howToFind2": "é_Copy digits between the first and second '/' of any Picasa page____________________È"
    },
    "videoSelectorCommon": {
      "check": "Seleziona",
      "notFound": "Video non trovato",
      "found": "Video trovato",
      "select": "Seleziona questo video"
    },
    "videoSelectorHome": {
      "other": "Altro"
    },
    "videoSelectorYoutube": {
      "url": "URL di un video Youtube",
      "pageInputLbl": "Nome utente",
      "lookupMsgError": "Utente non trovato",
      "howToFind": "Come trovare un nome utente di YouTube",
      "howToFind2": "Il nome utente è visualizzato sotto i video",
      "found": "Trovato",
      "noData": "Nessun video pubblico trovato.",
      "videoNotChecked": "Il video non è stato verificato su YouTube, ma l'indirizzo sembra corretto.",
      "checkFailedAPI": "Verifica YouTube non superata. Controllare il codice API di YouTube."
    },
    "videoSelectorVimeo": {
      "url": "URL di un video Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "La storia non è in grado di riprodurre video non elaborati (ad esempio, avi o mpeg), ma può riprodurre video in hosting con lettori incorporati (ad esempio, YouTube o Vimeo).",
      "explain2": "La maggior parte dei servizi di hosting di video online offre tale feature. È necessario individuare l'opzione per incorporare il video, copiare il codice specificato e utilizzare %WEBPAGE%.",
      "explain3": "In alternativa, se si desidera eseguire autonomamente l'hosting del video, è possibile creare una pagina HTML che utilizza un lettore video come %EXAMPLE%, eseguire l'hosting di tale pagina e utilizzare %WEBPAGE%.",
      "webpage": "Feature pagina Web"
    },
    "webpageSelectorHome": {
      "lblUrl": "URL pagina Web",
      "lblEmbed": "Incorpora codice",
      "lblOR": "OPPURE",
      "lblError1": "Errore, cancellare uno dei due campi di input.",
      "lblError2": "Il codice incorporato può contenere un solo %IFRAMETAG%",
      "configure": "Configura"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "Un URL di immagine deve iniziare con http:// e terminare con .jpg o .png",
      "lblURLError": "Questa immagine non sembra valida. Specificare un collegamento diretto a un file immagine (l'URL in genere termina con .jpg o .png). I collegamenti a una pagina Web che contiene un'immagine non funzioneranno.",
      "lblURLCheck": "Verifica immagine in corso...",
      "lblLabel": "Didascalia immagine",
      "lblLabel1": "Didascalia",
      "lblLabel2": "Testo al passaggio del mouse",
      "lblLabel3": "Nessuno",
      "lblLabelPH": "Immettere un testo...",
      "lblMaximize": "Includere un pulsante Ingrandisci nell'angolo dell'immagine",
      "lblMaximizeHelp": "Consigliato solo per le foto di alta qualità",
      "lblPosition": "Posizione",
      "lblPosition1": "Al centro",
      "lblPosition2": "Riempimento",
      "lblPosition3": "Adatta",
      "lblPosition4": "Estendi",
      "lblPosition5": "Personalizza",
      "tooltipDimension": "Il valore può essere specificato come 'px' o '%'",
      "tooltipDimension2": "Il valore deve essere specificato in 'px'",
      "lblPosition2Explain": "(possibile ritaglio)",
      "lblPosition3Explain": "(nessun ritaglio)",
      "lblPosition3Explain2": "(la larghezza viene sempre adattata al pannello)",
      "lblPosition4Explain": "(possibile distorsione)",
      "unloadLbl": "Scarica quando il lettore passa a un altro elemento",
      "unloadHelp": "Se la pagina Web dispone di supporti audio o video, mantenere l'opzione selezionata per arrestare la riproduzione del contenuto quando il lettore passa a un elemento diverso. Deselezionarla, per esempio, per mantenere la riproduzione di una colonna sonora mentre il lettore continua a leggere la storia.<br />Se la pagina Web è un'applicazione, deselezionare l'opzione in modo che la storia non venga ricaricata se il lettore torna alla pagina.",
      "embedProtocolLabel": "é_Load page over a secure connection (HTTPS)______________È",
      "embedProtocolWarning1": "é_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________È.",
      "embedProtocolWarning2": "é_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________È."
    },
    "editorActionGeocode": {
      "lblTitle": "Trova un indirizzo o un luogo",
      "mapMarkerExplain": "Quando l'utente fa clic sul collegamento, verrà visualizzato un marcatore di mappa"
    },
    "editorActionMedia": {
      "lblTitle": "Cambia contenuti per Visualizzazione principale"
    },
    "editorInlineMedia": {
      "lblTitle": "Inserisci immagine, video o pagina Web"
    }
  }
});