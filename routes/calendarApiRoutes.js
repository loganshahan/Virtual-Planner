let db = require("../models");

module.exports = function (app) {

    app.post("/api/events", function(req, res) {
        db.Calendr.create(req.body).then(function(dbCalendr) {
            res.json(dbCalendr);
          });
    });

}