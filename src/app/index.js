'use strict';

angular.module('styleguide', [
	'ngAnimate',
	'ngCookies',
	'ngTouch',
	'ngSanitize',
	'ngResource',
	'ui.router',
	'ui.bootstrap'])

	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/home/home.html',
				controller: 'HomeCtrl'
			})
			.state('components', {
				url: '/components',
				templateUrl: 'app/components/components.html',
				controller: 'ComponentsCtrl'
			})
			.state('components.details', {
				url: '/{componentId}',
				templateUrl: function(stateParams) {
					return 'app/components/details/' + stateParams.componentId + '.html';
				}
			})
			.state('stages', {
				url: '/stages',
				templateUrl: 'app/stages/stages.html',
				controller: 'StagesCtrl'
			});

		$urlRouterProvider.otherwise('/');
	});