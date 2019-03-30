require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');

const db = require("./models");

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

};


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

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
