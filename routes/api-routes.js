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
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Create the get route for /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(10)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

// Create the put route for the /api/workouts/:id
router.put("/api/workouts/:id", ({ body, params}, res) => {
  Workout.findOneAndUpdate(params.id, { $push: {exercises: body}}, {new: true})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;
