var gulp = require('gulp');

// 依赖
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');


var paths = {
	scripts: ['js/**/*.js'],
	images: 'img/**/*'
};


gulp.task('scripts', function(){
	return gulp.src(paths.scripts)
			.pipe(uglify())
			.pipe(concat('all.min.js'))
			.pipe(gulp.dest('dest/js'))
});

gulp.task('images', function() {
	return gulp.src(paths.images)
		// Pass in options to the task
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest('dest/img'));
});

gulp.task('default', ['scripts', 'images']);