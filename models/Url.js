const mongoose = require('mongoose');


const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortCode: String
});


const Url = mongoose.model('Url', urlSchema);


module.exports = Url;
