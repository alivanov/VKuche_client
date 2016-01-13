/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.API').service('VKAPI',
  function(VKUsersAPI,
           VKAuthAPI) {

    var api = {
      Users: {},
      Auth: {}
    };

    angular.extend(api.Users, VKUsersAPI);
    angular.extend(api.Auth, VKAuthAPI);

    return api;
  });
