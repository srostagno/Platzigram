var gulp 		= require('gulp'),
    stylus     	= require('gulp-stylus'),
    uglify    	= require('gulp-uglify'),
    nib     	= require('nib'),
    cleanCSS 	= require('gulp-clean-css'),
    concat 		= require('gulp-concat'),
    pug 		= require('gulp-pug'),
    plumber 	= require('gulp-plumber'),
    babel 		= require('gulp-babel'),
    source 		= require('vinyl-source-stream'),
    browserSync = require('browser-sync'), 
    reload      = browserSync.reload;

gulp.task('templates', function () {
  gulp
    .src('src/pug/*.pug')
    .pipe(plumber({ //Looking for errors.
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
	}))
    .pipe(pug({
    	pretty: false
	}))
    .pipe(gulp.dest('public/views'));
});

gulp.task('stylus', function () {
  gulp
    .src('src/stylus/app.styl')
    .pipe(plumber({ //Looking for errors.
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
	}))
    .pipe(stylus({
      compress: true,
      use: nib()
    }))
    .pipe(gulp.dest('public/css'));
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
    .pipe(uglify({
    	mangle: false // Pass false to skip mangling names.
    	}))
    .pipe(gulp.dest('public/js'));
});

gulp.task('angular', function(){
  gulp 
    .src('src/angular/*.js')
    .pipe(plumber({ //Looking for errors.
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
    .pipe(uglify({
    	mangle: false // Pass false to skip mangling names.
    	}))
    .pipe(gulp.dest('public/js'));
});

gulp.task('buildjs', function(){
  gulp 
    .src([
      'src/lib/jquery-2.1.1.min.js',
      'src/lib/materialize.min.js',
      'src/lib/angular.js',
  		'src/lib/angular-route.min.js'
  	])
    .pipe(plumber({ //Looking for errors.
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
    .pipe(uglify({
    	mangle: false // Pass false to skip mangling names.
    	}))
    .pipe(concat('build.min.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('buildcss', function(){
  gulp 
    .src('src/lib/*.css')
    .pipe(plumber({ //Looking for errors.
        handleError: function (err) {
          console.log(err);
          this.emit('end');
        }
      }))
    .pipe(concat('build.min.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('assets', function(){
  gulp 
    .src('src/assets/**/*.*')
    .pipe(gulp.dest('public'));
});

gulp.task('browser-sync', function(){
  browserSync.init(["./views/*.pug","./public/**/*.js","./public/**/*.css","./public/views/*.html"], {
    open: false,
    ghostMode: true,
    reloadOnRestart: true,
    options: {
        proxy: "localhost:8888",
      }
  });
});

gulp.task('watch',['templates','stylus','buildcss','scripts','buildjs','angular','assets','browser-sync'], function(){
  gulp.watch('src/stylus/*.styl', ['stylus']);
  gulp.watch('src/pug/*.pug', ['templates']);
  gulp.watch('src/app.js', ['scripts']);
  gulp.watch('src/angular/*.js', ['angular']);
});

gulp.task('default', ['watch'], function() {});
