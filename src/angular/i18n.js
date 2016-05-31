(function(){
	angular.module('platzigram.i18n', [])

	.config(function($translateProvider) {
		$translateProvider
		.translations('es', {
			bienvenida: "Bienvenido",
			boton: "Soy un botón",
			espanol: "Español",
			idiomas: "Idiomas",
			ingles: "Inglés",
			ingresa: "Ingresa",
			japones: "Japonés",
			registrate: "Regístrate"
		})
		.translations('en', {
			bienvenida: "Welcome",
		    boton: "I'm a button",
		    espanol: "Spanish",
		    idiomas: "Languages",
		    ingles: "English",
		    ingresa: "Sign In",
		    japones: "Japanese",
		    registrate: "Sign Up",
	
		})
		.translations('jp', {
			bienvenida: "ようこそ",
			boton: "私はボタンです",
			espanol: "スペイン語",
			idiomas: "言語",
			ingles: "英語",
			ingresa: "サインイン",
			japones: "日本語",
			registrate: "サインアップ"
		})
		$translateProvider.preferredLanguage('es');
	});

})();