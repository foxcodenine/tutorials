const { series, parallel, src, dest } = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const vinylSourceStream = require('vinyl-source-stream');
const vinylBuffer = require('vinyl-buffer')
const uglify = require('gulp-uglify');


function streamTask_copyHtml() {
  return src('src/*.html')
    .pipe(dest('dist'));
}

// function streamTask_copyJS() {
//   return src('src/*.js')
//     .pipe(babel({ presets: ['@babel/preset-env']}))
//     .pipe(dest('dist'));
// }

function streamTask_copyJS() {
  return browserify(['src/script.js'])
    .transform(babelify.configure({presets: ["@babel/preset-env"]}))
    .bundle()
    .pipe(vinylSourceStream('script.js'))
    .pipe(vinylBuffer())
    .pipe(uglify())
    .pipe(dest('dist'));
}




exports.copyHtml = streamTask_copyHtml;
exports.copyJs = streamTask_copyJS;


