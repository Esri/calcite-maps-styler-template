define([
         'dojo/keys',
         'dojo/dom',
         'dojo/on',
         'dojo/query',
         'dojo/_base/lang',
         'esri/utils',
         'esri/IdentityManagerBase'],
       function (keys, dom, on, query, lang) {
         return dojo.declare("customUtils.IdentityManagerUtils", [esri.IdentityManagerBase], {

           signinNode:null,

           constructor:function (parameters, node) {
             signinNode = node;
           },

           _formContent:"<fieldset>" +
             "<input type='text' name='username' id='username' autocapitalize='off' />" +
             "<label for='username'>username</label>" +
             "<br />" +
             "<input type='password' name='pwd' id='pwd' />" +
             "<label for='pwd'>password</label>" +
             "<a class='customLink esriIdSubmit' href='#' target='_self'>" + appConfig.signInLabel + "</a>" +
             "</fieldset>",


           signIn:function (/*String*/ resUrl, /*ServerInfo*/ serverInfo, /*Object?*/ options) {
             // Create login dialog box if this is the first time
             if (!this._loginDialog) {
               this._loginDialog = this._createLoginDialog();
             }

             var dlg = this._loginDialog,
               lastError = options && options.error,
               lastToken = options && options.token,
               dfd = new dojo.Deferred();

             if (lastError) {
               if (lastError.code === 403 && lastToken) {
                 // Implies "Do not have permissions" case
                 alert(dlg.errMsg_);
               }
               // else:
               // 499 - Token Required
               // 498 - Invalid or Expired Token
               // 403 without lastToken
               //  - Geowarehouse jumps the gun and returns 403 - do not have permissions
               //    if a request to secured resource is made without a "token"
               // Note that these three errors are implicitly covered
               // by the "Please sign in to access the item..." message that dialog box
               // displays all the time.
             } else {
               // user is not signed in
               //window.location = appConfig.DEPLOY_ROOT + appConfig.DEVEXT_PATH + 'signin.html?';
             }
             dlg.dfd_ = dfd;
             dlg.serverInfo_ = serverInfo;
             dlg.resUrl_ = resUrl;
             dlg.admin_ = options && options.isAdmin;
             return dfd;
           },


           // returns the Dialog
           _createLoginDialog:function () {
             var _signinNode = dojo.create("div", {
               innerHTML:this._formContent
             }, signinNode);

             var _identityManagerUtils = this;

             var myObj = {
               execute_:function (usr, pwd) {
                 var dlg = _identityManagerUtils._loginDialog;
                 var deferred = dlg.dfd_;

                 // Returns the credential for the resource identified by the specified url. Optionally you can provide
                 // a userId to find credentials for a specific user.
                 //
                 // url:    The url to a server
                 // userId: The userId for which you want to obtain credentials
                 var found = esri.id.findCredential(dlg.serverInfo_.server, usr),
                   callbackFunc = function (response) {
                     var sinfo = dlg.serverInfo_;
                     dlg.dfd_ = dlg.serverInfo_ = dlg.generateDfd_ = dlg.resUrl_ = null;

                     var newToken, expiration, cred = found, ssl;

                     if (response) {
                       newToken = response.token;
                       expiration = esri._isDefined(response.expires) ? Number(response.expires) : null;
                       ssl = !!response.ssl;

                       if (cred) {
                         cred.userId = usr;
                         cred.token = newToken;
                         cred.expires = expiration;
                         cred.validity = sinfo.shortLivedTokenValidity;
                         cred.ssl = ssl;
                       } else {
                         cred = new esri.Credential({
                                                      userId:usr,
                                                      server:sinfo.server,
                                                      token:newToken,
                                                      expires:expiration,
                                                      ssl:ssl,
                                                      isAdmin:dlg.admin_,
                                                      validity:sinfo.shortLivedTokenValidity
                                                    });
                       }
                     }
                     deferred.callback(cred);
                   };

                 // We cannot use an existing credential if we're here because the credential did not have user's pwd to
                 // refresh itself.  See Credential.refreshToken for more information.
                 if (found && !found._enqueued) {
                   callbackFunc();
                   return;
                 } else {
                   console.log('not found');
                 }

                 // Returns an object containing a token and its expiration time.
                 // serverInfo  contains a token service URL
                 // userInfo    contains username and password
                 // options     (i.e. isAdmin)
                 dlg.generateDfd_ = esri.id.generateToken(
                   dlg.serverInfo_, {
                     username:usr,
                     password:pwd
                   }, {
                     isAdmin:this.admin_
                   })
                   .addCallback(callbackFunc)
                   .addErrback(function (error) {
                                 // Invalid username or password.
                                 dlg.generateDfd_ = null;

                                 // There is no point checking for the value of error.code because
                                 // 10.0 (DotNet and Java) token service returns 200 if username or
                                 // password is incorrect. This bug exists in 10.1 Final as well.

                                 // When an error occurred and error.code is not available, it is
                                 // highly likely that the proxy had trouble accessing the token
                                 // service. For example:
                                 // - server has invalid ssl certificate
                                 // - server is within a firewall and not accessible
                                 // - certificate database in arcgis.com may not recognize the server's certificate provider
                                 alert('invalid username and/or password: \n' + (error && error.code));
                               });
               }
             };

             query("input[type='text'], input[type='password']").on('keydown', lang.hitch(myObj, function (evt) {
               if (evt.keyCode === keys.ENTER) {
                 myObj.execute_(_identityManagerUtils._getInput().username, _identityManagerUtils._getInput().password);
               }
             }));

             query(".esriIdSubmit").connect('onclick', lang.hitch(myObj, function (evt) {
               myObj.execute_(_identityManagerUtils._getInput().username, _identityManagerUtils._getInput().password);
             }));
             return _signinNode;
           },


           _getInput: function () {
             var usrCred = {
               username: dom.byId('username').value,
               password: dom.byId('pwd').value
             };
             return usrCred;
           }
         });
       });