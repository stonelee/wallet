(function() {
  'use strict';

  angular.module('walletServices', []).factory('Bill', function() {
    var bills = [{
        id: 1,
        created: new Date(),
        money: 2
      }, {
        id: 2,
        created: new Date(),
        money: -1
      }
    ];
    var maxId = 3;

    return {
      query: function() {
        return bills;
      },

      save: function(options, data) {
        if (!data) {
          data = options;
          options = {};
        }

        var bill = this.get(options);
        if (!bill) {
          bill = {
            id: maxId++
          };
          bills.unshift(bill);
        }
        return _.extend(bill, {
          updated: new Date()
        }, data);
      },

      get: function(options) {
        return _.findWhere(bills, options);
      },

      remove: function(options) {
        var id = options.id;
        bills = _(bills).reject(function(bill) {
          return bill.id === id;
        });
      }
    };
  });

})();
