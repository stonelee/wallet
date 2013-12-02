(function() {
  'use strict';

  angular.module('walletControllers', []).controller('ListCtrl', function($scope) {
    $scope.bills = [{
        time: new Date(),
        money: 2.5
      }, {
        time: new Date(),
        money: -1
      }
    ];

    init();

    $scope.addBill = function() {
      var money = Number($scope.money);
      if (isNaN(money)) {
        console.log('error');
        return;
      }

      money = $scope.way ? -money : money;
      $scope.bills.unshift({
        time: new Date(),
        money: money
      });

      init();
    };

    function count() {
      var totalMoney = 0;
      angular.forEach($scope.bills, function(bill) {
        totalMoney += bill.money;
      });
      $scope.totalMoney = totalMoney;
    }

    function init() {
      $scope.money = '';
      $scope.way = false;
      count();
    }
  });

})();
