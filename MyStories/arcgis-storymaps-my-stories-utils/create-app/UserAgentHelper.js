define([], function() {
	'use strict';

	var isInternetExplorerOrEdge = function() {
		return (/(.*?Edge\/\d+)|(.*?Trident.*?)|(.*?MSIE.*?)/gi).test(window.navigator.userAgent);
	};

	return {
		isInternetExplorerOrEdge: isInternetExplorerOrEdge
	};
});