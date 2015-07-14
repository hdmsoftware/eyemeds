'use strict';


angular.module('EyemedsApp')
	.directive('sidebarCalendar',function(){
		return {
        templateUrl:'js/shared/directives/sidebar/sidebar-widgets/sidebar-calendar/sidebar-calendar.html',
        restrict: 'E',
        replace: true,
    	}
	});
