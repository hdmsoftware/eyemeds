'use strict';

angular.module('EyemedsApp')
  .directive('stats',function(){
    return {
        templateUrl:'js/shared/directives/stats/stats.html',
        restrict: 'E',
        replace: true,
        scope: {
          'icon': '@',
          'value': '@',
          'text': '@',
          'bgclass': '@' ,
          'link': '@',
          'progressValue': '@'
        }
      }
  });


