'use strict';

angular.module('styleguide')

	.config(function($stateProvider) {
		$stateProvider
			.state('stages', {
				url: '/stages',
				templateUrl: 'app/stages/stages.html',
				controller: 'StagesCtrl'
			});
	});