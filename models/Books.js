const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Model must include title, author, description, image, link
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: Array,
    description: String,
    image: String,
    link: String,
    bookId: String
});

const Books = mongoose.model("Books", BookSchema);

module.exports = Books;