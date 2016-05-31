(function(){
	var app = angular.module('platzigramApp', [
		'ngRoute',
		'pascalprecht.translate',
		'platzigram.controllers',
		'platzigram.directives'
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

	// Traducciónes
	.config(function($translateProvider) {
		$translateProvider.translations('es', {
			bienvenida: "Bienvenido a Platzigram",
			boton: "Soy un botón",
			idiomas: "Idiomas",
			espanol: "Español",
			ingles: "Inglés"
		})
		.translations('en', {
			bienvenida: "Welcome to Platzigram",
		    boton: "I'm a button",
		    idiomas: "Languages",
		    espanol: "Spanish",
		    ingles: "English"
		});
		$translateProvider.preferredLanguage('es');
	});

})();