/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.controllers').controller(
  'HomeController',
  function($scope, API) {

    $scope.sync = function() {
        API.Users.test().success(function(res) {
          console.log('OK', res);
        }).error(function(err) {
          console.log('ERR', err);
        });
    };

  });
