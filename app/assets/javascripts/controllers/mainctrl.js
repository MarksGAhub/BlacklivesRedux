//IFFE begin
//Removed a dependency in the angular module as it was overriding the app.js dependency.
(function(){
angular.module('blacklives')


.controller('MainCtrl', [
'$scope',
// posts is being injected into the MainCtrl
'posts',
//  $scope is communicating with controller and view
function($scope, posts){
// Binding the $scope variable in our controller to the posts array in the Service(the .factory above)
  $scope.posts = posts.posts;



// The addPost function is retrieving the title entered into the form
$scope.addPost = function(){
    // The below if statement is preventing a user from submitting a blank title.
    if(!$scope.title || $scope.title === '') { return; }
    posts.create({
        title: $scope.title,
    });

  // $scope.posts.push({

  //   comments: [
  //             {author: 'Deviljho', body: 'Roooar!!'},
  //             {author: 'Tigrex', body: 'Im always Hangry!!'}
  //             ]

  // });

  $scope.title ='';

};



}]);

})();
//IFFE end
