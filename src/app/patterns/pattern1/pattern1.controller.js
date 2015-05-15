(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('Pattern1Ctrl', Pattern1Ctrl);


  function Pattern1Ctrl($scope, $log) {
    $log.log('Pattern1Ctrl');

    $scope.test = 'Pattern 1';
  }

})();
