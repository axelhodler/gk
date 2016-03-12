/* globals inject:false */

(function() {
  'use strict';

  var $controller,
    httpBackend,
    scope,
    compile,
    restaurant;

  beforeEach(module('gourmetklub'));

  beforeEach(module('restaurant.html'));

  beforeEach(inject(function(_$controller_, _$httpBackend_, _$rootScope_,
                             _$compile_, _Restaurant_){
    $controller = _$controller_;
    httpBackend = _$httpBackend_;
    scope = _$rootScope_;
    compile = _$compile_;
    restaurant = _Restaurant_;
  }));

  describe('app', function () {
    var uiGmapGoogleMapsStub = {
      then: function(callback) {
        callback();
      }
    };

    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      var uiGmapGoogleMapApi = uiGmapGoogleMapsStub;
      controller = $controller('GourmetklubController',
        { $scope: $scope,
          uiGmapGoogleMapApi: uiGmapGoogleMapApi,
          Restaurant: restaurant});
    });

    beforeEach(function() {
      var restaurants = {restaurants: '{restaurantInfo}'};
      httpBackend.whenGET('http://gkapi.hodler.co:5111/restaurants')
        .respond(restaurants);
    });

    it('sets the restaurants on the scope', function() {
      httpBackend.flush();

      expect($scope.restaurants).toBe('{restaurantInfo}');
    });

    it('shows info window on clicking the marker', function () {
      var marker = {};
      $scope.onMarkerClicked(marker);

      expect(marker.showWindow).toBe(true);
    });

    it('displays restaurant summary', function() {
      scope.restaurant = {
        id: 1,
        name: 'Mr. Smileys'
      };
      var element = compile("<div restaurant-summary></div>")(scope);

      scope.$digest();

      expect(element.html()).toContain(scope.restaurant.id);
      expect(element.html()).toContain(scope.restaurant.name);
    });
  });

})();
