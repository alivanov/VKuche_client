/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.services').factory('$localstorage', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    },
    clear: function() {
      $window.localStorage.clear();
    },
    remove: function(key) {
      $window.localStorage.removeItem(key);
    }
  }
});
