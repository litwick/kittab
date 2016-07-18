var Post = require('./postModel.js');
    Q = require('q');
    util = require('../config/utils.js');

// Promisify a few mongoose methods with the `q` promise library
var findPost = Q.nbind(Post.findOne, Post);
var createPost = Q.nbind(Post.create, Post);
var findAllPosts = Q.nbind(Post.find, Post);

module.exports = {

  allPosts: function (req, res, next) {
  findAllPosts({})
    .then(function (posts) {
      res.json(posts);
    })
    .fail(function (error) {
      next(error);
    });
  },

  newPost: function (req, res, next) {
    var url = req.body.url;
    if (!util.isValidUrl(url)) {
      return next(new Error('Not a valid url'));
    }

    findPost({title: title})
      .then(function (match) {
        if (match) {
          res.send(match);  
        } else {
          return util.getUrlTitle(url);
        }
      })
      .then(function (title) {
        if (title) {
          var newPost = {
            url: url,
            base_url: req.headers.origin,
            title: title
          };
          return createPost(newPost);
        }
      })
      .then(function (createdPost) {
        if (createdPost) {
          res.json(createdPost);
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  navToPost: function (req, res, next) {
    findPost({title: req.params.title})
      .then(function (post) {
        if (!post) {
          return next(new Error('Post not added yet'));
        }

        post.visits++;
        post.save(function (err, savedPost) {
          if (err) {
            next(err);
          } else {
            res.redirect(savedPost.url);
          }
        });
      })
      .fail(function (error) {
        next(error);
      });
  }

};
