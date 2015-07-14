'use strict';

angular.module('EyemedsApp')
	.directive('menubar',function(){
		return {
        templateUrl:'js/shared/directives/sidebar/menu-bar/menu-bar.html',
        restrict: 'E',
        replace: true,
    }
});
