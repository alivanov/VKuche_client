/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.controllers').controller(
  'HomeVKController',
  function($scope,
           $localstorage,
           API,
           $ionicPopup) {

    var initUser = function() {
      var id = $localstorage.getObject('auth').user_id;
      API.Users.getUserById(id)
        .success(function(res) {

          console.log(res);



          if (res.response) {
            $scope.user = res.response[0];
          } else {
            var message = 'Something is going wrong!';
            if (res.error && res.error.error_msg) {
              message = res.error.error_msg;
            }
            $ionicPopup.alert({
              title: 'Can not get user data!',
              template: message
            });
          }
        })
        .error(function(err) {
          console.log('Can not get user data!', err);
          $ionicPopup.alert({
            title: 'Can not get user data!'
          });
        });

    };

    $scope.sync = function() {

    };

    $scope.stop = function() {

    };

    initUser();

  });
