'use strict';

angular.module('styleguide')
  .controller('TooltipDemoCtrl', TooltipDemoCtrl)
  .controller('PopoverDemoCtrl', PopoverDemoCtrl);

  function TooltipDemoCtrl($scope) {
  	$scope.dynamicTooltipContent = 'Hello, Tooltip!';
    $scope.dynamicTooltipLink = 'dynamic link text';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }

  function PopoverDemoCtrl($scope) {
    $scope.dynamicPopover = 'Hello Popover!';
    $scope.dynamicPopoverTitle = 'Popover Title';
  }