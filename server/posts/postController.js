var Post = require('./postModel.js');
var Comment = require('../comments/commentModel.js');
    Q = require('q');

var findPost = Q.nbind(Post.findOne, Post);
var createPost = Q.nbind(Post.create, Post);
var findAllPosts = Q.nbind(Post.find, Post);

module.exports = {

  allPosts: function (req, res, next) {
    findAllPosts({_subject: req.params.subject})
    .then(function(posts){
      res.json(posts)
    })
  },

  newComment: function (req, res, next) {
    var text = req.body.text;

    findPost({title: req.params.title})
      .then(function(post){
        var comment = new Comment({
            text: text,
            _post: post.title    
          });

          comment.save(function (err) {
            if (err) return console.log(err);
          })

        return Comment
        .find({_post: post.title})
      })
      .then(function(comments){
        res.json(comments)
      })
  },

  vote : function (req, res, next){

  }

};
