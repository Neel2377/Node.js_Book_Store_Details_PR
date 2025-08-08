const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    b_name: {
        type: String,
        required: true
    },
    b_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
},{ timestamps: true });

const Book = mongoose.model('BookTbl', bookSchema);
module.exports = Book;