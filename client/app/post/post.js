angular.module('kittab.post', [])

.controller('postController', function ($scope, Subjects) {
  
   $scope.data = {} 
   $scope.subject=Subjects.getSub();
   $scope.post=Subjects.getPos();

  var init = function () {
    Subjects.getComments($scope.subject, $scope.post)
      .then(function (comments) {
        $scope.data.comments = comments;
        console.log($scope.data.comments)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  init();
$scope.addComment=function(){
  Subjects.addingComment($scope.subject, $scope.post,$scope.comment)
  .then(function(){
    console.log("Comment added");
    init();
     // $location.path("/subject");
  })
  .catch(function (error){
    console.log(error);
  })
}
  });
