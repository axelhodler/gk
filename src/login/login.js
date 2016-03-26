(function () {
  'use strict';

  angular.module('gk.login', [])
    .directive('gkLogin', function() {
      return {
        templateUrl: 'src/login/templates/login_form.html'
      };
    });
})();
