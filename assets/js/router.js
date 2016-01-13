/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.router', [])
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    var token = localStorage.getItem('token');
    if (token) {
      $urlRouterProvider.otherwise('/home');
    } else {
      $urlRouterProvider.otherwise('/login');
    }

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/page-login.html',
        controller: 'LoginController',
        data: {isPublic: true}
      })
      .state('home', {
        url: '/home',
        templateUrl: 'templates/page-home.html',
        controller: 'HomeController'
      })
  });
