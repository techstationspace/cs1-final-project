const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  surname:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  verifiedEmail: {
    type: Boolean,
    default: true, // change when mail is confirm
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  municipality: {
    type: String,
  },
  zipCode: {
    type: Number,
  },
  nationality: {
    code: {
      type: String,
    },
    label: {
      type: String,
    },
    phone: {
      type: String,
    }
  },
  termsCondition: {
    type: String,
  },
  privacy: {
    type: String,
  },
  images: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  role: {
    type: String,
    default: 'candidate',
    enum: ['student', 'candidate', 'coach', 'admin'],
  },
  // verifica che il candidato ha completatto il test d'ingreso
  verifiedTest: {
    type: Boolean,
    default: false, //change when is complete
    test: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test',
    }]
  }

});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    /* required: true, */
  },
  startDate: {
    type: Date,
    /* required: true, */
  },
  duration: {
    type: Number,
    /* required: true, */
  },
  courseTemplate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CourseTemplate',
  },
  
   // proposta aggiungere link: {type: String} per test d'ingreso

  test: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test',
  }]

  // location: {
  // da definire se spostarlo su lesson
  //   type: String,
  // },
});

const testSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },

  link: {
    type: String,
  },
});

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    /* required: true, */
  },
  slot: {
    // è il numero di ore
    type: Number,
    required: true,
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
    required: true,
    unique: true,
  },
  description: {
    type: String,
    /* required: true, */
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
    required: true,
    unique: true,
  },
  description: {
    type: String,
    /* requiredd: true, */
  },
});

const argumentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    /* required: true, */
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
    required: true,
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
const Test = mongoose.model('Test', testSchema);

module.exports = {
  User,
  Topic,
  Argument,
  Exercise,
  Lesson,
  CourseTemplate,
  Course,
  Activity,
  Test,
};
