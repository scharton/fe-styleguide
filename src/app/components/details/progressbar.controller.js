'use strict';

angular.module('styleguide')
  .controller('progress1Ctrl', function($scope) {

  	$scope.value = 10;
  	$scope.items = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  	$scope.type = 'primary';

  	$scope.$watch('value',function(val){
       $scope.value = parseInt(val); 
    });
  
  })
  .controller('progress2Ctrl', function($scope) {

  	$scope.value = 30;
  	$scope.items = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  	$scope.type = 'success';
  	$scope.dynamicTooltip= 'You have achieved ' + $scope.value + '% .';

  	$scope.$watch('value', function(val){
       $scope.value = parseInt(val); 
    });
 
  });
