'use strict';

angular.module('styleguide', [
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ui.bootstrap',
  'feSliders'])

  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });