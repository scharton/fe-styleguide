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
				templateUrl: 'home/home.template.html',
				controller: 'HomeCtrl'
			});

		$urlRouterProvider.otherwise('/');
	});