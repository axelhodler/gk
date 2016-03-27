(function () {
  'use strict';

  angular.module('gk.login')
    .service('loginService', function($http, REST_URL) {
      return {
        login: function(username, password) {
          $http.post(REST_URL + '/login',
            {
              'username':username,
              'password':password
            }
          );
        }
      };
    });
})();
