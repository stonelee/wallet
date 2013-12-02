(function() {
  'use strict';

  angular.module('walletFilters', []).filter('way', function() {
    return function(money) {
      var way = money < 0 ? '借帐' : '帮付';
      return way + ' ¥' + Math.abs(money);
    };
  });

})();
