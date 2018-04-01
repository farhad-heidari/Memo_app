var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/memos-api');

mongoose.Promise = Promise;

module.exports.Memo = require("./memo"); 