const db = require("../models")

module.exports = {
    findAllSaved:function(req, res){
        db.Book
            .find()
            .sort({date: -1})
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}