app.controller("CreatePostCtrl", function($scope, $http){
  $scope.post = {
    title:"",
    author:"",
    date:"",
    text:""
  };

  $scope.func = function(){
    $http.post("/posts", $scope.post).then(function(){
      console.log("Yeees!");
    });
  };
})
