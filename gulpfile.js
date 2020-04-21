const { src, dest, watch } = require("gulp")
const sass = require("gulp-sass")

const compileSass = () => {
  src("src/**/*.scss")
  .pipe(sass({outputStyle: "expanded"}))
  .pipe(dest("src"))
}

const watchSassFiles = () => {
  if(process.env.NODE_ENV === "docker_dev") {
    watch("src/**/*.scss", {interval: 1000, usePolling: true})
    .on("change", compileSass)
  } else {
    watch("src/**/*.scss")
    .on("change", compileSass)
  }
}

exports.default = watchSassFiles