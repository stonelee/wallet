(function() {
  'use strict';

  angular.module('walletDirectives', []).directive('money', function() {
    return {
      restrict: 'EA',
      scope: {
        number: '@'
      },
      link: function(scope, element, attrs,a) {
        var number = scope.number;
        scope.way = number < 0 ? '借帐' : '帮付';
        scope.warn = number < 0;
        scope.money = '¥' + Math.abs(number);
      },
      template: '<span class="money"><span ng-class="{warn:warn}">[{{way}}]</span>{{money}}</span>',
      replace: true
    };
  });

})();
