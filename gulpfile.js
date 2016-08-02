var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('react', function() {
    gulp.src('./src/*')
        .pipe(babel({presets: ['react', 'es2015']}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['react']);
