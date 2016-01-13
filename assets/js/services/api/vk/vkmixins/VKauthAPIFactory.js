/**
 * Created by alivanov on 12/01/16.
 */

'use strict';

angular.module('VKuche.API').factory(
  'VKAuthAPI',
  function($http,
           $rootScope,
           serverURL,
           $q) {

    return {
      /**
       * GET current user
       *
       * @return {Object}   Promise object
       */
      login: function(VKAppId) {
        var stub = {
          appId: VKAppId,
          token: {
            kind: 'VK',
            val: 'qwerty123456'
          }
        };

        var deferred = $q.defer();
        deferred.resolve(stub);

        return deferred.promise;
      }
    };
  });

