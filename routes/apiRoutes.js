var db = require("../models");

module.exports = function(app) {
  // Get all todos
  app.get("/api/todos", function(req, res) {
    db.user.findAll({}).then(function(dbtodos) {
      res.json(dbtodos);
    });
  });

  // Create a new user
  app.post("/api/todos", function(req, res) {
    db.user.create(req.body).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  // Delete an user by id
  app.delete("/api/todos/:id", function(req, res) {
    db.user.destroy({ where: { id: req.params.id } }).then(function(dbuser) {
      res.json(dbuser);
    });
  });
};
