(function(){
	angular.module('platzigram.directives', [])

	.directive('headerCustom', function(){
		return {
			restrict: 'E',
			templateUrl: '/views/header-custom.html'			
		}
	})

	.directive('footerCustom', function(){
		return {
			restrict: 'E',
			templateUrl: '/views/footer-custom.html'
		}
	});

})();