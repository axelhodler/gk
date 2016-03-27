(function () {
  'use strict';

  describe('LoginService', function() {
    var loginService,
      httpBackend;

    beforeEach(module('gk.login'));

    beforeEach(inject(function(_loginService_, _$httpBackend_) {
      loginService = _loginService_;
      httpBackend = _$httpBackend_;
    }));

    it('provides credentials to the server', function() {
      loginService.login('username', 'password');

      httpBackend.expectPOST('http://gkapi.hodler.co:5111/login',
        '{"username":"username","password":"password"}').respond({});
      httpBackend.flush();
    });
  });
})();
