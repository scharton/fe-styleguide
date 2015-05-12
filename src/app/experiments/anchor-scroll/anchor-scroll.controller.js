(function () {
  'use strict';

  angular
    .module('styleguide')
    .controller('AnchorScrollCtrl', AnchorScrollCtrl);


  function AnchorScrollCtrl($scope, $log) {

    $log.log('AnchorScrollCtrl');

    $scope.borderRadiusSupport = Modernizr.borderradius;
  }

})();
