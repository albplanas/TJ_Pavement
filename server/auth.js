const session     = require('express-session');
const passport    = require('passport');
const ObjectID    = require('mongodb').ObjectID;
const LocalStrategy = require('passport-local');


module.exports = function (app,Users) {
  
    app.use(session({
        secret: "anything",
        resave: true,
        saveUninitialized: true,
      }));
      app.use(passport.initialize());
      app.use(passport.session());
  
      passport.serializeUser((user, done) => {
        done(null, user._id);
      });

      passport.deserializeUser((id, done) => {
          Users.findOne(
              {_id: new ObjectID(id)},
              (err, doc) => {
                  done(null, doc);
              }
          );
      });

      passport.use(new LocalStrategy(
        function(username, password, done) {
          Users.findOne({ username: username }, function (err, user) {

            console.log('User '+ username +' attempted to log in.');

            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (password !== user.password) { return done(null, false); }
            return done(null, user);
          });
        }
      ));
  
}