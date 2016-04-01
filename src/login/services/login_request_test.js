(function () {
  'use strict';

  describe('LoginService', function() {
    var loginService,
      httpBackend,
      restUrl,
      Credentials,
      TokenRepoSpy;

    beforeEach(function() {
      module('gk.login');
    });

    beforeEach(module(function($provide) {
      TokenRepoSpy = {
        store: function() {}
      };
      spyOn(TokenRepoSpy, 'store');
      $provide.value('TokenRepository', TokenRepoSpy);
    }));

    beforeEach(inject(function(_loginService_, _$httpBackend_, _Credentials_, _REST_URL_) {
      loginService = _loginService_;
      httpBackend = _$httpBackend_;
      restUrl = _REST_URL_;
      Credentials = _Credentials_;
    }));

    var credentials;

    beforeEach(function() {
      credentials = new Credentials('username', 'password');
    });

    it('provides credentials to the server', function() {
      loginService.login(credentials);

      httpBackend.expectPOST(restUrl + '/login', credentials).respond({});
      httpBackend.flush();
    });

    it('stores webtoken after login', function() {
      loginService.login(credentials);
      httpBackend.expectPOST(restUrl + '/login', credentials).respond(200, 'token');
      httpBackend.flush();

      expect(TokenRepoSpy.store).toHaveBeenCalledWith('token');
    });

    it('stores webtoken after successful login', function() {
      loginService.login(credentials);
      httpBackend.expectPOST(restUrl + '/login', credentials).respond(200, 'webtoken');
      httpBackend.flush();

      expect(TokenRepoSpy.store).toHaveBeenCalledWith('webtoken');
    });
  });
})();
