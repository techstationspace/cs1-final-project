const { Argument } = require('../../models/models.js');
const { checkRole, userAuth } = require("../../utils/auth.js");

module.exports = (app) => {
  app.get('/api/arguments', userAuth, checkRole(["admin", "coach", "student"]), (req, res, next) => {
    Argument.find({})
      .exec()
      .then((arguments) => res.json(arguments))
      .catch((err) => next(err));
  });

  // Insert other routes here


  app.post("/api/arguments/new", userAuth, checkRole(["admin", "coach"]), async (req, res, next) => {
    const argument = req.body.argument;

    const argumentQuery = await Argument.findOne({ title: argument.title });
    if (argumentQuery) {
      res
        .status(400)
        .json({ success: false, message: "argument title already exists" });
      next();
    }

    const argumentNew = new Argument({
      title: argument.title,
      description: argument.description,
      duration: argument.duration
    });

    argumentNew
      .save()
      .then(() =>
        res.status(200).json({ success: true, message: "argument created" })
      )
      .catch((err) =>
        res.status(400).json({ success: false, message: err.message })
      );
  });



  app.delete("/api/arguments", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const argument = req.body.argument;
    Argument.findOneAndDelete({ title: argument.title })
      .then((argument) => {
        if (argument == null) {
          res.status(400).json({ success: false, message: "argument doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "argument deleted" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));
  });


  app.patch("/api/arguments/edit/:title", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const argument = req.body.argument;
    Argument.findOneAndUpdate(
      { title: req.params.title },
      { title: argument.title, description: argument.description, duration: argument.duration })
      .then((argument) => {
        if (argument == null) {
          res.status(400).json({ success: false, message: "argument doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "argument updated" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));
  });


};