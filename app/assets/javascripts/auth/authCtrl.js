angular.module('blacklives')
.controller('AuthCtrl', [
    '$scope',
    '$state',
    'Auth',
    function($scope, $state, Auth){

    $scope.login = function() {
        Auth.login($scope.user).then(function(){
            $state.go('home');
        });
      };

    $scope.register = function() {
        Auth.register($scope.user).then(function(){
            $state.go('home');
        });
    };

    }]);

// Adding login and register function that use the methods Auth.
// These functions will return promises, which we can use to redirect
// the user to the 'home' state if authentication or registration is successful.
// May want to change 'home' to 'index' where the array of post are.

