/**
 * Created by alivanov on 13/01/16.
 */

angular.module('VKuche.API').factory('API',
  function(SyncAPI) {

    var api = {
      Sync: {}
    };

    angular.extend(api.Sync, SyncAPI);

    return api;
  });
