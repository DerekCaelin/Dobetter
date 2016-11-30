angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

    .state('deTrumpifier', {
    url: '/page1',
    templateUrl: 'templates/deTrumpifier.html',
    controller: 'deTrumpifierCtrl'
  })

  .state('issues', {
    url: '/page2',
    templateUrl: 'templates/issues.html',
    controller: 'issuesCtrl'
  })

  .state('causes', {
    url: '/causes',
    templateUrl: 'templates/causes.html',
    controller: 'causesCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});