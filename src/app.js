(function() {
  var app = angular.module('gourmetklub', ['uiGmapgoogle-maps', 'ngResource']);

  app.factory('Restaurant',['$resource', function($resource) {
    return $resource('http://gkapi.hodler.co:5111/restaurants');
  }]);

  app.controller('GourmetklubController', ['$scope', 'uiGmapGoogleMapApi', 'Restaurant',
    function($scope, uiGmapGoogleMapApi, Restaurant) {

    Restaurant.get(function(data) {
      $scope.restaurants = data.restaurants;
    });

    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 48.775 , longitude: 9.183 }, zoom: 12 };
    });

    var onMarkerClicked = function(marker) {
      marker.showWindow = true;
    };
  }]);
})();
