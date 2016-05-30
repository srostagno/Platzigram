(function(){
	var app = angular.module('platzigramApp', [
		'ngRoute',
		'platzigram.controllers'
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