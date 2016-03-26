(function () {
  'use strict';

  angular.module('login')
    .service('loginService', function($http) {
      return {
        login: function(username, password) {
          $http.post('http://gkapi.hodler.co:5111/login');
        }
      }
    });
})();
