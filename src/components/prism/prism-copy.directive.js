'use strict';

angular.module('styleguide')
  .directive('ngPrismCopy', ngPrismCopy);

/**
 * Copy the content of the current element to the "prism clipboard", so
 * the copied content can be pasted later using the ngPrismPaste directive.
 */
function ngPrismCopy($rootScope) {
  return {
    restrict: 'A',
    scope: {
      id: '@ngPrismCopy'
    },
    link: function(scope, elem) {
      var html = elem.html();

      if (!$rootScope.prismClipboard) {
        $rootScope.prismClipboard = {};
      }

      $rootScope.prismClipboard[scope.id] = html;
    }
  };
}
