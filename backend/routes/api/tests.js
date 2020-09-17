const { Test } = require('../../models/models.js');
const { checkRole, userAuth } = require("../../utils/auth.js");

module.exports = (app) => {
  app.get('/api/tests', userAuth, checkRole(["admin", "coach", "candidate", "student"]), (req, res, next) => {
    Test.find({})
      .exec()
      .then((tests) => res.json(tests))
      .catch((err) => next(err));
  });

  // Insert other routes here


  app.post("/api/tests/new", userAuth, checkRole(["admin", "coach"]), async (req, res, next) => {
    const test = req.body.test;

    const testQuery = await Test.findOne({ title: test.title });
    if (testQuery) {
      res
        .status(400)
        .json({ success: false, message: "Test title already exists" });
      next();
    }

    const testNew = new Test({
      title: test.title,
      description: test.description,
      link: test.link
    });

    testNew
      .save()
      .then(() =>
        res.status(200).json({ success: true, message: "test created" })
      )
      .catch((err) =>
        res.status(400).json({ success: false, message: err.message })
      );
  });



  app.delete("/api/tests", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const test = req.body.test;
    Test.findOneAndDelete({ title: test.title })
      .then((test) => {
        if (test == null) {
          res.status(400).json({ success: false, message: "Test doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "Test deleted" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));
  });


  app.patch("/api/tests/edit/:title", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const test = req.body.test;
    Test.findOneAndUpdate(
      { title: req.params.title },
      { title: test.title, description: test.description, link: test.link})
      .then((test) => {
        if (test == null) {
          res.status(400).json({ success: false, message: "Test doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "Test updated" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));
  });


};