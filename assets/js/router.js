/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.router', [])
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    var token = localStorage.getItem('token');
    if (token) {
      $urlRouterProvider.otherwise('/vk-home');
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
      .state('vk-home', {
        url: '/vk-home',
        templateUrl: 'templates/page-vk-home.html',
        controller: 'HomeVKController'
      })
  });
