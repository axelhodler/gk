(function () {
  'use strict';

  angular.module('gourmetklub', [
    'ngRoute',
    'gk.restaurantMap',
    'gk.common',
    'gk.login'
  ])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'src/map/templates/map_overview',
          controller: 'GourmetklubController'
        })
        .when('/login', {
          templateUrl: 'src/login/templates/login_page.html',
          controller: 'LoginPageController'
        });
    }]);
})();
