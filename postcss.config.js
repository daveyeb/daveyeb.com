import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecssModule from '@fullhuman/postcss-purgecss';

const purgecss = purgecssModule.default || purgecssModule;

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss({
      content: [
        './templates/**/*.html',
        './content/**/*.md',
        './assets/js/**/*.js'
      ],
      safelist: ['html', 'body']
    })
  ]
};
