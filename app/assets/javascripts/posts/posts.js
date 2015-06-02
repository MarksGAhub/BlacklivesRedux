angular.module('blacklives')
// The below factory is a Service - which is creating an object to organize and share data across the app.
    .factory('posts',[ '$http',function($http){
    // Creating a new object with an array property called posts.
        var o = {
            posts:[

          {title: 'post 1'},
          {title: 'post 2'},
          {title: 'post 3'},
          {title: 'post 4'}

          ]
        };
        return o;
    }]);

