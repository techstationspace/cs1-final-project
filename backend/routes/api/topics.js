const { Topic } = require("../../models/models.js");
const { read } = require("fs");
const { checkRole, userAuth} = require("../../utils/auth.js");

module.exports = (app) => {
  app.get("/api/topics", userAuth, checkRole (
    // candidate ?
    ["student", "coach"] 
  ), (req, res, next) => {
    Topic.find({})
      .exec()
      .then((topics) => res.json(topics))
      .catch((err) => next(err));
  });

  app.post("/api/topics/new", userAuth, checkRole(["admin", "coach"]), async (req, res, next) => {
    const topic = req.body.topic;

    const topicQuery = await Topic.findOne({ title: topic.title });
    if (topicQuery) {
      res
        .status(400)
        .json({ success: false, message: "Topic title already exists" });
      next();
    }

    const topicNew = new Topic({
      title: topic.title,
      description: topic.description,
    });

    topicNew
      .save()
      .then(() =>
        res.status(200).json({ success: true, message: "Topic created" })
      )
      .catch((err) =>
        res.status(400).json({ success: false, message: err.message })
      );
  });

  app.delete("/api/topics", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const topic = req.body.topic;
    Topic.findOneAndDelete({ title: topic.title })
      .then(() =>
        res.status(200).json({ success: true, message: "Topic deleted" })
      )
      .catch((err) => res.status(400).json({ success: false, message: err }));
  });

  app.patch("/api/topics/edit/:title", userAuth, checkRole(["admin","coach"]), (req, res, next) => {
    const topic = req.body.topic;
    Topic.findOneAndUpdate(
      { title: req.params.title },
      { title: topic.title, description: topic.description }
    ).then((err) => {
      if (err) {
        res
          .status(400)
          .json({ success: false, message: "Could not update Topic" });
      } else {
        res.status(200).json({ success: true, message: "Topic updated" });
      }
    });
  });
  // Insert other routes here
};
