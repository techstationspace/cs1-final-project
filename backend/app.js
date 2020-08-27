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

// API routes
require('./routes')(app);

app.listen(4000, () => console.log('app listening on port 4000'));
