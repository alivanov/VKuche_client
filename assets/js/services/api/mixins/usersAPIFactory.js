/**
 * Created by alivanov on 12/01/16.
 */

'use strict';

angular.module('VKuche.API').factory(
  'UsersAPI',
  function($http,
           $rootScope,
           serverURL,
           $q) {

    return {

      /**
       * get user
       *
       * @param  {String}   id                 user id
       *
       * @return {Object}   Promise object
       */
      getUserById: function(id) {
        var stub = {
          id: id,
          firstname: 'Alex',
          lastname: 'Ivanov',
          email: 'ivanov1981@rambler.ru'
        };

        var deferred = $q.defer();
        deferred.resolve({user: stub});

        return deferred.promise;
      }
    };
  });

