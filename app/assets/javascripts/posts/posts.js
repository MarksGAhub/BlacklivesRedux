
    angular.module('blacklives')
// The below factory is a Service - which is creating an object to organize and share data across the app.
    .factory('posts',[function(){
    // Creating a new object with an array property called posts.
        var o = {
            posts:[]
        };
        return o;
    }]);