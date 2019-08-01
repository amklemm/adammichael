'use strict';

const gulp = require('gulp');
const { src, dest, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
var reload = browserSync.reload;




/*    _________________________________________
      _________________________________________

      HTML : Pug 
      _________________________________________
      _________________________________________
*/
function html() {
  return src('src/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(dest('dev/html'))
}
watch('src/pug/**/*.pug', html);


/*    _________________________________________
      _________________________________________

      CSS : Scss 
      _________________________________________
      _________________________________________
*/
sass.compiler = require('node-sass');
function css() {
  return src('src/sass/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(dest('dev/css'))
}
watch('src/sass/**/*.scss', css);


/*    _________________________________________
      _________________________________________

      Scripts 
      _________________________________________
      _________________________________________
*/
function js() {
  return src('src/js/*.js', { sourcemaps: true })
    .pipe(concat('main.js'))
    .pipe(dest('dev/js', { sourcemaps: true }))
}
watch('src/js/*.js', js);








// Exports
// ____________________________________________________________________________________
// ____________________________________________________________________________________
// ____________________________________________________________________________________
// ____________________________________________________________________________________
// ____________________________________________________________________________________
// ____________________________________________________________________________________
// ____________________________________________________________________________________
// ____________________________________________________________________________________

exports.html = html;
exports.css = css;
exports.js = js;

exports.default = parallel(html, css, js);