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


$scope.addPost = function(){
  $scope.posts.push({title: 'A new post!'});
};

}]);


})();

