(function () {
  'use strict';

  describe('LoginService', function() {
    var loginService,
      httpBackend;

    beforeEach(module('login'));

    beforeEach(inject(function(_loginService_, _$httpBackend_) {
      loginService = _loginService_;
      httpBackend = _$httpBackend_;
    }));

    it('exists', function() {
      loginService.login('username', 'password');

      httpBackend.expectPOST('http://gkapi.hodler.co:5111/login').respond({});
      httpBackend.flush();
    });
  });
})();
