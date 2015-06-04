// This file will contain all of the states and Urls for the app.
//IFFE start
(function(){
    angular.module('blacklives', ['ui.router','templates', 'Devise'])
    //  The .config function is setting up a home state
    .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
      // This is the page that will display an index of posts.
        .state('index', {
          url: '/index',
          templateUrl: 'index/index.html',
          controller: 'MainCtrl',
          // placed resolve property of ui-router beneath MainCtrl was only place not causing issues.
          // resolve: {
          //   postPromise: ['posts', function(posts){
          //     return posts.getAll();
          //   }]
          // }
        })
          // This page is the landing page displaying posts.
          .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'MainCtrl'
          })

          .state('posts',{
            url: '/posts/{id}',
            templateUrl: 'posts/_posts.html',
            controller: 'PostCtrl'
          })

          .state('login',{
            url: '/login',
            templateUrl: 'auth/_login.html',
            controller: 'AuthCtrl',
            onEnter: ['$state', 'Auth', function($state, Auth){
              Auth.currentUser().then(function(){
                $state.go('home');
              });
            }]
          })

          .state('register',{
            url:'/register',
            templateUrl: 'auth/_register.html',
            controller: 'AuthCtrl',
            // the onEnter callback will send users home if we detect that they are authenticated.
            onEnter: ['$state', 'Auth', function($state, Auth){
              Auth.currentUser().then(function(){
                $state.go('home');
              });
            }]
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

