(function() {
  'use strict';

  beforeEach(module('gourmetklub'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('app', function () {
    var restaurantStub = {
      provides: function(data) {
        this.data = data;
        return this;
      },
      get: function(callback) {
        var restaurants = {
          restaurants: this.data
        };
        callback(restaurants);
      }
    };

    var uiGmapGoogleMapsStub = {
      then: function(callback) {
        callback();
      }
    };

    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      var uiGmapGoogleMapApi = uiGmapGoogleMapsStub;
      var Restaurant = restaurantStub.provides('{restaurantInfo}');
      controller = $controller('GourmetklubController',
        { $scope: $scope,
          uiGmapGoogleMapApi: uiGmapGoogleMapApi,
          Restaurant: Restaurant});
    });

    it('sets the restaurants on the scope', function() {
      expect($scope.restaurants).toBe('{restaurantInfo}');
    });

    it('shows info window on clicking the marker', function () {
      var marker = {};
      $scope.onMarkerClicked(marker);

      expect(marker.showWindow).toBe(true);
    });
  });
})();
