# `luofeng-commitlint-config`

## 开发此包

```子包
"dependencies": {
  "conventional-changelog-conventionalcommits": "^4.5.0"
}
//官方文档的cli说明中的parserPreset，用于解析提交消息的解析器预设
parserPreset: 'conventional-changelog-conventionalcommits',
```

## 使用

Install @commitlint/cli and a @commitlint/config-*/ commitlint-config-* of your choice as devDependency and configure commitlint to use it.//官网文档原文

### 安装子包(发布后的)和@commitlint/cli

```bash
npm install 子包名 @commitlint/cli --save-dev
```

echo "export default { extends: ['子包名'] };" > commitlint.config.js//官方文档原文

### 创建commitlint.config.js并编写

```commitlint.config.js
module.exports = {
  extend: ['此包名']
}
```

### 使用husky

```bash
pnpm add --save-dev husky
```

```bash
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```
