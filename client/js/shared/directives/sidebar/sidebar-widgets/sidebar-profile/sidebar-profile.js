'use strict';


angular.module('EyemedsApp')
	.directive('sidebarProfile',function(){
		return {
        templateUrl:'js/shared/directives/sidebar/sidebar-widgets/sidebar-profile/sidebar-profile.html',
        restrict: 'E',
        replace: true,
    	}
	});
