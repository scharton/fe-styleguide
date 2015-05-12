'use strict';

angular.module('styleguide')
  .controller('NavbarCtrl', NavbarCtrl);

function NavbarCtrl($scope, $rootScope, $state) {
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    if (toState.name === 'components') {
      $state.go('components.details', { componentId: 'colors' });
    }
    else if (toState.name === 'experiments') {
      $state.go('experiments.details', { experimentId: 'anchor-scroll' });
    }
  });
}
