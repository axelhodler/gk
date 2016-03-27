(function () {
  'use strict';

  angular.module('gk.login', ['gk.common'])
    .directive('gkLogin', function() {
      return {
        templateUrl: 'src/login/templates/login_form.html'
      };
    });
})();
