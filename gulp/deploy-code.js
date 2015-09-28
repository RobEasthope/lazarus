'use strict';

var gulp = require('gulp');

gulp.task('deploy-code', function(done) {
  gulp.src('./dist/**/*.*')
    .pipe(gulp.dest('./../robeasthope.github.io'));
});
