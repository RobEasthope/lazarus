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
    .state('ambr', {
      url: '/ambr',
      views: {
        'content': {
          templateUrl: 'app/projects/ambr/ambr.html'
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
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
