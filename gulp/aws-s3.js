'use strict';

var gulp = require('gulp');
var s3 = require("gulp-s3");
var fs = require('fs');

// Call aws.json file
var aws = JSON.parse(fs.readFileSync('./aws.json'));

gulp.task('aws-assets', function(done) {
  // aws = JSON.parse(fs.readFileSync('./aws.json'));

  gulp.src('./src/assets/**/*.*')
    .pipe(s3(aws));
});
