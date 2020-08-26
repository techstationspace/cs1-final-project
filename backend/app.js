const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected'))
  .catch((err) => console.error(err));

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

const Topic = mongoose.model('Topic', topicSchema);
const Argument = mongoose.model('Argument', argumentSchema);
const Exercise = mongoose.model('Exercise', exerciseSchema);
const Lesson = mongoose.model('Lesson', lessonSchema);
const CourseTemplate = mongoose.model('CourseTemplate', courseTemplateSchema);
const Course = mongoose.model('Course', courseSchema);
const Activity = mongoose.model('Activity', activitySchema);

/* const argomentSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
});

const lezioneSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  arguments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Argoment',
    },
  ],
});

const Argoment = mongoose.model('Argoment', argomentSchema);

const Lezione = mongoose.model('Lezione', lezioneSchema);

app.post('/argoments', (req, res) => {
  const title = req.body.title;
  Argoment.create({ title });
  res.send({ status: 'success argoment' });
});

app.get('/lezioni', (req, res) => {
  Lezione.find()
    .populate('arguments')
    .then((data) => res.send({ data }));
});

app.post('/lezioni', (req, res) => {
  const title = req.body.title;
  const arguments = req.body.arguments;
  Lezione.create({ title, arguments });
  res.send({ status: 'success argoment' });
});
 */
app.listen(4000, () => console.log('app listening on port 4000'));
