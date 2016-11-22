var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('default', function() {
    return browserSync.init({
        proxy : 'localhost:4000', // jekyll
        startPath : "/blackhawkaviation/",
        online : true,
        notify : false,
        ui : false,
        files : [
            './_site/**/*',
        ]
    });
});
