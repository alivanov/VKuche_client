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
           serverURL,
           APIManager,
           AppId,
           API) {
    //$scope.loginHref = 'https://oauth.vk.com/authorize?client_id=5223994&scope=audio,email&redirect_uri=' + serverURL + 'auth/vk/callback&display=popup&v=5.44&response_type=token';

    $scope.loginVK = function() {

      APIManager.setAPI('VK');
      API.VK.login(AppId)
        .then(function(res) {
          $localstorage.setObject('authToken', res.token);
          var deferred = $q.defer();
          deferred.resolve(res.userId);
          return deferred.promise;
        }, function(err) {
          console.error('VK auth ERR', err);
        })
        .then(function(userId) {
          API.Users.getUserById(userId).then(function(res) {
            $rootScope.user = res.user;
            $localstorage.setObject('user', res.user);
          }, function(err) {
            console.error('user get ERR', err);
          });
        })
        .then(function() {
          $state.go('vk-home');
        })
    };

    var token = $localstorage.getObject('authToken');
    if (angular.isDefined(token)) {
      switch (token.kind) {
        case 'VK':
          $state.go('vk-home');
          break;
        default:
          $state.go('vk-home');
      }
    }
  });
