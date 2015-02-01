'use strict';

angular.module('styleguide', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ui.bootstrap'])

  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });