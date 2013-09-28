dojo.provide('customUtils.headerUtils');

/**
 * Adds and updates the header node for a page.
 *
 * @type {Object}
 */
var customHeaderUtils = {

  /**
   * Check if the user is signed in.
   */
  buildHeader:function () {
    // TODO Pretty sure this is not the way to check, since updateHeader will get called twice if the user is logged in
    customHeaderUtils.addHeaderNode();
    portal.signIn().then(function (result) {
      customHeaderUtils.updateHeader();
      dojo.byId('signinNode').innerHTML = "<a class='customLink' href='/apps/arcgismobile/index.html' target='_self' onclick='return authenticationUtils.signout()'>Sign Out</a>";
    });
    customHeaderUtils.updateHeader();
    dojo.byId('signin').innerHTML = "<a class='customLink' href='signin.html?' target='_self'>Sign In</a>";
  },

  /**
   * Add the header
   */
  addHeaderNode:function () {
    // create the header node
    var hdrNode = dojo.create('div', null, dojo.byId('main'), 'first');
    hdrNode.setAttribute('class', 'grid_2');
    hdrNode.setAttribute('id', 'headerNode');
    // create the logo node
    var imgNode = dojo.create('img', null, dojo.byId('headerNode'));
    imgNode.setAttribute('id', 'esriLogo');
    // create the label node
    var labelNode = dojo.create('div', null, dojo.byId('headerNode'));
    labelNode.setAttribute('id', 'hdr');
    // TODO probably not the best way to add a menu
    //utils.buildCustomCellNode(dojo, appConfig.DEPLOY_ROOT + appConfig.DEVEXT_PATH + 'signin.html?', 'Home', 'menu');
  },

  /**
   * Update the header.
   */
  updateHeader:function () {
    // if the idObject is empty the user is not logged in
    if (authenticationUtils.idObject === '') {
      // default AGO portal name and esri logo
      dojo.byId('hdr').innerHTML = portal.portalName;
      dojo.byId('esriLogo').src = 'img/esriLogo.png';
      // update the signin button label
      //dojo.byId('signin').innerHTML = "<a class='customLink' href='signin.html?' target='_self'>" + appConfig.signInLabel + "</a>";
    } else {
      // User is signed in
      // User may or may not belong to an organization
      if (!portal.isOrganization) {
        // User does NOT belong to an Organization
        dojo.byId('hdr').innerHTML = portal.portalName;
        dojo.byId('esriLogo').src = 'img/esriLogo.png';
      } else {
        // User is a member of an Organization
        dojo.byId('hdr').innerHTML = portal.name;
        dojo.byId('esriLogo').src = portal.thumbnailUrl;
      }
      // some pages do not have an signin node
      // TODO create the node dynamically in the future
      if (dojo.byId('signin') !== null) {
        // TODO remove the HARDCODED href
        dojo.byId('signin').innerHTML = "<a class='customLink' href='/apps/arcgismobile/index.html' target='_self' onclick='return authenticationUtils.signout()'>Sign Out</a>";
      }
    }
  }
};