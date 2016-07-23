var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
 text: String,
 _post: String,
 upvote: Number,
 downvote: Number
});


module.exports = mongoose.model('Comment', CommentSchema);
