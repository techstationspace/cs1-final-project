const {User} = require('../models/models.js')

async function validateMail(mail){
  const userQuery = await User.findOne({mail: mail})
  return userQuery ? true : false
}

module.exports = {validateMail}