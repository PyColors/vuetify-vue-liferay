module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: [
    "plugin:vue/recommended",
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/airbnb",
    "@vue/prettier"
  ]
};
