angular.module('kittab.subject', [])

.controller('subjectController', function ($scope, $location, Subjects) {
  $scope.data={};
  $scope.subject = $location.path().split('/')
  $scope.name = $scope.subject[1]
  var init = function (){
    Subjects.getPosts($scope.subject[1])
    .then(function(posts){
      $scope.data.posts = posts;
    }).catch(function (error){
          console.log(error);
    });
     
  } 
  init();



$scope.addPost=function(){
  Subjects.addingPost($scope.subject, $scope.post)
  .then(function(){
    init();
  })
  .catch(function (error){
    console.log(error);
  })
}



$scope.viewPost=function (post){
      // Subjects.setPos(post);
      Subjects.selectPost($scope.subject, post)
      .then(function(){
        $location.path('/'+$scope.subject+'/comments/'+post);

      })
      .catch(function (error){
        console.log(error);

      })

  }





  });
