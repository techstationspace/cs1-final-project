const {User} = require('../models/models.js')

async function validateEmail(email){
  const userQuery = await User.findOne({email: email})
  return () => {
    if(userQuery) {
      return {isTaken: true, isVerified: (userQuery.verifiedEmail)}
    } else {return {isTaken: false}
  }}
}

module.exports = {validateEmail}