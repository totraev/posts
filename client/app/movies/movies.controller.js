app.controller("MoviesCtrl", function($scope, TestService){
  $scope.movies = [];
  $scope.filterString = '';
  $scope.filterInput = '';

  $scope.onFilter = function(){
    console.log($scope.filterInput)
    $scope.filterString = $scope.filterInput;
  }

  TestService.getMovies(function(data){
    $scope.movies = data;
  })

  $scope.order = {
    open: false
  };
  $scope.open_order = function(){
    $scope.order.open = !$scope.order.open;
  }
});
