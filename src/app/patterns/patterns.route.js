(function() {
  'use strict';

  angular
    .module('styleguide')
    .config(function($stateProvider) {
      $stateProvider
        .state('patterns', {
          url: '/patterns',
          templateUrl: 'app/patterns/patterns.html',
          controller: 'PatternsCtrl'
        })
        .state('patterns.details', {
          url: '/{patternId}',
          templateUrl: function(stateParams) {
            return 'app/patterns/' + stateParams.patternId + '/' + stateParams.patternId + '.html';
          }
        });
    });

})();
