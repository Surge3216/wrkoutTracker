const router = require('express').Router();
const Workout = require('../model/workouts')
const mongoose = require("mongoose")

router.get("/api/workouts", (req, res)=>{
Workout.create()
.then((result)=>{
    res.json(result)
}).catch(err => {
    res.status(400).json(err);
})
})

router.put("/api/workouts/:id", (req, res)=>{
    Workout.insert(req,body).then(exercise =>{
        res.json(exercise)
    }).catch(err => {
        res.status(400).json(err);
})
})

router.post("/api/workouts", (req, res)=>{
    Workout.insert(req.body).then(exercise =>{
        res.json(exercise)
    }).catch(err => {
        res.status(400).json(err);
})
});

module.exports = router