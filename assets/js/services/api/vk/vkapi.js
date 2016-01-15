/**
 * Created by alivanov on 15/01/16.
 */

angular.module('VKuche.API').factory('VKAPI',
  function(VKAuthAPI, VKUsersAPI, VKAudioTracksAPI) {

    var api = {
      Auth: {},
      AudioTracks: {},
      Users: {}
    };

    angular.extend(api.Auth, VKAuthAPI);
    angular.extend(api.AudioTracks, VKAudioTracksAPI);
    angular.extend(api.Users, VKUsersAPI);

    return api;
  });
