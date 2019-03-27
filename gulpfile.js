/**
 * Copyright (C) 2019 The Trustees of Indiana University
 * SPDX-License-Identifier: BSD-3-Clause
 */

const gulp = require('gulp');
const using = require('gulp-using');
const del = require('del');

const RIVET_UITS_SCSS_DEST = '_sass/libs/rivet-uits';

gulp.task('copyRivetBaseSCSS', function (done) {
    gulp.src('node_modules/rivet-uits/sass/**/*')
        .pipe(using())
        .pipe(gulp.dest(RIVET_UITS_SCSS_DEST));
    done();
});

gulp.task('clean:rivet', function () {
    return del([`_sass/libs/**/*`]);
});

gulp.task('rivet', gulp.series('clean:rivet', 'copyRivetBaseSCSS'));

gulp.task('default', function (done) {
    console.log('gulpfile: run `yarn run rivet` or `gulp rivet` to clean and copy rivet libraries to the /_sass/ directory.');
    done();
});
