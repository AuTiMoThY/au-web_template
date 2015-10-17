var gulp = require('gulp');
// var webserver = require('gulp-webserver');
var connect = require('gulp-connect');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
// var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var notify = require('gulp-notify');
var sitemap = require('gulp-sitemap');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');

var paths = {
buildImages: '_build/p2h/**/*.+(png|jpg|gif|svg)'
};
// gulp.task('webserver', function() {
//   gulp.src('./app/')
//     .pipe(webserver({
//       port:1234,
//       livereload: true,
//       directoryListing: false,
//       open: true,
//       fallback: 'index.php'
//     }));
// });

// gulp.task('default',['webserver']);


gulp.task('server', function(){
	connect.server({
		port: 8000,
		livereload: true
	});
});

gulp.task('compass',function(){
    return gulp.src('sass/**/*.scss')
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
		}}))
        .pipe(compass({
        	config_file: './config.rb',
			// sourcemap: true,
			time: true,
			css: 'dist/css/',
			sass: 'sass/'
			// style: 'compact' //nested, expanded, compact, compressed
        }))
        .on('error', function (err) {
        	console.log(err);
        })
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});

gulp.task('html', function(){
	gulp.src('*.+(html|php)')
	.pipe(changed('*.+(html|php)'))
	.pipe(notify({ message: 'html change' }))
	.pipe(connect.reload());
});

gulp.task('inc', function(){
	gulp.src('dist/inc/**')
	.pipe(changed('dist/inc/**'))
	.pipe(notify({ message: 'inc change' }))
	.pipe(connect.reload());
});

gulp.task('images', ['images-min'] , function(callback){
	return gulp.src(paths.buildImages, {read: false})
	.pipe(clean());
})

gulp.task('images-min', function(file){
  return gulp.src(paths.buildImages)
  .pipe(imagemin({
  	interlaced: true
  }))
  .pipe(gulp.dest('dist/images'))
  .pipe(notify({ message: 'images task complete' }));
});

gulp.task('sitemap', function () {
    gulp.src(['*.+(html|php)', '!config.php'])
        .pipe(cache(sitemap({
                    siteUrl: 'http://localhost/20151013_baby/'
                })))
        .pipe(gulp.dest('_build'))
        .pipe(notify({ message: 'sitemap task complete' }));
});

gulp.task('watch',function(){
    gulp.watch('sass/**/*.scss',['compass']);
    gulp.watch('*.+(html|php)', ['html']);
    gulp.watch('dist/inc/**', ['inc']);
    gulp.watch(paths.buildImages, ['images']);
    gulp.watch('*.+(html|php)', ['sitemap']);
});

// gulp.task('default',['server', 'compass', 'watch']);
gulp.task('default', function(callback){
	runSequence(['server', 'compass', 'watch'],
		callback
	)
})


// gulp.task('default',['compass','watch']);