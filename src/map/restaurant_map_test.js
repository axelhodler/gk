(function() {
  'use strict';

  describe('restaurantMap', function() {
    var $controller,
      httpBackend,
      scope,
      compile,
      restaurants;

    beforeEach(function() {
      module('gk.restaurantMap');
      module('templates');
    });

    beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_,
                               _$compile_, _Restaurants_) {
      $controller = _$controller_;
      httpBackend = _$httpBackend_;
      scope = _$rootScope_;
      compile = _$compile_;
      restaurants = _Restaurants_;
    }));

    var uiGmapGoogleMapsStub = {
      then: function(callback) {
        callback();
      }
    };

    var $scope, controller;

    beforeEach(function() {
      var allRestaurants = {restaurants: '{restaurantInfo}'};
      spyOn(restaurants, 'all').and.returnValue(allRestaurants);

      $scope = {};
      var uiGmapGoogleMapApi = uiGmapGoogleMapsStub;
      controller = $controller('GourmetklubController',
        {
          $scope: $scope,
          uiGmapGoogleMapApi: uiGmapGoogleMapApi,
          Restaurants: restaurants
        });
    });

    it('sets the restaurants on the scope', function() {
      expect($scope.restaurants).toBe('{restaurantInfo}');
    });

    it('shows info window on clicking the marker', function() {
      var marker = {};
      $scope.onMarkerClicked(marker);

      expect(marker.showWindow).toBe(true);
    });

    describe('restaurant summary', function() {
      it('displays restaurant summary', function() {
        scope.parameter = {
          id: 1,
          name: 'Mr. Smileys'
        };
        var element = compile("<div restaurant-summary></div>")(scope);

        scope.$digest();

        expect(element.html()).toContain(scope.parameter.id);
        expect(element.html()).toContain(scope.parameter.name);
      });
    });
  });
})();
