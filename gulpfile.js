var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {

  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: {
        enable:true
      },
      open: true

    }));
});
