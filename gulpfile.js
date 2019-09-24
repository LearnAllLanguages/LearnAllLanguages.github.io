var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus')
var coffee = require('gulp-coffee');
var livereload = require('gulp-livereload')


gulp.task('html', function(){
	return gulp.src('Source/index.pug')
		.pipe(pug({
			pretty: false
		}))
		.pipe(gulp.dest('./'))
		.pipe(livereload());
});

gulp.task('css', function () {
	return gulp.src('Source/*.css')
		// .pipe(stylus({
		// 	compress: true
		// }))
	// .pipe(prefix('last 2 versions', '>1%', 'ie 9'))
	.pipe(gulp.dest('Build'))
	.pipe(livereload());
});
gulp.task('styl', function () {
	return gulp.src('Source/style.styl')
		.pipe(stylus({
			compress: true
		}))
	// .pipe(prefix('last 2 versions', '>1%', 'ie 9'))
	.pipe(gulp.dest('Build'))
	.pipe(livereload());
});

gulp.task('js', function(){
	return gulp.src('Source/*.js')
		.pipe(gulp.dest('Build'))
		.pipe(livereload());
});

gulp.task('coffee', function() {
	gulp.src('Source/*.coffee')
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest('Build'))
		.pipe(livereload());
});

gulp.task('watch', () => {
	livereload.listen()
	gulp.watch('Source/*.pug', gulp.series('html'));
	gulp.watch('Source/*.css', gulp.series('css', 'html'));
	gulp.watch('Source/*.styl', gulp.series('styl', 'html'));
	gulp.watch('Source/*.js', gulp.series('js', 'html'));
	gulp.watch('Source/*.coffee', gulp.series('coffee', 'html'));
});

// gulp.task('default', gulp.parallel('watch', gulp.series(gulp.parallel('css', 'styl', 'js', 'coffee'), 'html')));
gulp.task('default', gulp.parallel('watch', gulp.series('css', 'styl', 'js', 'coffee', 'html')));
