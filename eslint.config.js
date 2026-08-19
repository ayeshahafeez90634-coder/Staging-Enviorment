const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
    {
        files: ["**/*.js"],

        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "commonjs",

            globals: {
                process: "readonly",
                console: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                require: "readonly",
                module: "readonly",
                exports: "readonly"
            }
        },

        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
]);