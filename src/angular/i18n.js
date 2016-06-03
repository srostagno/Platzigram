(function(){
	angular.module('platzigram.i18n', [])

	.config(function($translateProvider) {
		$translateProvider
		.translations('es', {
			apellido: "Apellido",
			bienvenida: "Bienvenido",
			boton: "Soy un botón",
			contrasenia: "Contraseña",
			contrasenia_confirmar: "Confirmar Contraseña",
			email: "Correo Electrónico",
			espanol: "Español",
			hola: "Hola",
			idiomas: "Idiomas",
			ingles: "Inglés",
			ingresa: "Ingresa",
			italiano: "Italiano",
			japones: "Japonés",
			nombre: "Nombre",
			registrate: "Regístrate",
			salir: "Salir"
		})
		.translations('en', {
			bienvenida: "Welcome",
		    apellido: "Last Name",		    
		    boton: "I'm a button",
		    contrasenia: "Password",
		    contrasenia_confirmar: "Confirm Password",
		    email: "E-mail",
		    espanol: "Spanish",
		    hola: "Hello",
		    idiomas: "Languages",
		    ingles: "English",
		    ingresa: "Log In",
		    italiano: "Italian",
		    japones: "Japanese",
		    nombre: "Name",
		    registrate: "Sign Up",
		    salir: "Log Out"
		})
		.translations('jp', {
			apellido: "姓",
			bienvenida: "ようこそ",
			boton: "私はボタンです",
			contrasenia: "パスワード",
			contrasenia_confirmar: "パスワードを確認します",
			email: "メール",
			espanol: "スペイン語",
			hola: "こんにちは",
			idiomas: "言語",
			ingles: "英語",
			ingresa: "ログイン",
			italiano: "イタリア語",
			japones: "日本語",
			nombre: "名前",
			registrate: "サインアップ",
			salir: "ログアウト"
		})
		.translations('it', {
			apellido: "Cognome",
			bienvenida: "Benvenuto",
			boton: "Io sono un pulsante",
			contrasenia: "Password",
			contrasenia_confirmar: "Confermare Password",
			email: "E-mail",
			espanol: "Spagnolo",
			hola: "Ciao",
			idiomas: "Lingue",
			ingles: "Inglese",
			ingresa: "Accesso",
			italiano: "Italiano",
			japones: "Giapponese",
			nombre: "Nome",
			registrate: "Registrazione",
			salir: "Disconnettersi"
		})

		var idioma_browser = navigator.language.slice(0,2);
		$translateProvider.preferredLanguage(idioma_browser);
	});

})();