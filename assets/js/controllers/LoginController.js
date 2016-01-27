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
           $ionicPopup,
           serverURL,
           APIManager,
           AppId,
           API) {

    $scope.loginVK = function() {
      APIManager.setAPI('VK');

      API.Auth.login(AppId)
        .then(function(res) {
          $localstorage.setObject('auth', res);
          $state.go('vk-home');
        }, function(err) {
          var message = err.error || 'Something going wrong!';
          $ionicPopup.alert({
            title: 'User Auth Error!',
            template: message
          });
        })
    };

    var auth = $localstorage.getObject('auth');
    if (auth.access_token) {
      switch (auth.token_kind) {
        case 'VK':
          $state.go('vk-home');
          break;
        default:
          $state.go('vk-home');
      }
    }
  });
