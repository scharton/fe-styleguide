'use strict';

angular.module('styleguide')

	.config(function($stateProvider) {
		$stateProvider
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
			});
	});