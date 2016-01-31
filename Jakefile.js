(function () {
  'use strict';

  var fs = require("fs");
  var uglify = require("uglify-js");
  var replace = require('replace');

  var VENDOR_DIR = "vendor";
  desc("minifies source");
  task('default', function() {
    var result = uglify.minify([
      VENDOR_DIR + "/angular/angular.js",
      VENDOR_DIR + "/angular-resource/angular-resource.js",
      VENDOR_DIR + "/lodash/lodash.js",
      VENDOR_DIR + "/angular-google-maps/dist/angular-google-maps.js",
      VENDOR_DIR + "/angular-simple-logger/dist/angular-simple-logger.js",
      "src/app.js"]);

    fs.writeFile('app.min.js', result.code, function(err) {
      if (err) throw err;
      console.log("minified js source created");
    });
  })

  desc('replace libs in index.html with uglified');
  task('html-replace', function() {
    replace({
      regex: '<!-- begin_autoreplace_with_uglyfied -->(.|\n)*<!-- end -->',
      replacement: '<script src="app.min.js"></script>',
      paths: ['index.html'],
      silent: true
    });
  });
}());
