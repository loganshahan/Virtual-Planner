const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const db = require('../models')

passport.serializeUser((user, done) => {
    return done(null, user.googleID);
 
 });
 
 passport.deserializeUser((id, done) => {
 
    db.User.findById(id).then(function(client) {
        return done(null, client);
      }, function(error) {
        return done(err); 
      });
 
 });

passport.use( new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
    console.log('google id: ', profile.id);
    console.log('google display name: ', profile.displayName);
    
    //  HERE YOU WILL SAVE IT TO THE DATABASE IF THERE IS NOT A USER IN THE DATABASE
    const existingUser = await db.User.findOne({where: {googleID: profile.id}}) 
        
          if(existingUser) {
             done(null, existingUser);

          } else {

        // HERE YOU GET THE EXISTING USER
    const saveUser =  await db.User.create({
        
                googleID: profile.id,
                displayName: profile.displayName 
            
        })
        done(null, saveUser)
        
          }
       
}));