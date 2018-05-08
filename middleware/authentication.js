let passport = require('passport');
let LocalStrategy = require('passport-local');
let TwitterStrategy = require('passport-twitter');
let GoogleStrategy = require('passport-google');
let FacebookStrategy = require('passport-facebook');
let user = require('../models/user_model');
let app = require('../app');


app.use(passport.Passport.initialize);
app.use(passport.Passport.session);

passport.Passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function (err, ) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect Username'});
            }
            if(!user.validPassword(password)){
                return done(null, false, { message: 'Incorrect Password'});
            }
            return done(null, user);
        })}));

passport.Passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.Passport.deserializeUser(function(id, done){
    User.findById(id, function(err,user){
        done(err, user);
    });
});

app.post('/login',
    passport.Passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login/error'}));