/* globals jake:false, desc:false, task:false, complete:false, fail:false, directory:false */
(function () {
  'use strict';

  var fs = require("fs");
  var uglify = require("uglify-js");
  var replace = require('replace');
  var karma = require("simplebuild-karma");
  var jshint = require("simplebuild-jshint");
  var shell = require("shelljs");

  var KARMA_CONFIG = "karma.conf.js";
  var VENDOR_DIR = "vendor";
  var DIST_DIR = "dist";
  var MINIFIED_APP = "app.min.js";

  desc("minifies source");
  task('minify', function() {
    var result = uglify.minify([
      VENDOR_DIR + "/angular/angular.js",
      VENDOR_DIR + "/angular-resource/angular-resource.js",
      VENDOR_DIR + "/lodash/lodash.js",
      VENDOR_DIR + "/angular-google-maps/dist/angular-google-maps.js",
      VENDOR_DIR + "/angular-simple-logger/dist/angular-simple-logger.js",
      'src/app.js',
      'src/common/common.js',
      'src/map/restaurant_map.js']);

    fs.writeFile(MINIFIED_APP, result.code, function(err) {
      if (err) throw err;
      console.log("minified js source created");
    });
  });

  desc("Creates directory containing distributable files");
  task("package", ['minify','html-replace'], function() {
    console.log("Building distribution directory: .");

    shell.rm("-rf", DIST_DIR + "/*");
    var templateDir = 'dist/src/map/templates';
    shell.mkdir('-p', templateDir);
    shell.cp(MINIFIED_APP, DIST_DIR);
    shell.mv("generated_index.html", DIST_DIR + "/index.html");
    shell.cp("src/map/templates/restaurant.html", templateDir);
    shell.cp("src/map/templates/map_marker_window.html", templateDir);
    shell.cp("style.css", DIST_DIR);
  });

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
    shell.cp('index.html', 'generated_index.html');
    replace({
      regex: '<!-- begin_autoreplace_with_uglyfied -->(.|\n)*<!-- end -->',
      replacement: '<script src="app.min.js"></script>',
      paths: ['generated_index.html'],
      silent: true
    });
  });

  desc('Run lint and karma against source, then package and run protractor against');
  task('prepush', ['lint','karma', 'package'], function() {
    shell.exec('http-server & ./jake.sh smoke && kill %1');
  });

  desc('run e2e smoke tests');
  task('smoke', function() {
    console.log('Starting protractor e2e tests');
    jake.exec('protractor conf.js', {printStdout: true}, function () {
      complete();
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
      angular: false,

      // angular testing
      inject: false,

      // jasmine
      describe: false,
      it: false,
      before: false,
      after: false,
      expect: false,
      beforeEach: false,
      afterEach: false,

      // protractor
      browser: false,
      element: false,
      by: false
    };
  }

}());
