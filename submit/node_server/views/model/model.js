var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    hotel: {
        type: String,
    },
    rating: {
        type : String,
    },
    
}, {timestamp: true});

module.exports = mongoose.model('Tech', TaskSchema);