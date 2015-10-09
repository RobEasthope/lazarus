function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    // Home page
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

    // Projects
    .state('ambr', {
      url: '/ambr',
      views: {
        'content': {
          templateUrl: 'app/projects/ambr/ambr.html'
        }
      }
    // }),
    // .state('layla', {
    //   url: '/layla-moran',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/layla/layla.html'
    //     }
    //   }
    // }),
    // .state('eufn', {
    //   url: '/EUFN',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/eufn/eufn.html'
    //     }
    //   }
    // }),
    // .state('sony-wheel', {
    //   url: '/sony-wheel',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('gulp-emails', {
    //   url: '/ambr',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('haygarth', {
    //   url: '/ambr',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('haygarth-digital-room', {
    //   url: '/ambr',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('lambeth-advice-centre', {
    //   url: '/ambr',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('lancastrians', {
    //   url: '/ambr',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('sony-demo-bay', {
    //   url: '/ambr',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('think-differently', {
    //   url: '/ambr',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('waterleaf', {
    //   url: '/ambr',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('ysl-rock-chick', {
    //   url: '/ambr',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('giles-deacon', {
    //   url: '/giles-deacon',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('toni-and-guy', {
    //   url: '/toni-and-guy',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // }),
    // .state('dumfries-house', {
    //   url: '/dumfries-house',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // })
    // .state('louise-and-daniel', {
    //   url: '/louise-and-daniel',
    //   views: {
    //     'content': {
    //       templateUrl: 'app/projects/ambr/ambr.html'
    //     }
    //   }
    // })
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
