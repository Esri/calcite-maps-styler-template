this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["signInDialog"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div id=\"sign-in-wrapper\" class=\"custom-modal-wrapper phone-hide\">\r\n	<div id=\"sign-in-left\">\r\n		<div id=\"sign-in-title\" class=\"trailer-1\">\r\n			<h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h2>\r\n		</div>\r\n		<div id=\"my-stories-explanation\" class=\"trailer-1\">\r\n			<div class=\"trailer-half\">\r\n				<span class=\"subordinate-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.subtitle : stack1), depth0))
    + "</span>\r\n			</div>			\r\n			<div class=\"explanation trailer-half\">\r\n				<div class=\"explanation-icon icon-check\"></div><!--\r\n			 --><div class=\"explanation-text-container\">\r\n					<h4 class=\"explanation-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.reasonOne : stack1), depth0))
    + "</h4>\r\n				</div>				\r\n			</div>\r\n			<div class=\"explanation trailer-half\">\r\n				<div class=\"explanation-icon icon-check\"></div><!--\r\n			 --><div class=\"explanation-text-container\">\r\n					<h4 class=\"explanation-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.reasonTwo : stack1), depth0))
    + "</h4>\r\n				</div>				\r\n			</div>\r\n			<div class=\"explanation\">\r\n				<div class=\"explanation-icon icon-check\"></div><!--\r\n			 --><div class=\"explanation-text-container\">\r\n					<h4 class=\"explanation-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.reasonThree : stack1), depth0))
    + "</h4>\r\n				</div>				\r\n			</div>\r\n		</div>\r\n		<div id=\"how-sign-up\">\r\n			<div class=\"explanation-icon icon-check invisible\"></div><!--\r\n		 --><div class=\"sign-up-text-container\">\r\n		 		<span class=\"subordinate-text\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.noAccountYet : stack1), depth0))
    + "</span>\r\n		 		<div>\r\n		 			&bull;<a href=\"https://www.arcgis.com/home/createaccount.html\" target=\"_blank\" class=\"sign-up-link\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.publicAccount : stack1), depth0))
    + "</a>\r\n		 		</div>\r\n		 		<div>\r\n		 			&bull;<a href=\"http://links.esri.com/storymaps/agol_trial_subscription\" target=\"_blank\" class=\"sign-up-link\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.subscriptionAccount : stack1), depth0))
    + "</a>\r\n		 		</div>	 				 		\r\n			</div>\r\n		</div>\r\n	</div><!--\r\n --><div id=\"sign-in-right\">\r\n		<div id=\"token-expired-container\" class=\"alert info\">\r\n			<span id=\"token-expired\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.signInExpired : stack1), depth0))
    + "</span>\r\n		</div>\r\n		<div id=\"api-didnt-load-container\" class=\"alert error\">\r\n			<span id=\"api-didnt-load\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.dialog : depth0)) != null ? stack1.somethingNotLoading : stack1), depth0))
    + "</span>\r\n		</div>\r\n		<iframe id=\"sign-in-frame\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\" width=\"330px\" height=\"380px\"></iframe>\r\n	</div>	\r\n</div>\r\n<div class=\"dialog-unavailable custom-modal-wrapper phone-show\">\r\n  	<div class=\"dialog-header padding-leader-1 padding-trailer-1\">\r\n		<h4 class=\"dialog-title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.unavailable : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4>\r\n	</div>	\r\n	<div class=\"dialog-body leader-half\">\r\n		<p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.unavailable : depth0)) != null ? stack1.explanation : stack1), depth0))
    + "</p>\r\n		<a id=\"no-sign-in-redirect\" href=\"/\" class=\"btn modal-dismiss\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.unavailable : depth0)) != null ? stack1.close : stack1), depth0))
    + "</a>\r\n		<button class=\"btn modal-dismiss close-dialog\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.unavailable : depth0)) != null ? stack1.returnButton : stack1), depth0))
    + "</button>\r\n	</div>\r\n</div>";
},"useData":true});