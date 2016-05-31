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
		$translateProvider
		.translations('es', {
			bienvenida: "Bienvenido a Platzigram",
			boton: "Soy un botón",
			idiomas: "Idiomas",
			espanol: "Español",
			ingles: "Inglés",
			japones: "Japonés"
		})
		.translations('en', {
			bienvenida: "Welcome to Platzigram",
		    boton: "I'm a button",
		    idiomas: "Languages",
		    espanol: "Spanish",
		    ingles: "English",
		    japones: "Japanese"
		})
		.translations('jp', {
			bienvenida: "Platzigramへようこそ",
			boton: "私はボタンです",
			idiomas: "言語",
			espanol: "スペイン語",
			ingles: "英語",
			japones: "日本語"
		})
		$translateProvider.preferredLanguage('es');
	});

})();