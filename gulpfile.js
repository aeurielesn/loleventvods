//Include gulp
var gulp = require('gulp');

//Include plugins
var clean = require('gulp-clean');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var cssbeautify = require('gulp-cssbeautify');
var gulpif = require('gulp-if');
var sprity = require('sprity');
var sprityless = require('sprity-less');
var gm = require('gulp-gm');
var gutil = require('gulp-util');
var imop = require('gulp-image-optimization');

//Default task - watches
gulp.task('default', ['build']);

//Build umbrella task
gulp.task('build', ['minify-css']);

gulp.task('clean', function () {
	return gulp.src('dist/')
		.pipe(clean());
});

gulp.task('clean-team-icons', function () {
	return gulp.src('./teams/dist')
		.pipe(clean());
});
gulp.task('resize-team-icons', ['clean-team-icons'], function () {
	return gulp.src(["./teams/**/*.png", "!./teams/dist/*.png"])
		.pipe(gm(function (gmfile) {
			return gmfile.resize(48, 20);
		}))
		.pipe(gulp.dest("./teams/dist"));
});

gulp.task('generate-team-icons', ['resize-team-icons'], function () {
	return sprity.src({
			src: './teams/dist/**/*.png',
			style: './less/team-sprites.less',
			name: 'teams',
			processor: 'less',
			margin: 0,
		})
		.on('error', gutil.log)
		.pipe(gulpif('*.png', gulp.dest('./images/'), gulp.dest('./less/')))
});

gulp.task('generate-thumbnails', ['generate-team-icons'], function () {
	return sprity.src({
			src: './thumbs/*.png',
			style: './less/thumb-sprites.less',
			name: 'thumbnails',
			processor: 'less',
			format: "jpg",
			margin: 0,
		})
		.on('error', gutil.log)
		.pipe(gulpif('*.jpg', gulp.dest('./images/'), gulp.dest('./less/')))
});

gulp.task('sprites', ['generate-thumbnails'], function () {
	return gulp.src(['images/teams.png','images/thumbnails.jpg'])
		.pipe(imop({
			optimizationLevel: 7,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('images/'))
});

gulp.task('less-build', ['clean'], function () {
	return gulp.src('less/loleventvods.less')
		.pipe(less())
		.pipe(cssbeautify({
			indent: '	',
			openbrace: 'separate-line',
			autosemicolon: true
		}))
		.pipe(gulp.dest('dist/'));
});
gulp.task('minify-css', ['less-build'], function () {
	return gulp.src('dist/loleventvods.css')
		.pipe(cssmin())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/'));
});
