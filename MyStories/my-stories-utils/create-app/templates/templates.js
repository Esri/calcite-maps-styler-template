this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["createStory"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"dialog-header\">\r\n  <h3 class=\"dialog-title\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.dialog : stack1)) != null ? stack1.createNewStory : stack1), depth0))
    + "</h3>\r\n</div>  \r\n<div class=\"dialog-body leader-1\">\r\n  <div class=\"toggle-top\">\r\n    <div class=\"button-group-toggle\">\r\n      <div class=\"toggle toggle-button active\" data-toggle=\"pick-app\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.dialog : stack1)) != null ? stack1.pickApp : stack1), depth0))
    + "</div><!--\r\n     --><div class=\"toggle toggle-button\" data-toggle=\"ask-pros\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.dialog : stack1)) != null ? stack1.askPros : stack1), depth0))
    + "</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"toggle-view selected\" data-toggle=\"pick-app\">\r\n    <ul class=\"create-app-list\">\r\n      <li class=\"app-item\">\r\n        <div class=\"create-app-image-container trailer-half\" onClick=\"buildTour()\">\r\n          <div class=\"image-hover-text\">\r\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.shortReasons : stack1)) != null ? stack1.mapTour : stack1), depth0))
    + "</span>\r\n          </div>\r\n          <img src=\"my-stories-utils/create-app/assets/images/map-tour.jpg\">\r\n        </div>          \r\n        <a class=\"btn clear clear-inverse\" onClick=\"buildTour()\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.appTypes : depth0)) != null ? stack1.mapTour : stack1), depth0))
    + "</a>\r\n      </li><!--\r\n     --><li class=\"app-item\">\r\n        <div class=\"create-app-image-container trailer-half\" onClick=\"buildJournal()\">\r\n          <div class=\"image-hover-text\">\r\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.shortReasons : stack1)) != null ? stack1.mapJournal : stack1), depth0))
    + "</span>\r\n          </div>\r\n          <img src=\"my-stories-utils/create-app/assets/images/map-journal.jpg\">\r\n        </div>          \r\n        <a class=\"btn clear clear-inverse\" onClick=\"buildJournal()\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.appTypes : depth0)) != null ? stack1.mapJournal : stack1), depth0))
    + "</a></li><!--\r\n     --><li class=\"app-item\">\r\n        <div class=\"create-app-image-container trailer-half\" onClick=\"buildSeries()\">\r\n          <div class=\"image-hover-text\">\r\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.shortReasons : stack1)) != null ? stack1.mapSeries : stack1), depth0))
    + "</span>\r\n          </div>\r\n          <img src=\"my-stories-utils/create-app/assets/images/tabbed-viewer.jpg\">\r\n        </div>          \r\n        <a class=\"btn clear clear-inverse\" onClick=\"buildSeries()\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.appTypes : depth0)) != null ? stack1.mapSeries : stack1), depth0))
    + "</a>\r\n      </li><!--\r\n     --><li class=\"app-item\">\r\n        <div class=\"create-app-image-container trailer-half\" onClick=\"buildSwipe('swipe')\">\r\n          <div class=\"image-hover-text\">\r\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.shortReasons : stack1)) != null ? stack1.swipe : stack1), depth0))
    + "</span>\r\n          </div>\r\n          <img src=\"my-stories-utils/create-app/assets/images/swipe.jpg\">\r\n        </div>          \r\n        <a class=\"btn clear clear-inverse\" onClick=\"buildSwipe('swipe')\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.appTypes : depth0)) != null ? stack1.swipe : stack1), depth0))
    + "</a>\r\n      </li><!--\r\n     --><li class=\"app-item\">\r\n        <div class=\"create-app-image-container trailer-half\" onClick=\"buildSwipe('spyglass')\">\r\n          <div class=\"image-hover-text\">\r\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.shortReasons : stack1)) != null ? stack1.spyglass : stack1), depth0))
    + "</span>\r\n          </div>\r\n          <img src=\"my-stories-utils/create-app/assets/images/spyglass.jpg\">\r\n        </div>          \r\n        <a class=\"btn clear clear-inverse\" onClick=\"buildSwipe('spyglass')\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.appTypes : depth0)) != null ? stack1.spyglass : stack1), depth0))
    + "</a>\r\n      </li><!--\r\n     --><li class=\"app-item\">\r\n        <a href=\"/en/app-list/basic/tutorial/\" class=\"create-app-image-container trailer-half\" target=\"_blank\">\r\n          <div class=\"image-hover-text\">\r\n            <span>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.shortReasons : stack1)) != null ? stack1.basic : stack1), depth0))
    + "</span>\r\n          </div>\r\n          <img src=\"my-stories-utils/create-app/assets/images/basic.jpg\">\r\n        </a>          \r\n        <a href=\"/en/app-list/basic/tutorial/\" class=\"btn clear clear-inverse\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.appTypes : depth0)) != null ? stack1.basic : stack1), depth0))
    + "</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div id=\"ask-pros\" class=\"toggle-view\" data-toggle=\"ask-pros\">\r\n    "
    + ((stack1 = ((helper = (helper = helpers.questionWidget || (depth0 != null ? depth0.questionWidget : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"questionWidget","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <div id=\"create-story-back\" class=\"btn transparent\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.dialog : stack1)) != null ? stack1.back : stack1), depth0))
    + "</div>\r\n  <div id=\"close-create-story-btn\" class=\"btn modal-dismiss\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1.dialog : stack1)) != null ? stack1.close : stack1), depth0))
    + "</div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["finalApp"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "multiple";
},"3":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"create-app-image-container final trailer-half\">\r\n        <a href="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.method : stack1), depth0))
    + " class=\"image-wrapper\" target=\"_blank\">\r\n          <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.thumbnail : stack1), depth0))
    + "\">\r\n        </a>\r\n      </div>\r\n      <a href="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.method : stack1), depth0))
    + " class=\"btn clear clear-inverse\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finalApp : depth0)) != null ? stack1.letsBuild : stack1), depth0))
    + "</a>\r\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"create-app-image-container final trailer-half\">\r\n        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.thumbnail : stack1), depth0))
    + "\" onClick=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.method : stack1), depth0))
    + "\">\r\n      </div>\r\n      <a class=\"btn clear clear-inverse\" onClick=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.method : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finalApp : depth0)) != null ? stack1.letsBuild : stack1), depth0))
    + "</a>\r\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"version multiple\">    \r\n"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0,((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.value : stack1),"basic",{"name":"ifEquals","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\r\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"create-app-image-container final trailer-half\">\r\n        <a href="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.methodTwo : stack1), depth0))
    + " class=\"image-wrapper\" target=\"_blank\">\r\n          <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.thumbnailTwo : stack1), depth0))
    + "\">\r\n        </a>\r\n      </div>\r\n      <a href="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.methodTwo : stack1), depth0))
    + " class=\"btn clear clear-inverse\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finalApp : depth0)) != null ? stack1.letsBuild : stack1), depth0))
    + "</a>\r\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "      <div class=\"create-app-image-container final trailer-half\">\r\n        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.thumbnailTwo : stack1), depth0))
    + "\" onClick=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.methodTwo : stack1), depth0))
    + "\">\r\n      </div>\r\n      <a class=\"btn clear clear-inverse\" onClick=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.methodTwo : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.finalApp : depth0)) != null ? stack1.letsBuild : stack1), depth0))
    + "</a>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return "<div class=\"app-item final\">\r\n  <h3 class=\"ask-pros-title\">"
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3> \r\n  <div class=\"version "
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.multiple : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">       \r\n"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.value : stack1),"basic",{"name":"ifEquals","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.multiple : stack1),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  <div class=\"app-reason\">\r\n    <p>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.reason : stack1), depth0))
    + "</p>\r\n  </div>\r\n  <div class=\"see-example\">\r\n    <a href=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.example : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.finalApp : depth0)) != null ? stack1.seeExample : stack1), depth0))
    + "</a>\r\n  </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["noCreateStory"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"dialog-header padding-leader-1 padding-trailer-1\">\r\n	<h4 class=\"dialog-title\">Create Story Not Available</h4>\r\n</div>	\r\n<div class=\"dialog-body leader-half\">\r\n	<p>Sorry, this is not supported in a small display. Please open in a larger display or device.</p>\r\n	<a id=\"no-sign-in-redirect\" href=\"/\" class=\"btn modal-dismiss\">Close</a>\r\n	<button class=\"btn modal-dismiss close-dialog\">Return</button>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["question"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"leader-2\">\r\n    "
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.answers : stack1),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  </div>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"answer toggle toggle-button two-button\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.question : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ">"
    + this.escapeExpression(((helper = (helper = helpers.txt || (depth0 != null ? depth0.txt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"txt","hash":{},"data":data}) : helper)))
    + "</div>";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "data-question=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "data-app=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.app : depth0)) != null ? stack1.value : stack1), depth0))
    + "\"";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.answers : stack1)) != null ? stack1.length : stack1),4,{"name":"ifEquals","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"square\">\r\n    "
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.answers : stack1),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n    </div>  \r\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing;

  return "<div class=\"answer square-quarter"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || alias1).call(depth0,(data && data.index),0,{"name":"ifEquals","hash":{},"fn":this.program(10, data, 0),"inverse":this.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.question : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "><span>"
    + this.escapeExpression(((helper = (helper = helpers.txt || (depth0 != null ? depth0.txt : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"txt","hash":{},"data":data}) : helper)))
    + "<span></div>";
},"10":function(depth0,helpers,partials,data) {
    return " shaded";
},"12":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0,(data && data.index),3,{"name":"ifEquals","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <ul class=\"question-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.answers : stack1),{"name":"each","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\r\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <li class=\"answer\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.question : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ">"
    + this.escapeExpression(((helper = (helper = helpers.txt || (depth0 != null ? depth0.txt : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"txt","hash":{},"data":data}) : helper)))
    + "</li>  \r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h3 class=\"ask-pros-title question\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.txt : stack1), depth0))
    + "</h3>\r\n"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.question : depth0)) != null ? stack1.answers : stack1)) != null ? stack1.length : stack1),2,{"name":"ifEquals","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});