var mongoose = require('mongoose');
var Comment = require('../comments/commentModel.js');

var PostSchema = new mongoose.Schema({
 title: {
		type: String,
		required: true,
		unique: true
	},
 text: String,
 upvote: Number,
 downvote: Number,
 _subject: String,
 //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});


module.exports = mongoose.model('Post', PostSchema);
