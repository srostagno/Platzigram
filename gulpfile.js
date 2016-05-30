var gulp = require('gulp'),
    stylus     = require('gulp-stylus'),
    uglify    = require('gulp-uglify'),
    nib     = require('nib'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel'),
    source = require('vinyl-source-stream'),
    browserSync = require('browser-sync'), 
    reload      = browserSync.reload;


gulp.task('stylus', function () {
  gulp
    .src('dev/stylus/app.styl')
    .pipe(stylus({
      compress: true,
      use: nib()
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('scripts', function(){
  gulp 
    .src('dev/app.js')
    .pipe(plumber({ //Looking for errors.
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('browser-sync', function(){
  browserSync.init(["./public/js/app.js" , "./public/js/app.css" , "./views/*.pug"],{
    open: false,
    ghostMode: true,
    reloadOnRestart: true,
    options: {
        proxy: "localhost:3000",
      }
  });
});

gulp.task('watch',['stylus','scripts','browser-sync'], function(){
  gulp.watch('dev/stylus/*.styl', ['stylus']);
  gulp.watch('dev/app.js', ['scripts']);
});

gulp.task('default', ['watch'], function() {});
