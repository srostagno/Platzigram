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
			italiano: "Italiano",
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
		    italiano: "Italian",
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
			italiano: "イタリア語",
			japones: "日本語",
			registrate: "サインアップ"
		})
		.translations('it', {
			bienvenida: "Benvenuto",
			boton: "Io sono un pulsante",
			espanol: "Spagnolo",
			idiomas: "Le lingue",
			ingles: "Inglese",
			ingresa: "Accesso",
			italiano: "Italiano",
			japones: "Giapponese",
			registrate: "Registrazione"
		})

		var idioma_browser = navigator.language.slice(0,2);
		$translateProvider.preferredLanguage(idioma_browser);
	});

})();