const { User } = require('../../models/models.js');
const { validateUsername } = require('../../utils/auth.js');
const { validateEmail } = require('../../utils/auth.js');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = (app) => {
  
  app.post('/api/login', async (req, res) => {
    //Here we login the users
    const user = req.body.user
    const isEmailTaken = await validateEmail(user.email)
    if (!isEmailTaken().isTaken) {
      res.status(400).json({ success: false, message: "Il email dell'utente non esiste" })
      return
    }
    const clientInfo = await User.findOne({ email: user.email })
    const isPasswordCorrect = await bcrypt.compare(user.password, clientInfo.password);
    if (!isPasswordCorrect) {
      res.status(400).json({ success: false, message: "la password non è coretta, stupidino" })
      return
    }
    console.log(clientInfo + "login eseguito")
    const token = jwt.sign({ email: clientInfo.email, role: clientInfo.role }, "firma segreta", {expiresIn: "20 days"})
    console.log(token)
    res.status(200).json({ success: true, messagge: "bravo andrux!", token: `Bearer ${token}` })
    //qui generiamo e restituiamo il token JWT

  })
  // Insert other routes here

};