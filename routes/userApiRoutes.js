let db = require("../models");

module.exports = function (app) {

  // GET all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({
      include: [db.Todo]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // GET one user by ID
  app.get("/api/users/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Todo]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // POST a new user
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // DELETE one user by ID
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

};
