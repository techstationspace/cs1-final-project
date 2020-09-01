const {User} = require('../models/models.js')

async function validateUsername(username){
  const userQuery = await User.findOne({username: username})
  return userQuery ? true : false
}
module.exports = {validateUsername}