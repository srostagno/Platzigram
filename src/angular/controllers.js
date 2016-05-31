(function(){
	angular.module('platzigram.controllers', [])

	.controller('HomeController', ['$scope', '$translate', function($scope, $translate){
		var vm = this;
		vm.saludo = 'Hola, soy la home!';
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};
	}])

})();