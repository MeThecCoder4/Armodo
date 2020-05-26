const { src, dest, series, watch } = require("gulp");
const uglifycss = require("gulp-uglifycss");
const less = require("gulp-less");
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

exports.build = series(compileLess, uglifyCss);

exports.default = function() {
  watch("./less/**/*.less", compileLess);
  watch("./css/**/*.css", uglifyCss);
}