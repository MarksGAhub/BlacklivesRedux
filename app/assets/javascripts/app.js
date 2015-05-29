//IFFE
(function(){

angular.module('blacklives', [])
.controller('MainCtrl', [
'$scope',
//  Below is communicating with controller and view
function($scope){
  $scope.posts = [

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

