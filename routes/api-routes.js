// Set up the router with express
const router = require("express").Router();

// Set up the workout model
const Workout = require("../models/workout.js");

// Create a get route for /api/workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

// Create the post route for /api/workouts/
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Create the get route for /api/workouts/range
router.get("/api/workouts/range", (req, res) => {

});

// Create the put route for the /api/workouts/:id
router.put("/api/workouts/id", (req, res) => {

});

module.exports = router;
