const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        unique: true,
        required: true
      },
      duration: {
        type: Number,
        required: true,
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;