module.exports = {
  extends: ['plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
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
