'use strict';

var gulp = require('gulp');
var s3 = require("gulp-s3");

// Call aws.json file
aws = JSON.parse(fs.readFileSync('./aws.json'));

gulp.task('aws-assets', function(done) {
  gulp.src('./src/assets/**/*.*')
    .pipe(s3(aws));
});
