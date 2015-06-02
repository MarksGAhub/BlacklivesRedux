angular.module('blacklives')
//PostCtrl Start.
    .controller('PostCtrl',[
      '$scope',
      // stateParams is retrieving the id from the URL to load the right posts
      '$stateParams',
      'posts',
      function($scope, $stateParams, posts) {
        $scope.post = posts.posts[$stateParams.id];

        $scope.addComment = function(){
          if($scope.body === '' ){ return; }
          $scope.posts.comments.push({
            body: $scope.body,
            author: 'user',
          });
          $scope.body = '';
        };

      }]);
      // PostCtrl end.