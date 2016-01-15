/**
 * Created by alivanov on 15/01/16.
 */

'use strict';

angular.module('VKuche.API').factory(
  'VKAudioTracksAPI',
  function($http) {

    return {

      /**
       * get user music
       *
       * @param  {String}   id              VK user id
       *
       * @return {Object}   Promise object
       */
      fetch: function(id) {
        var options = {
          method: 'get',
          url: 'https://api.vk.com/method/audio.get',
          params: {
            owner_id: id
          }
        };

        return $http(options);
      }

    };
  });
