const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    link: {
        type: String,
        trim: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;