const router = require("express").Router()
const apiRoutes = require("./booksRoute")

router.use("/books", apiRoutes);

module.exports = router;