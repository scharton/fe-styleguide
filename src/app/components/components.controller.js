'use strict';

angular.module('styleguide')
  .controller('ComponentsCtrl', ComponentsCtrl);


function ComponentsCtrl($scope) {

    $scope.components = [{
          id: 'alerts',
          name: 'Alerts'
        }, {
          id: 'badges',
          name: 'Badges'
        }, {
          id: 'buttons',
          name: 'Buttons'
        }, {
          id: 'labels',
          name: 'Labels'
        }, {
          id: 'lists',
          name: 'Lists'
        }, {
          id: 'panels',
          name: 'Panels'
        }, {
          id: 'wells',
          name: 'Wells'
        }
      ];
}
