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
    res.status(400).json(err);
  });
});

// Create the post route for /api/workouts/
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Create the get route for /api/workouts/range
router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(10)
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// Create the put route for the /api/workouts/:id
router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id }, 
    { $push: { exercises: req.body } }, 
    { new: true }
  )
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;
