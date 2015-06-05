angular.module('blacklives')
//PostCtrl Start.
    .controller('PostCtrl',[
      '$scope',
      // stateParams is retrieving the id from the URL to load the right posts
      'posts',
      'post',
      function($scope, posts, post) {
        $scope.post = posts;
        $scope.addComment = function(){
          if($scope.body === '' ){ return; }
          posts.addComment(post.id, {
            body: $scope.body,
            author: 'user',
          }).success(function(comment){
            $scope.posts.comments.push(comment);
          });
          $scope.body = '';
        };

      }]); // PostCtrl end.

    // Stanleyscode
     // $scope.posts = [];

     //    $scope.addPost = function(){
     //        $scope.comments.push({
     //            name: 'Markus',
     //            comment: $scope.comment
     //        });