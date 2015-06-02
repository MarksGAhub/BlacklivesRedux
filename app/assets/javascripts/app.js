// This file will contain all of the states and Urls for the app.
//IFFE start
(function(){
    angular.module('blacklives', ['ui.router','templates'])
    //  The .config function is setting up a home state
    .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/home.html',
          controller: 'MainCtrl',
          // placed resolve property of ui-router beneath MainCtrl was only place not causing issues.
          resolve: {
            postPromise: ['posts', function(posts){
              return posts.getAll();
            }]
          }
        })

          .state('posts',{
            url: '/posts/{id}',
            templateUrl: 'posts/_posts.html',
            controller: 'PostCtrl'
          });


// The below ensures that if something is not set up, users are sent back to the home page.
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

