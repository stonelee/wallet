(function() {
  'use strict';

  var app = angular.module('walletControllers', []);

  app.controller('ListCtrl', function($scope, Bill) {
    init();

    $scope.addBill = function() {
      var money = parseFloat($scope.money);
      money = $scope.isBorrowed ? -money : money;
      Bill.save({
        money: money
      });

      init();
    };

    function init() {
      $scope.bills = Bill.query();
      $scope.money = '';
      $scope.isBorrowed = false;
      count();
    }

    function count() {
      $scope.totalMoney = _.reduce($scope.bills, function(money, bill) {
        return money + bill.money;
      }, 0);
    }

    $scope.clearAll = function() {
      Bill.clearAll();
      init();
    };
  });

  app.controller('DetailCtrl', function($scope, $location, $routeParams, Bill) {
    var id = $routeParams.id;

    var bill = Bill.get({
      id: id
    });
    $scope.isBorrowed = bill.money < 0 ? true : false;
    $scope.money = Math.abs(bill.money);

    $scope.save = function() {
      var money = parseFloat($scope.money);
      money = $scope.isBorrowed ? -money : money;
      Bill.save({
        id: id
      }, {
        money: money
      });
      $location.path('/');
    };

    $scope.notModified = function() {
      var oldBorrowed = bill.money < 0 ? true : false;
      var nBorrowed = $scope.isBorrowed === oldBorrowed;
      var nMoney = parseFloat($scope.money) === Math.abs(bill.money);
      return nBorrowed && nMoney;
    };

    $scope.remove = function() {
      Bill.remove({
        id: id
      });
      $location.path('/');
    };

  });

})();
