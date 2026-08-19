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

// Study progress feature
app.get("/api/study-progress", (req, res) => {
    res.json({
        completed: 6,
        total: 10,
        progress: 60
    });
});

// Start server
app.listen(PORT, () => {
    console.log(
        `Server running in [${APP_ENV}] mode on http://localhost:${PORT}`
    );
});