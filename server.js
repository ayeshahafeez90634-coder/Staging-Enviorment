const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "development";

// Serve the built website
app.use(express.static(path.join(__dirname, "dist")));

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        environment: APP_ENV
    });
});

// Start server
app.listen(PORT, () => {
    console.log(
        `Server running in [${APP_ENV}] mode on http://localhost:${PORT}`
    );
});