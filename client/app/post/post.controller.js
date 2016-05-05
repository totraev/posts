app.controller("PostCtrl", function($scope, $http, $routeParams){
  $scope.post = {};
  $http.get("/posts/" + $routeParams.id).then(function(data){
    $scope.post = data.data;
  });
})
