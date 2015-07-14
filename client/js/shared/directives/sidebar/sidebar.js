'use strict';

angular.module('EyemedsApp')
	.directive('sidebar',function(){
		return {
        templateUrl:'js/shared/directives/sidebar/sidebar.html',
        restrict: 'E',
        replace: true,

        controller: function($scope){

			setTimeout(function(){
    			$('.sidenav-outer').perfectScrollbar();
			}, 100);
			
    	}
   

	}
});
