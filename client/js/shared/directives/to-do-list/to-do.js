'use strict';

angular.module('EyemedsApp')
.directive('todolist',function(){
		return {
	    templateUrl:'js/shared/directives/to-do-list/to-do.html',
	    restrict: 'E',
	    replace: true,
    	controller: function($scope){

			setTimeout(function(){
    			$('.todo-list-wrap').perfectScrollbar();
			}, 100);

        }
	}
});
