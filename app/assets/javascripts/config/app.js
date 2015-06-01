//IFFE start
(function(){
    angular.module('blacklives', ['ui.router','templates'])
    //  The .config function is setting up a home state
    .config([
    '$stateProvider',
    '$urlRouteProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl'
        });



        $stateProvider
          .state('posts',{
            url: '/posts/{id}',
            templateUrl: 'posts/_posts.html',
            controller: 'PostsCtrl'
          });


          $urlRouterProvider.otherwise('home');

    }]);







})();
//IFFE End




//  This is creating dependencies for UI.router, templates and resources.
// The below needs to be put in to create dependencies.
// (function(){

//     angular.module('blacklives', [
//     'ui.router',
//     'ngResource',
//     'templates'

//     ]);

// })();

