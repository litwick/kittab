angular.module('kittab.services', [])

.factory('Subjects', function ($http) {
  var newSubject = "";
   var newPost="test";

  var selectSubject=function (subject){
    return $http({
      method:'GET',
      url:'/api/'+ subject,
    }).then(function (resp){
      return resp.data;
    })
  };

  var setSub = function(subject){
    newSubject = subject ;
  };

  var getSub = function(){
    return newSubject ;
  };
  var setPos = function(post){
    newPost = post ;
  };

  var getPos = function(){
    return newPost;
  }

  var getPosts = function (subject){
    return $http({
      method:'GET',
      url:'/api/' + subject
    }).then(function (resp){
      return resp.data;
    })
  };

  var selectPost=function (subject, post){
    return $http({
      method:'GET',
      url:'/api/'+subject+'/comments/'+post
    }).then(function (resp){
      return resp.data;
    });
  };

  var getComments=function (subject, post){
    return $http({
      method:'GET',
      url:'/api/'+subject+'/comments/'+post
    }).then(function (resp){
      return resp.data;
    })
  };

  var getSubjects = function(){
    console.log("service get")
    return $http({
      method:'GET',
      url:'/api/landing'
    }).then(function (resp){
      return resp.data;
    }) 
  };
  var vote = function(str){
    return $http({
      method:'POST',
      url:'/api/subject',
      data : str 
    }) 
  }
  var addingPost=function(subject, post){
      return $http({
         method:'POST',
         url:'/api/' + subject,
         data:post
      })
    }
  var addingComment=function(subject, post,comment){
      return $http({
         method:'POST',
         url:'/api/' + subject+'/comments/'+post,
         data:comment
      })

  }
return {
  selectSubject:selectSubject,
  getPosts:getPosts,
  selectPost:selectPost,
  getComments:getComments,
  getSubjects:getSubjects,
  getSub:getSub,
  setSub:setSub,
  vote:vote,
  addingPost:addingPost,
  getPos:getPos,
  setPos:setPos,
  addingComment:addingComment
  }
  })
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
