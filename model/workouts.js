const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workouts = new Schema({
    day:{
        type: Date,
        default: () => new Date()
    },
    exercises:[
        {
            type: {
                type: String,
                required: "Excercise require"
            },

            name: {
                type: String,
                required: " Excercise name required"
            },

            duration: {
                type: Number,
                required: "Duration needed"

            },

            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },

            sets: {
                type: Number,
            },
            

        
        }
    ]
})

const Workout = mongoose.model("Workout", workouts)

module.exports = Workout;