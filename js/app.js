(function() {
  'use strict';

  angular.module('wallet', ['ngRoute', 'walletControllers', 'walletFilters']).config(function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'ListCtrl',
      templateUrl: 'list.html'
    }).when('/edit/:id', {
      controller: 'EditCtrl',
      templateUrl: 'detail.html'
    }).otherwise({
      redirectTo: '/'
    });
  });

})();
