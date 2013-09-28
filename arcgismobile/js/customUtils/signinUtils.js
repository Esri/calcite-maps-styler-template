var authenticationUtils = {
  idJson : '',
  idObject : '',

  /**
   *
   */
  signout : function () {
    // sign user out of portal
    portal.signOut();
    // convert esri.id.toJson to a String serialization of that object.  This will be used to reset the cookie with the
    // new expiration date
    var idString = dojo.toJson(esri.id.toJson());
    // remove the cookie by setting the expiration date to -1
    dojo.cookie(appConfig.cred, idString, {
      expires:-1
    });
    // update the header/title to reflect the AGO default thumbnail and portal name
    dojo.byId('hdr').innerHTML = portal.name;
    dojo.byId('esriLogo').src = 'img/esriLogo.jpg';
    // update the signin button label
    dojo.byId('signin').innerHTML = appConfig.signInLabel;
    // set the idObject to null
    authenticationUtils.idObject = null;
  },

  /**
   *
   */
  loadCredentials : function () {
    // check if the cookie 'esri_auth' is set
    authenticationUtils.idJson = dojo.cookie(appConfig.cred);
    if (authenticationUtils.idJson && authenticationUtils.idJson !== 'null' && authenticationUtils.idJson.length > 4) {
      authenticationUtils.idObject = dojo.fromJson(authenticationUtils.idJson);
      esri.id.initialize(authenticationUtils.idObject);
    }
  },

  /**
   *
   */
  storeCredentials: function () {
    // make sure there are some credentials to persist
    if (esri.id.credentials.length === 0) {
      return;
    }

    // serialize the ID manager state to a string
    var idString = dojo.toJson(esri.id.toJson());
    //  set the cookie
    //    name:   esri_auth
    //    value:  idString
    //    expires:(?) TODO
    dojo.cookie(appConfig.cred, idString, {
      expires:1
    });
  }
};