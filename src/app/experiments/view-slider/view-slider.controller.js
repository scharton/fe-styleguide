(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('ViewSliderCtrl', ViewSliderCtrl);


  function ViewSliderCtrl($scope, $log) {

    //
    // Page turner
    //

    var doors = [ 'door1', 'door2' ];
    $scope.selectedDoor = doors[0];

    $scope.nextDoor = function() {
      $scope.selectedDoor = doors[1];
    };

    $scope.prevDoor = function() {
      $scope.selectedDoor = doors[0];
    };


    //
    // Fly in slider
    //

    var views = [ 'view1', 'view2' ];
    var selectedViewIndex = 0;
    $scope.selectedView = views[selectedViewIndex];

    $scope.flyIn = function() {
      selectedViewIndex = (selectedViewIndex + 1) % views.length;
      $log.log(selectedViewIndex);
      $scope.selectedView = views[selectedViewIndex];
    };
  }

})();
