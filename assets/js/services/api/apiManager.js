/**
 * Created by alivanov on 13/01/16.
 */

angular.module('VKuche.API').service('APIManager',
  function(VKAPI, API) {

    this.setAPI = function(type) {
      switch (type) {
        case 'VK':
          angular.extend(API, {VK: VKAPI});
          break;
        default: angular.extend(API, {VK: VKAPI});
      }
      return API;
    }

  });
