(function(){
	var app = angular.module('platzigramApp', [
		'ui.router',
		'ui.materialize',
		'pascalprecht.translate',
		'platzigram.controllers',
		'platzigram.directives',
		'platzigram.i18n'
	])

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './views/home.html',
				controller: 'HomeController'
			})

			.state('login', {
				url: '/login',
				templateUrl: './views/login.html',
				controller: 'HomeController'
			})

			.state('register', {
				url: '/register',
				templateUrl: './views/register.html',
				controller: 'HomeController'
			});
			
			$urlRouterProvider.otherwise("/");
	}])	

})();