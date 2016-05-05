app.controller("PostsCtrl", function($scope, $http){
  $scope.posts = [];
  $http.get("/posts").then(function(data){
   $scope.posts = data.data;
   console.log(data.data);
  })
})
