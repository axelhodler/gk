(function () {
  'use strict';

  angular.module('gk.login')
    .service('TokenRepository', function(LocalForage) {
      return {
        store: function(token) {
          LocalForage.setItem('jwt', token);
        },
        fetchToken: function() {
          return LocalForage.getItem('jwt').then(function(token) {
            return token;
          });
        }
      }
    });
})();
