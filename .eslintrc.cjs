/*
 * @Date: 2024-06-27 14:27:34
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-07-16 15:05:21
 * @FilePath: \react-Pro\.eslintrc.cjs
 * @Description: 
 */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'react-app'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
