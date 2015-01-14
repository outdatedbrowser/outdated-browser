gulp = require('gulp')
$ = require('gulp-load-plugins')()
browserSync = require("browser-sync")
reload = browserSync.reload

gulp.task "default", ['jshint', 'js', 'css']

gulp.task 'js', ->
  gulp.src 'src/*.js'
  .pipe $.uglify()
  .pipe gulp.dest 'dist/'
  .pipe $.size()
  .pipe reload(stream: true)

gulp.task 'css', ->
  gulp.src 'src/*.css'
  .pipe $.csso()
  .pipe gulp.dest 'dist/'
  .pipe $.size()
  .pipe reload(stream: true)

gulp.task 'jshint', ->
  gulp.src 'src/*.js'
  .pipe $.jshint()
  .pipe $.jshint.reporter 'jshint-stylish'


gulp.task 'serve', ['default'], ->
  browserSync
    server: { baseDir: './' }
    notify: false
  gulp.watch 'src/*.js', ['jshint', 'js']
  gulp.watch 'src/*.css', ['css']
  gulp.watch 'demo/**/*.html', reload

