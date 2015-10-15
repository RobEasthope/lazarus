function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
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

    // Holding page
    .state('holding-page', {
      url: '/',
      views: {
        'content': {
          templateUrl: 'app/holding-page/holding-page.html'
        }
      }
    })

    // *

    // Projects
    .state('sony-wheel', {
      url: '/sony-wheel',
      views: {
        'content': {
          templateUrl: 'app/projects/sony-wheel/sony-wheel.html'
        }
      }
    })
    .state('haygarth-digital-room', {
      url: '/haygarth-digital-room',
      views: {
        'content': {
          templateUrl: 'app/projects/haygarth-digital-room/haygarth-digital-room.html'
        }
      }
    })
    .state('think-differently', {
      url: '/think-differently',
      views: {
        'content': {
          templateUrl: 'app/projects/think-differently/think-differently.html'
        }
      }
    })
    .state('ysl-rock-chick', {
      url: '/ysl-rock-chick',
      views: {
        'content': {
          templateUrl: 'app/projects/ysl-rock-chick/ysl-rock-chick.html'
        }
      }
    })
    .state('gulp-emails', {
      url: '/gulp-emails',
      views: {
        'content': {
          templateUrl: 'app/projects/gulp-emails/gulp-emails.html'
        }
      }
    })
    .state('haygarth', {
      url: '/haygarth',
      views: {
        'content': {
          templateUrl: 'app/projects/haygarth/haygarth.html'
        }
      }
    })
    .state('sony-demo-bay', {
      url: '/sony-demo-bay',
      views: {
        'content': {
          templateUrl: 'app/projects/sony-demo-bay/sony-demo-bay.html'
        }
      }
    })
    .state('giles-deacon', {
      url: '/giles-deacon',
      views: {
        'content': {
          templateUrl: 'app/projects/giles-deacon/giles-deacon.html'
        }
      }
    })
    .state('toni-and-guy', {
      url: '/toni-and-guy',
      views: {
        'content': {
          templateUrl: 'app/projects/toni-and-guy/toni-and-guy.html'
        }
      }
    })
    .state('louise-and-daniel', {
      url: '/louise-and-daniel',
      views: {
        'content': {
          templateUrl: 'app/projects/louise-and-daniel/louise-and-daniel.html'
        }
      }
    })
    .state('dumfries-house', {
      url: '/dumfries-house',
      views: {
        'content': {
          templateUrl: 'app/projects/dumfries-house/dumfries-house.html'
        }
      }
    })
    .state('lambeth', {
      url: '/lambeth-advice-network',
      views: {
        'content': {
          templateUrl: 'app/projects/lambeth/lambeth.html'
        }
      }
    })
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
