/**
 * Created by alivanov on 12/01/16.
 */

angular.module('VKuche.API').factory('VKAPI',
  function($http, $rootScope, $q, serverURL, QueryUtils, $cordovaInAppBrowser) {
    return {

      /**
       * login user
       *
       * @param  {String}   AppId              VK app id
       *
       * @return {Object}   Promise object
       */
      login: function(AppId) {
        var deferred = $q.defer();
        var loginHref = 'https://oauth.vk.com/authorize?client_id=' +
          AppId +
          '&scope=audio,email&redirect_uri=https://oauth.vk.com/blank.html&display=page&v=5.44&response_type=token';

        $cordovaInAppBrowser.open(loginHref, '_blank', {location: 'no', clearcache: 'yes', toolbar: 'no'})
          .then(function() {
            $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event) {

              //auth success
              var idx = event.url.indexOf('#access_token');
              if (idx != -1) {
                var query = QueryUtils.getQueryParameters(event.url.substring(idx + 1, event.url.length));
                var res = {
                  appId: AppId,
                  userId: query.user_id,
                  email: query.email,
                  token: {
                    kind: 'VK',
                    val: query.access_token
                  }
                };
                $cordovaInAppBrowser.close();
                deferred.resolve(res);

              }

              //auth error
              idx = event.url.indexOf('?error');
              if (idx != -1) {
                var query = QueryUtils.getQueryParameters(event.url.substring(idx + 1, event.url.length));
                $cordovaInAppBrowser.close();
                deferred.reject({error: query.error_description});
              }

            })
          }, function() {
            deferred.reject({error: 'Can not display auth dialog!'});
            $cordovaInAppBrowser.close();
          });
        return deferred.promise;
      },

      /**
       * get user
       *
       * @param  {String}   id                 user id
       *
       * @return {Object}   Promise object
       */
      getUserById: function(id) {
        var options = {
          method: 'GET',
          url: 'https://api.vk.com/method/users.get',
          params: {
            name_case: 'Nom',
            user_ids: id
          }
        };
        return $http(options);
      },

      test: function() {
        var options = {
          method: 'get',
          url: serverURL + 'api/vk/test'
        };

        return $http(options);
      }
    };
  });
