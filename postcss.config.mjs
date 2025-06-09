/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {
      config: {
        plugins: [require('@tailwindcss/typography')],
      },
    },
  },
};

export default config;
