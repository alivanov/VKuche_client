/**
 * Created by alivanov on 13/01/16.
 */

angular.module('VKuche.API').service('APIManager',
  function(VKAPI, API) {

    this.setAPI = function(type) {
      switch (type) {
        case 'VK':
          angular.extend(API, VKAPI);
          break;
        default: angular.extend(API, VKAPI);
      }
      return API;
    }

  });
