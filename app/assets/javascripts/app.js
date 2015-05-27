//IFFE
(function(){

angular.module('blacklives', [])
.controller('MainCtrl', [
'$scope',
//  Below is communicating with controller and view
function($scope){
  $scope.test = 'Hello World!';

}]);


})();

