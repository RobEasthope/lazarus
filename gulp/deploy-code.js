'use strict';

var gulp = require('gulp');

gulp.task('deploy', function(done) {
  gulp.src('./dist/**/*.*')
    .pipe(gulp.dest('./../robeasthope.github.io'));
});
