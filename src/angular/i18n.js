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
			registrate: "Regístrate",
			nombre: "Nombre",
			apellido: "Apellido",
			email: "Correo Electrónico",
			contrasenia: "Contraseña",
			contrasenia_confirmar: "Confirmar Contraseña"
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
		    nombre: "Name",
		    apellido: "Last Name",		    
		    email: "E-mail",
		    contrasenia: "Password",
		    contrasenia_confirmar: "Confirm Password"
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
			registrate: "サインアップ",
			nombre: "名前",
			apellido: "姓",
			email: "メール",
			contrasenia: "パスワード",
			contrasenia_confirmar: "パスワードを確認します"
		})
		.translations('it', {
			bienvenida: "Benvenuto",
			boton: "Io sono un pulsante",
			espanol: "Spagnolo",
			idiomas: "Lingue",
			ingles: "Inglese",
			ingresa: "Accesso",
			italiano: "Italiano",
			japones: "Giapponese",
			registrate: "Registrazione",
			nombre: "Nome",
			apellido: "Cognome",
			email: "E-mail",
			contrasenia: "Password",
			contrasenia_confirmar: "Confermare Password"
		})

		var idioma_browser = navigator.language.slice(0,2);
		$translateProvider.preferredLanguage(idioma_browser);
	});

})();