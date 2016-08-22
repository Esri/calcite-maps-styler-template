
define(['dojo/i18n!sign-in/nls/app.js?v=' + app.cfg.version, 'lib-build/hbars!./templates/signInDialog', 'lib-build/hbars!./templates/signInUnavailable'],
	function(signIni18n, signInDialogTemplate, signInUnavailableTemplate) {
	'use strict';


	// all you really need this for is to templatize the two screens. That's it.
	var SignInDialog = function(inIsPortal) {
		var strings = signIni18n,
			isPortal = inIsPortal,

		init = function() {
			templatizeSignInDialog();
			templatizeSignInUnavailableDialog();
		},

		getStrings = function() {
			return strings;
		},

		templatizeSignInDialog = function() {
			var publicLink = 'https://' + app.cfg.DEFAULT_PORTAL_URL + '/home/createaccount.html';

			if(isPortal) {
				$('#sign-in-wrapper').addClass('portal');
			}


			$('#sign-in-wrapper').html(signInDialogTemplate({
				labels: strings.signInDialog,
				publicLink: publicLink,
				isPortal: isPortal
			}));
		},


		templatizeSignInUnavailableDialog = function() {
			$('#sign-in-unavailable-wrapper').html(signInUnavailableTemplate({
				labels: strings.unavailableDialog
			}));
		};


		init();

		return {
			getStrings: getStrings
		};
	};


	return SignInDialog;
});
