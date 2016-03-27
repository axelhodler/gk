(function () {
  'use strict';

  angular.module('gk.login')
    .factory('Credentials', CredentialsModel);

  function CredentialsModel() {
    function Credentials(username, password) {
      this.username = username;
      this.password = password;
    }
    return Credentials;
  }
})();
