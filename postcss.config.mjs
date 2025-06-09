import typography from '@tailwindcss/typography';

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      config: {
        plugins: [typography],
      },
    },
  },
};

export default config;
