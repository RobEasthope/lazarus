function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    // Holding page
    .state('holding-page', {
      url: '/',
      views: {
        'content': {
          templateUrl: 'app/holding-page/holding-page.html'
        }
      }
    })

    // Home page
    .state('home', {
      url: '/home',
      views: {
        'content': {
          templateUrl: 'app/home/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        }
      }
    })

    // Projects
    .state('eufn', {
      url: '/eufn',
      views: {
        'content': {
          templateUrl: 'app/projects/eufn/eufn.html'
        }
      }
    })
    .state('lancastrians', {
      url: '/lancastrians',
      views: {
        'content': {
          templateUrl: 'app/projects/lancastrians/lancastrians.html'
        }
      }
    })
    .state('layla-moran', {
      url: '/layla-moran',
      views: {
        'content': {
          templateUrl: 'app/projects/layla/layla.html'
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
