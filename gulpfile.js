var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('default', function() {
    return browserSync.init({
        proxy : '127.0.0.1:4000', // jekyll
        watchOptions : {
            ignoreInitial : true,
            ignored : [
                './_site/node_modules/*',
                './_site/jekyll/*',
            ]
        },
        startPath : "/blackhawkaviation/",
        online : true,
        notify : false,
        ui : false,
        files : [
            './_site/**/*',
        ]
    });
});
