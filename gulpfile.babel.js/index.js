'use strict';

import { series, parallel } from 'gulp';
import html from './tasks/html';
import styles from './tasks/styles';
import clean from './tasks/clean';
import serve from './tasks/serve';
import fonts from './tasks/fonts';
import images from './tasks/images';
import js from './tasks/scripts';
import svg from './tasks/svg';
import cacheClear from './tasks/cacheClear';
import grid from './tasks/smartGrid';

global.paths = require('./paths');

export const build = series(svg, parallel(html, styles, js, images, fonts));
export const prod = series(clean, parallel(html, styles, js, images, fonts));


export default serve;

export { html, styles, images, fonts, js, serve, clean, cacheClear, grid, svg };
