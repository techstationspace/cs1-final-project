const express = require("express")
const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose
    .connect("mongodb+srv://MelissaDalika:Hesse08@cluster0.gtbjx.mongodb.net/sketch?retryWrites=true&w=majority", {
	    useNewUrlParser: true,
	    useUnifiedTopology: true,
    })
    .then(() => console.log('connected'))
    .catch(err => console.error(err))

const argomentSchema = new mongoose.Schema({
 title: {
     type: String,
     require: true, 
     unique: true,
 }
});

const lezioneSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true, 
        unique: true,
    },
    arguments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Argoment"
    }]
   }); 

const Argoment  = mongoose.model ("Argoment", argomentSchema)

const Lezione  = mongoose.model ("Lezione", lezioneSchema)

app.post("/argoments", (req, res) => {
    const title = req.body.title;
    Argoment.create({title});
    res.send({status: "success argoment"})
  });

app.get("/lezioni", (req, res) => {
    Lezione.find().populate("arguments").then (data =>
        res.send({data}
        )
    )
  });

  app.post("/lezioni", (req, res) => {
    const title = req.body.title;
    const arguments = req.body.arguments;
    Lezione.create({title, arguments});
    res.send({status: "success argoment"})
  });

app.listen(4000);