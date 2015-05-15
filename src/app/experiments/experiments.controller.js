(function() {
  'use strict';

  angular.module('styleguide')
    .controller('ExperimentsCtrl', ExperimentsCtrl);


  function ExperimentsCtrl($scope) {

    $scope.experiments = [{
        id: 'anchor-scroll', name: 'Anchor scroll'
      }, {
        id: 'growth-gauge', name: 'Growth gauge'
      }, {
        id: 'view-flipper', name: 'View flipper'
      }, {
        id: 'view-slider', name: 'View slider'
      }
    ];
  }

})();
