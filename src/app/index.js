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
      'feAngularCore',
      'feChart'
    ])
    .config(config)
    .controller('MainCtrl', MainCtrl);


  function config($urlRouterProvider, feAuthServiceProvider) {
    $urlRouterProvider.otherwise('/');

    feAuthServiceProvider.autoLogin(false);
  }


  function MainCtrl($rootScope, $state, $log) {
    $log.log('MainCtrl');

    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      if (toState.name === 'components') {
        $state.go('components.details', { componentId: 'colors' });
      }
      else if (toState.name === 'experiments') {
        $state.go('experiments.details', { experimentId: 'anchor-scroll' });
      }
      else if (toState.name === 'patterns') {
        $state.go('patterns.details', { patternId: 'pattern1' });
      }
    });
  }

})();
