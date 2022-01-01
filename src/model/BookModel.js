const mongoose = require('mongoose');

//!Part #2 Point 7 mongoDB Atlas
mongoose.connect("mongodb+srv://priyanka:priyanka@cluster0.rutr8.mongodb.net/Library?retryWrites=true&w=majority")

// mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;