(function () {
  'use strict';

  describe('TokenRepository', function() {
    var TokenRepo;

    beforeEach(module('gk.login'));

    beforeEach(inject(function(_TokenRepository_) {
      TokenRepo = _TokenRepository_;
    }));

    it('can store tokens', function() {

    });
  })
})();
