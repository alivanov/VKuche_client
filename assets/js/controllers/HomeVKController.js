/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.controllers').controller(
  'HomeVKController',
  function($scope, $rootScope, $interval, $localstorage, API) {

    var initUser = function() {
      var userId = $localstorage.getObject('auth').userId;
      API.VK.getUserById(userId).success(function(res) {
        $rootScope.user = res.response[0];
        $scope.user = res.response[0];
        $localstorage.setObject('user', res.response[0]);
      }).error(function(err) {
        console.error('user get ERR', err);
      });
    };

    $scope.sync = function() {
        API.VK.test().success(function(res) {
          console.log('OK', res);

          if (angular.isDefined($scope.INTERVAL)) {
            return;
          }

          console.log('starting interval...');
          $scope.INTERVAL = $interval(function() {
            console.log('HEY!');
          }, 1000);

        }).error(function(err) {
          console.log('ERR', err);
        });
    };

    $scope.stop = function() {
      if (angular.isDefined($scope.INTERVAL)) {
        $interval.cancel($scope.INTERVAL);
        $scope.INTERVAL = undefined;
      }
    };

    initUser();

  });
