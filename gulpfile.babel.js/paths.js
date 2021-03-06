module.exports = {
  src: './src',
  dest: './build',
  smartGrid: './src/styles/utils',
  gridOption: './tasks/gridOption.js',

  views: {
    src: './src/pug/*.pug',
    dest: './build',

    watch: ['./src/pug/**/*.pug', './src/modules/**/*.pug'],
  },

  data: {
    src: './src/data/**/*.json',
    dest: './src/data/temp',

    watch: './src/data/**/*.json' + '' + '!data.json'
  },

  styles: {
    src: './src/styles/**/*.scss',
    dest: './build/css',

    watch: ['./src/styles/**/*.scss', './src/modules/**/*.scss'],
  },

  images: {
    root: './src/img',
    src: ['./src/img/**/*.{png,jpg,jpeg,webp,svg}','!./src/img/icons/**/*.svg'],
    dest: './build/img',
  },

  svg: {
    src: './src/img/icons/**/*.svg',
    dest: './build/img/sprite',
  },

  js: {
    src: './src/js/**/*.js',
    dest: './build/js',
    modules: './src/modules/**/*.js',

    watch: ['./src/js/**/*.js', './src/modules/**/*.js'],
  },

  fonts: {
    src: './src/fonts/**/*.{ttf,woff,woff2}',
    dest: './build/fonts',
  },
};
