var Subject = require('./subjectModel.js');
var Post = require('../posts/postModel.js');
    Q = require('q');

// Promisify a few mongoose methods with the `q` promise library
var findSubject = Q.nbind(Subject.findOne, Subject);
var createSubject = Q.nbind(Subject.create, Subject);
var findAllSubjects = Q.nbind(Subject.find, Subject);
//Subject.findOne
//Subject.create
module.exports = {

	allSubs: function(req, res, next){
		findAllSubjects({})
			.then(function(subs){
				res.json(subs)
			})
			.fail(function(error){
				next(error)
			})
	},

	newSubject: function (req, res, next){
		var name = req.body.name.replace(" ", "");
		var desc = req.body.description;

	    //createSubject({name: name, description: desc})
	    findSubject({name: name})
			.then(function (match) {
				if (match) {
				  res.send(match);
				} else {
				  return name
				}
			})
			.then(function (name) {
				if (name) {
				  var newSub = {
				    name: name,
				    description: desc
				  };
				  return createSubject(newSub);
				}
			})
	    	.then(function(newSub){
	    		res.json(newSub)
	    	})
	    	.fail(function (error) {
		        next(error);
		    });
	},

	newPost: function (req, res, next) {
		var title = req.body.title.trim().replace(" ", "_");
		var text = req.body.text;

		findSubject({name: req.params.subject})
			.then(function(subj){
				subj.save(function (err) {
				  if (err) return console.log(err);
				  
				  var post = new Post({
				    title: title,
				    text: text,
				    _subject: subj._id    
				  });
				  
				  post.save(function (err) {
				    if (err) return console.log(err);
				  });
				});
				return Post
				.find({})
				.populate('_subject')
				.exec(function (err, post) {
					  if (err) return console.log(err);
				});
			})
			.then(function(posts){
				res.json(posts)
			})
	}

}
