angular.module('blacklives')
// The below factory is a Service - which is creating an object to organize and share data across the app.
    .factory('posts',[ '$http',function($http){
    // Creating a new object with an array property called posts.
        var o = {
            posts:[]
        };
        o.getAll = function() {
          return $http.get('/posts.json').success(function(data){
            angular.copy(data, o.posts);
          });
        };
        o.create = function(post) {
          return $http.post('/posts.json').success(function(data){
            o.posts.push(data);
          });
        };
        o.get = function(id) {
          return $http.get('/posts/' + id + '.json').then(function(res){
            return res.data;
          });
        };
        o.addComment = function(id, comment) {
          return $http.post('/posts/' + id + '/comments.json', comment);
        };
        return o;
    }]);

