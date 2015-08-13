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
      templateUrl: 'app/projects/ambr.html',
      controller: 'AmbrController',
      controllerAs: 'ambr'
    })
    .state('brixton', {
      url: '/brixton',
      templateUrl: 'app/projects/brixton.html',
      controller: 'BrixtonController',
      controllerAs: 'brixton'
    })
    .state('eufn', {
      url: '/eufn',
      templateUrl: 'app/projects/eufn.html',
      controller: 'EufnController',
      controllerAs: 'eufn'
    })
    .state('lambeth', {
      url: '/lambeth',
      templateUrl: 'app/projects/lambeth.html',
      controller: 'LambethController',
      controllerAs: 'lambeth'
    })
    .state('lancastrians', {
      url: '/lancastrians',
      templateUrl: 'app/projects/lancastrians.html',
      controller: 'LancastriansController',
      controllerAs: 'lancastrians'
    })
    .state('layla', {
      url: '/layla',
      templateUrl: 'app/projects/layla.html',
      controller: 'LaylaController',
      controllerAs: 'layla'
    })
    .state('saffron', {
      url: '/saffron',
      templateUrl: 'app/projects/saffron.html',
      controller: 'SaffronController',
      controllerAs: 'saffron'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
