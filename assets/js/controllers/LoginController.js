/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.controllers').controller(
  'LoginController',
  function($scope,
           $rootScope,
           $state,
           $q,
           $localstorage,
           $location,
           $ionicPlatform,
           serverURL,
           APIManager,
           AppId,
           API) {

    $scope.loginVK = function() {
      APIManager.setAPI('VK');
      API.VK.login(AppId)
        .then(function(res) {
          $localstorage.setObject('auth', res);
          $state.go('vk-home');
        }, function(res) {
          return console.error('VK auth ERR', res.error);
        })
    };

    var auth = $localstorage.getObject('auth');
    if (angular.isDefined(auth.token)) {
      switch (auth.token.kind) {
        case 'VK':
          $state.go('vk-home');
          break;
        default:
          $state.go('vk-home');
      }
    }
  });
