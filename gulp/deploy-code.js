'use strict';

var gulp = require('gulp');
var replace = require('gulp-replace-task');

// AWS reqs
var s3 = require("gulp-s3");
var fs = require('fs');

// Call aws.json file
var aws = JSON.parse(fs.readFileSync('./aws.json'));


gulp.task('clean', require('del').bind(null, ['./dist']));

// Update asset paths in JS files
gulp.task('asset-paths', function(done) {
  gulp.src('./dist/scripts/*.js')
    // Rewrite assets paths to AWS CDN
    .pipe(replace({
      patterns: [
        {
          match: /assets/g,
          replacement: function () {
            return 'https://s3-eu-west-1.amazonaws.com/robeasthope.com'; // replaces "foo" to "bar"
          }
        }
      ]
    }))
    .pipe(gulp.dest('./dist/scripts/*.js'));
});


// Update asset, JS, and CSS paths
gulp.task('deploy-index', function(done) {
  gulp.src(['./dist/index.html'])
    // Replace CSS paths
    .pipe(replace({
      patterns: [
        {
          match: /styles/g,
          replacement: function () {
            return 'https://s3-eu-west-1.amazonaws.com/robeasthope.com/styles';
          }
        }
      ]
    }))

    // Replace JS paths
    .pipe(replace({
      patterns: [
        {
          match: /scripts/g,
          replacement: function () {
            return 'https://s3-eu-west-1.amazonaws.com/robeasthope.com/scripts';
          }
        }
      ]
    }))

    // Rewrite assets paths to AWS CDN
    .pipe(replace({
      patterns: [
        {
          match: /assets/g,
          replacement: function () {
            return 'https://s3-eu-west-1.amazonaws.com/robeasthope.com';
          }
        }
      ]
    }))
  .pipe(gulp.dest('./'));
});


// Deploy assets to AWS
gulp.task('aws-assets', function(done) {
  gulp.src(['./dist/**/*.*'])
    .pipe(s3(aws));
});

// Deploy task
gulp.task('deploy', ['clean', 'build', 'asset-paths', 'aws-assets', 'deploy-index' ], function(done) {

});
