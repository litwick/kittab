var Post = require('../posts/postModel.js');
var mongoose = require('mongoose');

var SubjectSchema = new mongoose.Schema({
 name: {
		type: String,
		required: true,
		unique: true
	},
 description: String,
 posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});


module.exports = mongoose.model('Subject', SubjectSchema);
