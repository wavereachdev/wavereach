const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sass = require('sass');
const gulpSass = require('gulp-sass')(sass);
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('styles', async function() {
    const autoprefixer = (await import('gulp-autoprefixer')).default;
    return gulp.src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('images', async function() {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', gulp.series('scripts'));
    gulp.watch('src/**/*.scss', gulp.series('styles'));
    gulp.watch('src/images/*', gulp.series('images'));
});

gulp.task('default', gulp.series('scripts', 'styles', 'images', 'watch', function(done) {
    console.log('Gulp is running!');
    done();
}));

