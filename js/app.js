(function() {
  'use strict';

  angular.module('wallet', ['ngRoute', 'walletControllers', 'walletServices', 'walletDirectives', 'walletFilters']).config(function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'ListCtrl',
      templateUrl: 'list.html'
    }).when('/edit/:id', {
      controller: 'DetailCtrl',
      templateUrl: 'detail.html'
    }).otherwise({
      redirectTo: '/'
    });
  });

})();
