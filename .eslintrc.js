module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
        semi: true
      }
    ],
    'comma-dangle': 0,
    'import/no-extraneous-dependencies': 1,
    'jsx-a11y/no-autofocus': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/label-has-for': 1,
    'react/jsx-filename-extension': 1,
    'react-hooks/rules-of-hooks': 'error',
    'import/no-unresolved': [2, { ignore: ['todomvc-app-css'] }],
    'react/display-name': 1,
    'react-hooks/rules-of-hooks': 1
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '@chapter2': './chapter2/src'
        },
        extensions: ['.js', '.jsx']
      }
    }
  }
};
