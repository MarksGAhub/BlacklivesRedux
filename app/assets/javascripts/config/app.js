//IFFE
//  This is creating dependencies for UI.router, templates and resources.

(function(){
angular.module('blacklives', [])
// The below factory is a Service - which is creating an object to organize and share data across the app.
.factory('posts',[function(){
// Creating a new object with an array property called posts.
    var o = {
        posts:[]
    };
    return o;
}])
.controller('MainCtrl', [
'$scope',
// posts is being injected into the MainCtrl
'posts',
//  $scope is communicating with controller and view
function($scope, posts){
// Binding the $scope variable in our controller to the posts array in the Service(the .factory above)
  $scope.posts = posts.posts;

  [

  {title: 'post 1'},
  {title: 'post 2'},
  {title: 'post 3'},
  {title: 'post 4'}

  ];
// The below if statement is preventing a user from submitting a blank title.
if(!$scope.title || $scope.title === '') { return; }
// The addPost function is retrieving the title entered into the form
$scope.addPost = function(){
  $scope.posts.push({title: $scope.title});
  $scope.title ='';
};

}]);

})();



// The below needs to be put in to create dependencies.
// (function(){

//     angular.module('blacklives', [
//     'ui.router',
//     'ngResource',
//     'templates'

//     ]);

// })();

