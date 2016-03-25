/* globals inject:false */

(function() {
  'use strict';

  describe('Login', function() {
    var compile,
      scope;

    beforeEach(function() {
      module('login');
      module('templates');
    });

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
      expect(html).toContain('</form>');
    });

    it('has two input fields', function() {
      var element = compileLoginForm();

      scope.$digest();

      var html = element.html();
      expect(html).toContain('<input');
      html.replace('<input', '');
      expect(html).toContain('<input');
    });

    it('has one password field', function() {
      var element = compileLoginForm();

      scope.$digest();

      var html = element.html();
      expect(html).toContain('<input type="password"');
    });

    describe('Login Button', function() {
      it('is initially disabled', function() {
        var element = compileLoginForm();

        scope.$digest();

        expect(element.html()).toContain('<input type="button" disabled');
      });

      it('is only enabled if user and password fields have values', function() {
        var dirElement = angular.element('<div gk-login></div>');
        var element = compile(dirElement)(scope);

        scope.$digest();

        var usernameInput = dirElement.find('input')[0];
        angular.element(usernameInput).val('foo').triggerHandler('input');
        scope.$apply();

        var usernameInput = dirElement.find('input')[0];
        expect(usernameInput.value).toBe('foo');
      });
    })
  });
})();

