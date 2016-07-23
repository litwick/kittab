var postController = require('../posts/postController.js');
var userController = require('../users/userController.js');
var commentController = require('../comments/commentController.js');
var subjectController = require('../subject/subjectController.js');
var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {

  app.get('/api/landing', subjectController.allSubs)
  app.post('/api/landing', subjectController.newSubject)

  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);

  // authentication middleware used to decode token and made available on the request
  // app.use('/api/posts', helpers.decode);
  app.get('/api/:subject/', postController.allPosts);
  app.post('/api/:subject/', subjectController.newPost);

  app.get('/api/:subject/comments/:title', commentController.allComments);
  app.post('/api/:subject/comments/:title', postController.newComment);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};

