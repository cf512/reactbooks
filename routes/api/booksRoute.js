const router = require("express").Router()
const bookController = require("../../controllers/bookController")

router.route("/")
        .get(bookController.findAllSaved)
        .post(bookController.create)

router.route("/:id")
        .delete(bookController.remove)

module.exports = router