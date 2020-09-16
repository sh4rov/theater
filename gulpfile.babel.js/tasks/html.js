'use strict';

import { src, dest, lastRun } from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import debug from 'gulp-debug';
import pretty from 'gulp-pretty-html';

const html = () => {
  return src(paths.views.src)
    .pipe(plumber())
    .pipe(debug())
    // .pipe(changed(paths.dest), {
    //   extention: '.html',
    // })
    .pipe(pug())
    .pipe(pretty({
      indent_size: 2,
    }))
    .pipe(dest(paths.views.dest));
};

module.exports = html;
