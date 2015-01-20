'use strict';

angular.module('styleguide')
	.directive('ngPrism', ngPrism);

//
// Prism needs to manually called when element is ready.
// See http://blog.chorip.am/articles/prismjs-and-angularjs/
//
function ngPrism() {
	return {
		restrict: 'A',
		link: function(scope, elem) {
			elem.ready(function() {
				Prism.highlightElement(elem[0]);
			});
		}
	};
}
