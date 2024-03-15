module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        // paths: ["widgets"],
        patterns: ["[@~]/widgets/**/*", "![@~]/widgets/**/"],
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "off",
      { "paths": ["nuxt.config.ts"] },
    ],
    "@typescript-eslint/no-explicit-any": ["off"],
    "no-extra-boolean-cast": ["off"],

    "vue/multi-word-component-names": ["off"],
    "no-undef": "off",
    "vue/no-parsing-error": "off",
  },
}
