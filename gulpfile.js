"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    js: "app/**/*.js",
    minJs: "app/**/*.min.js",
    appJs:"app/shared/app.js",
    css: "app/**/*.css",
    minCss: "app/**/*.min.css",
    concatJsDest: "site.min.js",
    concatCssDest: "style.css"
}

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.appJs, paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("concat:js", function () {
    return gulp.src([paths.appJs, paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(gulp.dest("."));
});

gulp.task("concat:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
         .pipe(concat(paths.concatCssDest))
         .pipe(gulp.dest("."));
});

gulp.task("concat", ["concat:js", "concat:css"]);