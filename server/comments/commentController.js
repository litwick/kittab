var Comment = require('./commentModel.js');

var findAllComments = Q.nbind(Comment.find, Comment);

module.exports = {

  allComments: function (req, res, next) {
    findAllComments({_post: req.params.title})
      .then(function(posts){
        res.json(posts)
    })
  },

  vote : function (req, res, next){
    
  }

};