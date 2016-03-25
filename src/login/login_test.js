/* globals inject:false */

(function() {
  'use strict';

  describe('Login', function() {
    var compile,
      scope;

    beforeEach(module('login'));

    beforeEach(inject(function(_$rootScope_, _$compile_) {
      scope = _$rootScope_;
      compile = _$compile_;
    }));

    var compileLoginForm = function() {
      return compile('<div gk-login></div>')(scope);
    };

    it('provides a login form', function() {
      var element = compileLoginForm();

      scope.$digest();

      var html = element.html();
      expect(html).toContain('<form');
      expect(html).toContain('></form>');
    });

    it('has two input fields', function() {
      var element = compileLoginForm();

      scope.$digest();

      var html = element.html();
      expect(html).toContain('<input');
      html.replace('<input', '');
      expect(html).toContain('<input');
    });
  });
})();

