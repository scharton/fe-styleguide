'use strict';

angular.module('styleguide')
  .controller('SliderCtrl', function ($scope) {
  	$scope.sliderValue = 40;
  	$scope.sliderOptions = {
    min: 0,
    max: 100,
    animate: 'fast',
    current: 20,
    //currentLabel: 'Current',
    topPopover: function(newValue) {
      return newValue + '%';
    },
    bottomPopover: function(newValue) {
      return newValue > 20 ? 'Greater than 20%' : false;
    }
  };
});