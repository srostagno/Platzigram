(function(){
	var app = angular.module('platzigramApp', [
		'ui.router',
		'platzigram.controllers'
	])

	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './views/home.html',
			controller: 'ctrlAlta'
		})	
		$urlRouterProvider.otherwise('home');
	})

})();