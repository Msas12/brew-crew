const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Brewery
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Brewery
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findByName: function(req, res) {
        db.Brewery
          .findAll(req.params.name)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findByCity: function(req, res) {
        db.Brewery
          .findAll(req.params.city)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findByState: function(req, res) {
        db.Brewery
          .findAll(req.params.state)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
};