import { src, dest } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import cheerio from 'gulp-cheerio';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import debug from 'gulp-debug';

//- config for pipe svgSprite
const config = {
  mode: {
    symbol: {
      inline: true,
      sprite: '../sprite.svg',
      render: {
        scss: {
          dest: '../../../../src/styles/utils/_sprite.scss',
          template: 'src/styles/templates/_sprite_template.scss',
        },
      },
    },
  },
}

const svg = function () {
  return src(paths.svg.src)
    .pipe(plumber())
    .pipe(debug())
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite(config))
    .pipe(debug())
    .pipe(dest(paths.svg.dest))
    .pipe(debug())
};

module.exports = svg;
