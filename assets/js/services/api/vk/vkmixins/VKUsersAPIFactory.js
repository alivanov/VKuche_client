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
        var url = 'https://api.vk.com/method/users.get?name_case=Nom&user_ids=' + id + '&callback=JSON_CALLBACK';
        return $http.jsonp(url);
      }

    };
  });
