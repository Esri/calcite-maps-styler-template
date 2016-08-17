define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Média",
      "lblSelect2": "Obsah",
      "lblMap": "Mapa",
      "lblImage": "Obrázek",
      "lblVideo": "Video",
      "lblExternal": "Webová stránka",
      "disabled": "Tato funkce byla zakázána administrátorem.",
      "url": "Umožňuje manuálně vložit webovou adresu obrázku.",
      "userLookup": "Nahrát alba",
      "notImplemented": "Dosud není implementováno.",
      "noData": "Nebylo nalezeno žádné veřejné album."
    },
    "imageSelector": {
      "lblStep1": "Vyberte službu.",
      "lblStep2": "Vyberte svá média.",
      "lblStep3": "Konfigurovat"
    },
    "imageSelectorHome": {
      "explain": "Nahrajte obrázky ze sociálních médií <br /> nebo přímo z adresy URL."
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Uživatelské jméno",
      "signInMsg2": "Uživatel nenalezen",
      "loadingFailed": "Nahrávání se nezdařilo."
    },
    "imageSelectorFacebook": {
      "leftHeader": "Uživatel služby Facebook",
      "rightHeader": "Stránka služby Facebook",
      "pageExplain": "Stránka služby Facebook představuje veřejnou značku či službu nebo známou osobnost, jako je například <b>esrigis</b>. Název stránky začíná za prvním lomítkem (/) v URL adrese stránky.",
      "pageInputLbl": "Název stránky",
      "lookupMsgError": "Stránka nenalezena",
      "warning": "Ř_Facebook support has been discontinued, ${learn}________________ů.",
      "learn": "Ř_learn more____ů"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "Ř_Email or Picasa id______ů",
      "signInMsg2": "Účet nenalezen",
      "howToFind": "Ř_How to find a Picasa id________ů",
      "howToFind2": "Ř_Copy digits between the first and second '/' of any Picasa page____________________ů"
    },
    "videoSelectorCommon": {
      "check": "Kontrola",
      "notFound": "Video nebylo nalezeno",
      "found": "Video bylo nalezeno",
      "select": "Vybrat toto video"
    },
    "videoSelectorHome": {
      "other": "Jiné"
    },
    "videoSelectorYoutube": {
      "url": "Adresa URL videa ve službě YouTube",
      "pageInputLbl": "Uživatelské jméno",
      "lookupMsgError": "Uživatel nenalezen",
      "howToFind": "Jak najít uživatelské jméno YouTube",
      "howToFind2": "Uživatelské jméno se zobrazuje pod videi",
      "found": "Nalezeno",
      "noData": "Nenalezena žádná veřejná videa",
      "videoNotChecked": "Video nebylo zkontrolováno na YouTube, ale jeho adresa vypadá správně.",
      "checkFailedAPI": "Kontrola na YouTube se nezdařila, zkontrolujte klíč YouTube API."
    },
    "videoSelectorVimeo": {
      "url": "Adresa URL videa ve službě Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "Příběh nedokáže přehrávat videa v původním formátu (tj. avi, mpeg), ale dokáže přehrávat hostované videosoubory s vestavěným přehrávačem (tj. YouTube nebo Vimeo).",
      "explain2": "Tuto funkci nabízí většina online služeb pro hostování videa. Musíte najít možnost pro vložení videa, zkopírovat uvedený kód a použít %WEBPAGE%.",
      "explain3": "Video také můžete hostovat sami. Stačí vytvořit HTML stránku, která používá videopřehrávač, jako je například %EXAMPLE%, hostovat danou stránku a také použít %WEBPAGE%.",
      "webpage": "Prvek webové stránky"
    },
    "webpageSelectorHome": {
      "lblUrl": "Adresa URL webové stránky",
      "lblEmbed": "Kód vložení",
      "lblOR": "NEBO",
      "lblError1": "Chyba, vymažte jedno ze dvou vstupních polí.",
      "lblError2": "Vložený kód může obsahovat pouze jeden prvek %IFRAMETAG%.",
      "configure": "Konfigurovat"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "Adresa URL obrázku by měla začínat řetězcem http:// a končit .jpg nebo .png.",
      "lblURLError": "Zdá se, že obrázek je neplatný. Zadejte prosím přímý odkaz na obrazový soubor (taková adresa URL obvykle končí příponou .jpg nebo .png). Odkazy na webové stránky obsahující obrázek nebudou fungovat.",
      "lblURLCheck": "Probíhá kontrola obrázku…",
      "lblLabel": "Titulek obrázku",
      "lblLabel1": "Popisek",
      "lblLabel2": "Přejeďte ukazatelem myši přes text.",
      "lblLabel3": "Žádné",
      "lblLabelPH": "Napište nějaký text...",
      "lblMaximize": "Zobrazit v rohu obrázku tlačítko pro zvětšení",
      "lblMaximizeHelp": "Doporučeno pouze pro fotografie ve vysoké kvalitě",
      "lblPosition": "Pozice",
      "lblPosition1": "Na střed",
      "lblPosition2": "Vyplnit",
      "lblPosition3": "Přizpůsobit",
      "lblPosition4": "Roztáhnout",
      "lblPosition5": "Vlastní",
      "tooltipDimension": "Hodnotu lze uvést v 'px' nebo '%'",
      "tooltipDimension2": "Hodnota musí být uvedena v 'px'.",
      "lblPosition2Explain": "(může dojít k ořezu)",
      "lblPosition3Explain": "(nedojde k ořezu)",
      "lblPosition3Explain2": "(šířka se vždy přizpůsobí panelu)",
      "lblPosition4Explain": "(může dojít ke zkreslení)",
      "unloadLbl": "Zrušit spouštění, když čtenář opustí stránku",
      "unloadHelp": "Pokud webová stránka obsahuje audio nebo video média, nechte tuto možnost zaškrtnutou, aby se přehrávání tohoto obsahu ukončilo, pokud čtenář stránku opustí. Zrušte její zaškrtnutí, pokud například chcete, aby hudební podkres hrál po celou dobu prohlížení příběhu.<br />Pokud je webová stránka aplikací, zrušte zaškrtnutí této možnosti, aby se příběh nespouštěl znovu, když se k němu čtenář vrátí.",
      "embedProtocolLabel": "Ř_Load page over a secure connection (HTTPS)______________ů",
      "embedProtocolWarning1": "Ř_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________ů.",
      "embedProtocolWarning2": "Ř_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________ů."
    },
    "editorActionGeocode": {
      "lblTitle": "Najít adresu nebo místo",
      "mapMarkerExplain": "Uživatel při kliknutí na odkaz uvidí mapovou značku."
    },
    "editorActionMedia": {
      "lblTitle": "Změnit obsah hlavní úrovně"
    },
    "editorInlineMedia": {
      "lblTitle": "Vložit obrázek, video, nebo webovou stránku"
    }
  }
});