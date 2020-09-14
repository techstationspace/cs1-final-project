const { Course } = require('../../models/models.js');
const { checkRole, userAuth } = require("../../utils/auth.js");

module.exports = (app) => {
  app.get('/api/courses', userAuth, checkRole(["admin", "coach", "student"]), (req, res, next) => {
    Course.find({})
      .exec()
      .then((courses) => res.json(courses))
      .catch((err) => next(err));
  });

  // Insert other routes here


  app.post("/api/courses/new", userAuth, checkRole(["admin", "coach"]), async (req, res, next) => {
    const course = req.body.course;

    const courseQuery = await Course.findOne({ title: course.title });
    if (courseQuery) {
      res
        .status(400)
        .json({ success: false, message: "Course title already exists" });
      next();
    }

    const courseNew = new Course({
      title: course.title,
      description: course.description,
      duration: course.duration     
    });

    courseNew
      .save()
      .then(() =>
        res.status(200).json({ success: true, message: "course created" })
      )
      .catch((err) =>
        res.status(400).json({ success: false, message: err.message })
      );
  });



  app.delete("/api/courses", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const course = req.body.course;
    Course.findOneAndDelete({ title: course.title })
      .then(() =>
        res.status(200).json({ success: true, message: "course deleted" })
      )
      .catch((err) => res.status(400).json({ success: false, message: err }));
  });

  
  app.patch("/api/courses/edit/:title", userAuth, checkRole(["admin", "coach"]), (req, res, next) => {
    const course = req.body.course;
    Course.findOneAndUpdate(
      { title: req.params.title },
      { title: course.title, description: course.description, duration: course.duration})
      .then(() => 
      res.status(200).json({ success: true, message: "course updated" }))
      .catch((err) => res.status(400).json({ success: false, message: err }));    
  });


};