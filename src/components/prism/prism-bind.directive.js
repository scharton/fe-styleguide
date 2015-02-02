'use strict';

angular.module('styleguide')
  .directive('ngPrismBind', ngPrismBind);


function ngPrismBind() {
  return {
    restrict: 'E',
    scope: {
      content: '=',
      type: '@'
    },
    link: function(scope, elem) {
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

      var stripScriptTags = function(str) {
        return String(str).replace(/<script[\s\S]*?>/gi, '').replace(/<\/script[\s\S]*?>/gi, '');
      };

      scope.$watch('content', function(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
          var content = scope.content;
          var type = scope.type || 'markup';

          if (type === 'markup') {
            content = escapeHtml(content);
          }
          else if (type === 'javascript') {
            content = stripScriptTags(content);
          }

          elem.html('<pre><code class="language-' + type + '">' + content + '</code></pre>');

          elem.ready(function() {
            Prism.highlightElement(elem.find('code')[0]);
          });
        }
      });
    }
  };
}
