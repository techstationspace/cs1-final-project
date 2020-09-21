const { User } = require('../../models/models.js');
const {validateEmail} = require('../../utils/auth.js');
const sendEmail = require("../../utils/sendemail")

module.exports = (app) => {
  app.post('/api/users/register/new', async (req, res ) => {
    //Here we register the users
    const user = req.body.user

    //Server side input validation
    if (!(user.name && user.surname && user.email)){
      res.status(400).json({success: false, message: "please fill all the required inputs"}) //Aggiungere funzionalità di interazione frontend
      return
    }

    const isEmailTaken = await validateEmail(user.email)
    if (isEmailTaken().isTaken) { //----------------------------------------------------_>>>>> DOMANDONA perchè se faccio isEmailTaken.isTaken non va ?
      if (!isEmailTaken().isVerified) {
        res.status(400).json({success: false, message: "e-Mail already in use, but not verified"}) //Aggiungere funzionalità di resend e-mail di conferma
        return
      }
      res.status(400).json({success: false, message: "e-Mail already in use"})
      return
    }
    //Db save
    const userDB = new User({email : user.email, name : user.name, surname: user.surname})
    await userDB.save({ validateBeforeSave: false }) // Salta la validazione lato db per incopatibilità con campo password vuoto

    res.status(200).json({success: true, message: "L'utente è registrato"})

    //E-mail message settings
    const message = {
      from: 'noreply@techstation.com', // Sender address
      to: `${userDB.email}`,         // List of recipients
      subject: 'Conferma il tuo indirizzo e-mail', // Subject line
      html: `<h2>Benvenuto in Tech Station ${userDB.surname} ${userDB.name}.</h2>
      <br>
      Per favore clicca al seguente link per confermare il tuo indirizzo e-mail e portare a conclusione la tua registrazione:
      <a href="http://localhost:4000/api/users/register/${userDB._id}">Link</a>` // Html formatted body
    };
    //Sending e-mail to confirm email address
    sendEmail(message)
  })
}





