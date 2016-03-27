(function() {
  'use strict';

  var app = angular.module('gk.restaurantMap', ['uiGmapgoogle-maps', 'ngResource', 'gk.common']);

  app.factory('Restaurant',['$resource', 'REST_URL', function($resource, REST_URL) {
    return $resource(REST_URL + '/restaurants');
  }]);

  app.controller('GourmetklubController', ['$scope', 'uiGmapGoogleMapApi', 'Restaurant',
    function($scope, uiGmapGoogleMapApi, Restaurant) {

    Restaurant.get(function(data) {
      $scope.restaurants = data.restaurants;
    });

    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 48.775 , longitude: 9.183 }, zoom: 12 };
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
