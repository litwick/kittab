var Comment = require('./commentModel.js');

//Comment.findOne

module.exports = {

  allComments: function (req, res, next) {
    Comment
    .find({})
    .populate('_post')
    .exec(function (err, post) {
        if (err) return console.log(err);
    })
    .then(function(posts){
      res.json(posts)
    })
  },

  vote : function (req, res, next){
    
  }

};