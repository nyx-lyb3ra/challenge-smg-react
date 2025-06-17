/** @type {import("postcss-load-config").Config} */
export default {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: ["./src/**/*.tsx"],
      useCSSLayers: true,
    },
    autoprefixer: {},
  },
};
