define({
  "commonMedia": {
    "mediaSelector": {
      "lblSelect1": "Media",
      "lblSelect2": "Conteúdo",
      "lblMap": "Mapa",
      "lblImage": "Imagem",
      "lblVideo": "Vídeo",
      "lblExternal": "Página web",
      "disabled": "Esta funcionalidade foi desativada pelo Admnistrador",
      "url": "Para inserir manualmente o endereço web de uma imagem",
      "userLookup": "Carregar álbuns",
      "notImplemented": "Ainda não implementado.",
      "noData": "Não há vídeos públicos encontrados"
    },
    "imageSelector": {
      "lblStep1": "Escolha o serviço",
      "lblStep2": "Escolha os seus media",
      "lblStep3": "Configurar"
    },
    "imageSelectorHome": {
      "explain": "Carregar imagens de rede social, <br /> ou diretamente de um URL"
    },
    "imageSelectorFlickr": {
      "userInputLbl": "Nome de utilizador",
      "signInMsg2": "Utilizador não encontrado",
      "loadingFailed": "Carregamento falhou"
    },
    "imageSelectorFacebook": {
      "leftHeader": "Utilizador do Facebook",
      "rightHeader": "Página do Facebook",
      "pageExplain": "Uma página do Facebook é uma celebridade ou marca/produto público, como <b>esrigis</b>. Pode obter o nome da página após a primeira barra ( / ) no URL da página.",
      "pageInputLbl": "Nome da página",
      "lookupMsgError": "Página não encontrada",
      "warning": "ã_Facebook support has been discontinued, ${learn}________________Ç.",
      "learn": "ã_learn more____Ç"
    },
    "imageSelectorPicasa": {
      "userInputLbl": "ã_Email or Picasa id______Ç",
      "signInMsg2": "Conta não encontrada",
      "howToFind": "ã_How to find a Picasa id________Ç",
      "howToFind2": "ã_Copy digits between the first and second '/' of any Picasa page____________________Ç"
    },
    "videoSelectorCommon": {
      "check": "Verificar",
      "notFound": "Vídeo não encontrado",
      "found": "Vídeo encontrado",
      "select": "Selecionar este vídeo"
    },
    "videoSelectorHome": {
      "other": "Outros"
    },
    "videoSelectorYoutube": {
      "url": "URL de um vídeo do Youtube",
      "pageInputLbl": "Nome de utilizador",
      "lookupMsgError": "Utilizador não encontrado",
      "howToFind": "Como encontrar um nome de utilizador do YouTube",
      "howToFind2": "Nome de utilizador é exibido nos vídeos",
      "found": "Encontrado",
      "noData": "Não há vídeos públicos encontrados",
      "videoNotChecked": "O vídeo não foi verificado no YouTube, mas o respetivo endereço parece estar em boas condições.",
      "checkFailedAPI": "A verificação do YouTube falhou, por favor verifique a chave API do YouTube."
    },
    "videoSelectorVimeo": {
      "url": "URL de um vídeo do Vimeo"
    },
    "videoSelectorOther": {
      "explain1": "A história não pode reproduzir vídeos em formato raw (ex: avi, mpeg), mas pode reproduzir ficheiro de vídeo alojados que tenham leitores incorporados (ex: YouTube ou Vimeo).",
      "explain2": "A maior parte dos serviços online de alojamento de video oferecem essa possibilidade, tem de encontrar a opção para incorporar vídeo, copiar o código e utilizar %WEBPAGE%.",
      "explain3": "Em alternativa, se pretender alojar o vídeo, pode criar uma página HTML que utilize um leitor de vídeo como %EXAMPLE%, alojar essa página e também utilizar o %WEBPAGE%.",
      "webpage": "Elemento de página web"
    },
    "webpageSelectorHome": {
      "lblUrl": "URL de página web",
      "lblEmbed": "Incorporar código",
      "lblOR": "OU",
      "lblError1": "Erro, limpe um dos dois campos de entrada.",
      "lblError2": "O código de incorporação pode conter apenas um %IFRAMETAG%",
      "configure": "Configurar"
    },
    "mediaConfigure": {
      "lblURL": "URL",
      "lblURLPH": "Um URL de imagem deve começar com http:// e terminar com .jpg ou .png",
      "lblURLError": "Esta imagem não aparenta ser válida. Por favor especifique uma ligação direta para um ficheiro de imagem (o seu URL geralmente termina em .jpg ou .png). Ligações para uma página web que contenha a imagem não irão funcionar.",
      "lblURLCheck": "A verificar imagem...",
      "lblLabel": "Legenda de Imagem",
      "lblLabel1": "Legenda",
      "lblLabel2": "Passe sobre o texto",
      "lblLabel3": "Nenhum",
      "lblLabelPH": "Introduza algum texto...",
      "lblMaximize": "Incluir um botão de maximizar no canto da imagem",
      "lblMaximizeHelp": "Recomendado apenas para fotografias de alta qualidade",
      "lblPosition": "Posição",
      "lblPosition1": "Centrar",
      "lblPosition2": "Preencher",
      "lblPosition3": "Adaptar",
      "lblPosition4": "Esticar",
      "lblPosition5": "Personalizar",
      "tooltipDimension": "O valor pode ser especificado em pixéis ou percentagem",
      "tooltipDimension2": "O valor tem de ser especificado em px",
      "lblPosition2Explain": "(pode recortar)",
      "lblPosition3Explain": "(não é possível recortar)",
      "lblPosition3Explain2": "(a largura será sempre ajustada ao painel)",
      "lblPosition4Explain": "(pode distorcer)",
      "unloadLbl": "Descarregue quando o leitor navegar para uma secção diferente",
      "unloadHelp": "Se a Página Web tiver media em áudio ou em vídeo, mantenha esta opção selecionada para que esse conteúdo pare de ser reproduzido quando navegar para fora do leitor. Desselecione-a, por exemplo, para manter uma banda sonora a tocar enquanto o leitor avança pela história.<br />Caso a página web seja uma aplicação, desselecione esta opção para que a história não seja recarregada se o leitor regressar.",
      "embedProtocolLabel": "ã_Load page over a secure connection (HTTPS)______________Ç",
      "embedProtocolWarning1": "ã_Your story is configured to load over a secure connection (https), so web page show in the story must also use a secure connection. If the page does not load it may be because it is not available over a secure connection or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab________________________________________________________________________________________________________________Ç.",
      "embedProtocolWarning2": "ã_Your story is configured to load over an insecure connection (http), so you can choose to load this page over a secure (recommended) or insecure connection. If the page does not load, it may be because it does not support the connection type you selected or that it cannot be included in your story (some websites restrict this). You may need to create a hyperlink to open the page in a new browser tab__________________________________________________________________________________________________________________________Ç."
    },
    "editorActionGeocode": {
      "lblTitle": "Localizar um endereço ou lugar",
      "mapMarkerExplain": "O utilizador verá um marcador de mapa ao clicar na ligação"
    },
    "editorActionMedia": {
      "lblTitle": "Alterar o conteúdo do Ecrã Principal"
    },
    "editorInlineMedia": {
      "lblTitle": "Inserir uma imagem, vídeo ou página web"
    }
  }
});