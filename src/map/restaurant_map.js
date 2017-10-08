(function() {
  'use strict';

  var app = angular.module('gk.restaurantMap', ['uiGmapgoogle-maps', 'gk.common']);

  app.controller('GourmetklubController', ['$scope', 'uiGmapGoogleMapApi', 'Restaurants',
    function($scope, uiGmapGoogleMapApi, Restaurants) {
      $scope.restaurants = Restaurants.all().restaurants;

      uiGmapGoogleMapApi.then(function(maps) {
        $scope.map = {center: {latitude: 48.775, longitude: 9.183}, zoom: 13};
      });

      $scope.onMarkerClicked = function(marker) {
        marker.showWindow = true;
      };
    }]);

  app.directive('mapMarkerWindow', function() {
    return {
      scope: {
        restaurant: '='
      },
      templateUrl: 'src/map/templates/map_marker_window.html'
    };
  });

  app.directive('restaurantSummary', function() {
    return {
      templateUrl: 'src/map/templates/restaurant.html'
    };
  });

})();
