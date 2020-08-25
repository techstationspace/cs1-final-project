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
  courseTemplate: {},
  location: {
    //da definire se spostarlo su lesson
    type: String,
  }
})

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
    //e' il numero di ore
    type: Number,
    require: true,
  },
  arguments: [
    {
      //da linkare a argomentsSchema
    }
  ],
  exercises: [
    {
      //da linkare a exercisesSchema
    }
  ],
  resourses: [
    {
      type: String
    }
  ],
})

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
  diffculty: {
    type: Number,
  },
  topics: [
    {
      //da linkare a topicsSchema
    }
  ],
  resourses: [
    {
      type: String
    }
  ],
})
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
})

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
app.listen(4000);
