/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.services').factory('TokenInjector', function($localstorage) {
  return {
    request: function(config) {
      var auth = $localstorage.getObject('auth');
      if (angular.isDefined(auth.token)) {
        config.headers['auth-token'] = auth.token.val;
        if (config.url.indexOf('api.vk.com') != -1) {
          config.params = config.params || {};
          angular.extend(config.params, {access_token: auth.token.val});
        }
      }
      return config;
    }
  };
});
