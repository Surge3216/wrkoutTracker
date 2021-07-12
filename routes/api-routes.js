const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        db.Workout.aggregate(
            [

                {
                    $addFields: { totalDuration: { $sum: "$exercises.duration" } }
                }
            ])

            .then(WorkoutDB => {
                res.json(WorkoutDB);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.aggregate(
            [
                {
                    $addFields: {
                        totalDuration: { $sum: "$exercises.duration", },
                        totalWeight: { $sum: "$exercises.weight" },
                        totalSets: { $sum: "$exercises.sets" },
                        totalReps: { $sum: "$exercises.reps" },
                        totalDistance: { $sum: "$exercises.distance" }
                    }
                },
                { "$sort": { _id: -1 } },
                { "$limit": 7 }

            ]
        )
            .then(WorkoutDB => {
                console.log(WorkoutDB)
                res.json(WorkoutDB);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.put("/api/workouts/:id", (req, res) => {
        let id = req.params.id
        if (req.body.type == "cardio") {

            db.Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } })
                .then(WorkoutDB => {
                    console.log(WorkoutDB)
                    res.json(WorkoutDB);
                })
                .catch(err => {
                    res.json(err);
                })
        } else if (req.body.type === "resistance") {
            db.Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } })
                .then(workoutsDB => {
                    res.json(workoutsDB);
                })
                .catch(err => {
                    res.json(err);
                })
        }
    })

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create({})
            .then(WorkoutDB => {
                res.json(WorkoutDB);
            })
            .catch(err => {
                res.json(err);
            });
    });
}