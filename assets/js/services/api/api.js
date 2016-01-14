/**
 * Created by alivanov on 13/01/16.
 */

angular.module('VKuche.API').factory('API',
  function(UsersAPI) {

    var api = {
      Users: {}
    };

    angular.extend(api.Users, UsersAPI);

    return api;
  });
