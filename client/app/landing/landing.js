angular.module('kittab.landing', [])

.controller('landingController', function ($scope, $location, Subjects) {
  // Your code here
    $scope.data=[];
  // $scope.data = ["Calculus","Physics","Chemistry",
  // "Biolgy","Medicine","Pharma",
  // "Electricity and Magnetism","Geology","3D Max","DataBase" 
  // , "Linear Algbra","Algorithms","Ecology","Literature","java","C++",
  // "Economy","Arts"];

  var init=function (){
  Subjects.getSubjects()
  .then(function(subject){
    console.log(subject);
    $scope.data=subject;


  }).catch(function (error){
        console.log(error);
  });
   
}
init();

  $scope.viewSubject=function (subject){
   Subjects.setSub(subject);
   //  console.log(subject);
      Subjects.selectSubject(subject)
      .then(function (){
        $location.path('/' + subject);

      })
      .catch(function (error){
        console.log(error);

      })

  }
  });
