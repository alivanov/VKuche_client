// Ionic Starter App
angular.module('VKuche.controllers', []);
angular.module('VKuche.services', []);
angular.module('VKuche.API', []);

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('VKuche', [
  'ionic',
  'ngCordova',
  'VKuche.router',
  'VKuche.services',
  'VKuche.controllers',
  'VKuche.API'])

//To test the app with local server running replace the following host with:
// - browsers: http://localhost:3005/
// - devices or browsers: http://<your_host_ip>:3005/
//To test the app with production server running replace the following host with:
// - all: https://dancersq.herokuapp.com/
//.constant('serverURL', 'http://localhost:3005/')
.constant('serverURL', 'http://192.168.1.4:3005/')
//.constant('serverURL', 'https://dancersq.herokuapp.com/')
.constant('AppId', '5226411')

.config(function($httpProvider) {
  $httpProvider.interceptors.push('TokenInjector');
})


.run(function($ionicPlatform, $localstorage, $rootScope, APIManager) {
  $rootScope.$on('$stateChangeStart', function(ev, toState, toParams) {
    var auth = $localstorage.getObject('auth');
    if (!angular.isDefined(auth.access_token) && !(toState.data && toState.data.isPublic)) {
      ev.preventDefault();
    }
  });

  var auth = $localstorage.getObject('auth');
  if (angular.isDefined(auth.access_token)) {
    APIManager.setAPI(auth.token_kind)
  }

  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
