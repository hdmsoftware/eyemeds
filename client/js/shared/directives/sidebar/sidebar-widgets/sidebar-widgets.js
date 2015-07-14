'use strict';

angular.module('EyemedsApp')
	.directive('sidebarwidgets',function(){
		return {
        templateUrl:'js/shared/directives/sidebar/sidebar-widgets/sidebar-widgets.html',
        restrict: 'E',
        replace: true,
	}
});
