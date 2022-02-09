module.exports = {
  globals: {
    "process": true
  },
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "google"],
  rules: {
    "object-curly-spacing": 0,
    indent: [
      'error',
      2,
    ]
    // Additional, per-project rules...
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  }
};
