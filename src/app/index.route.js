function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('ambr', {
      url: '/ambr',
      templateUrl: 'app/projects/ambr.html'
    })
    .state('brixton', {
      url: '/brixton',
      templateUrl: 'app/projects/brixton.html'
    })
    .state('eufn', {
      url: '/eufn',
      templateUrl: 'app/projects/eufn.html'
    })
    .state('lambeth', {
      url: '/lambeth',
      templateUrl: 'app/projects/lambeth.html'
    })
    .state('lancastrians', {
      url: '/lancastrians',
      templateUrl: 'app/projects/lancastrians.html'
    })
    .state('layla', {
      url: '/layla',
      templateUrl: 'app/projects/layla.html'
    })
    .state('saffron', {
      url: '/saffron',
      templateUrl: 'app/projects/saffron.html'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
