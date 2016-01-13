/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.API').factory('VKUsersAPI',
  function($http, $rootScope, serverURL) {
    return {
      test: function() {
        var options = {
          method: 'get',
          url: serverURL + 'api/vk/test'
        };

        return $http(options);
      }
    };
  });
