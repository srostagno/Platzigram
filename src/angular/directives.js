(function(){
	angular.module('platzigram.directives', [])

	.directive('footerAngular', function(){
		return {
			restrict: 'E',
			templateUrl: '/views/footerAngular.html'
		}
	})

})();