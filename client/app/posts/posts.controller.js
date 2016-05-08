app.controller("PostsCtrl", function($scope, $http, $route){
  $scope.posts = [];

  $http.get("/posts").then(function(data){
   $scope.posts = data.data;
   console.log(data.data);
  });

  $scope.postDelete = function(id){
    $http.delete("/posts/" + id).then(function(){
      $route.reload();
    });
  }
})
