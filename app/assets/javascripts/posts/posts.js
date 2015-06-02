angular.module('blacklives')
// The below factory is a Service - which is creating an object to organize and share data across the app.
    .factory('posts',[function($http){
    // Creating a new object with an array property called posts.
        var o = {
            posts:[]
          };

  o.getAll = function() {
      return $http.get('/posts.json').success(function(data){
        angular.copy(data, o.posts);
      });
    };

   o.create = function(post){
      return $http.post('/posts.json', post).success(function(data){
        o.posts.push(data);
      });
    };


        return o;
    }]);







