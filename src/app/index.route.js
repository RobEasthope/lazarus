function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'content': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        }
      }
    })
    .state('ambr', {
      url: '/ambr',
      views: {
        'content': {
          templateUrl: 'app/projects/ambr/ambr.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
