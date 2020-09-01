const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  userRole: {
    type: String,
    default: 'candidate',
    enum: ['student', 'candidate', 'coach', 'admin'],
  },
});
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    /* require: true, */
  },
  startDate: {
    type: Date,
    /* require: true, */
  },
  duration: {
    type: Number,
    /* require: true, */
  },
  courseTemplate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseTemplate',
  },
  // location: {
  // da definire se spostarlo su lesson
  //   type: String,
  // },
});

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    /* require: true, */
  },
  slot: {
    // è il numero di ore
    type: Number,
    require: true,
  },
  arguments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Argument',
    },
  ],
  exercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise',
    },
  ],
  resources: [
    {
      type: String,
    },
  ],
});

const exerciseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    /* require: true, */
  },
  difficulty: {
    type: Number,
  },
  topics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
    },
  ],
  resourses: [
    {
      type: String,
    },
  ],
});

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    /* require: true, */
  },
});

const argumentSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    /* require: true, */
  },
  difficulty: {
    type: Number,
  },
  topics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
    },
  ],
  resources: [
    {
      type: String,
    },
  ],
});

const courseTemplateSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
    },
  ],
});

const activitySchema = new mongoose.Schema({
  lesson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lesson',
  },
  startTime: {
    type: Date,
  },
  coach: {
    // link a uno user
  },
});

const User = mongoose.model('User', userSchema);
const Topic = mongoose.model('Topic', topicSchema);
const Argument = mongoose.model('Argument', argumentSchema);
const Exercise = mongoose.model('Exercise', exerciseSchema);
const Lesson = mongoose.model('Lesson', lessonSchema);
const CourseTemplate = mongoose.model('CourseTemplate', courseTemplateSchema);
const Course = mongoose.model('Course', courseSchema);
const Activity = mongoose.model('Activity', activitySchema);

module.exports = {
  User,
  Topic,
  Argument,
  Exercise,
  Lesson,
  CourseTemplate,
  Course,
  Activity,
};
