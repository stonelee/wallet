(function() {
  'use strict';

  var app = angular.module('walletControllers', []);

  var bills = [{
      id: 1,
      time: new Date(),
      money: 2.5
    }, {
      id: 2,
      time: new Date(),
      money: -1
    }
  ];

  app.controller('ListCtrl', function($scope) {
    init();

    var maxId = 3;
    $scope.addBill = function() {
      var money = Number($scope.money);
      money = $scope.isBorrowed ? -money : money;
      bills.unshift({
        id: maxId++,
        time: new Date(),
        money: money
      });

      init();
    };

    function init() {
      $scope.bills = bills;
      $scope.money = '';
      $scope.isBorrowed = false;
      count();
    }

    function count() {
      var totalMoney = 0;
      angular.forEach($scope.bills, function(bill) {
        totalMoney += bill.money;
      });
      $scope.totalMoney = totalMoney;
    }
  });

  app.controller('DetailCtrl', function($scope, $location, $routeParams) {
    function strEqual(a, b) {
      return String(a) === String(b);
    }

    function getBill(id) {
      for (var i = bills.length; i--;) {
        var bill = bills[i];
        if (strEqual(bill.id, id)) {
          return bill;
        }
      }
      return null;
    }

    var bill = getBill($routeParams.id);
    $scope.isBorrowed = bill.money < 0 ? true : false;
    $scope.money = Math.abs(bill.money);

    $scope.save = function() {
      var money = Number($scope.money);
      money = $scope.isBorrowed ? -money : money;
      bill.money = money;
      $location.path('/');
    };
    $scope.notModified = function() {
      return Number($scope.money) === bill.money;
    };

  });

})();
