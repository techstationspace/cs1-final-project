const { Lesson } = require('../../models/models.js');
const { checkRole, userAuth } = require("../../utils/auth.js");

module.exports = (app) => {
  app.get('/api/lessons', userAuth, checkRole(["admin", "coach", "student"]), (req, res, next) => {
    Lesson.find({})
      .exec()
      .then((lessons) => res.json(lessons))
      .catch((err) => next(err));
  });

  // Insert other routes here


  app.post("/api/lessons/new", userAuth, checkRole(["admin", "coach"]), async (req, res, next) => {
    const lesson = req.body.lesson;

    const lessonQuery = await Lesson.findOne({ title: lesson.title });
    if (lessonQuery) {
      res
        .status(400)
        .json({ success: false, message: "Lesson title already exists" });
      next();
    }

    const lessonNew = new Lesson({
      title: lesson.title,
      description: lesson.description,
      slot: lesson.slot
    });

    lessonNew
      .save()
      .then(() =>
        res.status(200).json({ success: true, message: "Lesson created" })
      )
      .catch((err) =>
        res.status(400).json({ success: false, message: err.message })
      );
  });



  app.delete("/api/lessons", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const lesson = req.body.lesson;
    Lesson.findOneAndDelete({ title: lesson.title })
      .then((lesson) => {
        if (lesson == null) {
          res.status(400).json({ success: false, message: "Lesson doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "Lesson deleted" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));
  });


  app.patch("/api/lessons/edit/:title", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const lesson = req.body.lesson;
    Lesson.findOneAndUpdate(
      { title: req.params.title },
      { title: lesson.title, description: lesson.description })
      .then((lesson) => {
        if (lesson == null) {
          res.status(400).json({ success: false, message: "Lesson doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "Lesson updated" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));
  });


};


