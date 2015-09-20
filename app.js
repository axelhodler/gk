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
      $scope.coords = { latitude: 45, longitude: -73 };
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
  });
})();
