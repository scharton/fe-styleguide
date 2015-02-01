'use strict';

angular.module('styleguide')
  .controller('NavbarCtrl', NavbarCtrl);

function NavbarCtrl($scope) {
  $scope.date = new Date();
}
