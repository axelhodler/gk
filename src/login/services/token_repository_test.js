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
          this.value = value;
        },
        getItem: function(key) {
          return {
            then: function() {
              return this.value;
            }.bind(this)
          };
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

    describe('retrieving tokens', function() {
      it('retrieves stored token', function() {
        TokenRepo.store('token');

        expect(TokenRepo.fetchToken()).toBe('token');
      });

      it('retrieves stored token regardless of its value', function() {
        TokenRepo.store('webtoken');

        expect(TokenRepo.fetchToken()).toBe('webtoken');
      });
    });
  });
})();
