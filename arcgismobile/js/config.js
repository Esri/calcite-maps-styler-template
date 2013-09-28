appConfig = {

  /***************************************
   * Modify this path based on your setup
   ***************************************/
  /* location.protocol returns the protocol of the current URL, including the first colon (:) */
  /* location.host returns the hostname and port of a URL */
  DEPLOY_ROOT:location.protocol + '//' + location.host,

  /* Testing on devext */
  DEVEXT_PATH:'/apps/arcgismobile/',
  /* Testing locally */
  LOCAL_FOLDER:'/home/',

  /* proxy URL */
  PROXY_SERVER_URL:'',
  /* sharing URL */
  SHARING_URL:'//devext.arcgis.com/sharing/content/items',
  /* The url to the ArcGIS.com site or in-house portal. */
  PORTAL_URL:'//devext.arcgis.com',

  /* Sign In Button label */
  signInLabel:'Sign In',

  /* cookie name */
  cred:'esri_auth',

  /* Bing key */
  BING_MAPS_KEY:'Akt3ZoeZ089qyG3zWQZSWpwV3r864AHStal7Aon21-Fyxwq_KdydAH32LTwhieA8',

  /* */
  NUM_ITEMS : 20,

  /* months */
  monthNames:[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],

  /* Landing page page content */
  homepageContent:{
    "bindings":[
      { "id":"viewerNode", "label":"Map", "url":"viewer.html?useExisting=1" },
      { "id":"groupsNode", "label":"Featured Groups", "url":"groups.html" },
      { "id":"contentNode", "label":"My Content", "url":"content.html" },
      { "id":"galleryNode", "label":"Gallery", "url":"gallery.html" }
    ]
  },

  /* DOCUMENT TITLES */
  /* Document titles for each page should be set b/c that's what the user will see if the page is bookmarked */
  indexPageTitle:'ArcGIS Online',
  galleryPageTitle:'ArcGIS - Gallery',
  groupsPageTitle:'ArcGIS - Groups',
  myContentPageTitle:'ArcGIS - My Content',
  signInPageTitle:'ArcGIS - Sign In',

  /* PAGES */
  indexPage:'index',
  groupsPage:'groups',
  groupPage:'group',
  galleryPage:'gallery',
  contentPage:'content',
  signinPage:'signin',
  viewerPage:'viewer',
  itemPage:'item',

  /* MESSAGES */
  /* Some items do not have descriptions */
  NO_ITEM_DESCRIPTION:'No description has been provided.',
  /* Message for empty folder */
  NO_ITEMS_MSG:'You currently have no items in this folder.',
  /* 'My Content' page message displayed when a user is not signed */
  MY_CONTENT:'My Content is where you keep your maps and applications and share them with others.'
};