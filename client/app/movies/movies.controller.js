app.controller("MoviesCtrl", function($scope, $http){
  $scope.movies = [];
  $scope.filterString = '';
  $scope.filterInput = '';

  $scope.onFilter = function(){
    console.log($scope.filterInput)
    $scope.filterString = $scope.filterInput;
  }

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
