var gulp = require('gulp'),
    fs = require('fs'),
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    rimraf = require('gulp-rimraf');


gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(rimraf());
});

gulp.task('default', ['build', 'watch'], function () {});

gulp.task('server', function () {
    // listen for changes
    // livereload.listen();
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'server/app.js',
        ext: 'js'
    }).on('restart', function () {
        // when the app has restarted, run livereload.
        // gulp.src('server/app.js')
        //     .pipe(livereload());
        // .pipe(notify('Reloading page, please wait...'));
    })
});

gulp.task('build', ['index', 'views', 'styles', 'fonts', 'img', 'ico', 'bower', 'js'], function () {
});

gulp.task('watch', function () {
    gulp.watch('app/*.html', ['index'], function () {});
    gulp.watch('app/views/**/*.html', ['views'], function () {});
    gulp.watch('app/stylesheets/**/*.css', ['styles'], function () {});
    // gulp.watch('app/fonts/**/*.*', ['fonts'], function () {});
    // gulp.watch('app/img/**/*.*', ['img'], function () {});
    gulp.watch('bower_components/**/*.*', ['bower'], function () {});
    gulp.watch('app/js/**/*.js', ['js'], function () {});
});

gulp.task('index', function () {
    gulp.src('app/index.html').pipe(gulp.dest('dist')).pipe(livereload());
});

gulp.task('views', function () {
    gulp.src('app/views/**/*.html')
        .pipe(gulp.dest('dist/views'))
        .pipe(livereload());
});

gulp.task('styles', function () {
    gulp.src('app/stylesheets/**/*.css')
        .pipe(gulp.dest('dist/stylesheets')).pipe(livereload());
});

gulp.task('fonts', function () {
    gulp.src('app/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts')).pipe(livereload());
});

gulp.task('img', function () {
    gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img')).pipe(livereload());
});

gulp.task('ico', function () {
    gulp.src('app/img/**/*.ico')
        .pipe(gulp.dest('dist/')).pipe(livereload());
});

gulp.task('bower', function () {
    gulp.src('bower_components/**/*.*')
        .pipe(gulp.dest('dist/js/lib/bower_components')).pipe(livereload());
});

gulp.task('js', function () {
    gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload());
});