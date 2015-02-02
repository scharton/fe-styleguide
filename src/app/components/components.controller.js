'use strict';

angular.module('styleguide')
  .controller('ComponentsCtrl', ComponentsCtrl);


function ComponentsCtrl($scope) {

  $scope.components = [{
      id: 'colors',
      name: 'Colors'
    }, {
      id: 'fonts',
      name: 'Fonts'
    }, {
      id: 'buttons',
      name: 'Buttons'
    }, {
      id: 'container',
      name: 'Containers'
    }, {
      id: 'navs',
      name: 'Navigations'
    }, {
      id: 'tables',
      name: 'Tables'
    }, {
      id: 'form_elements',
      name: 'Form Elements'
    }, {
      id: 'sliders',
      name: 'Sliders'
    }
  ];

  // Slider
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
}
