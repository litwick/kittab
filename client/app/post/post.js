angular.module('kittab.post', [])

.controller('postController', function ($scope, $location, Subjects) {
  
   $scope.data = {} 
   $scope.path = $location.path().split('/');

  var init = function () {

    Subjects.getComments($scope.path[1], $scope.path[3])
      .then(function (comments) {
        $scope.data.comments = comments;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  init();
$scope.addComment = function(){
  Subjects.addingComment($scope.path[1], $scope.path[3], $scope.comment)
  .then(function(){
    init();
     // $location.path("/subject");
  })
  .catch(function (error){
    console.log(error);
  })
}
  });
