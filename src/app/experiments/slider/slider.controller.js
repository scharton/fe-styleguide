(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('SliderCtrl', SliderCtrl);


  function SliderCtrl($scope, $log) {

    $log.log('SliderCtrl');

    $scope.slider = {
      min: 0,
      max: 1000000,
      step: 10000,
      precision: 0,
      value: 700000
    };

    $scope.$watch('slider.value', function(newValue, oldValue) {
      if (newValue !== oldValue) {
        $log.log(newValue);
      }
    });
  }

})();
