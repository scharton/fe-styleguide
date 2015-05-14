(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('SlidingView2Ctrl', SlidingView2Ctrl);


  function SlidingView2Ctrl($scope) {

    $scope.svgSupport = Modernizr.svg;

    if ($scope.svgSupport) {

      $scope.chart = {
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ]
        }
      }; // /$scope.chart
    }
  }

})();
