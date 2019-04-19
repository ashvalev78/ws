const gulp = require('gulp');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');

const log = require('fancy-log');
const colors = require('ansi-colors');
const config = require('../config');

function rollupJS(done) {
  return rollup('rollup.config.js')
    .on('error', (err) => {
      log(`${colors.red(err.name)}:`, err.message);
      log('Fix the error to process', colors.bgred('scripts'));
      done();
    })
    .pipe(source('main.js', config.src.scripts))
    .pipe(buffer())
    // .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest.scripts));
}

gulp.task('scripts', rollupJS);