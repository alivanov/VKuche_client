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
          return res;
        }, function(err) {
          return err;
        })
        .then(function(res) {

          var deferred = $q.defer();

          if (res.userId) {
            API.Users.getUserById(res.userId)
              .success(function(res) {

                if(res.response) {
                  $localstorage.setObject('user', res.response[0]);
                  deferred.resolve(res.response[0]);
                } else {
                  console.log('VK API error', res);
                  var message = 'Something is going wrong!';
                  if (res.error && res.error.error_msg) {
                    message = res.error.error_msg;
                  }
                  $ionicPopup.alert({
                    title: 'Can not get user data!',
                    template: message
                  });
                  $localstorage.clear();
                  deferred.reject({error: message});
                }

              })
              .error(function(err) {

                console.log('Can not get user data!', err);
                $ionicPopup.alert({
                  title: 'Can not get user data!'
                });
                $localstorage.clear();
                deferred.reject({error: err});

              });

            return deferred.promise;
          }

          var message = res.error || 'Something going wrong!';
          $ionicPopup.alert({
            title: 'User Auth Error!',
            template: message
          });
          $localstorage.clear();
          deferred.reject({error: message});

          return deferred.promise;

        })
        .then(function() {
            $state.go('vk-home');
        })
    };

    var auth = $localstorage.getObject('auth');
    var user = $localstorage.getObject('user');
    if (auth.token && user) {
      switch (auth.token.kind) {
        case 'VK':
          $state.go('vk-home');
          break;
        default:
          $state.go('vk-home');
      }
    }
  });
