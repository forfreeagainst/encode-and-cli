module.exports = {
  extends: [
    './index',
    './rules/vue',
  ].map(require.resolve),
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    //将源代码转换为抽象语法书，供eslint去识别和处理
    parser: '@babel/eslint-parser',
  },
};
