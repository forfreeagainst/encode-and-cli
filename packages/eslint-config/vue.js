module.exports = {
  extends: [
    './index'
  ].map(require.resolve),
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
};