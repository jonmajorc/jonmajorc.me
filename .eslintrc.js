module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', 'babel'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    'spaced-comment': 0,
    'react/jsx-uses-vars': 0,
  },
}
