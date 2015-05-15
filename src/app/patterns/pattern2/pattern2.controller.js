(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('Pattern2Ctrl', Pattern2Ctrl);


  function Pattern2Ctrl($scope, $log) {
    $log.log('Pattern2Ctrl');

    $scope.test = 'Bay Area';
  }

})();
