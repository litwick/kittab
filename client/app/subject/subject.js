angular.module('kittab.subject', [])

.controller('subjectController', function ($scope,Subjects) {
  $scope.data={};

// $scope.data={posts:[{title:"ola",
// text:"xckasnfckacvndjvkjskjv", 
// upVote:0,
// downVote:0},{title:"sarya",
// text:"hgxwhjdgfvekhvbkfbk,gnvjj", 
// upVote:1,
// downVote:-2},{title:"ammar",
// text:"hgxwhjdgfvekhvbkfbk,gnvjj", 
// upVote:1,
// downVote:-2}]};
//  $scope.subject=Subjects.getSub();
//  console.log($scope.subject,"kkkkk");

var init=function (){
  Subjects.getPosts()
  .then(function(posts){
    console.log(posts);
    $scope.data.posts=posts;


  }).catch(function (error){
        console.log(error);
  });
   
}
init();
// $scope.up=0;
// $scope.down=0;


// $scope.upVote= function(vote){
// $scope.up=vote+1;
//      console.log($scope.up);

// }
// $scope.downVote= function(vote){
//  $scope.down=vote--;
//      console.log($scope.down);

// }


 // $scope.changeVote = function(vote, flag){
 //    $scope.vote = vote==flag?'None':flag;
 //    console.log($scope.vote);
 //    Subjects.vote($scope.vote);

 //  };

$scope.addPost=function(){
  Subjects.addingPost($scope.post)
  .then(function(){
    console.log("post added");
     // $location.path("/subject");
  })
  .catch(function (error){
    console.log(error);
  })
}



$scope.viewPost=function (post){
  console.log(post);
      Subjects.selectPost(post)
      .then(function(){
        $location.path('/post');
      })
      .catch(function (error){
        console.log(error);

      })

  }





  });
