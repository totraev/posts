app.config(function($routeProvider){
  $routeProvider
    .when("/movies", {
      templateUrl:"app/movies/movies.html",
      controller:"MoviesCtrl"
    })
    .otherwise("/")
})
