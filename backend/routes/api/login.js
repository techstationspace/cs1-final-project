const { User } = require('../../models/models.js');
const { validateUsername } = require('../../utils/auth.js');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = (app) => {
  app.post('/api/register', async (req, res) => {
    //Here we register the users
    const user = req.body.user
    const isUsernameTaken = await validateUsername(user.username)
    if (isUsernameTaken) {
      res.status(400).json({ success: false, message: "Il nome è stato preso" })
      return
    }
    const hashedPassword = await bcrypt.hash(user.password, 12)
    const userDB = new User({ username: user.username, password: hashedPassword, role: user.role })
    await userDB.save({ validateBeforeSave: false }) //Attenzione salta la validazione al DB perchè "name" "surname" su User schema sono required
    res.status(200).json({ success: true, message: "L'utente è registrato" })
  });
  app.post('/api/login', async (req, res) => {
    //Here we login the users
    const user = req.body.user
    const isUsernameTaken = await validateUsername(user.username)
    if (!isUsernameTaken) {
      res.status(400).json({ success: false, message: "Il nome dell'utente non esiste" })
      return
    }
    const clientInfo = await User.findOne({ username: user.username })
    const isPasswordCorrect = await bcrypt.compare(user.password, clientInfo.password);
    if (!isPasswordCorrect) {
      res.status(400).json({ success: false, message: "la password non è coretta, stupidino" })
      return
    }
    console.log(clientInfo + "login eseguito")
    const token = jwt.sign({ username: clientInfo.username, role: clientInfo.role }, "firma segreta", {expiresIn: "20 days"})
    console.log(token)
    res.status(200).json({ success: true, messagge: "bravo andrux!", token: `Bearer ${token}` })
    //qui generiamo e restituiamo il token JWT

  })
  // Insert other routes here

};