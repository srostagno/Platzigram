(function(){
	var app = angular.module('platzigramApp', [
		'ngRoute',
		'pascalprecht.translate',
		'platzigram.controllers',
		'platzigram.directives',
		'platzigram.i18n'
	])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: './views/home.html',
				controller: 'HomeController',
				controllerAs: 'home'
			})
			
			.otherwise({
				redirectTo: '/'
			});
	}])	

})();