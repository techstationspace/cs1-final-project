const {User} = require('../models/models.js')

async function validateUsername(username){
  const userQuery = await User.findOne({username: username})
  return userQuery ? true : false
}

async function validateEmail(email){
  const userQuery = await User.findOne({email: email})
  return () => {
    if(userQuery) {
      return {isTaken: true, isVerified: (userQuery.verifiedEmail)}
    } else {return {isTaken: false}
  }}
}

function testMiddleware (req, res, next) {
  console.log(req);
  next();
}

const checkRole = roles => (req, res, next) => {
  !roles.includes(req.user.role)
  ? res.status(401).json("Unauthorized")
  : next(); 
}

const userAuth = (req, res, next) => {
  // Questa funzione dovra identificare l'utente tramite JWT
  // Per ora è un "fake"
  const user = {username: "Melissa", role: "candidate"}
  req.user = user;
  console.log(req);
  next();
}

module.exports = {validateUsername, validateEmail, testMiddleware, checkRole, userAuth}
