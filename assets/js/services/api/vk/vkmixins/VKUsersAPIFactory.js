/**
 * Created by alivanov on 15/01/16.
 */

'use strict';

angular.module('VKuche.API').factory(
  'VKUsersAPI',
  function($http) {

    return {

      /**
       * get user
       *
       * @param  {String}   id                 user id
       *
       * @return {Object}   Promise object
       */
      getUserById: function(id) {
        var options = {
          method: 'GET',
          url: 'https://api.vk.com/method/users.get',
          params: {
            name_case: 'Nom',
            user_ids: id
          }
        };
        return $http(options);
      }

    };
  });
