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
        },
        {
          "id": 18,
          "name": "Sultan Saray",
          "address": "Rotebühlstraße 53, 70178 Stuttgart",
          "lat": "48.77317",
          "lng": "9.16833"
        },
        {
          "id": 19,
          "name": "Thai Thaani",
          "address": "Neckarstr. 246, 70190 Stuttgart",
          "lat": "48.794605",
          "lng": "9.204966"
        },
        {
          "id": 20,
          "name": "Takeshii",
          "address": "Esslingerstrasse 12, 70182 Stuttgart",
          "lat": "48.77407",
          "lng": "9.18188"
        },
        {
          "id": 21,
          "name": "Kurose",
          "address": "Rotebühlstrasse 50, 70178 Stuttgart",
          "lat": "48.7731966",
          "lng": "9.1666469"
        },
        {
          "id": 22,
          "name": "[m]eatery bar",
          "address": "Kronprinzstrasse 24, 70173 Stuttgart",
          "lat": "48.7758",
          "lng": "9.1742"
        },
        {
          "id": 23,
          "name": "Achillion",
          "address": "Schwabstrasse 75, 70197 Stuttgart",
          "lat": "48.77306",
          "lng": "9.15611"
        },
        {
          "id": 24,
          "name": "Fatousch",
          "address": "Sigmaringerstrasse 68, 70567 Stuttgart",
          "lat": "48.7285716",
          "lng": "9.1524875"
        },
        {
          "id": 25,
          "name": "Triple B - Beef Burger Brothers",
          "address": "Hohenloher Str. 8, 70435 Stuttgart",
          "lat": "48.8301288",
          "lng": "9.1756158"
        },
        {
          "id": 26,
          "name": "Ampulle",
          "address": "Augustenstraße 31A, 70178 Stuttgart",
          "lat": "48.7713301",
          "lng": "9.1662226"
        },
        {
          "id": 27,
          "name": "Viet Wok",
          "address": "Kronenstraße 45, 70174 Stuttgart",
          "lat": "48.7840076",
          "lng": "9.175623"
        },
        {
          "id": 28,
          "name": "KayDoe",
          "address": "Wilhelm-Geiger-Platz 8, 70469 Stuttgart-Feuerbach",
          "lat": "48.8118711",
          "lng": "9.1584867"
        },
        {
          "id": 29,
          "name": "Shima",
          "address": "Olgastra. 86, 70180 Stuttgart",
          "lat": "48.7698871",
          "lng": "9.1803448"
        },
        {
          "id": 30,
          "name": "Taverna Yol",
          "address": "Spittastr. 2, 70193 Stuttgart",
          "lat": "48.775070",
          "lng": "9.151830"
        },
        {
          "id": 31,
          "name": "Zum Spätzleschwob",
          "address": "Vogelsangstraße 50, 70197 Stuttgart",
          "lat": "48.774130",
          "lng": "9.152283"
        }
      ]
    }
  }
}
