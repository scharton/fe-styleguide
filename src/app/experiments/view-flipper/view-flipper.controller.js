(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('ViewFlipperCtrl', ViewFlipperCtrl);


  function ViewFlipperCtrl($scope) {

    //
    // Flip
    //

    var elFlipC = angular.element('.view-flipper');

    $scope.flip = function() {
      elFlipC.toggleClass('flipped');
    };


    //
    // Chart
    //

    $scope.svgSupport = Modernizr.svg;

    if ($scope.svgSupport) {

      $scope.chart = {
        data: {
          columns: [
              ['data1', 30, 20, 50, 40, 60, 50],
              ['data2', 200, 130, 90, 240, 130, 220],
              ['data3', 300, 200, 160, 400, 250, 250],
              ['data4', 200, 130, 90, 240, 130, 220],
              ['data5', 130, 120, 150, 140, 160, 150],
              ['data6', 90, 70, 20, 50, 60, 120],
          ],
          type: 'bar',
          types: {
              data3: 'spline',
              data4: 'line',
              data6: 'area',
          },
          groups: [
              ['data1','data2']
          ]
        }
      }; // /$scope.chart
    }
  }

})();
