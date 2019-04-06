let db = require("../models");

module.exports = function (app) {

    app.get("/api/events", function(req, res) {
        console.log(req.body)
          let query = {};
          if (req.query.id) {
            query.id = req.query.id;
          }
      
          db.Calendr.findAll({
            where: query,
            include: [db.User]
          }).then(function(dbCalendr) {
            res.json(dbCalendr);
          });
        });

    app.post("/api/events", function(req, res) {
        db.Calendr.create(req.body).then(function(dbCalendr) {
            res.json(dbCalendr);
          });
    });

}