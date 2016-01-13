/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.services').factory('TokenInjector', function($localstorage) {
  return {
    request: function(config) {
      var token = $localstorage.getObject('authToken');
      if (angular.isDefined(token.val)) {
        config.headers['auth-token'] = token.val;
      }
      return config;
    }
  };
});
