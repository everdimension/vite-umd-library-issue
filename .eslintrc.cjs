const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'react-hooks', 'import'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: { browser: true },
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'no-use-before-define': ['error', { classes: false }],
    'no-restricted-globals': ['error']
      .concat(confusingBrowserGlobals)
      .concat(['origin']),
    'import/order': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  overrides: [
    {
      files: ['.eslintrc.cjs', 'vite.config.js'],
      parserOptions: {
        project: null, // reset parserOptions from tsconfig above
      },
      env: { node: true },
    },
  ],
};
