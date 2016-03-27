(function () {
  'use strict';

  describe('LoginService', function() {
    var loginService,
      httpBackend,
      restUrl;

    beforeEach(function() {
      module('gk.login');
    });

    beforeEach(inject(function(_loginService_, _$httpBackend_, _REST_URL_) {
      loginService = _loginService_;
      httpBackend = _$httpBackend_;
      restUrl = _REST_URL_;
    }));

    it('provides credentials to the server', function() {
      loginService.login('username', 'password');

      httpBackend.expectPOST(restUrl + '/login',
        '{"username":"username","password":"password"}').respond({});
      httpBackend.flush();
    });
  });
})();
