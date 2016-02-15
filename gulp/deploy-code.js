'use strict';

var gulp = require('gulp');
var replace = require('gulp-replace-task');

// AWS reqs
var s3 = require("gulp-s3");
var fs = require('fs');

// Call aws.json file
var aws = JSON.parse(fs.readFileSync('./aws.json'));

gulp.task('clean', require('del').bind(null, ['./dist']));

// Deploy assets to AWS
gulp.task('aws', function(done) {
  gulp.src(['./dist/**/*.*'])
    .pipe(s3(aws));
});

// Deploy assets to github repo
gulp.task('github-deploy', function(done) {
  return gulp.src(['./dist/**/*.*'])
    .pipe(gulp.dest('../robeasthope.github.io'));
});
