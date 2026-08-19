const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "commonjs"
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
]);