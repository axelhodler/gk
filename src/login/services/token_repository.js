(function () {
  'use strict';

  angular.module('gk.login')
    .service('TokenRepository', function(LocalForage) {
      return {
        store: function(token) {
          LocalForage.setItem('jwt', token);
        }
      }
    });
})();
