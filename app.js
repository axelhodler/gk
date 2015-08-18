(function() {
  var app = angular.module('gourmetklub', []);

  app.controller('GourmetklubController', function() {
    this.restaurants = restaurants;
  });

  var restaurants = [
    {"name": "87", "address" : "König-Karl-Straße 87, Stuttgart"},
    {"name": "Gigis Burgerbar", "address" : "Theodor-Heuss-Strasse 34, 70174 Stuttgart"},
    {"name": "Bonnie and Clyde", "address": "Heinrich Baumann Str. 24, 70190 Stuttgart"},
    {"name": "Madagascar", "address": "Filderstrasse 61, 70180 Stuttgart"},
    {"name": "Ceylonas", "address": "Reinsburgstraße 74 70178 Stuttgart"},
    {"name": "Tshito Gwrito", "address": "Heinrich-Baumann-Straße 23, 70190 Stuttgart"},
    {"name": "Ebony", "address" : "Herzogstrasse 11, 70176 Stuttgart"},
    {"name": "Gerüchteküche-Stuttgart", "address": "Rotebühlstrasse 159, 70197 Stuttgart"}
  ];
})();
