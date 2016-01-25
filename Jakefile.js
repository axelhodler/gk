(function () {
  'use strict';

  var fs = require("fs");
  var uglify = require("uglify-js");

  desc("minifies source")
  task('default', function() {
    var result = uglify.minify([
      "bower_components/angular/angular.js",
      "bower_components/angular-resource/angular-resource.js",
      "bower_components/lodash/lodash.js",
      "bower_components/angular-google-maps/dist/angular-google-maps.js",
      "bower_components/angular-simple-logger/dist/angular-simple-logger.js",
      "src/app.js"]);

    fs.writeFile('app.min.js', result.code, function(err) {
      if (err) throw err;
      console.log("minified js source created");
    });
  });

}());
