(function () {
  'use strict';

  angular.module('gourmetklub', [
    'ngRoute',
    'gk.restaurantMap',
    'gk.login'
  ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/login', {
        templateUrl: 'src/login/templates/login_page.html',
        controller: 'LoginPageController'
      });
    }]);
})();
