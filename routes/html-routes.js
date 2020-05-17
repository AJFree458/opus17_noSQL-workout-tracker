// Use path for using relative routes for HTML files
const path = require("path");
// Need express router
const router = require("express").Router();
// Require model for database
const db = require("../models");

// Set up routes for the three get pages
// Route for main page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
  // .catch(err => {
  //   res.json(err);
  // });
});
  
// Route for stats page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
  // .catch(err => {
  //   res.json(err);
  // });
});

// Route for exercise page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
  // .catch(err => {
  //   res.json(err);
  // });
});

// Try to add in error handling for the routes
module.exports = router;
