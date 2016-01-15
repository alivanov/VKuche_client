/**
 * Created by alivanov on 15/01/16.
 */

'use strict';

angular.module('VKuche.API').factory(
  'VKAudioTracksAPI',
  function($http) {

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
