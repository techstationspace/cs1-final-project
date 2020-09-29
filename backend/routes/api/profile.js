const { User } = require('../../models/models.js');
const { checkRole, userAuth } = require("../../utils/auth.js");
const bcrypt = require("bcryptjs");


module.exports= (app) =>{
  app.get('/profile', userAuth, async (req, res)=>{
    console.log(req)
    const user= req.user
    const clientInfo = await User.findOne({ email: user.email })
    res.status(200).json({success: true, message: "Sent selected user data", payload: clientInfo})

  })
  app.patch('/profile', async (req, res ) => {
    const user =req.body.user
    console.log(user)
    const pwdUpdate = req.body.pwdUpdate
    console.log(pwdUpdate)
    if(pwdUpdate){
      const hashedPassword = await bcrypt.hash(user.password, 12)
      User.findOneAndUpdate(
        {_id: user.id},
        {password: hashedPassword})
        .then((user) =>{
          if(user == null){
            res.status(400).json({ success: false, message: "User doesn't make first registration" });
          }
          else{
            res.status(200).json({ success: true, message: "User updated" })
          }
        })
        .catch((err) => res.status(400).json({ success: false, message: err.message }));
  
    }
    else{
    User.findOneAndUpdate(
      {_id: user.id}, 
      { name: user.name,
        surname: user.surname,
        gender: user.gender,
        email: user.email,
        address: user.address,
        municipality: user.municipality,
        zipCode: user.zipCode,
        nationality: user.nationality,
        termsCondition: user.termsCondition,
        privacy: user.privacy,
        images: user.images,
        birthday: user.birthday,
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
    
    }//res.status(200).json({success: true, message: "L'utente ha completato la registrazione del secondo step"})
  })
}
