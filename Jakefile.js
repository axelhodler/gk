(function () {
  'use strict';

  var fs = require("fs");
  var uglify = require("uglify-js");

  var VENDOR_DIR = "vendor";
  desc("minifies source")
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
  });

}());
