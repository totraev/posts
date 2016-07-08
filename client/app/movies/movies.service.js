app.service('MovieService', function($http){
  this.getMovies = function(callback){
    $http.get("/movies").then(function(data){
      callback(data.data);
    });
  }
});
