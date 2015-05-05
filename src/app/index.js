(function() {
  'use strict';

  angular
    .module('styleguide', [
      'ngSanitize',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'feSliders'])
    .config(config)
    .controller('MainCtrl', MainCtrl);


  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }


  function MainCtrl($rootScope, $log) {

    if (_satellite) {

      $rootScope.$on('$stateChangeSuccess',
        function(event, toState/*, toParams, fromState, fromParams*/) {
          $log.log('toState = ', toState.name);

          _satellite.setVar('stateName', toState.name);
          _satellite.track('spaStateChange');
        });
    }
  }

})();
