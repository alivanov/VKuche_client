/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.controllers').controller(
  'HomeVKController',
  function($scope, $rootScope, $interval, $localstorage, API) {

    var getTracks = function() {
      API.AudioTracks.fetch($scope.user.id).success(function(res) {
        if(res.response) {
          console.log('get user tracks', res);
          $scope.audioTracks = res.response;
        } else {
          console.log('VK API error', res);
          var message = 'Something is going wrong!';
          if (res.error && res.error.error_msg) {
            message = res.error.error_msg;
          }
          $ionicPopup.alert({
            title: 'Can not get user music!',
            template: message
          });
        }
      }).error(function() {
        $ionicPopup.alert({
          title: 'Can not get user music!'
        });
      });
    };

    var initUser = function() {
      $scope.user = $localstorage.getObject('user');
    };

    $scope.sync = function() {
      if (angular.isDefined($scope.INTERVAL)) {
        return;
      }
      $scope.INTERVAL = $interval(function() {
        getTracks();
      }, 5000);
    };

    $scope.stop = function() {
      if (angular.isDefined($scope.INTERVAL)) {
        $interval.cancel($scope.INTERVAL);
        $scope.INTERVAL = undefined;
      }
    };

    initUser();

  });
