const { src, dest, series, watch } = require("gulp");
const uglifycss = require("gulp-uglifycss");
const less = require("gulp-less");
const babel = require('gulp-babel');
const path = require("path");

function compileLess() {
  return src("./less/**/*.less")
    .pipe(
      less({
        paths: [path.join(__dirname, "less")],
      })
    )
    .pipe(dest("./css"));
}

function uglifyCss() {
  return src("./css/**/*.css")
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(dest("./css/"));
}

function compileJS() {
  return src('./js/index.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(dest('dist'));
}

exports.build = series(compileLess, uglifyCss, compileJS);

exports.default = function() {
  watch("./less/**/*.less", compileLess);
  watch("./css/**/*.css", uglifyCss);
  watch("./js/index.js", compileJS);
}