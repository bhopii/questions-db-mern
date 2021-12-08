const db = require("../models/");

module.exports = {
    create:function(req,res) {
        console.log("While creating question");
        console.log(req.body);
        db.Question.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Question.find()
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(404).json(err));
    },
    remove: function (req, res) {
        db.Question.findById({ _id: req.params.id })
          .then((dbModel) => dbModel.remove())
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Question.findByIdAndUpdate(req.params.id, req.body, {new:true})
          .then((dbModel) => res.json(dbModel))
          .catch((err) => res.status(422).json(err));
    },
};