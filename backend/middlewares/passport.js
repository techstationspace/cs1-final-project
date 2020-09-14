const { User } = require("../models/models");
const SECRET = "firma segreta";

const { Strategy, ExtractJwt } = require("passport-jwt");

const opts = { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: SECRET };
module.exports = passport => {
  passport.use(new Strategy(opts, async (payload, done) => {
    console.log(payload)
    await User.findOne({ email: payload.email }).then(user => {

      if (user) {
        return done(null, user);
      }
      return done(null, false);
    }).catch(err => {
      return done(null, false);
    });
  }));
};