// Use path for using relative routes for HTML files
const path = require("path");

// Set up routes for the three get pages
module.exports = app => {

  // Route for main page
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Route for stats page
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  // Route for exercise page
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
};
// Try to add in error handling for the routes
