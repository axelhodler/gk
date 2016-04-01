(function () {
  'use strict';

  angular.module('gk.login')
    .service('loginService', function($http, REST_URL, TokenRepository) {
      return {
        login: function(credentials) {
          $http.post(REST_URL + '/login', credentials).then(function(resp) {
            TokenRepository.store(resp.data);
          });
        }
      };
    });
})();
