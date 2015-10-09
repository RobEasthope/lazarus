'use strict';

var gulp = require('gulp');

gulp.task('deploy', ['build'], function(done) {
  gulp.src('./dist/**/*.*')
    .pipe(gulp.dest('./../'));
});
