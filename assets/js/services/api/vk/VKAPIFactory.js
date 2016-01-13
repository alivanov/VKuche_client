/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.API').factory('VKAPI',
  function($http, $rootScope, $q, serverURL) {
    return {

      /**
       * login user
       *
       * @param  {String}   AppId              VK app id
       *
       * @return {Object}   Promise object
       */
      login: function(AppId) {
        var stub = {
          appId: AppId,
          userId: 'ID0123456',
          token: {
            kind: 'VK',
            val: 'qwerty123456'
          }
        };

        var deferred = $q.defer();
        deferred.resolve(stub);

        return deferred.promise;
      },


      test: function() {
        var options = {
          method: 'get',
          url: serverURL + 'api/vk/test'
        };

        return $http(options);
      }
    };
  });
