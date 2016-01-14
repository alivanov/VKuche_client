/**
 * Created by alivanov on 14/01/16.
 */

angular.module('VKuche.services').factory('QueryUtils', function() {
  return {
    getQueryParameters: function(str) {
      return (str).split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
    }
  };
});
