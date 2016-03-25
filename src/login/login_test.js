/* globals inject:false */

(function() {
  'use strict';

  var compile,
    scope;

  beforeEach(inject(function(_$rootScope_, _$compile_) {
    scope = _$rootScope_;
    compile = _$compile_;
  }));

  describe('Login', function() {
    it('provides a login form', function() {
      var element = compile("<div gk-login></div>")(scope);

      scope.$digest();

      var html = element.html();
      expect(html).toContain('<form');
      expect(html).toContain('></form>');
    });
  });
})();

