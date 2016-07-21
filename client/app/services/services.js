angular.module('kittab.services', [])

.factory('Subjects', function ($http) {
  // Your code here
  var newSubject="test";

  var selectSubject=function (subject){
    return $http({
      method:'POST',
      url:'/api/subject',
      data:subject
    });
  };
  var setSub = function(subject){
         newSubject=subject ;
         console.log(subject,"services setSub")

  };
  var getSub = function(){
    return newSubject ;
  };
  var getPosts=function (){
    return $http({
      method:'GET',
      url:'/api/subject'
    }).then(function (resp){
      return resp.data;
    })
  };
  var selectPost=function (post){
    return $http({
      method:'POST',
      url:'/api/post', //we want to chech if we want to add al sf7a yle b3tt al talab aw  yle bda tst2blo
      data:post
    });
  };
var getComments=function (){
    return $http({
      method:'GET',
      url:'/api/post'
    }).then(function (resp){
      return resp.data;
    })
  };
  var getSubjects = function(){
    return $http({
      method:'GET',
      url:'/api/landing'
    }).then(function (resp){
      return resp.data;
    }) 
  };
return {
  selectSubject:selectSubject,
 getPosts:getPosts,
 selectPost:selectPost,
  getComments:getComments,
  getSubjects:getSubjects,
  getSub:getSub,
  setSub:setSub
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
