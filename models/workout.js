// Require mongoose for database
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create workout schema
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises:[
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter a type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter the name of the exercise"
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter total workout time"
      },
      weight: {
        type: Number,
        trim: true
      },
      reps: {
        type: Number,
        trim: true
      },
      sets: {
        type: Number,
        trim: true
      },
      distance: {
        type: Number,
        trim: true
      }
    }
  ]
});

workoutSchema.set("toJSON", {virtuals: true});

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
