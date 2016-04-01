(function () {
  'use strict';

  describe('TokenRepository', function() {
    var TokenRepo,
      storedToken;

    beforeEach(module('gk.login'));

    beforeEach(module(function($provide) {
      var LocalForageMock = {
        setItem: function(key, value) {
          storedToken = value;
          this.key = value;
        }
      };
      $provide.value("LocalForage", LocalForageMock);
    }));

    beforeEach(inject(function(_TokenRepository_) {
      TokenRepo = _TokenRepository_;
    }));

    it('can store tokens', function() {
      TokenRepo.store('token');

      expect(storedToken).toBe('token');
    });
  })
})();
