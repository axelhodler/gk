/* globals angular:false */

(function () {
  'use strict';

  angular.module('login', [])
    .directive('gkLogin', function() {
      return {
        template: '<form><input /><input type="password"/><input type="button"/></form>'
      }
    });
})();
