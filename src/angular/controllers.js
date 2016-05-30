(function(){
	angular.module('platzigram.controllers', [])

	.controller('HomeController', [function(){
		var vm = this;
		vm.saludo = 'Hola, soy la home!';	
	}])

})();