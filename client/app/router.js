app.config(function($routeProvider) {
  $routeProvider
    .when('/posts', {
      templateUrl: 'app/posts/posts.html',
      controller: 'PostsCtrl'
    })
    .when('/posts/:id', {
      templateUrl: 'app/post/post.html',
      controller: 'PostCtrl'
    })
    .otherwise('/phones');
});
