(function(){
	angular.module('platzigram.controllers', [])

	.controller('HomeController', ['$scope', '$translate', function($scope, $translate){
		$scope.appName = 'Platzigram';
		$scope.fecha = new Date();

		$scope.changeLanguage = function (key) {
			$translate.use(key);
			console.log('languagessssssss')
		};

	}])

})();