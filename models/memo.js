var mongoose = require('mongoose');

var memoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var Memo = mongoose.model('Memo', memoSchema);

module.exports = Memo;