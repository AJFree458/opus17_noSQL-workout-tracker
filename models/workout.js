// Require mongoose for database
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create workout schema
const workoutSchema = new Schema({
  date: {
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
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
  // },
  // {
  //   toJSON:{
  //     virtuals: true
  //   }
});

// workoutSchema.virtual()

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
