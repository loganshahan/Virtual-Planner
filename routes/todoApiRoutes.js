let db = require("../models");

module.exports = function (app) {

  // GET all todos
  app.get("/api/todos", function(req, res) {
    let query = {};
    if (req.query.id) {
      query.id = req.query.id;
    }

    db.Todo.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // GET one Todo by noteId
  app.get("/api/todos/:id", function(req, res) {
    db.Todo.findOne({
      where: {
        noteId: req.params.id
      },
      include: [db.User]
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // POST a new todo
  app.post("/api/todos", function(req, res) {
    db.Todo.create(req.body).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // DELETE a todo by noteId
  app.delete("/api/todos/:id", function(req, res) {
    db.Todo.destroy({
      where: {
        noteId: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // PUT route to update a todo
  app.put("/api/todos", function(req, res) {
    db.Todo.update(
      req.body,
      {
        where: {
          noteId: req.body.id
        }
      }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });
  
};
