(function(){
	angular.module('platzigram.directives', [])

	.directive('footerAngular', function(){
		return {
			restrict: 'E',
			templateUrl: '/views/footerAngular.html'
		}
	})

	.directive('navBar', function(){
		return {
			restrict: 'E',
			templateUrl: '/views/navBar.html'
		}
	})

})();