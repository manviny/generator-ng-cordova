/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('ng-cordova generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      var deps = [
        '../../app',
        '../../common',
        '../../controller',
        '../../main', [
          helpers.createDummyGenerator(),
          'karma:app'
        ]
      ];

      this.app = helpers.createGenerator('ng-cordova:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'karma:app'
        ]
      ]);

      this.app.options['skip-install'] = true;
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig'
    ];

    helpers.mockPrompt(this.app, {
      appName: ['testApp'],
      coffee: [false],
      compass: [true],
      platforms: [],
      plugins: [],
      modules: []
    });

    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
