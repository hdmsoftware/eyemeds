'use strict';


angular.module('EyemedsApp')
	.directive('sidebarNewsfeed',function(){
		return {
        templateUrl:'js/shared/directives/sidebar/sidebar-widgets/sidebar-newsfeed/sidebar-newsfeed.html',
        restrict: 'E',
        replace: true,
    	}
	});
