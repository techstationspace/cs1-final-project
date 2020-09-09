const { User } = require('../../models/models.js');
const {validateMail} = require('../../utils/authSP1.js');
const bcrypt = require("bcryptjs")

module.exports = (app) => {
  app.post('/api/register/new', async (req, res ) => {
    //Here we register the users
    const user = req.body.user
    console.log(user)
    const isMailTaken = await validateMail(user.mail)
    if (isMailTaken) {
     res.status(400).json({success: false, message: "Mail already in use"})
     return
    }
    const userDB = new User({mail : user.mail, name : user.name, surname: user.surname})
    await userDB.save()
    res.status(200).json({success: true, message: "L'utente è registrato"})
  });
}