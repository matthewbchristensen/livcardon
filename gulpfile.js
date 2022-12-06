'use strict';
var gulp = require("gulp");
//var sass = require("gulp-sass");
var concat = require("gulp-concat");
const sass = require('gulp-sass')(require('sass'));
sass.compiler = require("node-sass");

gulp.task("sass", function () {
   return gulp.src("./src/styles/*.scss")
   .pipe(concat("styles.scss"))
   .pipe(sass().on("error", sass.logError))
   .pipe(gulp.dest("./src/"));
});