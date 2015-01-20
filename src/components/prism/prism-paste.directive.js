'use strict';

angular.module('styleguide')
	.directive('ngPrismPaste', ngPrismPaste);

/**
 * Paste content from the "prism clipboard" to the current element. The content
 * will be wrapped inside <pre><code>...</code></pre> tags which is requried by
 * prism to provide syntax highlighting.
 */
function ngPrismPaste($rootScope) {
	return {
		restrict: 'A',
		scope: {
			id: '@ngPrismPaste'
		},
		link: function(scope, elem) {
			var parts = scope.id.split(':');
			var id = parts[0];
			var type = parts[1] || 'markup';

			var entityMap = {
					'&': '&amp;',
					'<': '&lt;',
					'>': '&gt;'
				};

			var escapeHtml = function(str) {
				return String(str).replace(/[&<>]/g, function (s) {
					return entityMap[s];
				});
			};

			var html = $rootScope.prismClipboard ? escapeHtml($rootScope.prismClipboard[id]) : '';

			elem.html('<pre><code class="language-' + type + '">' + html + '</code></pre>');

			//
			// Manually start highlighting when the element is ready.
			// See http://blog.chorip.am/articles/prismjs-and-angularjs/
			//

			elem.ready(function() {
				Prism.highlightElement(elem.find('code')[0]);
			});
		}
	};
}
