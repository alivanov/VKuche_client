/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.controllers').controller(
  'LoginController',
  function($scope,
           $rootScope,
           $state,
           $localstorage,
           $location,
           serverURL,
           APIManager,
           AppId,
           API) {
    //$scope.loginHref = 'https://oauth.vk.com/authorize?client_id=5223994&scope=audio,email&redirect_uri=' + serverURL + 'auth/vk/callback&display=popup&v=5.44&response_type=token';

    $scope.login = function() {

      APIManager.setAPI('VK');

      API.Auth.login(AppId).then(function(res) {
        $localstorage.setObject('authToken', res.token);
        $state.go('home');
      }, function(err) {
        console.log('ERR', err);
      })
    };

    var token = $localstorage.getObject('authToken');
    if (angular.isDefined(token.val)) {
      $state.go('home');
    }

  });
