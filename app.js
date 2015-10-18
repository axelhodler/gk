(function() {
  var app = angular.module('gourmetklub', ['uiGmapgoogle-maps', 'ngResource']);

  app.factory('Restaurant', function($resource) {
    return $resource('http://localhost:5111/restaurants');
  });

  app.controller('GourmetklubController', function($scope, uiGmapGoogleMapApi, Restaurant) {
    Restaurant.get(function(data) {
      $scope.restaurants = data.restaurants;
    });

    uiGmapGoogleMapApi.then(function(maps) {
      $scope.key = "lol";
      $scope.coords = { latitude: 48.775, longitude: 9.183 };
      $scope.map = { center: { latitude: 48.775 , longitude: 9.183 }, zoom: 13 };
    });
  });
})();
