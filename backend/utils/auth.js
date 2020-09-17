const { User } = require('../models/models.js')
const passport = require("passport")


async function validateUsername(username) {
  const userQuery = await User.findOne({ username: username })
  return userQuery ? true : false
}

async function validateEmail(email, verifiedEmail) {
  const userQuery = await User.findOne({ email })
  //return userQuery ? true : false
  return () => {
    if (userQuery) {
      return { isTaken: true, isVerified: (userQuery.verifiedEmail) }
    } else {
      return { isTaken: false }
    }
  }
}



const checkRole = roles => (req, res, next) => {
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();
}

const userAuth = passport.authenticate("jwt", { session: false })


module.exports = { validateUsername, validateEmail, checkRole, userAuth }
