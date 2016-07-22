angular.module('kittab.subject', [])

.controller('subjectController', function ($scope,Subjects) {
  

$scope.data={posts:[{title:"ola",
text:"xckasnfckacvndjvkjskjv", 
upVote:10000000,
downVote:-3 },{title:"sarya",
text:"hgxwhjdgfvekhvbkfbk,gnvjj", 
upVote:10,
downVote:-300 }]};
 $scope.subject=Subjects.getSub();
 console.log($scope.subject,"kkkkk");

// var init=function (){
//   Subjects.getPosts()
//   .then(function(posts){
//     $scope.data.posts=posts;


//   }).catch(function (error){
//         console.log(error);
//   });
   
// }
// init();
 
$scope.viewPost=function (post){
  console.log(post);
      Subjects.selectPost(post)
      .then(function (){
        $location.path('/post');
      })
      .catch(function (error){
        console.log(error);

      })

  }
  });
