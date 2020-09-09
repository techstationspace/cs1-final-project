const nodemailer = require("nodemailer")

module.exports = (message) => {
  console.log("sendMail")
  //STMP server mail parameters
  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "840e961b7f6240",
      pass: "5afac8c91b0d24"
    }
  });

  //Sending e-mail (change "message" to change email content)
  transport.sendMail(message, function(err, info) {
    if (err) {
    console.log(err)
    } else {
    console.log(info);
    }
  });
}
