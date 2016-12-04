'use strict';

angular.module('gk.restaurantMap')
  .service('Restaurants', Restaurants);

function Restaurants() {
  this.all = function() {
    return {
      "restaurants": [
        {
          "id": 1,
          "name": "87",
          "address": "König-Karl-Straße 87, Stuttgart",
          "lat": "48.8007927",
          "lng": "9.2135248"
        },
        {
          "id": 2,
          "name": "Gigis Burgerbar",
          "address": "Theodor-Heuss-Strasse 34, 70174 Stuttgart",
          "lat": "48.7756733",
          "lng": "9.171746899999999"
        },
        {
          "id": 3,
          "name": "Bonnie and Clyde",
          "address": "Heinrich Baumann Str. 24, 70190 Stuttgart",
          "lat": "48.7906476",
          "lng": "9.1983345"
        },
        {
          "id": 4,
          "name": "Madagascar",
          "address": "Filderstrasse 61, 70180 Stuttgart",
          "lat": "48.76352",
          "lng": "9.1685"
        },
        {
          "id": 5,
          "name": "Ceylonas",
          "address": "Reinsburgstraße 74 70178 Stuttgart",
          "lat": "48.76899",
          "lng": "9.161629999999999"

        },
        {
          "id": 6,
          "name": "Tshito Gwrito",
          "address": "Heinrich-Baumann-Straße 23, 70190 Stuttgart",
          "lat": "48.7901296",
          "lng": "9.199895"
        },
        {
          "id": 7,
          "name": "Ebony",
          "address": "Herzogstrasse 11, 70176 Stuttgart",
          "lat": "48.77387",
          "lng": "9.16765"
        },
        {
          "id": 8,
          "name": "Gerüchteküche-Stuttgart",
          "address": "Rotebühlstrasse 159, 70197 Stuttgart",
          "lat": "48.7694252",
          "lng": "9.153956299999999"
        },
        {
          "id": 9,
          "name": "Ganesha",
          "address": "Rotebühlstraße 155, 70197 Stuttgart",
          "lat": "48.7694896",
          "lng": "9.1544618"
        },
        {
          "id": 10,
          "name": "Perbacco",
          "address": "Tübinger Str. 41-43, 70178 Stuttgart",
          "lat": "48.7705006",
          "lng": "9.1727707"
        },
        {
          "id": 11,
          "name": "Rice Man",
          "address": "Schulstrasse 18, 70173 Stuttgart",
          "lat": "48.77598080000001",
          "lng": "9.1768503"
        },
        {
          "id": 12,
          "name": "Besitos",
          "address": "Rotebühlplatz 21, 70178 Stuttgart",
          "lat": "48.7745648",
          "lng": "9.1717468"
        },
        {
          "id": 13,
          "name": "Buschpilot",
          "address": "Karl-Schurz-Str.28c, 70190 Stuttgart",
          "lat": "48.7939241",
          "lng": "9.2062355"
        },
        {
          "id": 14,
          "name": "Speisekammer West",
          "address": "Rosenbergstr. 89, 70193 Stuttgart",
          "lat": "48.7776822",
          "lng": "9.1539913"
        },
        {
          "id": 15,
          "name": "Coox und Candy",
          "address": "Sulzbachgasse 14, 70372 Stuttgart",
          "lat": "48.8048363",
          "lng": "9.2154156"
        },
        {
          "id": 16,
          "name": "1893",
          "address": "Mercedesstraße 109, 70372 Stuttgart",
          "lat": "48.7896",
          "lng": "9.23477"
        },
        {
          "id": 17,
          "name": "ABACCO`S STEAKHOUSE",
          "address": "Rotebühlplatz 10, 70173 Stuttgart",
          "lat": "48.775",
          "lng": "9.1732"
        }
      ]
    }
  }
}