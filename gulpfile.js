var gulp          = require('gulp'),
    pug           = require('gulp-pug'),
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    autoprefixer  = require('gulp-autoprefixer');

gulp.task('pug', function () {
  return gulp.src('app/pug/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src('app/sass/*.sass')
    .pipe(sass())
    .pipe(autoprefixer(
      {browsers: ['last 4 versions'], cascade: true}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
  browserSync({
    server: {baseDir: 'app'},
    notify: false
  });
});

gulp.task('watch', function () {
  gulp.watch('app/pug/**/*.pug', gulp.parallel('pug'));
  gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
});

gulp.task('build', function() {
  var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
  var buildCss = gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css'))
  var buildJs = gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/js'))
  var buildImg = gulp.src('app/resources/*')
    .pipe(gulp.dest('dist/resources'))
});

gulp.task('default', gulp.parallel('pug', 'sass', 'watch', 'browser-sync'));