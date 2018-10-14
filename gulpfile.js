// Gulp task file

var gulp = require('gulp');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');

// Functions

// Creates the entire custom JS library from source into a single file
// that gets placed in the js folder of the distribution. 
function createJSLibDist() {
  
  console.log('\nCREATING CUSTOM DISTRIBUTION...\n');
  return gulp.src(['./src/js/app/Label.js', './src/js/app/PauseButton.js', 
          './src/js/app/PausePlayButton.js', './src/js/app/PausePlayStrategy.js', 
          './src/js/app/PausePlayDivStrategy.js',
          './src/js/app/PausePlayBtnStrategy.js',
          './src/js/app/PlayButton.js', 
          './src/js/app/ResetButton.js',
          './src/js/app/Timer.js',
          './src/js/app/TimerEntry.js',
          './src/js/app/TimersMap.js'])
    .pipe(concat('library.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
    
}

function createJSExtDist() {
  
  console.log('\nCREATING EXTENSION SPECIFIC DISTRIBUTION FILES...\n');
  moveAndMinifySingle('./src/js/extension/background.js', 
    'background.min.js',
    'dist/js');
  moveAndMinifySingle('./src/js/extension/main.js', 
    'main.min.js',
    'dist/js');
  console
    .log('\nFINISHED CREATING EXTENSION SPECIFIC DISTRIBUTION FILES...\n');
}

// Moves and minifies passed in file to specified dist folder
function moveAndMinifySingle(file, outputFileName, directory) {
  
  console.log('MOVING AND MINIFYING' + file + ' AS ' + outputFileName);
  return gulp.src([file])
    .pipe(concat(outputFileName))
    .pipe(uglify())
    .pipe(gulp.dest(directory));
}

// Moves without minifying specified file
function moveSingle(file, outputFileName, directory) {
  
  console.log('MOVING ' + file + ' AS ' + outputFileName);
  return gulp.src([file])
    .pipe(concat(outputFileName))
    .pipe(gulp.dest(directory));
}

// Tasks

gulp.task('create-dist-all', function(){
  
  createJSLibDist();
  createJSExtDist();
  moveSingle('./src/popup.html', 
    'popup.html',
    'dist');
  moveSingle('./src/css/style.css', 
    'style.css',
    'dist/css');
  
});