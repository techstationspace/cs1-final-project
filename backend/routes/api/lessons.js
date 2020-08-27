const { Lesson } = require('../../models/models.js');

module.exports = (app) => {
  app.get('/api/lessons', (req, res, next) => {
    Lesson.find({})
      .exec()
      .then((lesson) => res.json(lesson))
      .catch((err) => next(err));
  });

  // Insert other routes here

};