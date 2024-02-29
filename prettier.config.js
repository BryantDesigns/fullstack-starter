// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs
// https://prettier.io/docs/en/configuration
/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;