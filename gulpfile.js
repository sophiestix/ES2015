// var gulp = require('gulp');

// require('require-dir')('./gulp-tasks');

// gulp.task('dev',
//     ['browserify:dev', 'sass:dev', 'copy:dev', 'demo:dev', 'webserver', 'watch']
// );

// gulp.task('build',
//     ['browserify:dist', 'sass:dist', 'copy:dist', 'demo:dist']
// );


var gulp = require('gulp');

require('require-dir')('./gulp-tasks');

gulp.task('dev',
    ['browserify:dev', 'webserver']
);
