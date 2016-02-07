(function () {
  'use strict';

  var fs = require("fs");
  var uglify = require("uglify-js");
  var replace = require('replace');
  var karma = require("simplebuild-karma");
  var jshint = require("simplebuild-jshint");

  var KARMA_CONFIG = "karma.conf.js";
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

  desc("Lint JavaScript code");
  task("lint", function() {
    process.stdout.write("Linting JavaScript: ");

    jshint.checkFiles({
      files: [ "Jakefile.js", "src/**/*.js" ],
      options: lintOptions(),
      globals: lintGlobals()
    }, complete, fail);
  }, { async: true });


  desc("Start the Karma server (run this first)");
  task("karma", function() {
    console.log("Starting Karma server:");
    karma.start({
      configFile: KARMA_CONFIG
    }, complete, fail);
  }, { async: true });

  desc('replace libs in index.html with uglified');
  task('html-replace', function() {
    replace({
      regex: '<!-- begin_autoreplace_with_uglyfied -->(.|\n)*<!-- end -->',
      replacement: '<script src="app.min.js"></script>',
      paths: ['index.html'],
      silent: true
    });
  });

  function lintOptions() {
    return {
      bitwise: true,
      eqeqeq: true,
      forin: true,
      freeze: true,
      futurehostile: true,
      latedef: "nofunc",
      noarg: true,
      nocomma: true,
      nonbsp: true,
      nonew: true,
      strict: true,
      undef: true,

      node: true,
      browser: true
    };
  }

  function lintGlobals() {
    return {
      describe: false,
      it: false,
      before: false,
      after: false,
      expect: false,
      beforeEach: false,
      afterEach: false
    };
  }

}());
