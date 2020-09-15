const { CourseTemplate } = require('../../models/models.js');
const { checkRole, userAuth } = require("../../utils/auth.js");

module.exports = (app) => {
  app.get('/api/courseTemplates', userAuth, checkRole(["admin", "coach", "student"]), (req, res, next) => {
    CourseTemplate.find({})
      .exec()
      .then((courseTemplates) => res.json(courseTemplates))
      .catch((err) => next(err));
  });

  // Insert other routes here


  app.post("/api/courseTemplates/new", userAuth, checkRole(["admin", "coach"]), async (req, res, next) => {
    const courseTemplate = req.body.courseTemplate;

    const courseTemplateQuery = await CourseTemplate.findOne({ title: courseTemplate.title });
    if (courseTemplateQuery) {
      res
        .status(400)
        .json({ success: false, message: "courseTemplate title already exists" });
      next();
    }

    const courseTemplateNew = new CourseTemplate({
      title: courseTemplate.title,
      description: courseTemplate.description,
      lessons: courseTemplate.lessons
    });

    courseTemplateNew
      .save()
      .then(() =>
        res.status(200).json({ success: true, message: "courseTemplate created" })
      )
      .catch((err) =>
        res.status(400).json({ success: false, message: err.message })
      );
  });



  app.delete("/api/courseTemplates", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const courseTemplate = req.body.courseTemplate;
    CourseTemplate.findOneAndDelete({ title: courseTemplate.title })
      .then((courseTemplate) => {
        if (courseTemplate == null) {
          res.status(400).json({ success: false, message: "courseTemplate doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "courseTemplate deleted" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));
  });


  app.patch("/api/courseTemplates/edit/:title", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const courseTemplate = req.body.courseTemplate;
    CourseTemplate.findOneAndUpdate(
      { title: req.params.title },
      { title: courseTemplate.title, description: courseTemplate.description, duration: courseTemplate.duration })
      .then((courseTemplate) => {
        if (courseTemplate == null) {
          res.status(400).json({ success: false, message: "courseTemplate doesn't exist" });
        } else {
          res.status(200).json({ success: true, message: "courseTemplate updated" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));
  });


};