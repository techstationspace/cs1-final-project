const { User } = require('../../models/models.js');
const {validateUsername} = require('../../utils/auth.js');

module.exports = (app) => {
  app.post('/api/register', async (req, res ) => {
    //Here we register the users
    const user = req.body.user
    const isUsernameTaken = await validateUsername(user.username)
    if (isUsernameTaken) {
     res.status(400).json({success: false, message: "Il nome è stato preso"})
     return
    }
    const userDB = new User({username : user.username, password : user.password, role : user.role})
    await userDB.save()
    res.status(200).json({success: true, message: "L'utente è registrato"})
  });
  app.post('/api/login', (req, res)=>{
    //Here we login the users

  })
  // Insert other routes here

};