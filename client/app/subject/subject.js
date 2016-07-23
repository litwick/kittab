angular.module('kittab.subject', [])

.controller('subjectController', function ($scope, $location, Subjects) {
  $scope.data={};
  $scope.subject = Subjects.getSub()
  var init = function (){
    Subjects.getPosts($scope.subject)
    .then(function(posts){
      console.log(posts);
      $scope.data.posts = posts;
    }).catch(function (error){
          console.log(error);
    });
     
  } 
  init();



$scope.addPost=function(){
  Subjects.addingPost($scope.subject, $scope.post)
  .then(function(){
    console.log("post added");
    init();
     // $location.path("/subject");
  })
  .catch(function (error){
    console.log(error);
  })
}



$scope.viewPost=function (post){
      console.log(post);
      Subjects.setPos(post);
      Subjects.selectPost($scope.subject, post)
      .then(function(){
        $location.path('/'+$scope.subject+'/comments/'+post);

      })
      .catch(function (error){
        console.log(error);

      })

  }





  });
