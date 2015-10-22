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
gulp.task('asset-paths-js', function(done) {
  gulp.src('./dist/scripts/*.js')
    // Rewrite assets paths to AWS CDN
    .pipe(replace({
      patterns: [
        {
          match: /ng-src="assets/g,
          replacement: function () {
            return 'ng-src="https://s3-eu-west-1.amazonaws.com/robeasthope.com/assets';
          }
        }
      ]
    }))

    // Replace paths for js served assets
    .pipe(replace({
      patterns: [
        {
          match: /image:"assets/g,
          replacement: function () {
            return 'image:"https://s3-eu-west-1.amazonaws.com/robeasthope.com/assets';
          }
        }
      ]
    }))

    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('asset-paths-css', function(done) {
  gulp.src('./dist/styles/*.css')
    // Rewrite assets paths to AWS CDN
    .pipe(replace({
      patterns: [
        {
          match: /url\("\.\.\/assets/g,
          replacement: function () {
            return 'url(\"https://s3-eu-west-1.amazonaws.com/robeasthope.com/assets';
          }
        }
      ]
    }))

    .pipe(gulp.dest('./dist/styles'));
});


// Update asset, JS, and CSS paths
gulp.task('asset-paths-html', function(done) {
  gulp.src(['./dist/index.html'])
    // Replace CSS paths
    .pipe(replace({
      patterns: [
        {
          match: /href="styles/g,
          replacement: function () {
            return 'href="https://s3-eu-west-1.amazonaws.com/robeasthope.com/styles';
          }
        }
      ]
    }))

    // Replace JS paths
    .pipe(replace({
      patterns: [
        {
          match: /src="scripts/g,
          replacement: function () {
            return 'src="https://s3-eu-west-1.amazonaws.com/robeasthope.com/scripts';
          }
        }
      ]
    }))

    // Rewrite assets paths to AWS CDN
    .pipe(replace({
      patterns: [
        {
          match: /href="assets/g,
          replacement: function () {
            return 'href="https://s3-eu-west-1.amazonaws.com/robeasthope.com/assets';
          }
        }
      ]
    }))
  .pipe(gulp.dest('./'));
});


// Deploy assets to AWS
gulp.task('aws', function(done) {
  gulp.src(['./dist/**/*.*'])
    .pipe(s3(aws));
});

// Combined asset paths task
gulp.task('asset-paths', ['asset-paths-js', 'asset-paths-css', 'asset-paths-html' ], function(done) {

});
