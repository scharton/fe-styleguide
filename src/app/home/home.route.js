'use strict';

angular.module('styleguide')

.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    });
});