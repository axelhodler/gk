(function() {
  'use strict';

  beforeEach(module('gourmetklub'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('app', function () {
    var restaurantStub = {
      get: function() {
      }
    };

    var uiGmapGoogleMapsStub = {
      then: function() {
      }
    };

    it('could be tested', function () {
      var $scope = {};
      var uiGmapGoogleMapApi = uiGmapGoogleMapsStub;
      var Restaurant = restaurantStub;
      var controller = $controller('GourmetklubController',
        { $scope: $scope,
          uiGmapGoogleMapApi: uiGmapGoogleMapApi,
          Restaurant: Restaurant});

      var marker = {};
      $scope.onMarkerClicked(marker);

      expect(marker.showWindow).toBe(true);
    });
  });
})();
