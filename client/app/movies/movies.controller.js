app.controller("MoviesCtrl", function($scope, $http){
  $scope.movies = {};

  $http.get("/movies").then(function(data){
    $scope.movies = data.data;
  });

  $scope.order = {
    open: false
  };
  $scope.open_order = function(){
    $scope.order.open = !$scope.order.open;
  }
});
