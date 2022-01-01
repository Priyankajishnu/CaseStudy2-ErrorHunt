const mongoose = require('mongoose');

//!Part #2 Point 7 mongoDB atlas
mongoose.connect("mongodb+srv://priyanka:priyanka@cluster0.rutr8.mongodb.net/Library?retryWrites=true&w=majority")

// mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;