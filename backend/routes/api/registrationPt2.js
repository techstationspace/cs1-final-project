const { User } = require('../../models/models.js');
const sendEmail = require("../../utils/sendemail");
const bcrypt = require("bcryptjs");


module.exports = (app) => {
  app.get('/api/users/register/:id', async (req, res ) => {
    //Possibile uso di params per identificare l'utente da link ?
    const userQuery = await User.findOne({_id: req.params.id})
    if (!userQuery) {
      res.status(400).json({success: false, message: "Selected e-mail not found"})
      return
    }
    res.status(200).json({success: true, message: "Sent selected user data", payload: userQuery}) //NB l'utente NON deve poter modificare la mail
  })


  app.patch('/api/users/register/:id', async (req, res ) => {
    console.log(req.body)
    console.log(req.params)
    //const user = req.body.payload
    const user =req.body.user
    const hashedPassword = await bcrypt.hash(user.password, 12)
    User.findOneAndUpdate(
      {_id: req.params.id}, 
      { name: user.name,
        surname: user.surname,
        password: hashedPassword,
        gender: user.gender,
        address: user.address,
        municipality: user.municipality,
        zipCode: user.zipCode,
        nationality: user.nationality,
        termsCondition: user.termsCondition,
        privacy: user.privacy,
        images: user.images,
        birthday: user.birthday,
        verifiedEmail: true,
      })
      .then((user) =>{
        if(user == null){
          res.status(400).json({ success: false, message: "User doesn't make first registration" });
        }
        else{
          res.status(200).json({ success: true, message: "User updated" })
        }
      })
      .catch((err) => res.status(400).json({ success: false, message: err.message }));


    //Db save
    //await User.updateOne({email: user.email}, user)
    
    //res.status(200).json({success: true, message: "L'utente ha completato la registrazione del secondo step"})

    //E-mail message settings
    const message = {
      from: 'noreply@techstation.com', // Sender address
      to: `${user.email}`,         // List of recipients
      subject: 'Conferma di avvenuta registrazione', // Subject line
      html: `<h2>La tua registrazione è andata a buon fine!</h2>
      <br>
      Da ora potrai autenticarti usando questa mail e la password da te scelta` // Html formatted body
    };
    //Sending e-mail to confirm email adress
    sendEmail(message)
  })
}