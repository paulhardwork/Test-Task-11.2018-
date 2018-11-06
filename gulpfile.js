"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var server = require("browser-sync").create();
var autoprefixer = require("autoprefixer");

gulp.task("server", function () {
  server.init ({
    server: "source/"
  })
  
  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
})

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(less())
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("debug", gulp.series("css", "server"));