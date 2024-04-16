const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const namesSchema = new mongoose.Schema({
    name: String,
    language: String,
    id: String,
    bio: String,
    version: String
})

module.exports = mongoose.model('Names', namesSchema);