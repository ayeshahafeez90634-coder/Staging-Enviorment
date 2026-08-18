const fs = require("fs");
const path = require("path");

const targetEnv = process.env.APP_ENV || "staging";

const srcFile = path.join(__dirname, "public", "index.html");
const distDir = path.join(__dirname, "dist");
const distFile = path.join(distDir, "index.html");

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

let html = fs.readFileSync(srcFile, "utf-8");

html = html.replaceAll("__APP_ENV__", targetEnv);

fs.writeFileSync(distFile, html);

console.log(`Build complete. Target environment: ${targetEnv}`);
console.log(`Output written to: ${distFile}`);