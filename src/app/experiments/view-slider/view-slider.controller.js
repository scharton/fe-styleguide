(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('ViewSliderCtrl', ViewSliderCtrl);


  function ViewSliderCtrl($scope) {

    var views = [ 'view1', 'view2', 'view3' ];
    var index = 0;
    $scope.selectedView = views[index];

    var firstOrLast = function() {
      $scope.firstView = (index === 0);
      $scope.lastView = (index === views.length - 1);
    };

    $scope.nextView = function() {
      $scope.direction = 'to-next-view';
      index = (index + 1) % views.length;
      $scope.selectedView = views[index];
      firstOrLast();
    };

    $scope.prevView = function() {
      $scope.direction = 'to-prev-view';
      index = (index + views.length - 1) % views.length;
      $scope.selectedView = views[index];
      firstOrLast();
    };

    firstOrLast();
  }

})();
