'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')
var electron = require('electron-connect').server.create();

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', function() {
    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('main.js', electron.restart);

    // Reload renderer process
    gulp.watch(['index.html',
        './js/**/*',
        './css/**/*'
    ], electron.reload);

    // Watching for Gulp-Sass
    gulp.watch('sass/**/*.scss', ['styles']);

});
