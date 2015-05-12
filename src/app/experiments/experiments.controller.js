'use strict';

angular.module('styleguide')
  .controller('ExperimentsCtrl', ExperimentsCtrl);


function ExperimentsCtrl($scope) {

  $scope.experiments = [{
      id: 'anchor-scroll', name: 'Anchor scroll'
    }
  ];

}

