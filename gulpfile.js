var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
<<<<<<< HEAD
  gulp.src('.')
=======
  gulp.src('./app/')
>>>>>>> c7ec0e5218a26a439a284836e2ceb49816e662bc
    .pipe(webserver({
      livereload: true,
      directoryListing: {
        enable:true,
        path: 'app'
      },
      open: true

    }));
});
