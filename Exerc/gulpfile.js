const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}

function comprimeImagem() {
    return gulp.src('./source/imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imgs'))
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/imgs/*', {ignoreInitial: false}, gulp.series(comprimeImagem))
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJS))
}
