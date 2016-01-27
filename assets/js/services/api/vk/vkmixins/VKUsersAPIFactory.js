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
        /*
        * replace the method body with the following lines if you do not use ionic proxy
        * see ionic.project file & http://blog.ionic.io/handling-cors-issues-in-ionic
        */
        //var url = 'https://api.vk.com/method/users.get?name_case=Nom&user_ids=' + id + '&callback=JSON_CALLBACK';
        //return $http.jsonp(url);

        var options = {
          url: '/vkapi/method/users.get',
          method: 'GET',
          params: {
            user_ids: id,
            name_case: 'Nom'
          }
        };
        return $http(options);
      }
    };
  });
