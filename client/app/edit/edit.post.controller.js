app.controller("EditPostCtrl", function($scope, $http, $routeParams, $location){
  $scope.post = {
    title:"post_title",
    author:"Nika",
    date:"08/05/16",
    text:"text_text_text"
  };

  $http.get('/posts/' + $routeParams.id).then(function(data){
    $scope.post = data.data;
  });

  $scope.func = function(){
    $http.put('/posts/'+ $routeParams.id, $scope.post).then(function(){
      $location.path( "/posts" );
    });
  };
})
