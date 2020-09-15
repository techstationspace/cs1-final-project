const { Exercise } = require('../../models/models.js');
const { checkRole, userAuth } = require("../../utils/auth.js");

module.exports = (app) => {
  app.get('/api/exercises', userAuth, checkRole(["admin", "coach", "student"]), (req, res, next) => {
    Exercise.find({})
      .exec()
      .then((exercises) => res.json(exercises))
      .catch((err) => next(err));
  });

  // Insert other routes here


  app.post("/api/exercises/new", userAuth, checkRole(["admin", "coach"]), async (req, res, next) => {
    const exercise = req.body.exercise;

    const exerciseQuery = await Exercise.findOne({ title: exercise.title });
    if (exerciseQuery) {
      res
        .status(400)
        .json({ success: false, message: "Exercise title already exists" });
      next();
    }

    const exerciseNew = new Exercise({
      title: exercise.title,
      description: exercise.description
    });

    exerciseNew
      .save()
      .then(() =>
        res.status(200).json({ success: true, message: "exercise created" })
      )
      .catch((err) =>
        res.status(400).json({ success: false, message: err.message })
      );
  });



  app.delete("/api/exercises", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const exercise = req.body.exercise;
    Exercise.findOneAndDelete({ title: exercise.title })
      .then((exercise) => {
        if (exercise == null) {
          res.status(400).json({ success: false, message: "Exercise doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "Exercise deleted" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));

  });


  app.patch("/api/exercises/edit/:title", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const exercise = req.body.exercise;
    Exercise.findOneAndUpdate(
      { title: req.params.title },
      { title: exercise.title, description: exercise.description })
      .then((exercise) => {
        if (exercise == null) {
          res.status(400).json({ success: false, message: "Exercise doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "Exercise updated" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));
  });


};