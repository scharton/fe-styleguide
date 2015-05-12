'use strict';

angular.module('styleguide')

  .config(function($stateProvider) {
    $stateProvider
      .state('experiments', {
        url: '/experiments',
        templateUrl: 'app/experiments/experiments.html',
        controller: 'ExperimentsCtrl'
      })
      .state('experiments.details', {
        url: '/{experimentId}',
        templateUrl: function(stateParams) {
          return 'app/experiments/' + stateParams.experimentId + '/' + stateParams.experimentId + '.html';
        }
      });
  });
