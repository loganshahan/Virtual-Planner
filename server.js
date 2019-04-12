// npm scripts:
// server: npm run server
// client: npm run client
// both:   npm run dev

require("dotenv").config();
const express = require("express");
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const app = express();

const db = require("./models");

// DATABASE MODELS GO BEFORE PASSPORT
require('./Services/passport');

// Don't forget to change it to your db password in 'config.json

app.use(bodyParser.json());
// user is logged in for one day
app.use(cookieSession({
    maxAge: 1 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
})
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app);
require('./routes/categoryApiRoutes')(app);
require('./routes/budgetApiRoutes')(app);
require('./routes/calendarApiRoutes')(app);
require('./routes/todoApiRoutes')(app);


// React Front-End 
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

const PORT = process.env.PORT || 4000;
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
