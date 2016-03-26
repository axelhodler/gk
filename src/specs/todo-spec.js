(function () {
  'use strict';

  var fs = require('fs');

  describe('Restaurant map', function() {
    it('displays restaurant markers containing restaurant summary', function() {
      browser.get('http://0.0.0.0:8080/');

      browser.driver.sleep(3000).then(function() {
        element(by.xpath("//map[@id='gmimap5']/area")).click();
        var text = element(by.tagName('html')).getText();
        expect(text).toContain("6. Tshito Gwrito");
      });
    });
  });
})();
