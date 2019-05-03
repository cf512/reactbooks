const db = require("../models")

module.exports = {
    findAllSaved:function(req, res){
        db.Book
            .find()
            .sort({date: -1})
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    create: function (req,res){
        db.Book.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    remove:function(req, res){
        db.Book.findById({_id: req.param.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

}