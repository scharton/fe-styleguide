(function() {
  'use strict';

  angular
    .module('styleguide', [
      'ngSanitize',
      'ngResource',
      'ngAnimate',
      'ngNumeraljs',
      'ui.router',
      'ui.bootstrap',
      'ui.bootstrap-slider',
      'duScroll',
      'feAngularCore'])
    .config(config)
    .controller('MainCtrl', MainCtrl);


  function config($urlRouterProvider, feAuthServiceProvider) {
    $urlRouterProvider.otherwise('/');

    feAuthServiceProvider.autoLogin(false);
  }


  function MainCtrl() {
  }

})();
