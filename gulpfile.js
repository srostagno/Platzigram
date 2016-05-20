var gulp 		= require('gulp'),
	browserSync = require('browser-sync'),
	stylus 		= require('gulp-stylus'),
	nib 		= require('nib'),
	reload      = browserSync.reload;

// browserSync
gulp.task('browser-sync', function(){
	browserSync.init(["./public/css/*.css" , "./public/js/*.js" , "./**/*.html"],{
		open: true,
		server: {
			baseDir: "."
		}
	});
});

gulp.task('estilos', function(){
	gulp.src('./public/css/*.styl')
		.pipe(stylus({
			compress: false, 
			use: nib()
	    }))
		.pipe(gulp.dest('./public/css')); 
});

// Watching for changes
gulp.task('watch',['browser-sync','estilos'], function(){
	gulp.watch('./**/*.html');
	gulp.watch('./public/css/*.styl', ['estilos']);
});


// Default task
 gulp.task('default', ['watch'], function() {});