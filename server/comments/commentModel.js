var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
 text: String,
 upvote: Number,
 downvote: Number
});


module.exports = mongoose.model('Comment', CommentSchema);
