/* globals angular:false */

(function () {
  'use strict';

  angular.module('login', [])
    .directive('gkLogin', function() {
      return {
        templateUrl: 'src/login/templates/login_form.html'
      };
    });
})();
