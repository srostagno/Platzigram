(function(){
	angular.module('platzigram.i18n', [])

	.config(function($translateProvider) {
		$translateProvider
		.translations('es', {
			bienvenida: "Bienvenido",
			boton: "Soy un botón",
			idiomas: "Idiomas",
			espanol: "Español",
			ingles: "Inglés",
			japones: "Japonés"
		})
		.translations('en', {
			bienvenida: "Welcome",
		    boton: "I'm a button",
		    idiomas: "Languages",
		    espanol: "Spanish",
		    ingles: "English",
		    japones: "Japanese"
		})
		.translations('jp', {
			bienvenida: "ようこそ",
			boton: "私はボタンです",
			idiomas: "言語",
			espanol: "スペイン語",
			ingles: "英語",
			japones: "日本語"
		})
		$translateProvider.preferredLanguage('es');
	});

})();