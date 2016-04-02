(function () {
  'use strict';

  angular.module('gourmetklub', [
    'ngRoute',
    'gk.restaurantMap'
  ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/login', {
        templateUrl: 'login/templates/login-page.html',
        controller: 'LoginPageController'
      });
    }]);
})();
