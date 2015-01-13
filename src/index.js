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
				templateUrl: 'main/main.template.html',
				controller: 'MainCtrl'
			});

		$urlRouterProvider.otherwise('/');
	});