let db = require("../models");

module.exports = function (app) {

    app.get("/api/transactions", function(req, res) {
      console.log(req.body)
        let query = {};
        if (req.query.id) {
          query.id = req.query.id;
        }
    
        db.Txns.findAll({
          where: query,
          include: [db.User]
        }).then(function(dbTxns) {
          res.json(dbTxns);
        });
      });

    app.post("/api/transactions", function(req, res) {
        db.Txns.create(req.body).then(function(dbTxns) {
            res.json(dbTxns);
          });
    });

    //DELETE all  transactions by UserId
    app.delete("/api/transactions/:id", function(req, res) {
      db.Txns.destroy({
        where: {
          UserId: req.params.id
        }
      }).then(function(dbTxns) {
        res.json(dbTxns);
      });
    });

    app.delete("/api/transactions/single/:budgetid", function(req, res) {
      db.Txns.destroy({
        where: {
          id: req.params.budgetid
        }
      }).then(function(dbTxns) {
        res.json(dbTxns);
      });
    });

};