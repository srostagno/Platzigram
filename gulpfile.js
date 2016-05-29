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
    .src('src/app.styl')
    .pipe(stylus({
      compress: true,
      use: nib()
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('buildcss', function () {
  gulp
    .src('src/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('build.min.css'))
    .pipe(gulp.dest('public'));
});

gulp.task('buildjs', function(){
  gulp 
    .src([
      'src/**/*.js',
      '!src/app.js'
      ])
    .pipe(plumber({ //Looking for errors.
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
    .pipe(uglify())
    .pipe(concat('build.min.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('scripts', function(){
  gulp 
    .src('src/app.js')
    .pipe(plumber({ //Looking for errors.
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('assets', function () {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
});

gulp.task('browser-sync', function(){
  browserSync.init(["./public/app.js" , "./public/app.css" , "./views/*.pug"],{
    open: false, //Don't open browsers automatically when I do Gulp, because in Linux for example, it will crash because of operative system security 
    ghostMode: true, // All my devices ar syncronized when I do scroll, edit forms or do clics
    reloadOnRestart: true, // If I need to restart my Gulp, my devices will know it and will reload
    options: {
        proxy: "localhost:3000", //server will be handled using Express
      }
  });
});

gulp.task('watch',['stylus','scripts','buildcss','buildjs','assets','browser-sync'], function(){
  gulp.watch('src/*.styl', ['stylus']);
  gulp.watch('src/app.js', ['scripts']);
});

gulp.task('default', ['watch'], function() {});
