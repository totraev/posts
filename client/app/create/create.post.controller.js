app.controller("CreatePostCtrl", function($scope, $http, $location){
  $scope.post = {
    title:"",
    author:"",
    date:"",
    text:""
  };

  $scope.func = function(){
    $http.post("/posts", $scope.post).then(function(){
      $location.path( "/posts" );
    });
  };
})
