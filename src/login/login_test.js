(function() {
  'use strict';

  describe('Login', function() {
    var compile,
      scope;

    beforeEach(function() {
      module('gk.login');
      module('templates');
    });

    beforeEach(inject(function(_$rootScope_, _$compile_) {
      scope = _$rootScope_;
      compile = _$compile_;
    }));

    var compileLoginForm = function() {
      return compile('<div gk-login></div>')(scope);
    };

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

        expect(element.html()).toContain('<input type="button" ng-disabled');
      });

      it('is only enabled if user and password fields have values', function() {
        var dirElement = angular.element('<div gk-login></div>');
        var element = compile(dirElement)(scope);
        scope.$digest();

        angular.element(dirElement.find('input')[0]).val('foo').triggerHandler('input');
        angular.element(dirElement.find('input')[1]).val('bar').triggerHandler('input');
        scope.$apply();

        expect(element.html()).toContain('ng-valid');
      });
    });
  });
})();

