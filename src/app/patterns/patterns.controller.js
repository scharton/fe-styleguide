(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('PatternsCtrl', PatternsCtrl);


  function PatternsCtrl($scope, patterns) {
    $scope.patterns = patterns;
  }

})();
