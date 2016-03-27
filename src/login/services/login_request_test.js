(function () {
  'use strict';

  describe('LoginService', function() {
    var loginService,
      httpBackend,
      restUrl,
      Credentials;

    beforeEach(function() {
      module('gk.login');
    });

    beforeEach(inject(function(_loginService_, _$httpBackend_, _Credentials_, _REST_URL_) {
      loginService = _loginService_;
      httpBackend = _$httpBackend_;
      restUrl = _REST_URL_;
      Credentials = _Credentials_;
    }));

    it('provides credentials to the server', function() {
      var credentials = new Credentials('username', 'password');

      loginService.login(credentials);

      httpBackend.expectPOST(restUrl + '/login', credentials).respond({});
      httpBackend.flush();
    });
  });
})();
