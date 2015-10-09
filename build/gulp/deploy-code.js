'use strict';

var gulp = require('gulp');
var replace = require('gulp-replace-task');

gulp.task('deploy-site', ['build'], function(done) {
  gulp.src('./dist/**/*.*')
    .pipe(gulp.dest('./../'));
});

'use strict';


// *

// Deploy code
gulp.task('paths', function(done) {
  gulp.src('./dist/**/*.js')
  .pipe(replace({
      patterns: [
        {
          match: /assets/g,
          replacement: function () {
            return 'build/dist/assets'; // replaces "foo" to "bar"
          }
        }
      ]
    }))
  .pipe(gulp.dest('./test'));
});
