const router = require('express').Router();
const Workout = require('../model/workouts')

router.get("/api/workouts", (req, res)=>{
Workout.create()
.then((result)=>{
    res.json(result)
})
})

router.put("/api/workouts/:id", (req, res)=>{

})

router.post("/api/workouts", (req, res)=>{

});

module.exports = router